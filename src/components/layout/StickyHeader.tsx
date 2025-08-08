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
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      )}
   >
      <nav className="container flex items-center justify-between py-3">
        <a href="/" aria-label="Jairosoft home" className="inline-flex items-center gap-2">
          <img
            src="/lovable-uploads/94071b7c-c7a5-4cfb-acd4-6064ff2a66ec.png"
            alt="Jairosoft logo"
            className="h-7 w-auto"
            loading="lazy"
          />
          <span className="font-montserrat font-extrabold tracking-wide text-foreground text-xl">
            JAIROSOFT
          </span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="text-foreground/80 hover:text-foreground story-link">Services</a>
          <a href="#industries" className="text-foreground/80 hover:text-foreground story-link">Industries</a>
          <a href="#insights" className="text-foreground/80 hover:text-foreground story-link">Insights</a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground story-link">Contact</a>
        </div>
        <a href="#contact" className="md:hidden text-sm text-foreground/80 hover:text-foreground">Let’s talk</a>
      </nav>
    </div>
  );
};

export default StickyHeader;
