import React from "react";
import { Button } from "@/components/ui/button";

const Contact: React.FC = () => {
  return (
    <section id="contact" aria-labelledby="contact-title" className="container py-24">
      <div className="mx-auto max-w-3xl rounded-2xl border border-border/60 bg-card p-10 text-center shadow-sm">
        <h2 id="contact-title" className="text-3xl font-bold tracking-tight md:text-4xl">Let’s Connect</h2>
        <p className="mt-3 text-muted-foreground">Interested in optimizing your digital experience or scaling your delivery team?</p>
        <div className="mt-6 flex justify-center">
          <Button size="xl" variant="hero" aria-label="Schedule a Consultation">Schedule a Consultation</Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">We’ll respond within 1 business day.</p>
      </div>
    </section>
  );
};

export default Contact;
