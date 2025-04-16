// app/layout.tsx

"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "VIT NPTEL Quiz Hub",
  description: "A platform for VIT Chennai students to practice NPTEL quizzes.",
  openGraph: {
    title: "VIT NPTEL Quiz Hub",
    description: "Practice NPTEL quizzes and Ace the exam!",
    url: "https://nptel-vit.vercel.app",
    images: [
      {
        url: "https://nptel-vit.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "VIT NPTEL Quiz Hub",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIT NPTEL Quiz Hub",
    description: "Practice NPTEL quizzes and Ace the exam!",
    images: ["https://nptel-vit.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
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
