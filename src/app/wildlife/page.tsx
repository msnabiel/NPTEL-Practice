"use client";
import { Analytics } from '@vercel/analytics/next';
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { ContentLayout } from "@/components/admin-panel/content-layout";

const weeks = Array.from({ length: 12 }, (_, i) => `Week ${i + 1}`);

export default function WildlifePage() {
  return (
    <ContentLayout title="Wildlife Ecology - Select a Week">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 py-6">
        {weeks.map((week, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href={`/wildlife/week${index + 1}`}>
              <Card className="cursor-pointer transition-shadow h-24 flex flex-col justify-center items-center rounded-2xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 text-white hover:shadow-md hover:shadow-slate-500/30">
                <CardContent className="p-2 flex justify-center items-center h-full">
                  <CardTitle className="text-center text-sm sm:text-base font-semibold">
                    {week}
                  </CardTitle>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Link href={`/wildlife/all`}>
            <Card className="cursor-pointer transition-shadow h-24 flex flex-col justify-center items-center border-2 border-dashed border-slate-400 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 text-white rounded-2xl hover:shadow-md hover:shadow-slate-500/20">
              <CardContent className="p-2 flex justify-center items-center h-full">
                <CardTitle className="text-center text-sm sm:text-base font-bold uppercase tracking-wide">
                  All Weeks
                </CardTitle>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      </div>
      <Analytics />
    </ContentLayout>
  );
}
