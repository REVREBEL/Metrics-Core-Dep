import { promises as fs } from "node:fs"
import path from "node:path"

const ROOT = process.cwd()
const REGISTRY_JSON = path.join(ROOT, "registry.json")

const REPLACEMENTS = new Map([
  ["src/components/ui/", "src/primitives/ui/"],
])

const EXACT = new Map([
  ["registry/layouts/shell-layout.tsx", "registry/app/demo/[name]/blocks/shell-layout.tsx"],
  ["src/components/brand-header.tsx", "registry/app/demo/[name]/components/brand-header.tsx"],
  ["src/components/brand-sidebar.tsx", "registry/app/demo/[name]/components/brand-sidebar.tsx"],
  ["src/components/login.tsx", "registry/app/demo/[name]/components/login.tsx"],
  ["src/components/logo.tsx", "registry/app/demo/[name]/components/logo.tsx"],
  ["src/components/hero.tsx", "registry/app/demo/[name]/components/hero.tsx"],
  ["src/components/promo.tsx", "registry/app/demo/[name]/components/promo.tsx"],
  ["src/components/product-grid.tsx", "registry/app/demo/[name]/components/product-grid.tsx"],
  ["src/lib/products.ts", "registry/app/demo/[name]/components/product-grid.tsx"],
  ["src/primitives/ui/button.tsx", "src/primitives/buttons/button.tsx"],
  ["src/primitives/ui/dropdown-menu.tsx", "src/primitives/dropdowns/dropdown-menu.tsx"],
  ["src/primitives/ui/input.tsx", "src/primitives/inputs/input.tsx"],
  ["src/primitives/ui/input-otp.tsx", "src/primitives/inputs/input-otp.tsx"],
  ["src/primitives/ui/menubar.tsx", "src/primitives/menus/menubar.tsx"],
  ["src/primitives/ui/popover.tsx", "src/primitives/popovers/popover.tsx"],
  ["src/primitives/ui/skeleton.tsx", "src/primitives/skeleton/skeleton.tsx"],
  ["src/primitives/ui/table.tsx", "src/primitives/tables/table.tsx"],
])

function remapPath(input) {
  if (!input || typeof input !== "string") return input
  if (EXACT.has(input)) return EXACT.get(input)
  let out = input
  for (const [from, to] of REPLACEMENTS.entries()) {
    if (out.startsWith(from)) out = out.replace(from, to)
  }
  if (out.startsWith("src/app/demo/[name]/")) {
    out = out.replace("src/app/demo/[name]/", "registry/app/demo/[name]/")
  }
  return out
}

async function exists(relPath) {
  try {
    await fs.access(path.join(ROOT, relPath))
    return true
  } catch {
    return false
  }
}

const raw = await fs.readFile(REGISTRY_JSON, "utf8")
const json = JSON.parse(raw)

let updated = 0
let unresolved = []

for (const [itemIdx, item] of (json.items || []).entries()) {
  for (const [fileIdx, file] of (item.files || []).entries()) {
    const before = file.path
    const after = remapPath(before)
    if (after !== before) {
      file.path = after
      updated += 1
    }
    if (file.path && !(await exists(file.path))) {
      unresolved.push({ item: item.name, itemIdx, fileIdx, path: file.path })
    }
  }
}

await fs.writeFile(REGISTRY_JSON, `${JSON.stringify(json, null, 2)}\n`)

console.log(`[registry:manifest:sync] updated ${updated} file paths`)
if (unresolved.length) {
  console.error(`[registry:manifest:sync] unresolved paths: ${unresolved.length}`)
  console.error(JSON.stringify(unresolved.slice(0, 20), null, 2))
  process.exit(1)
}
console.log("[registry:manifest:sync] all paths resolved")
