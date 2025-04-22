"use client";
import { format } from "date-fns";
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

// Define the leaderboard entry type
type LeaderboardEntry = {
  id: number;
  name: string;
  score: number;
  time: number; // in milliseconds
  course: string;
  timestamp: string;
};

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [filteredEntries, setFilteredEntries] = useState<LeaderboardEntry[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>("All Courses");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const fetchData = async () => {
    setIsRefreshing(true);

    const { data, error } = await supabase.from("quiz_scores").select("*");

    if (error) {
      console.error("Error fetching leaderboard data:", error);
      setIsRefreshing(false);
      return;
    }

    // Sort: highest score first, then lowest time
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

 const filterEntries = (course: string, query: string) => {
  let result = entries;

  if (course !== "All Courses") {
    result = result.filter((entry) => entry.course === course);
  }

  if (query.trim()) {
    result = result.filter((entry) =>
      entry.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  setFilteredEntries(result);
};

const handleCourseChange = (course: string) => {
  setSelectedCourse(course);
};

useEffect(() => {
  filterEntries(selectedCourse, searchQuery);
}, [selectedCourse, searchQuery]);

  const handleRefresh = () => {
    fetchData();
  };

  // Function to format the time from milliseconds to minutes and seconds

const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes}m ${seconds}s`;
};

  const formatIST = (timestamp: string) => {
    const date = new Date(timestamp);
    // Manually adjust the time to IST (+5:30)
    date.setHours(date.getHours() + 5);
    date.setMinutes(date.getMinutes() + 30);
  
    return date.toLocaleString("en-IN", {
      hour12: true,
      dateStyle: "medium",
      timeStyle: "short",
    });
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

      <div className="w-full px-2 sm:px-4 py-6">
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
            <div className="mb-6">
  <input
    type="text"
    placeholder="Search by name..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>


{filteredEntries.length > 0 ? (
  <div className="w-full overflow-x-auto">
    <Table className="w-full">
      <TableHeader>
        <TableRow className="text-xs sm:text-sm md:text-base">
          <TableHead className="whitespace-nowrap">Rank</TableHead>
          <TableHead className="whitespace-nowrap">Name</TableHead>
          <TableHead className="whitespace-nowrap">Course</TableHead>
          <TableHead className="whitespace-nowrap">Score</TableHead>
          <TableHead className="whitespace-nowrap">Time</TableHead>
          <TableHead className="whitespace-nowrap">Timestamp</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredEntries.map((entry) => {
          const originalRank = entries.findIndex((e) => e.id === entry.id) + 1;
          return (
            <TableRow
              key={entry.id}
              className="text-sm sm:text-base whitespace-nowrap"
            >
              <TableCell>{originalRank}</TableCell>
              <TableCell className="max-w-[100px] truncate">{entry.name}</TableCell>
              <TableCell className="max-w-[120px] truncate">{entry.course}</TableCell>
              <TableCell>{entry.score}</TableCell>
              <TableCell>{formatTime(entry.time)}</TableCell>
              <TableCell className="max-w-[140px] truncate">
                {format(new Date(entry.timestamp), "MMM dd, yyyy hh:mm a")}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </div>
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
