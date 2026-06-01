# Metrics UI

Shared UI package and shadcn-compatible registry for REVREBEL Metrics.

This package owns the reusable component library, primitive wrappers, registry items, demo/catalog surfaces, registry manifest, and generated registry metadata used by `metrics-ui.revrebel.io`.

## Package scope

`packages/ui` is responsible for:

- Shared React components and primitives
- Registry components, blocks, and generated registry JSON
- Registry manifest path normalization and validation
- The public UI catalog at `metrics-ui.revrebel.io/catalog`
- Component metadata used by the catalog and AI/component discovery workflows
- Theme, token, layout, and primitive documentation for the Metrics UI system

## Registry build pipeline

`registry:build` is the team-facing one-command pipeline for preparing and building the UI registry.

Run from the repo root:

```bash
pnpm --filter @repo/ui run registry:build
```

The pipeline runs:

```txt
registry:sync
registry:manifest:sync
pnpm dlx shadcn@latest build
```

That means `registry:build` now:

1. Syncs component metadata.
2. Syncs and repairs registry manifest paths.
3. Runs the shadcn registry build.
4. Fails fast if unresolved registry file paths remain.

## Package scripts

```txt
registry:sync          -> node ./scripts/registry-sync.mjs
registry:manifest:sync -> node ./scripts/registry-manifest-sync.mjs
registry:build         -> registry:sync + registry:manifest:sync + shadcn build
```

## Registry metadata sync

The UI package includes a metadata sync workflow that keeps the catalog aligned with the component source tree.

### Key files

```txt
src/lib/component-metadata.ts
scripts/registry-sync.mjs
src/lib/registry.metadata.json
```

### Command

Run the sync from the repo root:

```bash
pnpm --filter @repo/ui run registry:sync
```

### What `registry:sync` does

`registry:sync` scans:

```txt
packages/ui/src/components/**/*.tsx
```

It ignores story, data, and internal-only directories, then creates or updates metadata stubs for each component. Existing metadata entries are preserved where present, so descriptions and prop documentation are not overwritten during future sync runs.

If a co-located sibling `metadata.ts` file exists, the script merges that metadata into the generated metadata JSON.

The generated metadata file is:

```txt
packages/ui/src/lib/registry.metadata.json
```

Current status from the initial run:

```txt
registry:sync generated 146 metadata stubs.
```

## Registry manifest sync

### Key file

```txt
scripts/registry-manifest-sync.mjs
```

### Command

Run from the repo root:

```bash
pnpm --filter @repo/ui run registry:manifest:sync
```

### What `registry:manifest:sync` does

The manifest sync script:

- Normalizes stale paths in `registry.json` to the current repo structure.
- Repairs known moved component paths before build.
- Validates that every `items[].files[].path` exists.
- Fails with an unresolved path report if any registry file paths still cannot be found.

This protects the registry build from stale references like moved components or old `src/components/*` paths that now live under primitives or grouped source directories.

## Catalog behavior

The visual catalog route is:

```txt
/catalog
```

Hosted at:

```txt
https://metrics-ui.revrebel.io/catalog
```

Catalog population uses:

```txt
component render entries -> PLAYGROUND_REGISTRY
props/description metadata -> registry.metadata.json
co-located metadata.ts -> merged by registry:sync
```

`catalog/page.tsx` reads from `registry.metadata.json` when inline registry metadata is missing.

That means the catalog can still show component titles, descriptions, and prop notes even when those details do not live directly inside `registry.json`.

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
      defaultValue: undefined,
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
   pnpm --filter @repo/ui run registry:build
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
docs/ui/registry-build-pipeline.md
```
