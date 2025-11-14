import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";
import { ScrollAnimated } from "../ui/ScrollAnimated";

const Footer: React.FC = () => {
  const partnerships = [
    {
      name: "SAFe Partnership",
      logo: "/images/logos/safe-partnership.svg",
    },
    {
      name: "Sitecore",
      logo: "/images/logos/sitecore.svg",
    },
    {
      name: "Bubble.io",
      logo: "/images/logos/bubble.png",
    },
    {
      name: "JIT",
      logo: "/images/logos/jit.png",
    },
    {
      name: "Any Inc",
      logo: "/images/partners/any-inc.png",
    },
    {
      name: "AWS",
      logo: "/images/logos/aws.svg",
    },
    {
      name: "Microsoft",
      logo: "/images/logos/microsoft.svg",
    },
    {
      name: "Google Partner",
      logo: "/images/logos/google-partner.svg",
    },
  ];

  return (
    <footer
      className="bg-secondary text-secondary-foreground border-t border-border"
      aria-labelledby="footer-heading"
    >
      {/* Technology Partners */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimated animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Technology Partners
              </h2>
              <p className="text-lg text-gray-300">
                Powered by industry-leading partnerships and certifications
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12">
              {partnerships.map((partner, index) => (
                <ScrollAnimated
                  key={index}
                  animation="fadeInUp"
                  delay={index * 0.1}
                >
                  <div className="flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </ScrollAnimated>
              ))}
            </div>
          </ScrollAnimated>
        </div>
      </section>
      <div className="container py-16 md:py-24">
        <h2 id="footer-heading" className="sr-only">
          About Jairosoft and site links
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/lovable-uploads/logo-jairosoft.png"
                alt="Jairosoft"
                className="h-9 w-auto"
                loading="lazy"
              />
              <span className="font-brand font-extrabold tracking-wide text-lg">
                JAIROSOFT
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Highly competent Agile Teams with Sitecore certified architects,
              project managers, full-stack and software test developers focusing
              on end-to-end implementation since 2017.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/jairosoft.inc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-red-600 transition-colors p-1"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/jairosoft-inc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-red-600 transition-colors p-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/jairosoft_inc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-red-600 transition-colors p-1"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <nav aria-label="Services" className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/80">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/what-we-do"
                  className="text-muted-foreground hover:text-red-600 transition-colors"
                >
                  What We Do
                </a>
              </li>
              <li className="text-muted-foreground">Low Code/No-Code</li>
              <li className="text-muted-foreground">Agile Methodology</li>
              <li className="text-muted-foreground">
                Digital Experience Platform
              </li>
              <li className="text-muted-foreground">AI/ML Solutions</li>
            </ul>
          </nav>

          <nav aria-label="Company" className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/80">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/who-we-are/our-history"
                  className="text-muted-foreground hover:text-red-600 transition-colors"
                >
                  Our History
                </a>
              </li>
              <li>
                <a
                  href="/who-we-are/mission-vision-culture"
                  className="text-muted-foreground hover:text-red-600 transition-colors"
                >
                  Mission & Culture
                </a>
              </li>
              <li>
                <a
                  href="/who-we-are/executive-leadership"
                  className="text-muted-foreground hover:text-red-600 transition-colors"
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="/who-we-are/locations"
                  className="text-muted-foreground hover:text-red-600 transition-colors"
                >
                  Global Locations
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-muted-foreground hover:text-red-600 transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </nav>

          <section aria-label="Contact" className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/80">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <a
                  href="/contact-us"
                  className="text-muted-foreground hover:text-red-600 transition-colors font-medium"
                >
                  Get in Touch
                </a>
              </div>
              <div>
                <p className="font-semibold text-foreground/90">Email</p>
                <a
                  href="/contact-us"
                  className="text-muted-foreground hover:text-red-600 transition-colors"
                >
                  info@jairosoft.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-foreground/90">Phone</p>
                <a
                  href="tel:+18008818949"
                  className="text-muted-foreground hover:text-red-600 transition-colors"
                >
                  +1 (800)-881-8949
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border/70">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <section aria-label="California Office" className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground/80">
                🇺🇸 California
              </h4>
              <p className="text-xs text-muted-foreground">
                12584 Luna Road
                <br />
                Victorville, CA 92392
              </p>
            </section>

            <section aria-label="Hawaii Office" className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground/80">
                🇺🇸 Hawaii
              </h4>
              <p className="text-xs text-muted-foreground">
                1050 Queen St Suite 100
                <br />
                Honolulu, HI 96814
              </p>
            </section>

            <section aria-label="Cebu Office" className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground/80">
                🇵🇭 Cebu
              </h4>
              <p className="text-xs text-muted-foreground">
                1049 M.J. Cuenco Avenue
                <br />
                Mabolo Cebu City, 6000
              </p>
            </section>

            <section aria-label="Davao Office" className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground/80">
                🇵🇭 Davao City
              </h4>
              <p className="text-xs text-muted-foreground">
                Holy Trinity Avenue
                <br />
                Holy Trinity Village
                <br />
                Cabantian 8000 Davao City
              </p>
            </section>
          </div>
        </div>

        <div className="mt-12 border-t border-border/70 pt-6 text-xs text-muted-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Jairosoft. All rights reserved.</p>
            <p className="text-xs">
              Sitecore certified architects • Agile methodology • Enterprise
              solutions
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/who-we-are/code-of-conduct"
              className="hover:text-red-600 transition-colors"
            >
              Code of Conduct
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="hover:text-red-600 transition-colors">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
