"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";
import PageHeader from "@/components/ui/PageHeader";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import {
  Code,
  Zap,
  Users,
  Award,
  Lightbulb,
  Database,
  Palette,
  Brain,
  Target,
  CheckCircle,
  Star
} from "lucide-react";

const LowCodeNoCode = () => {
  const features = [
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Understand Core Bubble Concepts",
      description: "Master the fundamentals of visual programming and no-code development principles"
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Discover What You Can Build",
      description: "Explore the vast possibilities of web applications you can create without coding"
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Learn Bubble Element Types",
      description: "Understand different UI elements and how to use them effectively"
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "Design Element Styles",
      description: "Create beautiful, responsive designs with visual styling tools"
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "Structure Databases",
      description: "Learn how to design and manage data structures for your applications"
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: "AI-Driven Development",
      description: "Build applications and generate designs with integrated AI tools"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Become a Bubble Developer",
      description: "Transform from beginner to certified professional developer"
    }
  ];

  const developers = [
    {
      name: "Ike Lloyd Yana",
      title: "Certified Bubble Developer",
      company: "Jairosoft, Inc.",
      certified: true
    },
    {
      name: "Aimee Isabelle Huevia",
      title: "Bubble Developer & Trainer",
      company: "Jairosoft, Inc.",
      certified: false
    },
    {
      name: "Sanny Paul Geraldino",
      title: "Bubble Developer",
      company: "Jairosoft, Inc.",
      certified: false
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Drag-and-Drop Interface",
      description: "Build applications visually without writing code",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Pre-built Templates",
      description: "Start with professionally designed templates",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Visual Development",
      description: "See your application come to life in real-time",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Rapid Deployment",
      description: "Launch your applications quickly and efficiently",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <StickyHeader alwaysVisible />
      <PageHeader
        title="Low Code/No-Code Development"
        subtitle="Best Full-stack No Code App Builder for Everyone"
        backgroundType="gradient"
        badges={[
          { text: "Bubble.io Training", variant: "default" },
          { text: "Certified Developers", variant: "secondary" }
        ]}
      />

      <div className="container mx-auto px-4 py-16">

        {/* Introduction */}
        <ScrollAnimated>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Bubble Courses?
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-gray-100 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Discover Bubble's full potential with our comprehensive training. Gain essential skills
                and knowledge to confidently build and design your own applications.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Unlock your creativity and bring your ideas to life with our beginner-friendly Bubble courses.
                Start building today and transform your vision into reality!
              </p>
            </div>
          </div>
        </ScrollAnimated>

        {/* Key Benefits */}
        <div className="mb-16">
          <ScrollAnimated>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Low Code/No-Code Development Benefits
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

        {/* Learning Features */}
        <div className="mb-16">
          <ScrollAnimated>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What You'll Learn in Our Bubble.io Courses
            </h3>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                In our Bubble.io courses, you'll learn to create fully functional web applications from scratch,
                covering everything from basic setup to advanced features like AI-driven design and troubleshooting.
                These courses are perfect for beginners and those looking to enhance their Bubble.io skills.
              </p>
            </div>
          </ScrollAnimated>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Our Bubble Developers */}
        <div className="mb-16">
          <ScrollAnimated>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Bubble Developers Team
              </h3>
              <p className="text-lg text-gray-600">
                Learn from certified professionals with real-world experience
              </p>
            </div>
          </ScrollAnimated>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {developers.map((developer, index) => (
              <ScrollAnimated key={index} delay={index * 100}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{developer.name}</CardTitle>
                    {developer.certified && (
                      <Badge variant="outline" className="mt-2 border-green-500 text-green-600">
                        <Award className="h-3 w-3 mr-1" />
                        Certified
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">{developer.title}</p>
                    <p className="text-xs text-gray-500">{developer.company}</p>
                  </CardContent>
                </Card>
              </ScrollAnimated>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <ScrollAnimated>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border border-gray-100 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-3">
              <Target className="h-6 w-6 text-purple-600" />
              Who Are These Courses Designed For?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              These courses and training are designed for beginners with no prior coding experience,
              as well as those looking to enhance their Bubble.io skills and build functional web applications.
              Perfect for entrepreneurs, students, and professionals looking to bring their ideas to life.
            </p>
          </div>
        </ScrollAnimated>

        {/* About JIT */}
        <div className="mb-16">
          <ScrollAnimated>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              About Jairo Institute of Technology (JIT)
            </h3>
          </ScrollAnimated>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimated>
              <Card className="h-full border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-blue-600" />
                    Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    To be a globally recognized learning institution providing relevant and globally
                    recognized information technology education and related services that nurture
                    individuals to become innovative, competent, and responsible members of society.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimated>

            <ScrollAnimated delay={100}>
              <Card className="h-full border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-purple-600" />
                    Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    We commit ourselves to providing holistic, innovative, and Information Technology
                    based education that is globally recognized and practiced. With this mission, we aim
                    to produce graduates who are globally competitive and adaptive to change.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimated>
          </div>
        </div>

        {/* Call to Action */}
        <ScrollAnimated delay={400}>
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 text-white text-center">
            <Code className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready to Start Building?</h3>
            <p className="text-lg mb-6 text-red-100">
              Unleash the power of Bubble with JIT - Where Innovation Meets the Fastest No Code Platform!
            </p>
            <a href="/contact-us">
              <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </button>
            </a>
          </div>
        </ScrollAnimated>
      </div>
      <Footer />
    </div>
  );
};

export default LowCodeNoCode;