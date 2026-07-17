import type { Metadata } from "next";
import TechnicalLeads from "@/views/TechnicalLeads";

export const metadata: Metadata = {
  title: "Technical Leads & Certified Experts",
  description:
    "Jairosoft's certified technical leads and subject-matter experts.",
  alternates: { canonical: "/who-we-are/technical-leads" },
};

export default function Page() {
  return <TechnicalLeads />;
}
