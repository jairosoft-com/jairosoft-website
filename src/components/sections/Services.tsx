import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Service {
  name: string;
  description: string;
}

const services: Service[] = [
  { name: "Sitecore CMS Rebuilds", description: "Modernize your digital experience with enterprise-grade Sitecore implementations." },
  { name: "Sitecore Maintenance & Optimization", description: "Keep your platform running at peak performance with continuous enhancements and support." },
  { name: "Agile Team Augmentation", description: "Plug in complete agile teams — developers, QA, DevOps — ready to deliver value fast." },
  { name: "SAFe-Aligned Delivery", description: "Structured delivery at scale using the Scaled Agile Framework." },
  { name: "Sitecore Training & Enablement", description: "As an Authorized Training Partner, we empower your teams with Sitecore mastery." },
];

const Services: React.FC = () => {
  return (
    <section id="services" aria-labelledby="services-title" className="container py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="services-title" className="text-3xl font-bold tracking-tight md:text-4xl">What We Do</h2>
        <p className="mt-3 text-muted-foreground">Enterprise-grade delivery, tailored to your goals.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.name} className="group border border-border/60 bg-gradient-surface transition-transform duration-300 will-change-transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{s.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
