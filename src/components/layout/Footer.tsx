import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

// Redesign (Claude Design mockup — Footer.dc.html). This footer no longer
// embeds the "Technology Partners" logo band the current site shows on every
// page — in the mockup that's a standalone section (see PartnerLogos.dc.html
// / src/components/sections/Logos.tsx) composed only on the Home page. That's
// a deliberate, user-confirmed change: partner logos become Home-only.
const socialLinkClass =
  "flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.06] text-[#cdd5e3] transition-colors hover:border-redesign-accent hover:bg-redesign-accent hover:text-white";

const footerLinkClass = "text-[14.5px] text-[#8b95a6] transition-colors hover:text-white";

const offices = [
  {
    flag: "🇺🇸",
    name: "California",
    address: ["12584 Luna Road", "Victorville, CA 92392"],
  },
  {
    flag: "🇺🇸",
    name: "Hawaii",
    address: ["1050 Queen St Suite 100", "Honolulu, HI 96814"],
  },
  {
    flag: "🇵🇭",
    name: "Cebu",
    address: ["1049 M.J. Cuenco Avenue", "Mabolo Cebu City, 6000"],
  },
  {
    flag: "🇵🇭",
    name: "Davao City",
    address: ["Holy Trinity Avenue", "Holy Trinity Village", "Cabantian 8000 Davao City"],
  },
];

const Footer: React.FC = () => {
  return (
    <footer
      className="font-manrope bg-redesign-surface-1 px-7 pb-[34px] pt-[72px] text-[#aeb7c6]"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-[1240px]">
        <h2 id="footer-heading" className="sr-only">
          About Jairosoft and site links
        </h2>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <a href="/" className="mb-[18px] flex items-center gap-[11px] no-underline">
              <img
                src="/lovable-uploads/logo-jairosoft-dark.png"
                alt="Jairosoft"
                className="h-[34px] w-auto"
                loading="lazy"
              />
              <span className="text-[15px] font-extrabold tracking-[0.16em] text-white">
                JAIROSOFT
              </span>
            </a>
            <p className="max-w-[340px] text-[14.5px] leading-[1.7] text-[#8b95a6]">
              Highly competent Agile Teams with Sitecore certified architects, project
              managers, full-stack and software test developers focusing on end-to-end
              implementation since 2017.
            </p>
            <div className="mt-[22px] flex gap-3">
              <a
                href="https://www.facebook.com/jairosoft.inc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={socialLinkClass}
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/jairosoft-inc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={socialLinkClass}
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/jairosoft_inc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={socialLinkClass}
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <nav aria-label="Services" className="space-y-[11px]">
            <h3 className="mb-[18px] text-[14px] font-bold text-white">Services</h3>
            <a href="/what-we-do" className={`block ${footerLinkClass}`}>
              What We Do
            </a>
            <a href="/low-code-no-code" className={`block ${footerLinkClass}`}>
              Low Code/No-Code
            </a>
            <a href="/agile-safe" className={`block ${footerLinkClass}`}>
              Agile Methodology
            </a>
            <a href="/what-we-do" className={`block ${footerLinkClass}`}>
              Digital Experience Platform
            </a>
            <a href="/what-we-do" className={`block ${footerLinkClass}`}>
              AI/ML Solutions
            </a>
          </nav>

          <nav aria-label="Company" className="space-y-[11px]">
            <h3 className="mb-[18px] text-[14px] font-bold text-white">Company</h3>
            <a href="/who-we-are/our-history" className={`block ${footerLinkClass}`}>
              Our History
            </a>
            <a href="/who-we-are/mission-vision-culture" className={`block ${footerLinkClass}`}>
              Mission &amp; Culture
            </a>
            <a href="/who-we-are/executive-leadership" className={`block ${footerLinkClass}`}>
              Leadership
            </a>
            <a href="/who-we-are/locations" className={`block ${footerLinkClass}`}>
              Global Locations
            </a>
            <a href="/careers" className={`block ${footerLinkClass}`}>
              Careers
            </a>
          </nav>

          <section aria-label="Contact">
            <h3 className="mb-[18px] text-[14px] font-bold text-white">Contact</h3>
            <a
              href="/contact-us"
              className="mb-[18px] inline-block rounded-[10px] bg-redesign-accent px-5 py-[11px] text-sm font-bold text-white transition-colors hover:bg-redesign-accent-hover"
            >
              Get in Touch
            </a>
            <div className="mb-[3px] text-[13px] text-[#6b7688]">Email</div>
            <a
              href="mailto:info@jairosoft.com"
              className="mb-[14px] block text-[14.5px] text-[#cdd5e3] transition-colors hover:text-white"
            >
              info@jairosoft.com
            </a>
            <div className="mb-[3px] text-[13px] text-[#6b7688]">Phone</div>
            <a
              href="tel:+18008818949"
              className="text-[14.5px] text-[#cdd5e3] transition-colors hover:text-white"
            >
              +1 (800)-881-8949
            </a>
          </section>
        </div>

        <div className="mt-[54px] grid grid-cols-1 gap-[22px] border-t border-white/[0.08] pt-[38px] sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((office) => (
            <div key={office.name}>
              <div className="mb-2 text-[14px] font-bold text-white">
                {office.flag} {office.name}
              </div>
              <div className="text-[13.5px] leading-[1.6] text-[#8b95a6]">
                {office.address.map((line, i) => (
                  <React.Fragment key={line}>
                    {i > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-[18px] border-t border-white/[0.08] pt-[26px] sm:flex-row sm:items-center">
          <div>
            <div className="text-[13.5px] text-[#8b95a6]">
              © {new Date().getFullYear()} Jairosoft. All rights reserved.
            </div>
            <div className="mt-1 text-[12.5px] text-[#5f6a7b]">
              Sitecore certified architects • Agile methodology • Enterprise solutions
            </div>
          </div>
          <div className="flex gap-[22px]">
            <a href="/who-we-are/code-of-conduct" className={footerLinkClass.replace("text-[14.5px]", "text-[13.5px]")}>
              Code of Conduct
            </a>
            <a href="/privacy-policy" className={footerLinkClass.replace("text-[14.5px]", "text-[13.5px]")}>
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className={footerLinkClass.replace("text-[14.5px]", "text-[13.5px]")}>
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
