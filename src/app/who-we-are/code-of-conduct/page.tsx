import type { Metadata } from "next";
import CodeOfConduct from "@/views/CodeOfConduct";

export const metadata: Metadata = {
  title: "Code of Business Conduct",
  description:
    "Jairosoft's code of business conduct and ethical standards.",
  alternates: { canonical: "/who-we-are/code-of-conduct" },
};

export default function Page() {
  return <CodeOfConduct />;
}
