# Metrics UI

Shared UI package and shadcn-compatible registry for REVREBEL Metrics.

This package owns the reusable component library, primitive wrappers, registry items, demo/catalog surfaces, and generated registry metadata used by `metrics-ui.revrebel.io`.

## Package scope

`packages/ui` is responsible for:

- Shared React components and primitives
- Registry components, blocks, and generated registry JSON
- The public UI catalog at `metrics-ui.revrebel.io/catalog`
- Component metadata used by the catalog and AI/component discovery workflows
- Theme, token, layout, and primitive documentation for the Metrics UI system

## Registry metadata sync

The UI package includes a metadata sync workflow that keeps the catalog aligned with the component source tree.

### Added files

```txt
src/lib/component-metadata.ts
scripts/registry-sync.mts
src/lib/registry.metadata.json
```

### NPM script

Run the sync from the repo root:

```bash
pnpm --filter @repo/ui run registry:sync
```

## What `registry:sync` does

`registry:sync` scans:

```txt
packages/ui/src/components/**/*.tsx
```

It ignores story, data, and internal-only directories, then creates or updates metadata stubs for each component. Existing metadata entries are preserved where present, so descriptions and prop documentation are not overwritten during future sync runs.

The generated metadata file is:

```txt
packages/ui/src/lib/registry.metadata.json
```

Current status from the initial run:

```txt
registry:sync generated 146 metadata stubs.
```

## Catalog behavior

`catalog/page.tsx` now reads from `registry.metadata.json` when inline registry metadata is missing.

That means the catalog can still show component titles, descriptions, and prop notes even when those details do not live directly inside `registry.json`.

Open the catalog at:

```txt
https://metrics-ui.revrebel.io/catalog
```

## Recommended component metadata

For components that need richer catalog/agent guidance, add a sibling `metadata.ts` file next to the component.

Example:

```ts
import type { ComponentMetadata } from "@/lib/component-metadata"

export const metadata: ComponentMetadata = {
  displayName: "MyComponent",
  description: "What this component does",
  props: [
    {
      name: "className",
      type: "string",
      required: false,
      description: "Optional class override",
    },
  ],
}
```

Then run:

```bash
pnpm --filter @repo/ui run registry:sync
```

The sync script merges the sibling `metadata.ts` entry into `registry.metadata.json`.

## Important parser note

`registry:sync` currently parses `metadata.ts` with a safe text parser instead of executing TypeScript.

Keep each metadata file in a simple object literal format like the example above. Avoid computed values, imported constants for prop arrays, function calls, or runtime logic inside `metadata.ts`.

## Recommended workflow

1. Add or update a component under `packages/ui/src/components`.
2. Add a sibling `metadata.ts` only for components that need richer catalog documentation.
3. Run:

   ```bash
   pnpm --filter @repo/ui run registry:sync
   ```

4. Fill or refine description and props in generated metadata for the components that matter first.
5. Open:

   ```txt
   https://metrics-ui.revrebel.io/catalog
   ```

6. Confirm the catalog card displays the intended metadata.

## Related docs

See the repo docs page:

```txt
docs/ui/registry-metadata-sync.md
```
