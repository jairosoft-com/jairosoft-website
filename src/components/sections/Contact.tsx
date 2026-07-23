"use client";

import React from "react";
import { ScrollAnimated } from "../ui/ScrollAnimated";

// Redesign (Claude Design mockup — Home.dc.html "Let's Connect" CTA band).
const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="font-manrope relative overflow-hidden bg-redesign-surface-3 px-7 py-24"
    >
      <div className="pointer-events-none absolute -right-20 -top-[120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(47,107,255,0.28),transparent_70%)]" />

      <ScrollAnimated animation="fadeInUp" threshold={0.1}>
        <div className="relative z-10 mx-auto max-w-[760px] text-center">
          <h2 id="contact-title" className="m-0 text-3xl font-extrabold tracking-[-0.02em] text-white md:text-[44px]">
            Let&apos;s Connect
          </h2>
          <p className="mx-auto mb-[34px] mt-[18px] max-w-[540px] text-lg leading-[1.6] text-[#aeb7c6]">
            Interested in optimizing your digital experience or scaling your delivery team?
          </p>
          <a
            href="/contact-us"
            aria-label="Schedule a Consultation"
            className="inline-block rounded-xl bg-redesign-accent px-[34px] py-4 text-base font-bold text-white shadow-[0_14px_32px_rgba(47,107,255,0.4)] transition-colors hover:bg-redesign-accent-hover"
          >
            Schedule a Consultation
          </a>
          <p className="mt-[22px] text-sm text-[#6b7688]">
            We&apos;ll respond within 1 business day.
          </p>
        </div>
      </ScrollAnimated>
    </section>
  );
};

export default Contact;
