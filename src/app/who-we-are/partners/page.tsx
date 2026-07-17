import type { Metadata } from "next";
import Partners from "@/views/Partners";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Jairosoft's technology partners — Microsoft, AWS, Google, Sitecore, and SAFe.",
  alternates: { canonical: "/who-we-are/partners" },
};

export default function Page() {
  return <Partners />;
}
