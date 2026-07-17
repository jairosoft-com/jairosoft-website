import type { Metadata } from "next";
import Locations from "@/views/Locations";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Jairosoft offices across California, Hawaii, and the Philippines.",
  alternates: { canonical: "/who-we-are/locations" },
};

export default function Page() {
  return <Locations />;
}
