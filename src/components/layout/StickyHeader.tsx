"use client";

import React, { startTransition } from "react";
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

// Redesign (Claude Design mockup — Nav.dc.html): dark glassy sticky bar,
// Manrope font, blue accent. Scoped via the `redesign` Tailwind color group
// and `font-manrope` so it doesn't touch the legacy tokens other pages rely on.
const dropdownLinkClass =
  "block text-sm font-medium text-[#cdd5e3] no-underline rounded-[9px] px-[13px] py-[11px] transition-colors hover:bg-[rgba(47,107,255,0.16)] hover:text-white focus:bg-[rgba(47,107,255,0.16)] focus:text-white focus:outline-none";

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

    // Non-urgent visibility toggle — keep scroll handler cheap (rerender-transitions)
    // and never block scrolling (client-passive-event-listeners).
    const onScroll = () => {
      const next = window.scrollY > 100;
      startTransition(() => {
        setVisible((prev) => (prev === next ? prev : next));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysVisible]);

  return (
    <div
      role="banner"
      aria-hidden={!visible}
      className={cn(
        "font-manrope fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[rgba(9,13,22,0.82)] backdrop-blur-[14px] transition-all duration-300",
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <nav className="container flex h-[74px] items-center justify-between">
        <a
          href="/"
          aria-label="Jairosoft home"
          className="inline-flex flex-none items-center gap-[11px]"
        >
          <img
            src="/lovable-uploads/logo-jairosoft-dark.png"
            alt="Jairosoft"
            className="h-[34px] w-auto"
            loading="eager"
            fetchPriority="high"
          />
          <span className="text-[15px] font-extrabold tracking-[0.16em] text-white">
            JAIROSOFT
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden min-[961px]:flex min-[961px]:items-center min-[961px]:gap-2">
          <NavigationMenu viewportClassName="!bg-[#0f1626] !border-white/10 !rounded-[14px] !shadow-[0_24px_48px_rgba(0,0,0,0.5)]">
            <NavigationMenuList className="gap-0.5">
              <NavigationMenuItem>
                <a
                  href="/what-we-do"
                  className={cn(
                    "inline-block rounded-[9px] px-[14px] py-[9px] text-[14.5px] font-semibold transition-colors relative",
                    isActive("/what-we-do")
                      ? "text-white after:absolute after:bottom-0 after:left-[14px] after:right-[14px] after:h-0.5 after:bg-redesign-accent"
                      : "text-[#cdd5e3] hover:bg-white/[0.07] hover:text-white"
                  )}
                >
                  What We Do
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "!h-auto rounded-[9px] !bg-transparent px-[14px] py-[9px] text-[14.5px] font-semibold text-[#cdd5e3] transition-colors relative hover:!bg-white/[0.07] hover:!text-white focus:!bg-white/[0.07] data-[state=open]:!bg-white/[0.07] data-[state=open]:!text-white",
                    isDropdownActive(["/who-we-serve"]) &&
                      "text-white after:absolute after:bottom-0 after:left-[14px] after:right-[14px] after:h-0.5 after:bg-redesign-accent"
                  )}
                >
                  Who We Serve
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex w-[250px] flex-col gap-0.5 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <a className={dropdownLinkClass} href="/who-we-serve/industries-testimonials">
                          Industries &amp; Testimonials
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className={dropdownLinkClass} href="/who-we-serve/naics">
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
                    "!h-auto rounded-[9px] !bg-transparent px-[14px] py-[9px] text-[14.5px] font-semibold text-[#cdd5e3] transition-colors relative hover:!bg-white/[0.07] hover:!text-white focus:!bg-white/[0.07] data-[state=open]:!bg-white/[0.07] data-[state=open]:!text-white",
                    isDropdownActive(["/who-we-are"]) &&
                      "text-white after:absolute after:bottom-0 after:left-[14px] after:right-[14px] after:h-0.5 after:bg-redesign-accent"
                  )}
                >
                  Who We Are
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex w-[290px] flex-col gap-0.5 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <a className={dropdownLinkClass} href="/who-we-are/our-history">
                          Our History
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className={dropdownLinkClass} href="/who-we-are/mission-vision-culture">
                          Mission, Vision &amp; Culture
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className={dropdownLinkClass} href="/who-we-are/code-of-conduct">
                          Code of Business Conduct
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className={dropdownLinkClass} href="/who-we-are/executive-leadership">
                          Executive Leadership
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className={dropdownLinkClass} href="/who-we-are/technical-leads">
                          Technical Leads &amp; Certified Experts
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className={dropdownLinkClass} href="/who-we-are/partners">
                          Partners
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className={dropdownLinkClass} href="/who-we-are/locations">
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
                    "inline-block rounded-[9px] px-[14px] py-[9px] text-[14.5px] font-semibold transition-colors relative",
                    isActive("/careers")
                      ? "text-white after:absolute after:bottom-0 after:left-[14px] after:right-[14px] after:h-0.5 after:bg-redesign-accent"
                      : "text-[#cdd5e3] hover:bg-white/[0.07] hover:text-white"
                  )}
                >
                  Careers
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a
                  href="/contact-us"
                  className={cn(
                    "inline-block rounded-[9px] px-[14px] py-[9px] text-[14.5px] font-semibold transition-colors relative",
                    isActive("/contact-us")
                      ? "text-white after:absolute after:bottom-0 after:left-[14px] after:right-[14px] after:h-0.5 after:bg-redesign-accent"
                      : "text-[#cdd5e3] hover:bg-white/[0.07] hover:text-white"
                  )}
                >
                  Contact Us
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <a
            href="/contact-us"
            className="flex-none rounded-[10px] bg-redesign-accent px-[22px] py-[11px] text-sm font-bold text-white shadow-[0_8px_20px_rgba(47,107,255,0.35)] transition-colors hover:bg-redesign-accent-hover"
          >
            Let&apos;s talk
          </a>
        </div>

        {/* Mobile Navigation trigger */}
        <div className="flex items-center gap-4 min-[961px]:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/[0.12] bg-white/[0.08] text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-x-0 top-[74px] z-40 max-h-[78vh] overflow-auto border-t border-white/[0.08] bg-[#0b1120] transition-all duration-300 min-[961px]:hidden",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-0.5 px-[22px] py-[14px] pb-[26px]">
          <a
            href="/what-we-do"
            onClick={closeMobileMenu}
            className={cn(
              "py-[13px] text-[16px] font-semibold transition-colors",
              isActive("/what-we-do") ? "text-redesign-accent" : "text-[#e6ebf4]"
            )}
          >
            What We Do
          </a>

          <div className="pt-[14px] pb-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-[#6b7688]">
            Who We Serve
          </div>
          <a
            href="/who-we-serve/industries-testimonials"
            onClick={closeMobileMenu}
            className={cn(
              "px-4 py-[9px] text-[15px] transition-colors",
              isActive("/who-we-serve/industries-testimonials") ? "text-redesign-accent" : "text-[#cdd5e3]"
            )}
          >
            Industries &amp; Testimonials
          </a>
          <a
            href="/who-we-serve/naics"
            onClick={closeMobileMenu}
            className={cn(
              "px-4 py-[9px] text-[15px] transition-colors",
              isActive("/who-we-serve/naics") ? "text-redesign-accent" : "text-[#cdd5e3]"
            )}
          >
            NAICS
          </a>

          <div className="pt-[14px] pb-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-[#6b7688]">
            Who We Are
          </div>
          {[
            { href: "/who-we-are/our-history", label: "Our History" },
            { href: "/who-we-are/mission-vision-culture", label: "Mission, Vision & Culture" },
            { href: "/who-we-are/code-of-conduct", label: "Code of Business Conduct" },
            { href: "/who-we-are/executive-leadership", label: "Executive Leadership" },
            { href: "/who-we-are/technical-leads", label: "Technical Leads & Certified Experts" },
            { href: "/who-we-are/partners", label: "Partners" },
            { href: "/who-we-are/locations", label: "Locations" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className={cn(
                "px-4 py-[9px] text-[15px] transition-colors",
                isActive(item.href) ? "text-redesign-accent" : "text-[#cdd5e3]"
              )}
            >
              {item.label}
            </a>
          ))}

          <a
            href="/careers"
            onClick={closeMobileMenu}
            className={cn(
              "pt-[13px] pb-1 text-[16px] font-semibold transition-colors",
              isActive("/careers") ? "text-redesign-accent" : "text-[#e6ebf4]"
            )}
          >
            Careers
          </a>
          <a
            href="/contact-us"
            onClick={closeMobileMenu}
            className={cn(
              "py-[13px] text-[16px] font-semibold transition-colors",
              isActive("/contact-us") ? "text-redesign-accent" : "text-[#e6ebf4]"
            )}
          >
            Contact Us
          </a>
          <a
            href="/contact-us"
            onClick={closeMobileMenu}
            className="mt-3 rounded-[11px] bg-redesign-accent py-[14px] text-center text-[15px] font-bold text-white transition-colors hover:bg-redesign-accent-hover"
          >
            Let&apos;s talk
          </a>
        </nav>
      </div>
    </div>
  );
};

export default StickyHeader;
