"use client";
import { useState, useEffect, useRef } from "react";
import { Analytics } from '@vercel/analytics/next';
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Flame } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import clsx from "clsx";
import { questionsByWeek } from "@/data/forests/answers";
import { createClient } from "@supabase/supabase-js";

//const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

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
  const [name, setName] = useState("");
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  useEffect(() => {
    const shuffled = shuffleArray(allQuestions);
    setShuffledQuestions(shuffled);
    setAnswers(Array(shuffled.length).fill(null));
  }, []);

  useEffect(() => {
    if (started && !submitted) {
      timerRef.current = setInterval(() => setTime((t) => t + 1), 1000);
    } else if (submitted && timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [started, submitted]);  

  type ScoreEntry = {
    rank: number;
    name: string;
    score: number;
    time: number;
    timestamp: string;
    course: string;
  };
  
  const handleSubmit = async () => {
    setSubmitted(true);
    const score = answers.reduce((acc, selected, index) =>
      selected === shuffledQuestions[index].answer ? acc + 1 : acc, 0);
  
    // 1. Fetch all previous scores for this course
    const { data: previousScores, error } = await supabase
      .from("quiz_scores")
      .select("*")
      .eq("course", "Forests and Their Management");
  
    if (error) {
      console.error("Error fetching previous scores:", error);
      return;
    }
  
    // 2. Add current user's score to the array (for rank calculation)
    const allScores: ScoreEntry[] = [
      ...previousScores,
      {
        rank: 0,
        name: name,
        score: score,
        time: time,
        timestamp: new Date().toISOString(),
        course: "Forests and Their Management"
      },
    ];
  
    // 3. Sort by Score DESC, Time ASC
    allScores.sort((a: ScoreEntry, b: ScoreEntry) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.time - b.time;
    });
  
    // 4. Find current user’s rank (1-indexed)
    const rank: number = allScores.findIndex(entry =>
      entry.name === name &&
      entry.score === score &&
      entry.time === time
    ) + 1;
  
    // 5. Save score with calculated rank
    await supabase.from("quiz_scores").insert([{
      name: name,
      score: score,
      time: time,
      timestamp: new Date().toISOString(),
      course: "Forests and Their Management"
    }]);
  };
  

  const handleRestart = () => {
    const reshuffled = shuffleArray(allQuestions);
    setShuffledQuestions(reshuffled);
    setAnswers(Array(reshuffled.length).fill(null));
    setSubmitted(false);
    setStreak(0);
    setLastCorrectIndex(-1);
    setTime(0);
    setStarted(false);
    setName("");
  };

  

  const score = answers.reduce((acc, selected, index) => selected === shuffledQuestions[index].answer ? acc + 1 : acc, 0);
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
  const resultCard = (
    <div className="flex justify-center items-center min-h-screen p-6">
      <Card className="w-full max-w-xl text-center space-y-4 p-6">
        <CardTitle className="text-2xl">Quiz Results</CardTitle>
        <p className="text-lg font-semibold text-green-600">
          ✅ You scored {score}/{shuffledQuestions.length} ({percentage.toFixed(1)}%)
        </p>
        <p className="text-base italic text-gray-600">💬 {feedback}</p>
  
        <div className="mt-4">
          <Button
            variant="secondary"
            onClick={() => {
              const text = `🏆 ${name} scored ${score}/${shuffledQuestions.length} (${percentage.toFixed(1)}%) in the "Forests and Their Management" quiz! Try it yourself at https://nptel-vit.vercel.app/forests/all-weeks`;
              if (navigator.share) {
                navigator.share({
                  title: "My Quiz Result",
                  text,
                  url: "https://nptel-vit.vercel.app/forests/all-weeks",
                });
              } else {
                navigator.clipboard.writeText(text);
                alert("Copied result to clipboard! 📋");
              }
            }}
          >
            📤 Share Result
          </Button>
        </div>
  
        <div className="mt-6 flex justify-center gap-4">
          <Button onClick={handleRestart}>Retry</Button>
          <Link href="/leaderboard">
            <Button variant="outline">Leaderboard</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
  if (!started) {
    return (
      <div className="flex justify-center items-center min-h-screen w-screen bg-white">
  <Card className="w-full max-w-md shadow-lg p-6 space-y-4 flex flex-col items-center">
          <CardTitle className="text-center">Enter Your Name to Start</CardTitle>
          <input
            type="text"
            className="border rounded px-4 py-2 w-full"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={() => setStarted(true)} disabled={!name.trim()} className="w-full">Start Quiz</Button>
        </Card>
      </div>
    );
  }
  if (submitted) return resultCard;
  return (
    <div className="flex justify-center items-center px-4 py-6">
      {/* Floating timer */}
      <div className="fixed bottom-4 right-4 z-50 bg-black text-white rounded-full px-4 py-2 text-sm font-semibold shadow-lg">
        ⏱️ Time: {Math.floor(time / 60)}m {time % 60}s
      </div>

      <Card className="w-full max-w-5xl shadow-md">
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
    "justify-start text-left w-full px-4 py-2 break-words whitespace-normal",
    selected === option ? "bg-blue-200 border-blue-600" : ""
  )}
  onClick={() => {
    const updated = [...answers];
    updated[index] = option;
    setAnswers(updated);
    const correct = option === shuffledQuestions[index].answer;
    if (correct && lastCorrectIndex === index - 1) {
      setStreak((prev) => prev + 1);
      setLastCorrectIndex(index);
    } else if (correct) {
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
    </div>
  );
};

export default function AllWeeksPage() {
  return (
    <ContentLayout title="Forests and Their Management">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link href="/home">Home</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link href="/forests">Forests</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>All Weeks</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <QuizApp />
      <Analytics />
    </ContentLayout>
  );
}
