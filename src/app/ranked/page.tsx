"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { ContentLayout } from "@/components/admin-panel/content-layout";

const subjects = [
  {
    name: "Forests and Their Management",
    link: "/rankedforests",
    gradient: "from-green-800 via-green-700 to-green-600",
    border: "border-green-300",
  },
  {
    name: "Wildlife Ecology",
    link: "/rankedwildlife",
    gradient: "from-yellow-800 via-yellow-700 to-yellow-600",
    border: "border-yellow-300",
  },
  {
    name: "Conservation Economics",
    link: "/rankedconservation",
    gradient: "from-blue-800 via-blue-700 to-blue-600",
    border: "border-blue-300",
  },
];

export default function SubjectSelectionPage() {
  return (
    <ContentLayout title="Select a Subject">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8">
        {subjects.map((subject, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href={subject.link}>
              <Card
                className={`cursor-pointer h-32 flex flex-col justify-center items-center text-white rounded-2xl transition-shadow border-2 border-dotted ${subject.border} bg-gradient-to-br ${subject.gradient} hover:shadow-md hover:shadow-white/20`}
              >
                <CardContent className="p-4 flex justify-center items-center h-full">
                  <CardTitle className="text-center text-base sm:text-lg font-semibold">
                    {subject.name}
                  </CardTitle>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </ContentLayout>
  );
}
