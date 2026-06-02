import { promises as fs } from "node:fs"
import path from "node:path"

const ROOT = process.cwd()
const appRoot = path.join(ROOT, "app")
const registryLayout = path.join(ROOT, "registry/app/layout.tsx")

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function writeFileIfChanged(filePath, content) {
  let existing = null
  try {
    existing = await fs.readFile(filePath, "utf8")
  } catch {
    existing = null
  }
  if (existing !== content) {
    await fs.writeFile(filePath, content, "utf8")
  }
}

async function removeIfSymlink(target) {
  try {
    const stat = await fs.lstat(target)
    if (stat.isSymbolicLink()) {
      await fs.unlink(target)
      return true
    }
  } catch {
    return false
  }
  return false
}

async function normalizeRegistryLayoutImport() {
  try {
    const raw = await fs.readFile(registryLayout, "utf8")
    const next = raw.replace('import "@/app/globals.css";', 'import "./globals.css";')
    if (next !== raw) {
      await fs.writeFile(registryLayout, next, "utf8")
      return true
    }
  } catch {
    return false
  }
  return false
}

async function main() {
  const removedSymlink = await removeIfSymlink(appRoot)

  await ensureDir(path.join(appRoot, "(registry)"))
  await ensureDir(path.join(appRoot, "_not-found"))
  await ensureDir(path.join(appRoot, "(registry)", "catalog"))
  await ensureDir(path.join(appRoot, "(registry)", "registry", "[name]"))
  await ensureDir(path.join(appRoot, "(registry)", "tokens"))

  await writeFileIfChanged(
    path.join(appRoot, "layout.tsx"),
    'export { default, metadata } from "../registry/app/layout";\n'
  )

  await writeFileIfChanged(
    path.join(appRoot, "not-found.tsx"),
    'export { default } from "../registry/app/not-found";\n'
  )

  await writeFileIfChanged(
    path.join(appRoot, "(registry)/layout.tsx"),
    'export { default } from "../../registry/app/(registry)/layout";\n'
  )

  await writeFileIfChanged(
    path.join(appRoot, "(registry)/page.tsx"),
    'export { default } from "../../registry/app/(registry)/page";\n'
  )

  await writeFileIfChanged(
    path.join(appRoot, "(registry)/catalog/page.tsx"),
    'export { default } from "../../../registry/app/(registry)/catalog/page";\n'
  )

  await writeFileIfChanged(
    path.join(appRoot, "(registry)/registry/[name]/page.tsx"),
    'export { default, generateStaticParams } from "../../../../registry/app/(registry)/registry/[name]/page";\n'
  )

  await writeFileIfChanged(
    path.join(appRoot, "(registry)/tokens/page.tsx"),
    'export { default } from "../../../registry/app/(registry)/tokens/page";\n'
  )

  await writeFileIfChanged(
    path.join(appRoot, "_not-found/page.tsx"),
    `export default function InternalNotFoundPage() {
  return (
    <html lang="en">
      <body>
        <main style={{ padding: 24, fontFamily: "sans-serif" }}>
          <h1>404</h1>
          <p>Page not found.</p>
        </main>
      </body>
    </html>
  )
}
`
  )

  const normalizedImport = await normalizeRegistryLayoutImport()

  console.log(
    `[registry:prepare] ready (removedLegacySymlink=${removedSymlink}, normalizedLayoutImport=${normalizedImport})`
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
