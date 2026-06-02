"use client";

import { useMemo, useState } from "react";

import { PLAYGROUND_REGISTRY } from "@/lib/registry";
import metadataMap from "@/lib/registry.metadata.json";

type RegistryEntry = {
  name?: string;
  type?: string;
  component?: React.ComponentType<any>;
  metadata?: unknown;
};

function safeStringify(value: unknown): string {
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return "{}";
  }
}

export default function CatalogPage() {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(24);
  const [previewKeys, setPreviewKeys] = useState<Record<string, boolean>>({});

  const items = useMemo(() => {
    return Object.entries(PLAYGROUND_REGISTRY)
      .map(([key, value]) => ({ key, ...(value as RegistryEntry) }))
      .filter((item) => {
        const haystack = `${item.key} ${item.name ?? ""} ${item.type ?? ""}`.toLowerCase();
        return haystack.includes(query.trim().toLowerCase());
      })
      .sort((a, b) => (a.name ?? a.key).localeCompare(b.name ?? b.key));
  }, [query]);

  const visibleItems = items.slice(0, visibleCount);

  return (
    <div className="container mx-auto max-w-7xl px-6 py-8">
      <div className="mb-6 space-y-2">
        <h1 className="font-semibold text-2xl tracking-tight">Component Catalog</h1>
        <p className="text-muted-foreground text-sm">
          Auto-generated from <code>PLAYGROUND_REGISTRY</code>. New registered components appear here automatically.
        </p>
      </div>

      <div className="mb-6">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by key, name, or type..."
          className="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {visibleItems.map((item) => {
          const Component = item.component;
          const showPreview = Boolean(previewKeys[item.key]);

          return (
            <section key={item.key} className="rounded-lg border bg-card p-4">
              <header className="mb-3 border-b pb-3">
                <h2 className="font-medium text-base">{item.name ?? item.key}</h2>
                <p className="text-muted-foreground text-xs">key: {item.key}</p>
                <p className="text-muted-foreground text-xs">type: {item.type ?? "unknown"}</p>
              </header>

              <div className="mb-3 rounded-md border bg-background p-3">
                {!showPreview ? (
                  <button
                    type="button"
                    className="rounded-md border px-3 py-1.5 text-xs"
                    onClick={() =>
                      setPreviewKeys((prev) => ({ ...prev, [item.key]: true }))
                    }
                  >
                    Render preview
                  </button>
                ) : Component ? (
                  <Component />
                ) : (
                  <p className="text-muted-foreground text-sm">
                    No renderable component
                  </p>
                )}
              </div>

              {item.metadata ? (
                <details className="rounded-md border bg-background p-2">
                  <summary className="cursor-pointer text-sm">Props metadata</summary>
                  <pre className="mt-2 overflow-auto text-xs">{safeStringify(item.metadata)}</pre>
                </details>
              ) : (
                <details className="rounded-md border bg-background p-2">
                  <summary className="cursor-pointer text-sm">Props metadata</summary>
                  <pre className="mt-2 overflow-auto text-xs">
                    {safeStringify(
                      (metadataMap as Record<string, unknown>)[
                        String(item.name ?? item.key).replace(/^widget_/, "").toLowerCase()
                      ] ?? null
                    )}
                  </pre>
                </details>
              )}
            </section>
          );
        })}
      </div>
      {visibleCount < items.length ? (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            className="rounded-md border px-4 py-2 text-sm"
            onClick={() =>
              setVisibleCount((count) => Math.min(count + 24, items.length))
            }
          >
            Load more ({items.length - visibleCount} remaining)
          </button>
        </div>
      ) : null}
    </div>
  );
}
