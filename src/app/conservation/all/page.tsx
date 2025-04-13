"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Flame } from "lucide-react";
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

import { questionsByWeek } from "@/data/conservation/answers";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const QuizApp: React.FC = () => {
  const allQuestions: Question[] = Object.values(questionsByWeek).flat();

  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [streak, setStreak] = useState(0);
  const [lastCorrectIndex, setLastCorrectIndex] = useState(-1);

  useEffect(() => {
    const shuffled = shuffleArray(allQuestions);
    setShuffledQuestions(shuffled);
    setAnswers(Array(shuffled.length).fill(null));
  }, []);

  const handleSubmit = () => setSubmitted(true);

  const handleRestart = () => {
    const reshuffled = shuffleArray(allQuestions);
    setShuffledQuestions(reshuffled);
    setAnswers(Array(reshuffled.length).fill(null));
    setSubmitted(false);
    setStreak(0);
    setLastCorrectIndex(-1);
  };

  useEffect(() => {
    if (submitted) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }, [submitted]);

  const score = answers.reduce((acc, selected, index) => {
    return selected === shuffledQuestions[index].answer ? acc + 1 : acc;
  }, 0);

  const percentage = (score / shuffledQuestions.length) * 100;

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

    if (percentage === 100) return getRandom(savageFeedback.perfect);
    else if (percentage >= 80) return getRandom(savageFeedback.high);
    else if (percentage >= 70) return getRandom(savageFeedback.midHigh);
    else if (percentage >= 50) return getRandom(savageFeedback.mid);
    else return getRandom(savageFeedback.low);
  })();

  const liveScore = answers.reduce((acc, selected, index) => {
    if (selected === shuffledQuestions[index].answer) return acc + 1;
    return acc;
  }, 0);

  const progressPercentage = (liveScore / shuffledQuestions.length) * 100;

  if (submitted) {
    return (
      <div className="flex justify-center items-center px-4 py-6">
        <Card className="w-full max-w-5xl shadow-md">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Quiz Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base sm:text-lg">
            <div className="w-full text-center text-lg font-medium">
              Your Score: {score} / {shuffledQuestions.length} ({percentage.toFixed(2)}%)
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

            {shuffledQuestions.map((question, index) => {
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
          <CardTitle className="text-xl">All Weeks Combined Quiz</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {shuffledQuestions.map((question, index) => {
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

                        const isCorrect = option === shuffledQuestions[index].answer;

                        if (isCorrect && lastCorrectIndex === index - 1) {
                          setStreak(prev => prev + 1);
                          setLastCorrectIndex(index);
                        } else if (isCorrect && lastCorrectIndex < index - 1) {
                          setStreak(1);
                          setLastCorrectIndex(index);
                        } else {
                          setStreak(0);
                        }
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

      {/* Floating streak feedback */}
      {/* Fixed container for placement on screen */}
<div className="fixed bottom-6 right-6 z-50 w-48">
  {/* Inner relative container for feedback stacking */}
  <div className="relative w-full">
    <AnimatePresence>
      {streak >= 2 && (
        <motion.div
          key={streak}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="absolute -top-14 left-0 w-full bg-orange-100 border border-orange-300 text-orange-800 shadow-lg px-4 py-2 rounded-2xl flex items-center justify-center"
        >
          <span className="font-semibold text-sm text-center">
            {streak >= 5
              ? "💥 Killing Spree!"
              : streak >= 4
              ? "🔥 Quad Combo!"
              : streak >= 3
              ? "⚡ Triple Hit!"
              : "🔥 Combo Streak!"}
          </span>
        </motion.div>
      )}
    </AnimatePresence>

    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.7, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-orange-100 border border-orange-300 text-orange-800 shadow-lg px-4 py-2 rounded-2xl flex items-center justify-center space-x-2 w-full"
      >
        <Flame className="w-5 h-5 animate-pulse text-orange-600" />
        <span className="font-semibold text-sm">Streak: {streak}</span>
      </motion.div>
    </AnimatePresence>
  </div>
</div>


    </div>
  );
};

export default function AllWeeksPage() {
  return (
    <ContentLayout title="Conservation Economics">
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
            <BreadcrumbPage>All Weeks</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <QuizApp />
    </ContentLayout>
  );
}
