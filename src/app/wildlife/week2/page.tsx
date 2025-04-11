"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import clsx from "clsx";

import { questionsByWeek } from "@/data/wildlife/answers";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

type QuizAppProps = {
  week: string;
};

const QuizApp: React.FC<QuizAppProps> = ({ week }) => {
  const questions: Question[] = questionsByWeek[week] || [];

  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true); // Allow submission even if some answers are null
  };
  

  const handleRestart = () => {
    setAnswers(Array(questions.length).fill(null));
    setSubmitted(false);
  };

  const score = answers.reduce((acc, selected, index) => {
    return selected === questions[index].answer ? acc + 1 : acc;
  }, 0);

  if (submitted) {
    return (
      <div className="flex justify-center items-center px-4 py-6">
        <Card className="w-full max-w-5xl shadow-md max-h-[85vh] overflow-y-auto">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Quiz Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base sm:text-lg">
            <div className="font-medium">
              Your Score: {score} / {questions.length}
            </div>

            {questions.map((question, index) => {
              const selected = answers[index];
              const correct = selected === question.answer;

              return (
                <div key={index} className="p-3 border rounded-md space-y-1">
                  <div className="font-semibold">
                    Q{index + 1}: {question.question}
                  </div>

                  {selected === null ? (
                    <div className="text-yellow-600 italic">Not Attempted</div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      {correct ? (
                        <CheckCircle2 className="text-green-500" />
                      ) : (
                        <XCircle className="text-red-500" />
                      )}
                      <span
                        className={clsx(
                          correct ? "text-green-600" : "text-red-600"
                        )}
                      >
                        Your Answer: {selected}
                      </span>
                    </div>
                  )}

                  {!correct && selected !== null && (
                    <div className="text-sm text-muted-foreground">
                      Correct Answer: {question.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </CardContent>
          <CardFooter>
            <Button onClick={handleRestart} className="w-full sm:w-auto">
              Restart Quiz
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center px-4 py-6">
      <Card className="w-full max-w-5xl shadow-md ">

        <CardHeader>
          <CardTitle className="text-xl">{week.toUpperCase()}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {questions.map((question, index) => {
            const selected = answers[index];

            return (
              <div key={index} className="border-b pb-4 space-y-2">
                <div className="font-medium text-base sm:text-lg">
                  Q{index + 1}: {question.question}
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {question.options.map((option) => (
                    <Button
                      key={option}
                      variant="outline"
                      className={clsx(
                        "justify-start text-left w-full whitespace-normal break-words py-4 min-h-[3rem]",
                        selected === option
                          ? "bg-blue-200 text-blue-900 border border-blue-600"
                          : ""
                      )}
                      onClick={() => {
                        const updatedAnswers = [...answers];
                        updatedAnswers[index] = option;
                        setAnswers(updatedAnswers);
                      }}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            );
          })}
        </CardContent>

        <CardFooter className="flex justify-center mt-4">
  <Button
    onClick={handleSubmit}
    className="w-full max-w-xs"
  >
    Submit Quiz
  </Button>
</CardFooter>

      </Card>
    </div>
  );
};

export default function CategoriesPage() {
  const week = "week2";

  return (
    <ContentLayout title="Wildlife Ecology">
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
              <Link href="/wildlife">Wildlife Ecology</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{week}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <QuizApp week={week} />
    </ContentLayout>
  );
}
