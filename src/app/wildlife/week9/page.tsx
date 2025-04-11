"use client";

import Link from "next/link";
import React, { useEffect, useState, useMemo } from "react";
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
    setSubmitted(true);
  };

  const handleRestart = () => {
    setAnswers(Array(questions.length).fill(null));
    setSubmitted(false);
  };

  useEffect(() => {
    if (submitted) {
      // Let DOM paint first before scrolling
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }, [submitted]);
  

  const score = answers.reduce((acc, selected, index) => {
    return selected === questions[index].answer ? acc + 1 : acc;
  }, 0);

  const percentage = (score / questions.length) * 100;
  const getRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const feedback = (() => {
  const savageFeedback = {
    perfect: [
      "🎯 Flawless. S Grade incoming.",
      "🧠 Peak performance. NPTEL should be asking *you* questions.",
      "👑 Bade bade deshon mein aisi chhoti chhoti quizzes hoti rehti hain.",
      "👑 This isn't luck. It's pure prep domination.",
      "🔥 You didn’t just ace it — you *NPTELed* it."
    ],
    high: [
      "🦉 Congrats! You only made *minor* enemies with the syllabus.",
      "💅 That score? Smooth. Unlike your attendance record.",
      "🥵 You cooked this quiz harder than last-minute NPTEL deadlines.",
      "🪑 You didn’t just pass—you made NPTEL question its existence."
    ],
    midHigh: [
      "⚡ You're close — just need a final boss fight.",
      "🧃 Juicy score, but add more pulp next time.",
      "🥵 Not bad, but not quiz-killer status yet.",
      "🎢 Little ups, little downs. Push for the summit."
    ],
    mid: [
      "🥴 Questions dodged, but some still punched you.",
      "📖 Did you read the notes... or skim them?",
      "😬 You survived. Barely.",
      "🫠 The quiz gave you a soft slap. Bounce back."
    ],
    low: [
      "📉 CSK Level Performance.",
      "💀 NPTEL said 'try again'.",
      "🗑️ Even the trash bin said, 'not my level'.",
      "🧽 You wiped the floor… with your score."
    ]
  };

  if (percentage === 100) {
    return getRandom(savageFeedback.perfect);
  } else if (percentage >= 80) {
    return getRandom(savageFeedback.high);
  } else if (percentage >= 70) {
    return getRandom(savageFeedback.midHigh);
  } else if (percentage >= 50) {
    return getRandom(savageFeedback.mid);
  } else {
    return getRandom(savageFeedback.low);
  }
})();




  if (submitted) {
    return (
      <div className="flex justify-center items-center px-4 py-6">
        <Card className="w-full max-w-5xl shadow-md">

          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Quiz Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base sm:text-lg">
            <div className="space-y-1">
            <div className="w-full text-center text-lg font-medium">
  Your Score: {score} / {questions.length} ({percentage.toFixed(2)}%)
</div>

<Card
  className={clsx(
    "w-full text-center p-4 sm:p-5 border rounded-xl",
    percentage === 100
      ? "border-green-600 bg-green-50 text-green-900"
      : percentage >= 90
      ? "border-green-500 bg-green-50 text-green-900"
      : percentage >= 70
      ? "border-yellow-500 bg-yellow-50 text-yellow-900"
      : percentage >= 50
      ? "border-yellow-500 bg-yellow-50 text-yellow-900"
      : "border-red-500 bg-red-50 text-red-900"
  )}
>
  <div className="text-lg sm:text-xl font-semibold">{feedback}</div>
</Card>


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

                  <div className="text-sm text-muted-foreground">
                    Correct Answer: {question.answer}
                  </div>
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
          <Button onClick={handleSubmit} className="w-full max-w-xs">
            Submit Quiz
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default function CategoriesPage() {
  const week = "week9";

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
