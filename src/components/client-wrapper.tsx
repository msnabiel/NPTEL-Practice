// components/client-wrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [shouldRenderAdminLayout, setShouldRenderAdminLayout] = useState(true);

  useEffect(() => {
    const noSidebarRoutes = ["/login-signup"];
    setShouldRenderAdminLayout(!noSidebarRoutes.includes(pathname));
  }, [pathname]);

  return (
    <ThemeProvider attribute="class" defaultTheme="Light" enableSystem>
      {shouldRenderAdminLayout ? (
        <AdminPanelLayout>{children}</AdminPanelLayout>
      ) : (
        children
      )}
    </ThemeProvider>
  );
}
