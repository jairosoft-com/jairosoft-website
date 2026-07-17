import type { Metadata } from "next";
import AgileSafe from "@/views/AgileSafe";

export const metadata: Metadata = {
  title: "Agile & SAFe",
  description:
    "Scaled Agile Framework (SAFe) delivery and agile transformation services.",
  alternates: { canonical: "/agile-safe" },
};

export default function Page() {
  return <AgileSafe />;
}
