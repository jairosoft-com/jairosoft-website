import React from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  videoURL: string;
  title: string;
  subtitle: string;
  cta: string;
}

const Hero: React.FC<HeroProps> = ({ videoURL, title, subtitle, cta }) => {
  return (
    <header className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <video
          className="h-[70vh] w-full object-cover"
          src={videoURL}
          autoPlay
          muted
          loop
          playsInline
          aria-label="Background video of abstract digital waves"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-background/95" aria-hidden="true" />
      </div>

      <nav className="container flex items-center justify-between py-6">
        <a href="#" className="text-sm font-semibold tracking-wide text-primary-foreground/90 md:text-foreground">Jairosoft</a>
        <div className="hidden gap-6 md:flex">
          <a href="#services" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Services</a>
          <a href="#industries" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Industries</a>
          <a href="#insights" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Insights</a>
          <a href="#contact" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Contact</a>
        </div>
        <a href="#contact" className="md:hidden text-sm text-foreground/80 hover:text-foreground">Let’s talk</a>
      </nav>

      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="mb-4 max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-primary-foreground drop-shadow md:text-6xl">
          {title}
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
          {subtitle}
        </p>
        <div className="flex items-center gap-4">
          <Button size="xl" variant="hero" asChild>
            <a href="#contact" aria-label={cta}>{cta}</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#services" aria-label="Explore our services">Explore Services</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
