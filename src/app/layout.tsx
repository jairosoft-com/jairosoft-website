import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Montserrat } from "next/font/google";
import "@/index.css";
import { Providers } from "./providers";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jairosoft.pixeloha.com"),
  title: {
    default: "Enterprise Sitecore & Agile Delivery | Jairosoft",
    template: "%s | Jairosoft",
  },
  description:
    "Sitecore experts since 2008. Enterprise digital experiences, agile teams, SAFe delivery, training & optimization.",
  authors: [{ name: "Jairosoft" }],
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Enterprise Sitecore & Agile Delivery | Jairosoft",
    description:
      "Sitecore experts since 2008. Enterprise digital experiences, agile teams, SAFe delivery, training & optimization.",
    type: "website",
    images: ["/lovable-uploads/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jairosoft",
    images: ["/lovable-uploads/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${montserrat.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
