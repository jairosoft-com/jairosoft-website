import type { Metadata } from "next";
import IndustriesTestimonials from "@/views/IndustriesTestimonials";

export const metadata: Metadata = {
  title: "Industries & Testimonials",
  description:
    "Industries Jairosoft serves — government, healthcare, education — and what our clients say.",
  alternates: { canonical: "/who-we-serve/industries-testimonials" },
};

export default function Page() {
  return <IndustriesTestimonials />;
}
