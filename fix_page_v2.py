content = """import { notFound } from "next/navigation";
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
    <div className="flex h-[100vh] w-full flex-col gap-4 bg-card">
      <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading demo...</div>}>
        <DemoLoader DemoComponent={DemoComponent} />
      </Suspense>
    </div>
  );
}

async function DemoLoader({ DemoComponent }: { DemoComponent: any }) {
  // DemoComponent is a dynamic component. When we render it, next/dynamic will load it.
  // However, it returns an OBJECT { name, components: { ... } }.
  // We need to render the components inside that object.
  // Since we can't easily "render" the object to get its return value without it being a component,
  // we should have index.tsx return a component that renders the demo.

  // Actually, let's keep it simple. We render the DemoComponent,
  // but it needs to be a valid React Component.
  // If the dynamic import returns an object, we need a wrapper.
  return <DemoWrapper DemoComponent={DemoComponent} />;
}

function DemoWrapper({ DemoComponent }: { DemoComponent: any }) {
  // This is a client component essentially if it uses hooks, but here it just needs to handle the object.
  // Wait, if DemoComponent is from dynamic(), it IS a component.
  // When rendered, it will return the object. This will FAIL in React.

  return <DemoComponentRenderer DemoComponent={DemoComponent} />;
}
"""
# I'm overthinking. Let's just make the dynamic component in index.tsx return a Component that renders the demo.
