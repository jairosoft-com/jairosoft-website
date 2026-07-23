"use client";

import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import StickyHeader from "@/components/layout/StickyHeader";

// Below-fold sections: split out of the initial Home client chunk
// (bundle-dynamic-imports). Hero + StickyHeader stay eager for LCP/nav.
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Logos = dynamic(() => import("@/components/sections/Logos"));
const Footer = dynamic(() => import("@/components/layout/Footer"));

// Redesign (Claude Design mockup — Home.dc.html): Hero -> Services -> Connect
// CTA -> PartnerLogos -> Footer. Per the approved plan this intentionally
// drops Industries/Timeline/Testimonials/QuizCTA/Insights from Home (their
// components remain in the repo, unused here, in case a later phase wants
// them back on a dedicated page) — matches the mockup's leaner home page.
// StickyHeader is now `alwaysVisible` here too: Hero used to carry its own
// duplicate inline nav for pre-scroll display, which the mockup doesn't have
// (a single persistent Nav instead), so that duplicate was removed.
const Index: React.FC = () => {
  return (
    <>
      <StickyHeader alwaysVisible />
      <main>
        <Hero
          videoURL="https://youtu.be/rvVlTTg_7JQ"
          title="Built for Enterprise"
          subtitle="Powering the world's most demanding digital platforms."
          cta="Talk to an Expert"
        />
        <Services />
        <Contact />
        <Logos />
      </main>
      <Footer />
    </>
  );
};

export default Index;
