import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const posts = [
  { title: "Modernizing with Sitecore XM Cloud" },
  { title: "Why SAFe Scales for Enterprise" },
  { title: "Maximizing ROI with Agile Teams" },
];

const Insights: React.FC = () => {
  return (
    <section id="insights" aria-labelledby="insights-title" className="py-20 bg-[hsl(var(--industries-tint))]">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
        <h2 id="insights-title" className="text-3xl font-bold tracking-tight md:text-4xl">Insights & Thought Leadership</h2>
      </div>
      <div className="mt-10 grid gap-2 md:gap-3 md:grid-cols-3">
        {posts.map((p) => (
          <Card key={p.title} className="transition hover:shadow-elevated animate-in fade-in zoom-in-95 duration-300">
            <CardHeader>
              <CardTitle className="text-base font-semibold">{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Read our perspective on enterprise delivery.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Insights;
