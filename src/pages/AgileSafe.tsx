import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";
import PageHeader from "@/components/ui/PageHeader";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import {
  Zap,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Target,
  Lightbulb,
  BarChart3,
  Globe
} from "lucide-react";

const AgileSafe = () => {
  const benefits = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "#1 Scaling Agile Framework",
      description: "Adopted across the globe by leading enterprises",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "$109k Average Salary",
      description: "Per annum for certified SAFe professionals",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "20k+ Enterprises",
      description: "Worldwide adoption by major organizations",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "50% Increase",
      description: "In employee engagement and productivity",
      color: "from-red-500 to-red-600"
    }
  ];

  const trainers = [
    {
      name: "Ramon Aseniero JR.",
      title: "Founder CEO & Certified SAFe Practice Consultant",
      company: "Jairosoft Software Company"
    },
    {
      name: "Grace Garcia",
      title: "Certified SAFe Practice Consultant",
      company: "Jairosoft Software Company"
    },
    {
      name: "Karl Jordan Caumban",
      title: "Certified SAFe Practice Consultant",
      company: "Jairosoft Software Company"
    },
    {
      name: "Carol Mana-ay",
      title: "Certified SAFe Practice Consultant",
      company: "Jairosoft Software Company"
    }
  ];

  const features = [
    {
      icon: <Target className="h-5 w-5" />,
      title: "Lean Enterprise & Portfolio Management",
      description: "Focus on lean enterprise principles and strategic portfolio management"
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Strategic Leadership Skills",
      description: "Develop skills to lead large-scale projects and transformations"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: "Implementation Roadmap",
      description: "Learn comprehensive SAFe implementation and business solution development"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Interactive Learning",
      description: "Real-world simulations, case studies, and hands-on experience"
    }
  ];

  const stats = [
    { number: "70%+", label: "Of US Fortune 100 companies actively employing SAFe®" },
    { number: "50%", label: "Increase in productivity" },
    { number: "50%", label: "Increase in employee engagement" },
    { number: "16", label: "SEUs & PDUs earned with certification" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <StickyHeader alwaysVisible />
      <PageHeader
        title="Lean-Thinking & Agile SAFe® Methodology"
        subtitle="Leading SAFe® 6.0 Training with Professional Certification"
        backgroundType="gradient"
        badges={[
          { text: "SAFe® Certified", variant: "default" },
          { text: "Enterprise Scale", variant: "secondary" }
        ]}
      />

      <div className="container mx-auto px-4 py-16">

        {/* Introduction */}
        <ScrollAnimated>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Partner with SAFe®
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-gray-100 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                A SAFe Scale Partner is a certified organization that provides training, coaching, consulting,
                and implementation support for adopting and scaling SAFe practices. We excel in minimizing waste,
                optimizing processes, and continuously improving to deliver maximum value to our clients.
              </p>
            </div>
          </div>
        </ScrollAnimated>

        {/* Key Benefits */}
        <div className="mb-16">
          <ScrollAnimated>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Why Become a SAFe® Agilist
            </h3>
          </ScrollAnimated>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollAnimated key={index} delay={index * 100}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r ${benefit.color} text-white flex items-center justify-center`}>
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimated>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <ScrollAnimated>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Leading SAFe® 6.0 Training Features
            </h3>
          </ScrollAnimated>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <ScrollAnimated key={index} delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-blue-100 text-blue-600 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimated>
            ))}
          </div>
        </div>

        {/* Certified Trainers */}
        <div className="mb-16">
          <ScrollAnimated>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Discover your Certified SAFe® Scaled Agile Trainers
              </h3>
              <p className="text-lg text-gray-600">
                Leading SAFe® 6 training with SAFe Agilist Certification
              </p>
            </div>
          </ScrollAnimated>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer, index) => (
              <ScrollAnimated key={index} delay={index * 100}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{trainer.name}</CardTitle>
                    <Badge variant="outline" className="mt-2">
                      <Award className="h-3 w-3 mr-1" />
                      Certified
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">{trainer.title}</p>
                    <p className="text-xs text-gray-500">{trainer.company}</p>
                  </CardContent>
                </Card>
              </ScrollAnimated>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <ScrollAnimated>
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl p-8 text-white mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              SAFe® Impact & Statistics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-blue-100 text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimated>

        {/* What is SAFe */}
        <ScrollAnimated>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Zap className="h-6 w-6 text-blue-600" />
              What is the Scaled Agile Framework (SAFe)?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Scaled Agile Framework (SAFe) is a set of organization and workflow patterns designed
              to implement agile practices at an enterprise scale. It helps businesses address challenges
              of delivering complex products and services in a fast-moving market. By embracing Agile principles,
              we ensure that our development teams work in short, focused iterations, enabling us to quickly
              adapt to changing requirements and deliver high-quality software.
            </p>
          </div>
        </ScrollAnimated>

        {/* Call to Action */}
        <ScrollAnimated delay={400}>
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 text-white text-center">
            <Zap className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Organization?</h3>
            <p className="text-lg mb-6 text-red-100">
              Unleash the power of SAFe® with Jairosoft Inc. - Where Innovation Meets Agility!
            </p>
            <a href="/contact-us">
              <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Our SAFe® Experts
              </button>
            </a>
          </div>
        </ScrollAnimated>
      </div>
      <Footer />
    </div>
  );
};

export default AgileSafe;