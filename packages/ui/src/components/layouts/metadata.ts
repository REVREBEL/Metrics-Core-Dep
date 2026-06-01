import type { ComponentMetadata } from "@/lib/component-metadata"

export const metadata: ComponentMetadata = {
  displayName: "layouts",
  description: "Layout-level components for application shells, pages, and panel compositions.",
  props: [
    {
      name: "className",
      type: "string",
      required: false,
      description: "Optional Tailwind/CSS class overrides.",
    },
  ],
}
