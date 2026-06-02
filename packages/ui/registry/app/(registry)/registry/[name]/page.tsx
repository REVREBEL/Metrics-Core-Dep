import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { demos } from "@/app/demo/[name]/index";
import { ComponentCard } from "@/primitives/registry/component-card";
import { getPrompt } from "@/lib/utils";
import registryManifest from "@/registry";

type RegistryItem = {
  name: string;
  type: string;
  title?: string;
  description?: string;
};

const registryItems = ((registryManifest as { items?: RegistryItem[] }).items ??
  []) as RegistryItem[];

export async function generateStaticParams() {
  return registryItems.map(({ name }) => ({
    name,
  }));
}

export default async function RegistryItemPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const component = registryItems.find((item) => item.name === name);

  if (!component) {
    notFound();
  }
  const hasDemo = Boolean(demos[component.name as keyof typeof demos]);

  return (
    <div className="container p-5 md:p-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <Link
            className="mb-4 inline-flex items-center rounded-md px-3 py-2 text-sm hover:bg-muted"
            href="/"
          >
            <ArrowLeft className="mr-2 size-4" />
            Back to Home
          </Link>
          <h1 className="font-bold text-3xl tracking-tight">
            {component.title}
          </h1>
        </div>
      </div>

      <ComponentCard
        component={component}
        baseUrl={process.env.VERCEL_PROJECT_PRODUCTION_URL ?? ""}
        prompt={getPrompt()}
        hasDemo={hasDemo}
      />
    </div>
  );
}
