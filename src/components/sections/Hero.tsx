import React from "react";

interface HeroProps {
  videoURL: string;
  title: string;
  subtitle: string;
  cta: string;
}

// Redesign (Claude Design mockup — Home.dc.html hero section). The nav used to
// be duplicated inline here (a separate copy of StickyHeader's markup shown
// before scroll); the mockup has a single persistent Nav instead, so that copy
// is removed and StickyHeader now renders `alwaysVisible` on Home too (see
// Index.tsx) — one nav implementation instead of two kept manually in sync.
// Above-the-fold content is not wrapped in ScrollAnimated so LCP text/logo
// paint immediately (rendering-hydration-no-flicker).
const Hero: React.FC<HeroProps> = ({ title, subtitle, cta }) => {
  return (
    <section className="font-manrope relative isolate flex min-h-[92vh] items-center justify-center overflow-hidden bg-redesign-surface-2 text-center">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/lovable-uploads/video-background.mp4"
        poster="/lovable-uploads/og-image.png"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,22,0.68)_0%,rgba(8,12,22,0.78)_55%,rgba(8,12,22,0.92)_100%)]" />

      <div className="relative z-10 mx-auto max-w-[860px] px-7 py-24 md:py-[120px]">
        <img
          src="/lovable-uploads/logo-jairosoft-dark.png"
          alt="Jairosoft"
          className="mx-auto mb-[34px] h-[66px] w-auto drop-shadow-[0_6px_24px_rgba(0,0,0,0.4)]"
          loading="eager"
          fetchPriority="high"
        />
        <h1 className="m-0 text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white [text-wrap:balance] sm:text-[56px] lg:text-[76px] lg:leading-[1.02]">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-[560px] text-lg leading-[1.5] text-[#c3ccdb] lg:text-[21px]">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact-us"
            aria-label={cta}
            className="inline-block rounded-xl bg-redesign-accent px-8 py-4 text-base font-bold text-white shadow-[0_14px_32px_rgba(47,107,255,0.4)] transition-colors hover:bg-redesign-accent-hover"
          >
            {cta}
          </a>
          <a
            href="/who-we-serve/industries-testimonials"
            aria-label="Explore our services"
            className="inline-block rounded-xl border border-white/[0.22] bg-white/[0.08] px-8 py-4 text-base font-bold text-white backdrop-blur-[8px] transition-colors hover:bg-white/[0.16]"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
