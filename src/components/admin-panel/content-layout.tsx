import { Navbar } from "@/components/admin-panel/navbar";
import { Analytics } from "@vercel/analytics/next"; // Import Analytics

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function ContentLayout({ title, children }: ContentLayoutProps) {
  return (
    <div>
      <Analytics /> {/* Place the Analytics component here */}
      <Navbar title={title} />
      <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
    </div>
  );
}
