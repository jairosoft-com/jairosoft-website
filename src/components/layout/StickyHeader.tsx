import React from "react";
import { cn } from "@/lib/utils";

const StickyHeader: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      role="banner"
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur transition-transform duration-300",
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <nav className="container flex items-center justify-between py-3">
        <a
          href="/"
          aria-label="Jairosoft home"
          className="inline-flex items-center gap-2"
        >
          <img
            src="/lovable-uploads/logo-jairosoft.png"
            alt="Jairosoft"
            className="h-7 w-auto"
            loading="lazy"
          />
          <span className="font-montserrat font-extrabold tracking-wide text-foreground text-xl">
            JAIROSOFT
          </span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a
            href="#services"
            className="text-foreground/80 hover:text-foreground story-link"
          >
            Services
          </a>
          <a
            href="#industries"
            className="text-foreground/80 hover:text-foreground story-link"
          >
            Industries
          </a>
          <a
            href="#insights"
            className="text-foreground/80 hover:text-foreground story-link"
          >
            Insights
          </a>
          <a
            href="#contact"
            className="text-foreground/80 hover:text-foreground story-link"
          >
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="md:hidden bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Let's talk
        </a>
      </nav>
    </div>
  );
};

export default StickyHeader;
