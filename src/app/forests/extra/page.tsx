"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ContentLayout } from "@/components/admin-panel/content-layout";
export default function ExtraForestryCheatSheet() {
  const questionsAndAnswers = [
    {
      question:
        "1. What is the stand basal area per hectare for 3 trees with DBH 25 cm, 30 cm, and 35 cm on a 15m x 15m plot?",
      answer:
        "Convert DBH to meters: 0.25, 0.30, 0.35\n" +
        "BA = π/4 × (0.25² + 0.30² + 0.35²) = 0.216 m²\n" +
        "Per hectare = 0.216 × (10,000 / 225) = 9.6 m²/ha"
    },
    {
      question: "2. Which of the following are abiotic factors? (water, vines, trees, reptiles)",
      answer: "Water is the only abiotic (non-living) factor. The rest are biotic."
    },
    {
      question: "3. When are seed trees felled?",
      answer: "In the final or removal felling stage, after successful natural regeneration."
    },
    {
      question: "4. What is the planned age from formation to final felling of a crop called?",
      answer: "Rotation Age."
    },
    {
      question: "5. What is the branch of forestry dealing with harvesting, disposal, and use of forest produce?",
      answer: "Forest Utilization."
    },
    {
      question: "6. What are the aims of forest management?",
      answer: "Water reservation, soil preservation, species preservation — All of the above."
    },
    {
      question: "7. When is a stand considered uneven-aged?",
      answer: "When the age difference between trees is >20% of the desired rotation age."
    },
    {
      question: "8. What is the value derived from knowing others are using the resource in this generation?",
      answer: "Altruistic Value."
    },
    {
      question: "9. What type of forest does the chestnut tree grow in?",
      answer: "Temperate Deciduous Forest."
    },
    {
      question: "10. What kind of nutrient is chlorine for plants?",
      answer: "Micronutrient."
    },
    {
      question: "11. What is the process of clearing old crops in a single felling called?",
      answer: "Clear Cutting."
    },
    {
      question: "12. In which stage are seed trees removed?",
      answer: "Final / Removal felling."
    },
    {
      question: "13. Who introduced the group shelterwood system?",
      answer: "Hans Carl von Carlowitz."
    },
    {
      question: "14. In even-aged stands, how much can tree ages vary?",
      answer: "Not more than 20 years."
    }
  ];
  return (
    <ContentLayout title="Forests and Their Managements - Extra Q&A">
      <div className="space-y-6">
        {/* Breadcrumb */}
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
                <Link href="/forests">Forests and Their Management</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Extra</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
  
        {/* Question Cards */}
        {questionsAndAnswers.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-base font-semibold">{item.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-sm text-muted-foreground">
                {item.answer}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ContentLayout>
  )};
