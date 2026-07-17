import type { Metadata } from "next";
import ContactUs from "@/views/ContactUs";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Jairosoft — talk to an expert about your project.",
  alternates: { canonical: "/contact-us" },
};

export default function Page() {
  return <ContactUs />;
}
