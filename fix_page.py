import re

path = "packages/ui/registry/app/demo/[name]/page.tsx"
with open(path, 'r') as f:
    content = f.read()

# We need to await the dynamic component if it's a function, but next/dynamic handles it.
# However, 'demo' itself is now a dynamic component (the result of dynamic()).
# In the original code: const demo = demos[name]; const { components } = demo;
# Now 'demo' is a dynamic component that returns the demo object.

new_content = """import { notFound } from "next/navigation";
import { Suspense } from "react";
import { demos } from "./index";
import { Renderer } from "./renderer";

export async function generateStaticParams() {
  return Object.keys(demos).map((name) => ({
    name,
  }));
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const DemoComponent = demos[name as keyof typeof demos];
  if (!DemoComponent) {
    notFound();
  }

  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
      <DemoContent DemoComponent={DemoComponent} />
    </Suspense>
  );
}

function DemoContent({ DemoComponent }: { DemoComponent: any }) {
  // Since DemoComponent is a next/dynamic component, we render it.
  // But wait, the dynamic component returns the demo OBJECT, not a component.
  // This is a bit unusual for next/dynamic which usually returns a component.
  // Let's adjust index.tsx to return a component that wraps the demo.
  return <DemoComponent />;
}
"""

# Actually, it's better if index.tsx returns components directly.
# Let's re-read index.tsx and see how it's used.
# The original code expected demo.components.
# If dynamic() returns the object { name, components }, then <DemoComponent /> won't work well if it's not a component.

# Let's fix index.tsx to return a component instead.
