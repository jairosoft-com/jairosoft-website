import React from "react";
import { Button } from "../ui/button";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-secondary text-secondary-foreground border-t border-border"
      aria-labelledby="footer-heading"
    >
      <div className="container py-16 md:py-24">
        <h2 id="footer-heading" className="sr-only">
          About Jairosoft and site links
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <div className="space-y-4">
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
            <p className="text-sm text-muted-foreground max-w-xs">
              Sitecore experts delivering enterprise digital experiences since
              2008.
            </p>
          </div>

          <nav aria-label="Company" className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/80">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:underline">
                  Industries
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:underline">
                  Insights
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:underline">
                  Client Stories
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Services" className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/80">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Team Augmentation</li>
              <li>Sitecore XP / XM</li>
              <li>Sitecore XM Cloud</li>
            </ul>
          </nav>

          <nav aria-label="Industries" className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/80">
              Industries
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Healthcare</li>
              <li>Financial Services</li>
              <li>Education</li>
              <li>Retail & eCommerce</li>
            </ul>
          </nav>

          <section aria-label="Contact" className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/80">
              Find us
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold">California</p>
                <p className="text-muted-foreground">
                  12584 Luna Road Victorville, California 92392
                </p>
              </div>
              <div>
                <p className="font-semibold">Hawaii</p>
                <p className="text-muted-foreground">
                  1050 Queen St Suite 100, Honolulu, HI 96814
                </p>
              </div>
              <div>
                <p className="font-semibold">Cebu</p>
                <p className="text-muted-foreground">
                  1049 M.J. Cuenco Avenue Mabolo Cebu City, 6000
                </p>
              </div>
              <div>
                <p className="font-semibold">Davao City</p>
                <p className="text-muted-foreground">
                  Holy Trinity Avenue, Holy Trinity Village, Cabantian 8000
                  Davao City
                </p>
              </div>
            </div>
          </section>

          <section aria-label="Contact us" className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/80">
              Contact us
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground">info@jairosoft.com</p>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-muted-foreground">+1 (800)-881-8949</p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 border-t border-border/70 pt-6 text-xs text-muted-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Jairosoft. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
