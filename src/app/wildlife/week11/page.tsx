"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
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

// ✅ Import the questionsByWeek data
import { questionsByWeek } from "@/data/wildlife/answers";

type Question = {
  question: string;
  options: string[];
  answer: string;
};
type QuizAppProps = {
  week: string; // Week number passed as a prop (e.g., 'week1', 'week2')
};

const QuizApp: React.FC<QuizAppProps> = ({ week }) => {
  // ✅ Get questions for the specified week
  const questions: Question[] = questionsByWeek[week] || [];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  const handleOptionClick = (option: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[current] = option;
    setAnswers(updatedAnswers);
  };

  const handleBack = () => {
    if (current > 0) setCurrent((prev) => prev - 1);
  };

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent((prev) => prev + 1);
  };

  const handleSubmit = () => {
    if (answers.every((ans) => ans !== null)) {
      setSubmitted(true);
    } else {
      alert("Please answer all questions before submitting.");
    }
  };

  const handleRestart = () => {
    setAnswers(Array(questions.length).fill(null));
    setCurrent(0);
    setSubmitted(false);
  };

  const score = answers.reduce((acc, selected, index) => {
    return selected === questions[index].answer ? acc + 1 : acc;
  }, 0);

  if (submitted) {
    return (
      <div className="flex justify-center items-center px-4 py-6">
        <Card className="w-full max-w-xl shadow-md">
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
                  {!correct && (
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

  const currentQuestion = questions[current];
  const selectedOption = answers[current];

  return (
    <div className="flex justify-center items-center px-4 py-6">
      <Card className="w-full max-w-xl shadow-md">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">
            Question {current + 1} of {questions.length}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="mb-4 text-base sm:text-lg font-medium">
            {currentQuestion.question}
          </div>
          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options.map((option) => (
              <Button
                key={option}
                variant="outline"
                className={clsx(
                  "justify-start text-left w-full whitespace-normal break-words py-4 min-h-[3rem]",
                  selectedOption === option
                    ? "bg-blue-200 text-blue-900 border border-blue-600"
                    : ""
                )}
                onClick={() => handleOptionClick(option)}
              >
                <span className="block w-full text-wrap">{option}</span>
              </Button>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-3 mt-4">
          <div className="flex flex-row flex-wrap justify-between gap-2 w-full">
            <Button
              variant="default"
              onClick={handleBack}
              disabled={current === 0}
              className="flex-1 min-w-[120px]"
            >
              Back
            </Button>

            {current === questions.length - 1 ? (
              <Button
                onClick={handleSubmit}
                disabled={answers.includes(null)}
                className="flex-1 min-w-[120px]"
              >
                Submit Quiz
              </Button>
            ) : (
              <Button
                variant="default"
                onClick={handleNext}
                className="flex-1 min-w-[120px]"
              >
                Next
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default function CategoriesPage() {
  const week = "week11"; // Specify the week you want to display (e.g., "week1", "week2")

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
