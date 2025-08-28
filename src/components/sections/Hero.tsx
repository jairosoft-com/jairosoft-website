import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ScrollAnimated } from "../ui/ScrollAnimated";
import { Menu, X } from "lucide-react";

interface HeroProps {
  videoURL: string;
  title: string;
  subtitle: string;
  cta: string;
}

const Hero: React.FC<HeroProps> = ({ videoURL, title, subtitle, cta }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const isDropdownActive = (paths: string[]) => {
    return paths.some(path => location.pathname.startsWith(path));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative isolate overflow-hidden min-h-screen">
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          src="/lovable-uploads/video-background.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>

      <nav className="container relative z-10 flex items-center justify-between py-6">
        <a
          href="/"
          aria-label="Jairosoft home"
          className="inline-flex items-center gap-2"
        >
          <img
            src="/lovable-uploads/logo-jairosoft.png"
            alt="Jairosoft logo"
            className="h-8 w-auto"
            loading="eager"
          />
          <span className="font-brand font-extrabold tracking-wide text-black text-2xl">
            JAIROSOFT
          </span>
        </a>
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
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
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={cn(
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
                    isDropdownActive(["/who-we-are"])
                      ? "text-red-600 font-medium after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-red-600"
                      : ""
                  )}
                >
                  Who We Are
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[300px] space-y-2 p-4 bg-popover text-popover-foreground rounded-none shadow-lg">
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
                <NavigationMenuLink asChild>
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
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
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
                </NavigationMenuLink>
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
            className="p-2 text-black hover:bg-black/10 rounded-md transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <a
            href="#contact"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Let's talk
          </a>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 z-40 bg-black/50"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu Panel */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="font-brand font-extrabold text-xl text-black">Menu</span>
              <button
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
                className="p-2 text-black hover:bg-black/10 rounded-md transition-colors"
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
                    className="block text-lg font-medium text-black hover:text-red-600 transition-colors"
                  >
                    What We Do
                  </a>
                </li>
                <li>
                  <div className="space-y-3">
                    <span className="block text-lg font-medium text-black">Who We Serve</span>
                    <div className="pl-4 space-y-2">
                      <a
                        href="/who-we-serve/industries-testimonials"
                        onClick={closeMobileMenu}
                        className="block text-base text-gray-600 hover:text-red-600 transition-colors"
                      >
                        Industries & Testimonials
                      </a>
                      <a
                        href="/who-we-serve/naics"
                        onClick={closeMobileMenu}
                        className="block text-base text-gray-600 hover:text-red-600 transition-colors"
                      >
                        NAICS
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-3">
                    <span className="block text-lg font-medium text-black">Who We Are</span>
                    <div className="pl-4 space-y-2">
                      <a
                        href="/who-we-are/our-history"
                        onClick={closeMobileMenu}
                        className="block text-base text-gray-600 hover:text-red-600 transition-colors"
                      >
                        Our History
                      </a>
                      <a
                        href="/who-we-are/mission-vision-culture"
                        onClick={closeMobileMenu}
                        className="block text-base text-gray-600 hover:text-red-600 transition-colors"
                      >
                        Mission, Vision & Culture
                      </a>
                      <a
                        href="/who-we-are/code-of-conduct"
                        onClick={closeMobileMenu}
                        className="block text-base text-gray-600 hover:text-red-600 transition-colors"
                      >
                        Code of Business Conduct
                      </a>
                      <a
                        href="/who-we-are/executive-leadership"
                        onClick={closeMobileMenu}
                        className="block text-base text-gray-600 hover:text-red-600 transition-colors"
                      >
                        Executive Leadership
                      </a>
                      <a
                        href="/who-we-are/technical-leads"
                        onClick={closeMobileMenu}
                        className="block text-base text-gray-600 hover:text-red-600 transition-colors"
                      >
                        Technical Leads & Certified Experts
                      </a>
                      <a
                        href="/who-we-are/partners"
                        onClick={closeMobileMenu}
                        className="block text-base text-gray-600 hover:text-red-600 transition-colors"
                      >
                        Partners
                      </a>
                      <a
                        href="/who-we-are/locations"
                        onClick={closeMobileMenu}
                        className="block text-base text-gray-600 hover:text-red-600 transition-colors"
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
                    className="block text-lg font-medium text-black hover:text-red-600 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-us"
                    onClick={closeMobileMenu}
                    className="block text-lg font-medium text-black hover:text-red-600 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
        <ScrollAnimated animation="fadeInUp" threshold={0.1}>
          <div className="pointer-events-auto flex flex-col items-center gap-4 rounded-none bg-primary/90 p-8 md:p-10 shadow-elevated backdrop-blur max-w-3xl w-full text-primary-foreground text-center">
            <img
              src="/lovable-uploads/logo-jairosoft-dark.png"
              alt="Jairosoft"
              className="h-24 w-auto mx-auto"
              loading="eager"
            />
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground">
              {title}
            </h1>
            <p className="text-primary-foreground/90 font-bold text-lg md:text-xl">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
                asChild
              >
                <a href="#contact" aria-label={cta}>
                  {cta}
                </a>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                asChild
              >
                <a href="#services" aria-label="Explore our services">
                  Explore Services
                </a>
              </Button>
            </div>
          </div>
        </ScrollAnimated>
      </div>
    </header>
  );
};

export default Hero;
