import type { Metadata } from "next";
import Careers from "@/views/Careers";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Jairosoft — current opportunities, internships, and employment verification.",
  alternates: { canonical: "/careers" },
};

export default function Page() {
  return <Careers />;
}
