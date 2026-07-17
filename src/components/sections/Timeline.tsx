"use client";

import React from "react";
import { ScrollAnimated } from "../ui/ScrollAnimated";

const events = [
  { year: "2008", description: "Jairosoft is founded — focused on enterprise software delivery" },
  { year: "2012", description: "Early Sitecore projects for Fortune 1000 clients" },
  { year: "2016", description: "Expanded into full agile team delivery across industries" },
  { year: "2020", description: "Adopted SAFe framework company-wide" },
  { year: "2023", description: "Became a Sitecore Authorized Training Partner" },
  { year: "2025", description: "Launching next-gen digital experience solutions" },
];

const Timeline: React.FC = () => {
  return (
    <section aria-labelledby="timeline-title" className="container py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="timeline-title" className="text-3xl font-bold tracking-tight md:text-4xl">Our Journey Since 2008</h2>
        <p className="mt-3 text-muted-foreground">Milestones that shaped our enterprise craft.</p>
      </div>
      <ol className="relative mx-auto mt-12 max-w-3xl border-s border-border/60">
        {events.map((e, idx) => (
          <ScrollAnimated
            key={e.year}
            animation="slideInLeft"
            delay={idx * 150}
            threshold={0.2}
          >
            <li className="ms-6 py-4">
              <span className="absolute -start-3 mt-1 h-6 w-6 rounded-full bg-gradient-primary shadow-glow" aria-hidden="true" />
              <div className="rounded-none border border-border/60 bg-card p-5 shadow-sm transition hover:shadow-elevated">
                <div className="text-sm font-semibold text-primary">{e.year}</div>
                <p className="mt-1 text-sm text-muted-foreground">{e.description}</p>
              </div>
            </li>
          </ScrollAnimated>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;
