import type { Metadata } from "next";
import WhatWeDo from "@/views/WhatWeDo";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "AI-first software solutions, agile teams, and SAFe delivery from Jairosoft.",
  alternates: { canonical: "/what-we-do" },
};

export default function Page() {
  return <WhatWeDo />;
}
