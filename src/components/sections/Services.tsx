"use client";

import React from "react";
import { ScrollAnimated } from "../ui/ScrollAnimated";

// Redesign (Claude Design mockup — Home.dc.html "How we help" section).
const services = [
  {
    label: "Team Augmentation",
    name: "Build Your Own Agile Team.",
    description:
      "Plug in elite development teams instantly. Scalable, enterprise-ready talent aligned with you.",
  },
  {
    label: "Sitecore XP / XM",
    name: "Maximize Your Existing Sitecore.",
    description:
      "Optimization, upgrades, and enhancements to get more from your investment.",
  },
  {
    label: "Sitecore XM Cloud",
    name: "Modernize With Sitecore XM Cloud.",
    description:
      "Migrate or greenfield with cloud-native speed, governance, and scale.",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="font-manrope bg-white px-7 pb-[90px] pt-[110px]"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto mb-[60px] max-w-[640px] text-center">
          <div className="mb-[14px] text-[13px] font-bold uppercase tracking-[0.14em] text-redesign-accent">
            How we help
          </div>
          <h2
            id="services-title"
            className="m-0 text-3xl font-extrabold tracking-[-0.02em] text-[#0c1424] md:text-[46px]"
          >
            Let&apos;s Start Simple.
          </h2>
        </div>

        <div className="grid gap-[26px] md:grid-cols-3">
          {services.map((s, i) => (
            <ScrollAnimated key={s.name} animation="fadeInUp" delay={i * 100} threshold={0.1}>
              <div className="group h-full rounded-[18px] border border-[rgba(12,20,36,0.09)] bg-white p-8 shadow-[0_1px_3px_rgba(12,20,36,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-redesign-accent/35 hover:shadow-[0_24px_48px_rgba(12,20,36,0.12)]">
                <div className="mb-[22px] inline-block rounded-full bg-redesign-accent/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-redesign-accent">
                  {s.label}
                </div>
                <h3 className="mb-3 text-[23px] font-extrabold leading-[1.25] text-[#0c1424]">
                  {s.name}
                </h3>
                <p className="mb-[22px] text-[15.5px] leading-[1.65] text-[#5b6575]">
                  {s.description}
                </p>
                <a
                  href="/what-we-do"
                  className="inline-flex items-center gap-[7px] text-[15px] font-bold text-redesign-accent transition-[gap] duration-300 group-hover:gap-[11px]"
                >
                  Learn More <span aria-hidden="true">→</span>
                </a>
              </div>
            </ScrollAnimated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
