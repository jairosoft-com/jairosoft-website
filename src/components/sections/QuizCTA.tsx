import React from "react";
import { Button } from "@/components/ui/button";

const QuizCTA: React.FC = () => {
  return (
    <section aria-labelledby="quiz-title" className="container py-20">
      <div className="grid items-center gap-8 rounded-none border border-border/60 bg-gradient-surface p-10 md:grid-cols-2">
        <div>
          <h2 id="quiz-title" className="text-2xl font-bold tracking-tight md:text-3xl">Is Your Digital Experience Enterprise-Ready?</h2>
          <p className="mt-2 text-muted-foreground">Answer 8 quick questions to benchmark your platform across architecture, delivery, and governance.</p>
        </div>
        <div className="flex justify-start md:justify-end">
          <Button size="lg" variant="hero" aria-label="Take the Quiz">Take the Quiz</Button>
        </div>
      </div>
    </section>
  );
};

export default QuizCTA;
