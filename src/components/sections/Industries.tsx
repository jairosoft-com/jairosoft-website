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
    <section id="industries" aria-labelledby="industries-title" className="py-20 bg-gradient-surface border-y border-border">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="industries-title" className="text-3xl font-bold tracking-tight md:text-4xl">Industries We Serve</h2>
          <p className="mt-3 text-muted-foreground">Proven delivery across regulated and complex sectors.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {items.map((name) => (
            <div key={name} className="rounded-none border border-border/70 bg-card px-4 py-6 text-center shadow-sm transition hover:shadow-elevated">
              <span className="text-sm font-medium text-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
