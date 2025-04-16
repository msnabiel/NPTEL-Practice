"use client"; // This makes the layout a client component

import { Analytics } from '@vercel/analytics/next';
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [shouldRenderAdminLayout, setShouldRenderAdminLayout] = useState(true);

  useEffect(() => {
    // Routes without the admin layout
    const noSidebarRoutes = ["/login-signup"];
    setShouldRenderAdminLayout(!noSidebarRoutes.includes(pathname));
  }, [pathname]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="Light" enableSystem>
          {shouldRenderAdminLayout ? (
            <AdminPanelLayout>{children}</AdminPanelLayout>
          ) : (
            children
          )}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
