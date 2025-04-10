"use client";

import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarClock } from "lucide-react";

export default function CategoriesPage() {
  const week = "week8";

  return (
    <ContentLayout title="Forests and Their Management">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/home">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
            <Link href="/conservation">Conservation Economics</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{week}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex justify-center items-center px-4 py-8">
        <Card className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 max-w-md w-full shadow-xl rounded-2xl p-6 space-y-6 text-center">
          <CardContent className="flex flex-col items-center space-y-4">
            <CalendarClock className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Coming Soon
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-300">
              The week’s quiz is under construction. Stay tuned!
            </p>
          </CardContent>
        </Card>
      </div>
    </ContentLayout>
  );
}
