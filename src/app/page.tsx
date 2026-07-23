import type { Metadata } from "next";
import { preload } from "react-dom";
import Index from "@/views/Index";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jairosoft",
  url: "https://jairosoft.pixeloha.com",
  description:
    "Sitecore experts delivering enterprise digital experiences since 2008.",
  sameAs: [
    "https://www.facebook.com/jairosoft.inc",
    "https://www.linkedin.com/company/jairosoft-inc/",
    "https://www.instagram.com/jairosoft_inc/",
  ],
};

export default function Page() {
  // LCP-critical images for the redesign hero + always-visible sticky nav
  // (rendering-resource-hints).
  preload("/lovable-uploads/logo-jairosoft-dark.png", { as: "image" });
  preload("/lovable-uploads/og-image.png", { as: "image" });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
      />
      <Index />
    </>
  );
}
