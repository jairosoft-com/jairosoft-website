"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

interface StickyHeaderProps {
  alwaysVisible?: boolean;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ alwaysVisible = false }) => {
  const [visible, setVisible] = React.useState(alwaysVisible);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const isDropdownActive = (paths: string[]) => {
    return paths.some(path => pathname.startsWith(path));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  React.useEffect(() => {
    if (alwaysVisible) {
      setVisible(true);
      return;
    }
    
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysVisible]);

  return (
    <div
      role="banner"
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur transition-all duration-300 shadow-sm",
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
          <span className="font-brand font-extrabold tracking-wide text-foreground text-xl">
            JAIROSOFT
          </span>
        </a>
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <a
                  href="/what-we-do"
                  className={cn(
                    "text-sm px-4 py-2 inline-block transition-colors relative",
                    isActive("/what-we-do")
                      ? "text-red-600 font-medium after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-red-600"
                      : "text-foreground/80 hover:text-foreground"
                  )}
                >
                  What We Do
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={cn(
                    "text-sm transition-colors relative",
                    isDropdownActive(["/who-we-serve"])
                      ? "text-red-600 font-medium after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-red-600"
                      : ""
                  )}
                >
                  Who We Serve
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[300px] space-y-2 p-4 bg-popover text-popover-foreground rounded-none shadow-lg">
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block text-sm hover:underline focus:underline focus:outline-none" href="/who-we-serve/industries-testimonials">
                          Industries & Testimonials
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block text-sm hover:underline focus:underline focus:outline-none" href="/who-we-serve/naics">
                          NAICS
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={cn(
                    "text-sm transition-colors relative",
                    isDropdownActive(["/who-we-are"])
                      ? "text-red-600 font-medium after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-red-600"
                      : ""
                  )}
                >
                  Who We Are
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[320px] space-y-2 p-4 bg-popover text-popover-foreground rounded-none shadow-lg">
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block text-sm hover:underline focus:underline focus:outline-none" href="/who-we-are/our-history">
                          Our History
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block text-sm hover:underline focus:underline focus:outline-none" href="/who-we-are/mission-vision-culture">
                          Mission, Vision & Culture
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block text-sm hover:underline focus:underline focus:outline-none" href="/who-we-are/code-of-conduct">
                          Code of Business Conduct
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block text-sm hover:underline focus:underline focus:outline-none" href="/who-we-are/executive-leadership">
                          Executive Leadership
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block text-sm hover:underline focus:underline focus:outline-none" href="/who-we-are/technical-leads">
                          Technical Leads & Certified Experts
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block text-sm hover:underline focus:underline focus:outline-none" href="/who-we-are/partners">
                          Partners
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block text-sm hover:underline focus:underline focus:outline-none" href="/who-we-are/locations">
                          Locations
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a
                  href="/careers"
                  className={cn(
                    "text-sm px-4 py-2 inline-block transition-colors relative",
                    isActive("/careers")
                      ? "text-red-600 font-medium after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-red-600"
                      : "text-foreground/80 hover:text-foreground"
                  )}
                >
                  Careers
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a
                  href="/contact-us"
                  className={cn(
                    "text-sm px-4 py-2 inline-block transition-colors relative",
                    isActive("/contact-us")
                      ? "text-red-600 font-medium after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-red-600"
                      : "text-foreground/80 hover:text-foreground"
                  )}
                >
                  Contact Us
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            className="p-2 text-foreground hover:bg-foreground/10 rounded-md transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <a
            href="/contact-us"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Let's talk
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-x-0 top-[var(--header-height,80px)] z-40 md:hidden bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
        style={{ top: visible ? 'var(--header-height, 80px)' : '0px' }}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="font-brand font-extrabold text-xl text-foreground">Menu</span>
            <button
              onClick={closeMobileMenu}
              aria-label="Close navigation menu"
              className="p-2 text-foreground hover:bg-foreground/10 rounded-md transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <nav>
            <ul className="space-y-6">
              <li>
                <a
                  href="/what-we-do"
                  onClick={closeMobileMenu}
                  className={cn(
                    "block text-lg font-medium transition-colors",
                    isActive("/what-we-do")
                      ? "text-red-600"
                      : "text-foreground hover:text-red-600"
                  )}
                >
                  What We Do
                </a>
              </li>
              <li>
                <div className="space-y-3">
                  <span className={cn(
                    "block text-lg font-medium",
                    isDropdownActive(["/who-we-serve"])
                      ? "text-red-600"
                      : "text-foreground"
                  )}>
                    Who We Serve
                  </span>
                  <div className="pl-4 space-y-2">
                    <a
                      href="/who-we-serve/industries-testimonials"
                      onClick={closeMobileMenu}
                      className={cn(
                        "block text-base transition-colors",
                        isActive("/who-we-serve/industries-testimonials")
                          ? "text-red-600"
                          : "text-foreground/70 hover:text-red-600"
                      )}
                    >
                      Industries & Testimonials
                    </a>
                    <a
                      href="/who-we-serve/naics"
                      onClick={closeMobileMenu}
                      className={cn(
                        "block text-base transition-colors",
                        isActive("/who-we-serve/naics")
                          ? "text-red-600"
                          : "text-foreground/70 hover:text-red-600"
                      )}
                    >
                      NAICS
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-3">
                  <span className={cn(
                    "block text-lg font-medium",
                    isDropdownActive(["/who-we-are"])
                      ? "text-red-600"
                      : "text-foreground"
                  )}>
                    Who We Are
                  </span>
                  <div className="pl-4 space-y-2">
                    <a
                      href="/who-we-are/our-history"
                      onClick={closeMobileMenu}
                      className={cn(
                        "block text-base transition-colors",
                        isActive("/who-we-are/our-history")
                          ? "text-red-600"
                          : "text-foreground/70 hover:text-red-600"
                      )}
                    >
                      Our History
                    </a>
                    <a
                      href="/who-we-are/mission-vision-culture"
                      onClick={closeMobileMenu}
                      className={cn(
                        "block text-base transition-colors",
                        isActive("/who-we-are/mission-vision-culture")
                          ? "text-red-600"
                          : "text-foreground/70 hover:text-red-600"
                      )}
                    >
                      Mission, Vision & Culture
                    </a>
                    <a
                      href="/who-we-are/code-of-conduct"
                      onClick={closeMobileMenu}
                      className={cn(
                        "block text-base transition-colors",
                        isActive("/who-we-are/code-of-conduct")
                          ? "text-red-600"
                          : "text-foreground/70 hover:text-red-600"
                      )}
                    >
                      Code of Business Conduct
                    </a>
                    <a
                      href="/who-we-are/executive-leadership"
                      onClick={closeMobileMenu}
                      className={cn(
                        "block text-base transition-colors",
                        isActive("/who-we-are/executive-leadership")
                          ? "text-red-600"
                          : "text-foreground/70 hover:text-red-600"
                      )}
                    >
                      Executive Leadership
                    </a>
                    <a
                      href="/who-we-are/technical-leads"
                      onClick={closeMobileMenu}
                      className={cn(
                        "block text-base transition-colors",
                        isActive("/who-we-are/technical-leads")
                          ? "text-red-600"
                          : "text-foreground/70 hover:text-red-600"
                      )}
                    >
                      Technical Leads & Certified Experts
                    </a>
                    <a
                      href="/who-we-are/partners"
                      onClick={closeMobileMenu}
                      className={cn(
                        "block text-base transition-colors",
                        isActive("/who-we-are/partners")
                          ? "text-red-600"
                          : "text-foreground/70 hover:text-red-600"
                      )}
                    >
                      Partners
                    </a>
                    <a
                      href="/who-we-are/locations"
                      onClick={closeMobileMenu}
                      className={cn(
                        "block text-base transition-colors",
                        isActive("/who-we-are/locations")
                          ? "text-red-600"
                          : "text-foreground/70 hover:text-red-600"
                      )}
                    >
                      Locations
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="/careers"
                  onClick={closeMobileMenu}
                  className={cn(
                    "block text-lg font-medium transition-colors",
                    isActive("/careers")
                      ? "text-red-600"
                      : "text-foreground hover:text-red-600"
                  )}
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  onClick={closeMobileMenu}
                  className={cn(
                    "block text-lg font-medium transition-colors",
                    isActive("/contact-us")
                      ? "text-red-600"
                      : "text-foreground hover:text-red-600"
                  )}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
