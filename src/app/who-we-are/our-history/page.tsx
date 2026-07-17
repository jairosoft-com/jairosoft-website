import type { Metadata } from "next";
import OurHistory from "@/views/OurHistory";

export const metadata: Metadata = {
  title: "Our History",
  description:
    "The Jairosoft story since 2017 — milestones, growth, and our journey.",
  alternates: { canonical: "/who-we-are/our-history" },
};

export default function Page() {
  return <OurHistory />;
}
