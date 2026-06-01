"use client";

import { useMemo, useState } from "react";

import { PLAYGROUND_REGISTRY } from "@/lib/registry";

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

  const items = useMemo(() => {
    return Object.entries(PLAYGROUND_REGISTRY)
      .map(([key, value]) => ({ key, ...(value as RegistryEntry) }))
      .filter((item) => {
        const haystack = `${item.key} ${item.name ?? ""} ${item.type ?? ""}`.toLowerCase();
        return haystack.includes(query.trim().toLowerCase());
      })
      .sort((a, b) => (a.name ?? a.key).localeCompare(b.name ?? b.key));
  }, [query]);

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
        {items.map((item) => {
          const Component = item.component;

          return (
            <section key={item.key} className="rounded-lg border bg-card p-4">
              <header className="mb-3 border-b pb-3">
                <h2 className="font-medium text-base">{item.name ?? item.key}</h2>
                <p className="text-muted-foreground text-xs">key: {item.key}</p>
                <p className="text-muted-foreground text-xs">type: {item.type ?? "unknown"}</p>
              </header>

              <div className="mb-3 rounded-md border bg-background p-3">
                {Component ? <Component /> : <p className="text-muted-foreground text-sm">No renderable component</p>}
              </div>

              {item.metadata ? (
                <details className="rounded-md border bg-background p-2">
                  <summary className="cursor-pointer text-sm">Props metadata</summary>
                  <pre className="mt-2 overflow-auto text-xs">{safeStringify(item.metadata)}</pre>
                </details>
              ) : (
                <p className="text-muted-foreground text-xs">No props metadata attached</p>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
