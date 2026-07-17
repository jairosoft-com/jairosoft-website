import type { Metadata } from "next";
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
