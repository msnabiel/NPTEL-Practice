"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { ContentLayout } from "@/components/admin-panel/content-layout";

const weeks = Array.from({ length: 12 }, (_, i) => `Week ${i + 1}`);

export default function WildlifePage() {
  return (
    <ContentLayout title="Conservation Economics - Select a Week">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 py-6">
        {weeks.map((week, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href={`/conservation/week${index + 1}`}>
            <Card className="cursor-pointer transition-shadow h-24 flex flex-col justify-center items-center rounded-2xl bg-gradient-to-br from-[#2F5233] via-[#3F6D3A] to-[#5A8F46] text-white hover:shadow-md hover:shadow-emerald-500/30">
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
          <Link href={`/conservation/all`}>
          <Card className="cursor-pointer transition-shadow h-24 flex flex-col justify-center items-center rounded-2xl bg-gradient-to-br from-[#2F5233] via-[#3F6D3A] to-[#5A8F46] text-white hover:shadow-md hover:shadow-emerald-500/30">
              <CardContent className="p-2 flex justify-center items-center h-full">
                <CardTitle className="text-center text-sm sm:text-base font-bold uppercase tracking-wide">
                  All Weeks
                </CardTitle>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      </div>
    </ContentLayout>
  );
}
