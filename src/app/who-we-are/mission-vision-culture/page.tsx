import type { Metadata } from "next";
import MissionVisionCulture from "@/views/MissionVisionCulture";

export const metadata: Metadata = {
  title: "Mission, Vision & Culture",
  description:
    "Jairosoft's mission, vision, and Aloha-driven culture of kindness, respect, and innovation.",
  alternates: { canonical: "/who-we-are/mission-vision-culture" },
};

export default function Page() {
  return <MissionVisionCulture />;
}
