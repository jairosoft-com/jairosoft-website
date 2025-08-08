import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ScrollAnimated } from "../ui/ScrollAnimated";

interface HeroProps {
  videoURL: string;
  title: string;
  subtitle: string;
  cta: string;
}

const Hero: React.FC<HeroProps> = ({ videoURL, title, subtitle, cta }) => {
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
          <span className="font-montserrat font-extrabold tracking-wide text-black text-2xl">
            JAIROSOFT
          </span>
        </a>
        <div className="hidden md:block">
          <NavigationMenu className="z-50">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[260px] space-y-2 p-4 bg-popover text-popover-foreground rounded-none shadow-lg">
                    <li>
                      <a className="text-sm hover:underline" href="#industries">
                        All Industries
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[260px] space-y-2 p-4 bg-popover text-popover-foreground rounded-none shadow-lg">
                    <li>
                      <a className="text-sm hover:underline" href="#services">
                        Our Services
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Insights</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[260px] space-y-2 p-4 bg-popover text-popover-foreground rounded-none shadow-lg">
                    <li>
                      <a className="text-sm hover:underline" href="#insights">
                        Latest Articles
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Results</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[260px] space-y-2 p-4 bg-popover text-popover-foreground rounded-none shadow-lg">
                    <li>
                      <a
                        className="text-sm hover:underline"
                        href="#testimonials"
                      >
                        Client Stories
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[260px] space-y-2 p-4 bg-popover text-popover-foreground rounded-none shadow-lg">
                    <li>
                      <a className="text-sm hover:underline" href="#contact">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <a
          href="#contact"
          className="md:hidden bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Let's talk
        </a>
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
