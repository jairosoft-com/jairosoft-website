import type { Metadata } from "next";
import ExecutiveLeadership from "@/views/ExecutiveLeadership";

export const metadata: Metadata = {
  title: "Executive Leadership",
  description:
    "Meet the executive leadership team behind Jairosoft.",
  alternates: { canonical: "/who-we-are/executive-leadership" },
};

export default function Page() {
  return <ExecutiveLeadership />;
}
