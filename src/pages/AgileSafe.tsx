import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";
import PageHeader from "@/components/ui/PageHeader";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

  const faqs = [
    {
      question: "What is the Scaled Agile Framework (SAFe)?",
      answer: "The Scaled Agile Framework (SAFe) is a set of organization and workflow patterns designed to implement agile practices at an enterprise scale. It helps businesses address challenges of delivering complex products and services in a fast-moving market."
    },
    {
      question: "What programs does Jairosoft offer under Scaled Agile?",
      answer: "Jairosoft offers various Scaled Agile programs, including: SAFe Agilist Certification, SAFe Scrum Master Certification, SAFe Product Owner/Product Manager (POPM) Certification, SAFe Advanced Scrum Master, Leading SAFe training, and SAFe for Teams Certification."
    },
    {
      question: "Who can enroll in the Scaled Agile Programs at Jairosoft?",
      answer: "Professionals across industries can enroll, including project managers, Scrum Masters, product owners, software developers, business analysts, and executives. The programs are designed to benefit anyone involved in Agile transformation, irrespective of their experience level."
    },
    {
      question: "Do I need any prerequisites before enrolling?",
      answer: "While no formal prerequisites are required for most courses, having basic knowledge of Agile methodologies or experience working in an Agile environment can be beneficial. For advanced courses, prior SAFe certification is recommended."
    },
    {
      question: "How long are the courses, and what is the learning format?",
      answer: "Most courses span two to three days of instructor-led training. They are available in various formats: In-person training at Jairosoft locations, Virtual training with live instructors, and Hybrid training options."
    },
    {
      question: "What certification will I receive upon completion?",
      answer: "After completing a program and passing the certification exam, you will receive a certification from Scaled Agile, Inc. specific to the course you completed (e.g., SAFe Agilist, SAFe Scrum Master, SAFe for Teams)."
    },
    {
      question: "How is the certification exam structured?",
      answer: "The certification exam is typically multiple-choice, conducted online. It must be completed within a specified time frame (usually 90–120 minutes). The exam focuses on practical applications of SAFe concepts covered in the course."
    },
    {
      question: "What is the cost of each program?",
      answer: "The cost varies depending on the specific course and training format. Prices generally range between $600-$3,000, including course materials and exam fees."
    },
    {
      question: "Are there any discounts available?",
      answer: "Jairosoft offers early bird discounts, group registration discounts, and sometimes corporate packages for bulk enrollments. For more information on current offers, please contact our sales team."
    },
    {
      question: "How can I register for a program?",
      answer: "You can register through our website or contact our support team. We'll guide you through the registration and payment process."
    },
    {
      question: "Will I receive post-training support?",
      answer: "Yes, Jairosoft provides resources such as study guides, practice exams, and access to community. We also offer mentorship opportunities and assessment tools to help you prepare for the certification exam and apply SAFe in your work."
    },
    {
      question: "What are the benefits of SAFe certification?",
      answer: "SAFe certification enhances your skills in scaling Agile across large organizations, increasing your career prospects. It's recognized globally and validates your knowledge in Agile principles, Lean practices, and effective leadership in complex environments."
    }
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

        {/* FAQs */}
        <div className="mb-16">
          <ScrollAnimated>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              SAFe® Agilist Certification and Training FAQ's
            </h3>
          </ScrollAnimated>

          <ScrollAnimated delay={200}>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white border border-gray-200 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-blue-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollAnimated>
        </div>

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