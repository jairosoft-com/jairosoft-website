"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";
import PageHeader from "@/components/ui/PageHeader";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import { 
  Code, 
  Zap, 
  Monitor, 
  Globe, 
  Cpu, 
  Brain, 
  CheckCircle, 
  Clock,
  ArrowRight
} from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      id: 1,
      title: "Low Code/No-Code Development",
      description: "Low-code and no-code web development platforms allow users to build websites and applications with little to no coding experience. These platforms provide drag-and-drop tools, pre-built templates, and visual interfaces, enabling individuals or teams to quickly design, customize, and deploy applications without needing to write complex code.",
      icon: <Code className="h-8 w-8" />,
      status: "available",
      statusText: "Available",
      color: "from-blue-500 to-blue-600",
      features: ["Drag-and-drop interfaces", "Pre-built templates", "Visual development", "Rapid deployment"]
    },
    {
      id: 2,
      title: "Lean-Thinking & Agile Software Methodology",
      description: "Lean-Thinking & Agile Software Methodology is at the heart of everything we do. We excel in minimizing waste, optimizing processes, and continuously improving to deliver maximum value to our clients. By embracing Agile principles, we ensure that our development teams work in short, focused iterations, enabling us to quickly adapt to changing requirements and deliver high-quality software.",
      icon: <Zap className="h-8 w-8" />,
      status: "available",
      statusText: "Available",
      color: "from-green-500 to-green-600",
      features: ["Waste minimization", "Process optimization", "Continuous improvement", "Iterative development"]
    },
    {
      id: 3,
      title: "Digital Experience Platform (DXP)",
      description: "We specialize in creating integrated solutions that seamlessly manage and deliver personalized, engaging digital experiences across multiple channels. By combining content management, customer data, and powerful tools, we help businesses optimize their digital presence—whether it's for websites, mobile apps, e-commerce, or social media.",
      icon: <Monitor className="h-8 w-8" />,
      status: "available",
      statusText: "Available",
      color: "from-purple-500 to-purple-600",
      features: ["Multi-channel experiences", "Content management", "Customer data integration", "Digital optimization"]
    },
    {
      id: 4,
      title: "Nearshore/Offshore/Multi-Shore Resources",
      description: "We offer top-tier nearshore and offshore software development resources globally, providing both fully managed teams and skilled professionals to augment your existing development efforts. Our flexible solutions ensure seamless integration, enabling you to scale efficiently while maintaining the highest standards of quality and performance.",
      icon: <Globe className="h-8 w-8" />,
      status: "available",
      statusText: "Available",
      color: "from-cyan-500 to-cyan-600",
      features: ["Global talent pool", "Flexible scaling", "Quality assurance", "Seamless integration"]
    },
    {
      id: 5,
      title: "Platform Engineering",
      description: "Delivering end-to-end solutions that include full code development, DevOps integration, and robust architecture design. Our team specializes in building scalable, reliable platforms that enable seamless deployment and management of applications. By focusing on automation, system reliability, and performance optimization, we ensure your infrastructure is efficient and adaptable.",
      icon: <Cpu className="h-8 w-8" />,
      status: "available",
      statusText: "Available",
      color: "from-orange-500 to-orange-600",
      features: ["DevOps integration", "Scalable architecture", "Automation focus", "Performance optimization"]
    },
    {
      id: 6,
      title: "AI/ML",
      description: "We specialize in building intelligent systems that perform human-like tasks, from problem-solving to decision-making. By leveraging Machine Learning, we create solutions that continuously improve through data, delivering smarter automation and data-driven insights. Our expertise in AI/ML enables us to drive innovation and transform businesses with cutting-edge technology.",
      icon: <Brain className="h-8 w-8" />,
      status: "available",
      statusText: "Available",
      color: "from-red-500 to-red-600",
      features: ["Intelligent systems", "Machine learning", "Data-driven insights", "Business transformation"]
    }
  ];

  const availableServices = services;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <StickyHeader alwaysVisible />
      <PageHeader
        title="What We Do"
        subtitle="Comprehensive technology solutions to transform your business"
        backgroundType="gradient"
        icon={<Code className="h-8 w-8" />}
        badges={[
          { text: "6 Core Services", variant: "default" },
          { text: "Enterprise Ready", variant: "secondary" }
        ]}
      />

      <div className="container mx-auto px-4 py-16">
        <ScrollAnimated>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Technology Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From agile development methodologies to cutting-edge AI solutions, 
              we provide comprehensive technology services that drive business innovation and growth.
            </p>
          </div>
        </ScrollAnimated>

        {/* Services */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {availableServices.map((service, index) => (
              <ScrollAnimated key={service.id} delay={index * 100}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900 mb-3">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {(service.id === 1 || service.id === 2) && (
                      <div className="mt-6">
                        <a href={service.id === 1 ? "/low-code-no-code" : "/agile-safe"}>
                          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                            Learn More
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </ScrollAnimated>
            ))}
          </div>
        </div>


        {/* Call to Action */}
        <ScrollAnimated delay={400}>
          <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 text-white text-center">
            <Code className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 text-red-100">
              Let's discuss how our technology services can transform your business.
            </p>
            <a href="/contact-us">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3">
                Contact Our Team
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </a>
          </div>
        </ScrollAnimated>
      </div>
      <Footer />
    </div>
  );
};

export default WhatWeDo;