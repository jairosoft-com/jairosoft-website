"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { quote: "Jairosoft transformed our digital delivery with Sitecore. Their agile teams delivered ahead of schedule.", author: "CIO, EnterpriseCorp" },
  { quote: "Their SAFe approach brought structure and speed to our global rollout.", author: "CTO, GlobalOrg" },
];

const Testimonials: React.FC = () => {
  return (
    <section aria-labelledby="testimonials-title" className="py-20 bg-[hsl(var(--industries-tint))]">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
        <h2 id="testimonials-title" className="text-3xl font-bold tracking-tight md:text-4xl">What Our Clients Say</h2>
      </div>
      <div className="mt-10 grid gap-2 md:gap-3 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Card key={i} className="bg-card/80 backdrop-blur transition hover:shadow-elevated animate-in fade-in zoom-in-95 duration-300"> 
            <CardContent className="p-6">
              <blockquote className="text-lg font-medium text-foreground">“{t.quote}”</blockquote>
              <p className="mt-3 text-sm text-muted-foreground">— {t.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Testimonials;
