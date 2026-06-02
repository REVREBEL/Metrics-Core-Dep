"use client";

import { Blocks, Component, Home, Search, ToyBrick } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import registryManifest from "@/registry";

type RegistryItem = {
  name: string;
  type: string;
  title?: string;
};

type NavItem = {
  name: string;
  title: string;
  path: string;
};

const allRegistryItems = ((registryManifest as { items?: RegistryItem[] }).items ??
  []) as RegistryItem[];

export const gettingStartedItems: NavItem[] = [
  { name: "home", title: "Home", path: "/" },
  { name: "tokens", title: "Design Tokens", path: "/tokens" },
  { name: "catalog", title: "Component Catalog", path: "/catalog" },
];

function registryItemsByType(type: string): NavItem[] {
  return allRegistryItems
    .filter((item) => item.type === type)
    .map((item) => ({
      name: item.name,
      title: item.title ?? item.name,
      path: `/registry/${item.name}`,
    }));
}

const blockItems = registryItemsByType("registry:block");
const componentItems = registryItemsByType("registry:component");
const uiItems = registryItemsByType("registry:ui");

function MobileSidebarTrigger() {
  return null;
}

function RegistrySection({
  title,
  icon,
  items,
  pathname,
}: {
  title: string;
  icon: ReactNode;
  items: NavItem[];
  pathname: string;
}) {
  return (
    <section className="border-b px-3 py-3">
      <div className="mb-2 flex items-center gap-2 font-medium text-muted-foreground text-xs uppercase tracking-wide">
        {icon}
        {title}
      </div>
      <nav className="grid gap-1">
        {items.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              className={[
                "truncate rounded-md px-2 py-1.5 text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              ].join(" ")}
              href={item.path}
              key={item.name}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </section>
  );
}

function RegistrySidebar() {
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState("");

  const filterItems = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      return (items: NavItem[]) => items;
    }

    return (items: NavItem[]) =>
      items.filter((item) => item.title.toLowerCase().includes(term));
  }, [searchTerm]);

  return (
    <aside className="hidden h-svh w-72 shrink-0 border-r bg-background md:block">
      <div className="sticky top-0 flex h-svh flex-col">
        <header className="border-b px-4 py-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="rounded-md bg-primary px-2 py-1 text-primary-foreground text-xs">
              UI
            </span>
            Registry
          </Link>
          <label className="relative mt-4 block">
            <Search className="absolute left-2 top-2.5 size-4 text-muted-foreground" />
            <input
              className="h-9 w-full rounded-md border bg-background pl-8 pr-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search..."
              type="search"
              value={searchTerm}
            />
          </label>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <RegistrySection
            icon={<Home className="size-4" />}
            items={gettingStartedItems}
            pathname={pathname}
            title="Getting Started"
          />
          <RegistrySection
            icon={<Blocks className="size-4" />}
            items={filterItems(blockItems)}
            pathname={pathname}
            title="Blocks"
          />
          <RegistrySection
            icon={<Component className="size-4" />}
            items={filterItems(componentItems)}
            pathname={pathname}
            title="Components"
          />
          <RegistrySection
            icon={<ToyBrick className="size-4" />}
            items={filterItems(uiItems)}
            pathname={pathname}
            title="UI Primitives"
          />
        </div>
      </div>
    </aside>
  );
}

export { MobileSidebarTrigger, RegistrySidebar };
