import React from "react";
import {
  Heart,
  DollarSign,
  GraduationCap,
  ShoppingCart,
  Building,
  Monitor,
  Users,
  Film,
} from "lucide-react";
import { ScrollAnimated } from "../ui/ScrollAnimated";

const items = [
  { name: "Healthcare", icon: Heart },
  { name: "Financial Services", icon: DollarSign },
  { name: "Education", icon: GraduationCap },
  { name: "Retail & eCommerce", icon: ShoppingCart },
  { name: "Government", icon: Building },
  { name: "Technology", icon: Monitor },
  { name: "Nonprofits", icon: Users },
  { name: "Media & Entertainment", icon: Film },
];

const Industries: React.FC = () => {
  return (
    <section
      id="industries"
      aria-labelledby="industries-title"
      className="py-20 bg-[hsl(var(--industries-tint))] border-y border-border"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="industries-title"
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            Industries We Serve
          </h2>
          <p className="mt-3 text-muted-foreground">
            Proven delivery across regulated and complex sectors.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-2 md:grid-cols-4">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <ScrollAnimated
                key={item.name}
                animation="fadeInUp"
                delay={index * 100}
                threshold={0.1}
              >
                <div className="rounded-none border border-border/70 bg-card p-4 sm:p-6 aspect-square flex flex-col justify-end shadow-sm transition hover:shadow-elevated group">
                  <div className="flex flex-col items-start space-y-2">
                    <IconComponent className="h-10 w-10 sm:h-24 sm:w-24 text-primary group-hover:text-foreground transition-colors" />
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground leading-tight">
                      {item.name}
                    </span>
                  </div>
                </div>
              </ScrollAnimated>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
