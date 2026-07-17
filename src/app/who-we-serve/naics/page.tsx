import type { Metadata } from "next";
import Naics from "@/views/Naics";

export const metadata: Metadata = {
  title: "NAICS Codes",
  description:
    "Jairosoft NAICS codes and federal contracting classifications for government procurement.",
  alternates: { canonical: "/who-we-serve/naics" },
};

export default function Page() {
  return <Naics />;
}
