"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { RefreshCcwIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";

//const supabase = createClient(
//  process.env.SUPABASE_URL!,
//  process.env.SUPABASE_ANON_KEY!
//);

// Create Supabase client
//const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

type LeaderboardEntry = {
  id: number;
  name: string; // or 'name' depending on your DB schema
  score: number;
  time: number; // time taken in milliseconds
  course: string;
  timestamp: string;
};

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [filteredEntries, setFilteredEntries] = useState<LeaderboardEntry[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>("All Courses");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const supabase: SupabaseClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  // Fetch leaderboard data from Supabase
  const fetchData = async () => {
    setIsRefreshing(true);

    const { data, error } = await supabase.from("quiz_scores").select("*");

    if (error) {
      console.error("Error fetching leaderboard data:", error);
      setIsRefreshing(false);
      return;
    }

    // Sort by score DESC, time ASC
    const sortedData = (data || []).sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.time - b.time;
    });

    setEntries(sortedData);

    if (selectedCourse === "All Courses") {
      setFilteredEntries(sortedData);
    } else {
      setFilteredEntries(
        sortedData.filter((entry) => entry.course === selectedCourse)
      );
    }

    setIsRefreshing(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCourseChange = (course: string) => {
    setSelectedCourse(course);

    if (course === "All Courses") {
      setFilteredEntries(entries);
    } else {
      setFilteredEntries(entries.filter((entry) => entry.course === course));
    }
  };

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <ContentLayout title="Leaderboard">
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
              <Link href="/leaderboard">Leaderboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <Card className="shadow-xl rounded-2xl border border-gray-300 dark:border-gray-700">
          <CardContent className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
                🏆 Top Scores
              </h2>
              <button
                className={`px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition ${
                  isRefreshing ? "opacity-75 cursor-wait" : ""
                }`}
                onClick={handleRefresh}
                disabled={isRefreshing}
              >
                {isRefreshing ? "Refreshing..." : "Refresh"}
                <RefreshCcwIcon
                  className={`inline-block h-5 w-5 ml-2 text-white ${
                    isRefreshing ? "animate-spin" : ""
                  }`}
                />
              </button>
            </div>

            <div className="mb-6">
              <Select value={selectedCourse} onValueChange={handleCourseChange}>
                <SelectTrigger className="w-full p-3 border rounded-md shadow-sm">
                  <SelectValue placeholder="Select Course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Courses">All Courses</SelectItem>
                  <SelectItem value="Forests and Their Management">
                    Forests and Their Management
                  </SelectItem>
                  <SelectItem value="Conservation Economics">
                    Conservation Economics
                  </SelectItem>
                  <SelectItem value="Wildlife Ecology">Wildlife Ecology</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {filteredEntries.length > 0 ? (
              <Table className="border-collapse w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-left text-xl">Rank</TableHead>
                    <TableHead className="text-left text-xl">Name</TableHead>
                    <TableHead className="text-left text-xl">Course</TableHead>
                    <TableHead className="text-left text-xl">Score</TableHead>
                    <TableHead className="text-left text-xl">Time</TableHead>
                    <TableHead className="text-left text-xl">Timestamp</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEntries.map((entry, idx) => (
                    <TableRow
                      key={entry.id}
                      className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                    >
                      <TableCell className="py-3">{idx + 1}</TableCell>
                      <TableCell className="py-3">{entry.name}</TableCell>
                      <TableCell className="py-3">{entry.course}</TableCell>
                      <TableCell className="py-3">{entry.score}</TableCell>
                      <TableCell className="py-3">
                        {(entry.time / 1000).toFixed(2)}s
                      </TableCell>
                      <TableCell className="py-3">
                        {format(new Date(entry.timestamp), "MMMM dd, yyyy 'at' hh:mm a")}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <p className="text-center text-lg text-gray-600 dark:text-gray-300">
                No leaderboard entries for the selected course!
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </ContentLayout>
  );
}
