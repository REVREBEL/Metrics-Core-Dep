import { promises as fs } from "node:fs"
import path from "node:path"

const ROOT = process.cwd()
const SOURCE_ROOTS = [
  { root: path.join(ROOT, "src/primitives"), type: "ui-primitive" },
  { root: path.join(ROOT, "src/components"), type: "component" },
]
const OUT = path.join(ROOT, "src/lib/registry.ts")

async function walk(dir) {
  const out = []
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) out.push(...(await walk(full)))
    else if (e.isFile()) out.push(full)
  }
  return out
}

function toPosix(p) {
  return p.replace(/\\/g, "/")
}

function toKebabFromFile(file) {
  return path.basename(file).replace(/\.[^.]+$/, "")
}

function toId(name) {
  return `ui_${name.replace(/[^a-zA-Z0-9]+/g, "_")}`
}

const registryRaw = await fs.readFile(path.join(ROOT, "registry.json"), "utf8")
const registryJson = JSON.parse(registryRaw)

const registryItems = (registryJson.items || []).filter((i) => i && i.name)

const sourceFiles = (
  await Promise.all(
    SOURCE_ROOTS.map(async ({ root, type }) => {
      try {
        return (await walk(root)).map((abs) => ({
          rel: toPosix(path.relative(ROOT, abs)),
          type,
        }))
      } catch {
        return []
      }
    })
  )
).flat()
  .filter(({ rel }) => rel.endsWith(".tsx"))
  .filter(({ rel }) => !rel.endsWith("/index.tsx"))
  .filter(({ rel }) => !/\.(test|spec)\.tsx$/.test(rel))
  .filter(({ rel }) => !rel.includes(".stories."))

const entries = sourceFiles
  .map(({ rel, type }) => {
    const importPath = `@/${rel.replace(/^src\//, "").replace(/\.tsx$/, "")}`
    const name = toKebabFromFile(rel)
    const id = toId(rel.replace(/^src\//, "").replace(/\.tsx$/, ""))
    const metadataKey = rel.replace(/^src\//, "").replace(/\.tsx$/, "")
    return { id, name, type, importPath, sourcePath: rel, metadataKey }
  })
  .sort((a, b) => a.sourcePath.localeCompare(b.sourcePath))

const registryItemsBlock = `const REGISTRY_ITEMS: Component[] = ${JSON.stringify(registryItems, null, 2)} as Component[]\n`

const playgroundEntries = entries
  .map(
    (e) => `  ${e.id}: {
    name: ${JSON.stringify(e.name)},
    type: ${JSON.stringify(e.type)},
    metadata: {
      sourcePath: ${JSON.stringify(e.sourcePath)},
      metadataKey: ${JSON.stringify(e.metadataKey)},
    },
  }`
  )
  .join(",\n")

const content = `/* eslint-disable @typescript-eslint/no-explicit-any */
// AUTOMATICALLY GENERATED - DO NOT EDIT

export type Component = {
  name: string
  type: string
  title?: string
  description?: string
  files?: Array<{ path: string; type: string; target?: string }>
  [key: string]: any
}

${registryItemsBlock}

export const PLAYGROUND_REGISTRY: Record<string, any> = {
${playgroundEntries}
}

export function getRegistryItems(): Component[] {
  return REGISTRY_ITEMS
}

export function getRegistryItem(name: string): Component | undefined {
  return REGISTRY_ITEMS.find((item) => item.name === name)
}

export function getBlocks(): Component[] {
  return REGISTRY_ITEMS.filter((item) => item.type === "registry:block")
}

export function getUIPrimitives(): Component[] {
  return REGISTRY_ITEMS.filter((item) => item.type === "registry:ui")
}

export function getComponents(): Component[] {
  return REGISTRY_ITEMS.filter((item) => item.type === "registry:component")
}
`

await fs.writeFile(OUT, content, "utf8")
console.log(`[registry:playground:sync] wrote ${path.relative(ROOT, OUT)} with ${entries.length} renderable entries and ${registryItems.length} registry items`)
