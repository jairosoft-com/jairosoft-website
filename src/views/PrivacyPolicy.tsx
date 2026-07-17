"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";
import PageHeader from "@/components/ui/PageHeader";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import { Shield, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyHeader alwaysVisible />
      <PageHeader
        title="Privacy Policy"
        subtitle="How Jairosoft collects, uses, and protects your information."
        accentColor="blue"
        icon={<Shield className="h-8 w-8" />}
        breadcrumb="Legal"
      />

      <main className="container mx-auto px-6 py-16">
        <ScrollAnimated animation="fadeInUp">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Jairosoft Inc. respects your privacy. This page explains, in
                general terms, how we handle information collected through this
                website.
              </p>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-foreground">
                  Information We Collect
                </h2>
                <p>
                  When you submit a form (for example, our contact, careers, or
                  employment-verification forms), we collect the details you
                  provide — such as your name, email, phone number, and any files
                  you choose to attach — so we can respond to your request.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-foreground">
                  How We Use Your Information
                </h2>
                <p>
                  We use the information you submit solely to respond to your
                  inquiry and manage our relationship with you. We do not sell
                  your personal information.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-foreground">
                  Cookies
                </h2>
                <p>
                  We use cookies to enhance your experience and understand how
                  the site is used. You can manage your preferences at any time
                  through the cookie banner.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-foreground">
                  Contact Us
                </h2>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  For privacy questions, email{" "}
                  <a
                    href="mailto:info@jairosoft.com"
                    className="text-primary hover:underline"
                  >
                    info@jairosoft.com
                  </a>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimated>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
