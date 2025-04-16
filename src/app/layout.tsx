// app/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import ClientWrapper from "@/components/client-wrapper";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
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
    siteName: "VIT NPTEL Quiz Hub",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
        <Analytics />
      </body>
    </html>
  );
}
