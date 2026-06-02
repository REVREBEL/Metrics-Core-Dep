import type { ReactNode } from "react";

import {
  MobileSidebarTrigger,
  RegistrySidebar,
} from "@/primitives/registry/registry-sidebar";

export default function RegistryLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <MobileSidebarTrigger />
      <RegistrySidebar />
      <main className="flex w-full justify-center">{children}</main>
    </>
  );
}
