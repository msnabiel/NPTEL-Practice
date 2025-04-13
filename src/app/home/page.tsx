"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import {
  CheckCircle,
  BookOpen,
  Clock,
  RefreshCcw,
  ClipboardList,
  School,
  MousePointerClick,
  ShieldCheck,
} from "lucide-react";

const dashboardInfo = {
  title: "VIT NPTEL Quiz Hub",
  description:
    "A simple practice platform built for VIT Chennai students to prepare for NPTEL exams. Practice quizzes, revise topics, and stay updated with all key announcements.",
  sections: {
    overview: [
      "Practice quizzes by week or chapter",
      "Key announcements for NPTEL exams",
      "Instant feedback and retry options",
      "Tailored for VIT Chennai students",
    ],
  },
  stats: [
    { label: "Quizzes Available", value: "250+" },
    { label: "Courses Supported", value: "20+" },
    { label: "VIT Students Practicing", value: "1K+" },
  ],
  paragraphs: [
    "This platform is mainly built for VIT Chennai students preparing for their NPTEL exams.",
    "Whether you’re revising for the final exam or completing weekly assignments, this site helps you prepare better with quick and accurate quiz sets.",
    "The developer is not responsible for any issues related to exams or NPTEL. This platform is solely created to assist students in their preparation.",
  ],
  
  nptelUpdates: [
    {
  id: 1,
  title: "Exam Centre Details & Timings Released",
  summary: "Login to internalapp.nptel.ac.in with your registered email and password as DOB (YYYY-MM-DD) to view April 2025 exam city and centre. Hall ticket coming soon.",
  date: "2025-04-11",
  link: "https://internalapp.nptel.ac.in"
},
      
    {
  id: 2,
  title: "Exam Slot Timings & Centre (VITC students)",
  summary: "Exam slots: Morning 7–10am, Afternoon 11–2pm, Evening 3–6pm, Late Evening 7–10pm. Candidates who selected Chennai will have their centre at VIT Chennai.",
  date: "2025-04-11",
  link: "https://internalapp.nptel.ac.in"
},

    {
      id: 3,
      title: "NPTEL's LAST Quiz Deadline",
      summary: "All NPTEL quizzes will close on April 16th. Make sure to complete them in time. Check your email for more.",
      date: "2025-04-09",
      link: "https://mail.google.com",
    },
  ],
  
};

export default function AboutPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredUpdates = dashboardInfo.nptelUpdates.filter((update) =>
    update.title.toLowerCase().includes(searchTerm) ||
    update.summary.toLowerCase().includes(searchTerm)
  );

  return (
    <ContentLayout title="Home">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/home">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Search Updates */}
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Search NPTEL exam updates..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* NPTEL Exam Alerts */}
        <h2 className="text-2xl font-bold mb-6">Latest NPTEL Exam Alerts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredUpdates.length > 0 ? (
            filteredUpdates.map((update) => (
              <Card key={update.id}>
                <CardHeader>
                  <CardTitle>{update.title}</CardTitle>
                  <p className="text-sm text-gray-500">{update.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-lg dark:text-gray-300">{update.summary}</p>
                  <Link href={update.link} className="text-blue-600 hover:underline">
                    Click for more
                  </Link>
                </CardContent>
              </Card>
            ))
          ) : (
            <p>No updates found for your search.</p>
          )}
        </div>

        {/* Practice Quiz Topics */}
        <h2 className="text-2xl font-bold mb-6">Available Quiz Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            {
              id: 1,
              name: "Forests and Their Management",
              description: "Explore sustainable forest management and community practices.",
              image: "/forests.png",
              features: ["Agroforestry", "Sustainable Logging", "Community Forestry"],
              url: "/forests",
            },
            {
              id: 2,
              name: "Conservation Economics",
              description: "Explore how economics can help solve today’s environmental problems.",
              image: "/conservation.jpg",
              features: ["Biodiversity", "Ecosystem Dynamics", "Human Impact"],
              url: "/conservation",
            },
            {
              id: 3,
              name: "Wildlife Ecology",
              description: "Understand wildlife behavior, habitats, and conservation strategies.",
              image: "/wildlife.png",
              features: ["Population Ecology", "Habitat Analysis", "Species Management"],
              url: "/wildlife",
            },
          ].map((quiz) => (
            <Link key={quiz.id} href={quiz.url} passHref>
              <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={quiz.image}
                    alt={quiz.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{quiz.name}</CardTitle>
                  <p className="dark:text-gray-300">{quiz.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {quiz.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        {/* About Section */}
<div className="mb-8">
  <h2 className="text-2xl font-bold mb-4">About This Platform</h2>
  <Card>
    <CardContent className="p-6 space-y-4">
      {dashboardInfo.paragraphs.map((paragraph, index) => (
        <p key={index} className="text-lg dark:text-gray-300">
          {paragraph}
        </p>
      ))}
    </CardContent>
  </Card>
</div>
{/* Key Highlights Card with Icons */}
<div className="mb-8">
  <h2 className="text-2xl font-bold mb-4">Why Use This Platform?</h2>
  <Card>
    <CardContent className="p-6 space-y-4">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span>300+ Practice Questions</span>
        </div>
        <div className="flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <span>36 Course Weeks</span>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-purple-600" />
          <span>24/7 Access</span>
        </div>
        <div className="flex items-center gap-3">
          <ClipboardList className="w-5 h-5 text-amber-600" />
          <span>Instant Feedback</span>
        </div>
        <div className="flex items-center gap-3">
          <RefreshCcw className="w-5 h-5 text-teal-600" />
          <span>Unlimited Quiz Retries</span>
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-rose-600" />
          <span>Exam-Style MCQs</span>
        </div>
        <div className="flex items-center gap-3">
          <School className="w-5 h-5 text-indigo-600" />
          <span> For VIT Students</span>
        </div>
        <div className="flex items-center gap-3">
          <MousePointerClick className="w-5 h-5 text-cyan-600" />
          <span>No Login Needed</span>
        </div>
      </div>
    </CardContent>
  </Card>
</div>


        {/* Tech Stack */}
        <Card>
          <CardHeader>
            <CardTitle>Built Using</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">ShadCN UI</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </ContentLayout>
  );
}
