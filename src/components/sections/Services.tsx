import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ScrollAnimated } from "../ui/ScrollAnimated";

const services = [
  {
    label: "Team Augmentation",
    name: "Build Your Own Agile Team.",
    description:
      "Plug in elite development teams instantly. Scalable, enterprise-ready talent aligned with your goals.",
  },
  {
    label: "Sitecore XP / XM",
    name: "Maximize Your Existing Sitecore.",
    description:
      "Optimization, upgrades, and enhancements to get more from your investment.",
  },
  {
    label: "Sitecore XM Cloud",
    name: "Modernize With Sitecore XM Cloud.",
    description:
      "Migrate or greenfield with cloud-native speed, governance, and scale.",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="container py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="services-title"
          className="text-3xl font-extrabold tracking-tight text-center md:text-4xl"
        >
          Let's Start <span className="text-primary">Simple.</span>
        </h2>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {services.map((s, i) => {
          const bg =
            i === 0 ? "bg-brand-blue" : i === 1 ? "bg-accent" : "bg-black";
          return (
            <ScrollAnimated
              key={s.name}
              animation="fadeInUp"
              delay={i * 100}
              threshold={0.1}
              className="group"
            >
              <Card
                className={cn(
                  "group border-0 overflow-hidden transition-transform hover:-translate-y-1",
                  bg
                )}
              >
                <CardHeader className="pt-6">
                  <span className="text-xs uppercase tracking-wide text-primary-foreground/80">
                    {s.label}
                  </span>
                  <CardTitle className="mt-2 text-xl font-bold leading-snug text-primary-foreground">
                    {s.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="text-sm text-primary-foreground/90">
                    {s.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-4 inline-block text-sm font-medium text-primary-foreground/90 underline-offset-4 hover:underline"
                  >
                    Learn More
                  </a>
                </CardContent>
              </Card>
            </ScrollAnimated>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
