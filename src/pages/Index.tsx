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

const Index: React.FC = () => {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jairosoft",
    url: "/",
    description:
      "Sitecore experts delivering enterprise digital experiences since 2008.",
    sameAs: [],
  };

  return (
    <main>
      <Hero
        videoURL="https://youtu.be/rvVlTTg_7JQ"
        title="Built for Enterprise"
        subtitle="Sitecore Experts. Agile Teams. SAFe Delivery. Since 2008."
        cta="Talk to an Expert"
      />
      <Services />
      <Industries />
      <Timeline />
      <Testimonials />
      <Logos />
      <QuizCTA />
      <Insights />
      <Contact />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
      />
      <link rel="canonical" href="/" />
    </main>
  );
};

export default Index;
