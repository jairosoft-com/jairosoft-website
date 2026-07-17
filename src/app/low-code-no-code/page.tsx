import type { Metadata } from "next";
import LowCodeNoCode from "@/views/LowCodeNoCode";

export const metadata: Metadata = {
  title: "Low-Code / No-Code",
  description:
    "Rapid application delivery with low-code and no-code platforms.",
  alternates: { canonical: "/low-code-no-code" },
};

export default function Page() {
  return <LowCodeNoCode />;
}
