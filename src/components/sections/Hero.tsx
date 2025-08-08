import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import YouTubeBackground from "@/components/media/YouTubeBackground";

interface HeroProps {
  videoURL: string;
  title: string;
  subtitle: string;
  cta: string;
}

const Hero: React.FC<HeroProps> = ({ videoURL, title, subtitle, cta }) => {
  const getYouTubeId = (url: string) => {
    try {
      const short = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
      if (short) return short[1];
      const long = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
      if (long) return long[1];
      const embed = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
      if (embed) return embed[1];
      return null;
    } catch {
      return null;
    }
  };

  const videoId = React.useMemo(() => {
    if (!videoURL) return null;
    return getYouTubeId(videoURL);
  }, [videoURL]);

  return (
    <header className="relative isolate overflow-hidden min-h-screen">
      <div className="absolute inset-0 -z-10">
        {videoId ? (
          <YouTubeBackground videoId={videoId} />
        ) : (
          <img
            className="h-full w-full object-cover"
            src="/lovable-uploads/ec39e3ab-4272-4f03-bccc-3b08dd81c9ab.png"
            alt="Blurry corporate lobby background for Jairosoft hero"
            loading="eager"
          />
        )}
      </div>

      <nav className="container relative z-10 flex items-center justify-between py-6">
        <a href="/" aria-label="Jairosoft home" className="inline-flex items-center gap-2"><img src="/lovable-uploads/cc373cb7-1c4e-4bb4-9313-1c18951cdbfd.png" alt="Jairosoft logo" className="h-8 w-auto" loading="eager" /><span className="font-extrabold tracking-wide text-primary">JAIROSOFT</span></a>
        <div className="hidden md:block">
          <NavigationMenu className="z-50">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[260px] space-y-2 p-4 bg-popover text-popover-foreground rounded-none shadow-lg">
                    <li><a className="text-sm hover:underline" href="#industries">All Industries</a></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[260px] space-y-2 p-4 bg-popover text-popover-foreground rounded-none shadow-lg">
                    <li><a className="text-sm hover:underline" href="#services">Our Services</a></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Insights</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[260px] space-y-2 p-4 bg-popover text-popover-foreground rounded-none shadow-lg">
                    <li><a className="text-sm hover:underline" href="#insights">Latest Articles</a></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Results</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[260px] space-y-2 p-4 bg-popover text-popover-foreground rounded-none shadow-lg">
                    <li><a className="text-sm hover:underline" href="#testimonials">Client Stories</a></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[260px] space-y-2 p-4 bg-popover text-popover-foreground rounded-none shadow-lg">
                    <li><a className="text-sm hover:underline" href="#contact">Contact Us</a></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <a href="#contact" className="md:hidden text-sm text-foreground/80 hover:text-foreground">Let’s talk</a>
      </nav>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
        <div className="pointer-events-auto rounded-none bg-primary/90 p-8 md:p-10 shadow-elevated backdrop-blur max-w-3xl w-full text-primary-foreground text-center">
          <h1 className="mb-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-primary-foreground">
            {title}
          </h1>
          <p className="mb-8 text-primary-foreground/90 text-lg md:text-xl">
            {subtitle}
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button size="lg" variant="secondary" asChild>
              <a href="#contact" aria-label={cta}>{cta}</a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#services" aria-label="Explore our services">Explore Services</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
