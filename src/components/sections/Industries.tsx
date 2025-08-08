import React from "react";

const items = [
  "Healthcare",
  "Financial Services",
  "Education",
  "Retail & eCommerce",
  "Government / Public Sector",
  "Technology",
  "Nonprofits / Associations",
  "Media & Entertainment",
];

const Industries: React.FC = () => {
  return (
    <section id="industries" aria-labelledby="industries-title" className="py-20 bg-[hsl(var(--industries-tint))] border-y border-border">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="industries-title" className="text-3xl font-bold tracking-tight md:text-4xl">Industries We Serve</h2>
          <p className="mt-3 text-muted-foreground">Proven delivery across regulated and complex sectors.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-2 md:grid-cols-4">
          {items.map((name) => (
            <div key={name} className="rounded-none border border-border/70 bg-card p-4 sm:p-6 aspect-square flex items-center justify-center text-center shadow-sm transition hover:shadow-elevated">
              <span className="text-base md:text-lg font-semibold text-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
