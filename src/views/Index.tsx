"use client";

import React from "react";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Timeline from "@/components/sections/Timeline";
import Testimonials from "@/components/sections/Testimonials";
import Logos from "@/components/sections/Logos";
import QuizCTA from "@/components/sections/QuizCTA";
import Insights from "@/components/sections/Insights";
import Contact from "@/components/sections/Contact";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";

const Index: React.FC = () => {
  return (
    <>
      <StickyHeader />
      <main>
        <Hero
          videoURL="https://youtu.be/rvVlTTg_7JQ"
          title="Built for Enterprise"
          subtitle="Powering the world's most demanding digital platforms."
          cta="Talk to an Expert"
        />
        <Services />
        {/* <Industries />
        <Timeline />
        <Testimonials />
        <Logos /> */}
        {/* <QuizCTA /> */}
        {/* <Insights /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
