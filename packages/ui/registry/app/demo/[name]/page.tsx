import { notFound } from "next/navigation";
import { Suspense } from "react";
import { demos } from "./index";

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
        <DemoComponent />
      </Suspense>
    </div>
  );
}
