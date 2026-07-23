"use client";

import React from "react";
import { ScrollAnimated } from "../ui/ScrollAnimated";

// Redesign (Claude Design mockup — PartnerLogos.dc.html). This section is now
// the sole home for the "Technology Partners" logo band: per the mockup it's
// a standalone Home-only section (previously embedded in Footer.tsx on every
// page — a user-confirmed change, see Footer.tsx's comment).
const partnerships = [
  { name: "SAFe Partnership", logo: "/images/logos/safe-partnership.svg" },
  { name: "Sitecore", logo: "/images/logos/sitecore.svg" },
  { name: "Bubble.io", logo: "/images/logos/bubble.png" },
  { name: "JIT", logo: "/images/logos/jit.png" },
  { name: "Any Inc", logo: "/images/partners/any-inc.png" },
  { name: "AWS", logo: "/images/logos/aws.svg" },
  { name: "Microsoft", logo: "/images/logos/microsoft.svg" },
  { name: "Google Partner", logo: "/images/logos/google-partner.svg" },
];

const Logos: React.FC = () => {
  return (
    <section
      aria-labelledby="logos-title"
      className="font-manrope border-t border-[rgba(12,20,36,0.06)] bg-white px-7 py-[76px]"
    >
      <div className="mx-auto max-w-[1100px] text-center">
        <ScrollAnimated animation="fadeInUp">
          <h2 id="logos-title" className="m-0 text-[30px] font-extrabold tracking-[-0.01em] text-[#0c1424]">
            Technology Partners
          </h2>
          <p className="mt-3 text-base text-[#66707f]">
            Powered by industry-leading partnerships and certifications
          </p>
        </ScrollAnimated>

        <div className="mt-11 grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-4">
          {partnerships.map((partner, index) => (
            <ScrollAnimated key={partner.name} animation="fadeInUp" delay={index * 0.1}>
              <div className="flex h-[88px] w-full items-center justify-center rounded-[14px] border border-[rgba(12,20,36,0.06)] bg-[#f7f9fc] px-6 py-[18px]">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-12 max-w-full object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            </ScrollAnimated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
