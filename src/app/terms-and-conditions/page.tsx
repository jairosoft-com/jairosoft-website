import type { Metadata } from "next";
import TermsAndConditions from "@/views/TermsAndConditions";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Jairosoft website terms and conditions of use.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function Page() {
  return <TermsAndConditions />;
}
