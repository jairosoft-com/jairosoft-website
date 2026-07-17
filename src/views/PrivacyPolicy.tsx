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
              {/*
                PLACEHOLDER — this route was added because the cookie banner
                links to /privacy-policy (previously a 404). It intentionally
                makes NO claims about Jairosoft's data practices. Replace the
                copy below with the official, company-approved privacy policy
                before relying on this page.
              */}
              <p>
                Jairosoft Inc.&rsquo;s privacy policy is being finalized. This
                page is a placeholder and does not yet describe how we collect,
                use, or share information.
              </p>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-foreground">
                  Questions?
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
