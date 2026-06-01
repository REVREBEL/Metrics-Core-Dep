import { promises as fs } from "node:fs"
import path from "node:path"

const ROOT = process.cwd()
const COMPONENT_ROOT = path.join(ROOT, "src/components")
const OUT_FILE = path.join(ROOT, "src/lib/registry.metadata.json")

async function walk(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const out: string[] = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === "data" || entry.name.startsWith("_")) continue
      out.push(...(await walk(full)))
      continue
    }
    if (!entry.isFile()) continue
    if (!entry.name.endsWith(".tsx")) continue
    if (entry.name === "index.tsx") continue
    if (entry.name.includes(".stories.")) continue
    out.push(full)
  }
  return out
}

function toRelComponentKey(abs: string): string {
  const rel = path.relative(COMPONENT_ROOT, abs).replace(/\\/g, "/")
  return rel.replace(/\.tsx$/, "")
}

function parseMetadataTs(raw: string): { displayName?: string; description?: string; props?: unknown[] } | null {
  const displayName = raw.match(/displayName\s*:\s*["'`](.*?)["'`]/)?.[1]
  const description = raw.match(/description\s*:\s*["'`]([\s\S]*?)["'`]/)?.[1]

  const propsBlockMatch = raw.match(/props\s*:\s*\[([\s\S]*?)\]/)
  let props: Array<Record<string, unknown>> = []

  if (propsBlockMatch?.[1]) {
    const itemRegex = /\{([\s\S]*?)\}/g
    let match: RegExpExecArray | null = itemRegex.exec(propsBlockMatch[1])
    while (match) {
      const body = match[1]
      const name = body.match(/name\s*:\s*["'`](.*?)["'`]/)?.[1]
      const type = body.match(/type\s*:\s*["'`](.*?)["'`]/)?.[1]
      const requiredRaw = body.match(/required\s*:\s*(true|false)/)?.[1]
      const defaultValue = body.match(/defaultValue\s*:\s*["'`](.*?)["'`]/)?.[1]
      const propDescription = body.match(/description\s*:\s*["'`]([\s\S]*?)["'`]/)?.[1]
      if (name && type) {
        props.push({
          name,
          type,
          ...(requiredRaw ? { required: requiredRaw === "true" } : {}),
          ...(defaultValue ? { defaultValue } : {}),
          ...(propDescription ? { description: propDescription } : {}),
        })
      }
      match = itemRegex.exec(propsBlockMatch[1])
    }
  }

  if (!displayName && !description && props.length === 0) return null
  return {
    ...(displayName ? { displayName } : {}),
    ...(description ? { description } : {}),
    props,
  }
}

async function loadColocatedMetadata(absComponentFile: string) {
  const dir = path.dirname(absComponentFile)
  const metadataPath = path.join(dir, "metadata.ts")

  try {
    const raw = await fs.readFile(metadataPath, "utf8")
    return parseMetadataTs(raw)
  } catch {
    return null
  }
}

async function main() {
  const files = await walk(COMPONENT_ROOT)
  const existingRaw = await fs.readFile(OUT_FILE, "utf8").catch(() => "{}")
  const existing = JSON.parse(existingRaw) as Record<string, any>

  const next: Record<string, any> = {}
  let mergedFromColocated = 0

  for (const abs of files) {
    const key = toRelComponentKey(abs)

    const base = existing[key] ?? {
      displayName: key.split("/").pop(),
      description: "",
      props: [],
    }

    const colocated = await loadColocatedMetadata(abs)
    if (colocated) {
      mergedFromColocated += 1
      next[key] = {
        ...base,
        ...colocated,
        props: Array.isArray(colocated.props) ? colocated.props : base.props ?? [],
      }
    } else {
      next[key] = base
    }
  }

  await fs.writeFile(OUT_FILE, `${JSON.stringify(next, null, 2)}\n`, "utf8")
  console.log(
    `[registry:sync] wrote ${Object.keys(next).length} entries to ${path.relative(ROOT, OUT_FILE)} (merged ${mergedFromColocated} colocated metadata files)`
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
