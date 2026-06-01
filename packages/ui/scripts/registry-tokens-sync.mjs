import { promises as fs } from "node:fs"
import path from "node:path"

const ROOT = process.cwd()
const REGISTRY_JSON = path.join(ROOT, "registry.json")
const TOKEN_SOURCE = path.join(ROOT, "src/styles/theme-reference.css")

function parseVars(css) {
  const vars = {}
  const re = /--([a-zA-Z0-9-_]+)\s*:\s*([^;]+);/g
  let m
  while ((m = re.exec(css)) !== null) {
    vars[m[1]] = m[2].trim()
  }
  return vars
}

const registryRaw = await fs.readFile(REGISTRY_JSON, "utf8")
const registry = JSON.parse(registryRaw)
const cssRaw = await fs.readFile(TOKEN_SOURCE, "utf8")

const allVars = parseVars(cssRaw)

const themeItem = (registry.items || []).find((i) => i?.type === "registry:theme")
if (!themeItem) {
  throw new Error("No registry:theme item found in registry.json")
}

themeItem.cssVars = themeItem.cssVars || {}
themeItem.cssVars.light = themeItem.cssVars.light || {}
themeItem.cssVars.dark = themeItem.cssVars.dark || {}

let addedLight = 0
let addedDark = 0
for (const [key, value] of Object.entries(allVars)) {
  if (!(key in themeItem.cssVars.light)) {
    themeItem.cssVars.light[key] = value
    addedLight += 1
  }
  if (!(key in themeItem.cssVars.dark)) {
    themeItem.cssVars.dark[key] = value
    addedDark += 1
  }
}

await fs.writeFile(REGISTRY_JSON, `${JSON.stringify(registry, null, 2)}\n`)
console.log(`[registry:tokens:sync] merged ${Object.keys(allVars).length} vars from ${path.relative(ROOT, TOKEN_SOURCE)}; added light=${addedLight}, dark=${addedDark}`)
