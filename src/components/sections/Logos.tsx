import React from "react";

const logos = ["Placeholder Client 1", "Placeholder Client 2", "Placeholder Client 3"];

const Logos: React.FC = () => {
  return (
    <section aria-labelledby="logos-title" className="container py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="logos-title" className="text-2xl font-semibold tracking-tight md:text-3xl">Trusted by Leading Enterprises</h2>
      </div>
      <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 items-center gap-6 sm:grid-cols-3">
        {logos.map((name) => (
          <div key={name} className="flex h-16 items-center justify-center rounded-none border border-border/60 bg-card text-sm text-muted-foreground">
            {name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logos;
