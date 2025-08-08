import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border" aria-labelledby="footer-heading">
      <div className="container py-16 md:py-24">
        <h2 id="footer-heading" className="sr-only">About Jairosoft and site links</h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/lovable-uploads/94071b7c-c7a5-4cfb-acd4-6064ff2a66ec.png"
                alt="Jairosoft logo"
                className="h-9 w-auto"
                loading="lazy"
              />
              <span className="font-montserrat font-extrabold tracking-wide text-lg">JAIROSOFT</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Sitecore experts delivering enterprise digital experiences since 2008.
            </p>
          </div>

          <nav aria-label="Company" className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/80">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#industries" className="hover:underline">Industries</a></li>
              <li><a href="#insights" className="hover:underline">Insights</a></li>
              <li><a href="#testimonials" className="hover:underline">Client Stories</a></li>
            </ul>
          </nav>

          <nav aria-label="Services" className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/80">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Team Augmentation</li>
              <li>Sitecore XP / XM</li>
              <li>Sitecore XM Cloud</li>
            </ul>
          </nav>

          <nav aria-label="Industries" className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/80">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li>Healthcare</li>
              <li>Financial Services</li>
              <li>Education</li>
              <li>Retail & eCommerce</li>
            </ul>
          </nav>

          <section aria-label="Contact" className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/80">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: contact@jairosoft.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Location: Remote-first, Global</li>
            </ul>
            <a href="#contact" className="inline-block mt-2 text-sm underline underline-offset-4">Get in touch</a>
          </section>
        </div>

        <div className="mt-12 border-t border-border/70 pt-6 text-xs text-muted-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Jairosoft. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
