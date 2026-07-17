"use client";

import React, { useState } from "react";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";
import { Star, Users, Target, TrendingUp, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const IndustriesTestimonials: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<{
    name: string;
    description: string;
    detailedDescription: string;
    logo: string;
  } | null>(null);

  const industries = [
    {
      name: "EdTech",
      description: "Education Technology",
      detailedDescription: "We help education providers transform traditional learning into dynamic digital experiences—building robust learning management systems, virtual classrooms, and scalable content platforms to enhance engagement and accessibility.",
      logo: "/images/industries/edtech.png"
    },
    {
      name: "Sales and E-Commerce",
      description: "Online commerce platforms",
      detailedDescription: "Our solutions power seamless customer journeys—from product discovery to checkout. We create secure, high-performing e-commerce platforms and sales tools that drive conversions, automate workflows, and personalize the buyer experience.",
      logo: "/images/industries/ecommerce.png"
    },
    {
      name: "Healthcare",
      description: "Medical solutions and healthcare systems",
      detailedDescription: "Jairosoft delivers HIPAA-compliant, AI-enhanced solutions for hospitals, clinics, and healthcare startups—optimizing patient data systems, care delivery, and operational workflows with a focus on privacy and user experience.",
      logo: "/images/industries/healthcare.png"
    },
    {
      name: "Real Estate",
      description: "Real estate management and platforms",
      detailedDescription: "From virtual tours to property management portals, we provide real estate firms with custom platforms that streamline listings, enhance client interactions, and enable data-driven decisions for agents and buyers alike.",
      logo: "/images/industries/real-estate.png"
    },
    {
      name: "Artificial Intelligence",
      description: "AI-driven solutions",
      detailedDescription: "We engineer AI-driven tools that automate business processes, enhance decision-making, and uncover actionable insights—empowering companies to innovate with confidence and precision.",
      logo: "/images/industries/ai-ml.png"
    },
    {
      name: "Machine Learning",
      description: "Predictive analytics and ML systems",
      detailedDescription: "Our ML solutions fuel smarter systems—from predictive analytics to recommendation engines—enabling businesses to anticipate needs, improve performance, and create personalized user experiences.",
      logo: "/images/industries/machine-learning.png"
    },
    {
      name: "Telecommunication",
      description: "Telecom infrastructure and platforms",
      detailedDescription: "We help telecom providers scale efficiently through modern platforms that support network performance, customer service portals, subscription management, and integrated analytics.",
      logo: "/images/industries/telecom.png"
    },
    {
      name: "Fitness",
      description: "Fitness and wellness applications",
      detailedDescription: "From gym management software to mobile fitness apps, we build platforms that support user engagement, workout tracking, virtual training, and personalized wellness programs—bringing fitness goals to life digitally.",
      logo: "/images/industries/fitness.png"
    }
  ];

  const testimonials = [
    {
      name: "Peter Stevenson",
      company: "TruSpace",
      rating: 4.5,
      companyLogo: "/images/logos/truspace.svg",
      testimonial: "It's always been an incredible journey working with them, and their unwavering support has made us feel like we're soaring on cloud nine. Their passion for innovation and commitment to excellence perfectly align with our own values, making this partnership a true match made in tech heaven. We couldn't be more grateful to have them on board, and we look forward to continuing this wonderful journey together, creating amazing solutions and achieving new heights of success side by side. It's my absolute pleasure to recommend Ramon Aseniero as a Sitecore Architect. Ramon and I have worked on a couple of Sitecore implementation projects since August 2015, i.e. Circus de Soleil's website, NASA Kennedy Space Center's website, HomeFundMe.com, VITAS Healthcare's website, John Hopkins Hospital's website to name a few.",
      projects: [
        "Circus de Soleil's website",
        "NASA Kennedy Space Center's website",
        "HomeFundMe.com",
        "VITAS Healthcare's website",
        "John Hopkins Hospital's website"
      ]
    },
    {
      name: "Mia Peroff",
      company: "NARRA",
      rating: 5,
      companyLogo: "/images/logos/narra.svg",
      testimonial: "I met Ramon through a conference, where we instantly connected. A month after, we were working on a project together. The decision to go with Jairosoft was easy to make as they were very open to working with us and our budget, defining the right project scope. During our first project together, they consistently delivered on their promises, and were always open to improving processes for better efficiency. Beyond their technical expertise, their great communication skills and friendly approach made the collaboration enjoyable. Highly recommend!"
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-5 w-5 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <>
      <StickyHeader alwaysVisible />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <PageHeader
          title="Industries & Testimonials"
          subtitle="Specialized solutions delivering exceptional results across diverse sectors, backed by client success stories and proven expertise."
          backgroundType="gradient"
          accentColor="red"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="h-5 w-5 text-red-300" />
              <span className="text-white font-medium">8+ Industries</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Target className="h-5 w-5 text-blue-300" />
              <span className="text-white font-medium">Targeted Solutions</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <TrendingUp className="h-5 w-5 text-green-300" />
              <span className="text-white font-medium">Proven Results</span>
            </div>
          </div>
        </PageHeader>

        {/* Industries Section */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Industries We Serve
                </h2>
                <p className="text-lg text-gray-600">
                  Specialized solutions tailored to your industry's unique challenges and opportunities
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {industries.map((industry, index) => (
                  <ScrollAnimated 
                    key={index} 
                    animation="fadeInUp" 
                    delay={index * 0.1}
                    className="group h-full"
                  >
                    <button
                      onClick={() => setSelectedIndustry(industry)}
                      className="w-full bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-all group-hover:shadow-md h-full flex flex-col cursor-pointer border-2 border-transparent hover:border-red-600"
                    >
                      <div className="flex items-center justify-center mb-4 h-20 flex-shrink-0">
                        <img
                          src={industry.logo}
                          alt={`${industry.name} industry`}
                          className="max-h-16 w-auto object-contain"
                        />
                      </div>
                      <div className="flex flex-col flex-grow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {industry.name}
                        </h3>
                        <p className="text-sm text-gray-600 flex-grow">
                          {industry.description}
                        </p>
                      </div>
                    </button>
                  </ScrollAnimated>
                ))}
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  What Clients Say
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We place huge value on strong relationships and have seen the benefit they bring to our business. 
                  Customer feedback is vital in helping us to get it right.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <ScrollAnimated 
                    key={index} 
                    animation="fadeInUp" 
                    delay={index * 0.2}
                  >
                    <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {testimonial.name}
                            </h3>
                            <div className="flex items-center space-x-3">
                              <span className="text-gray-600">{testimonial.company}</span>
                              {testimonial.companyLogo && (
                                <img
                                  src={testimonial.companyLogo}
                                  alt={`${testimonial.company} logo`}
                                  className="h-6 w-auto"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <blockquote className="text-gray-700 leading-relaxed mb-6">
                        "{testimonial.testimonial}"
                      </blockquote>

                      {/* Notable Projects */}
                      {testimonial.projects && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-3">
                            Notable Projects:
                          </h4>
                          <ul className="space-y-1">
                            {testimonial.projects.map((project, projectIndex) => (
                              <li key={projectIndex} className="text-sm text-gray-600 flex items-start">
                                <span className="text-red-600 mr-2">•</span>
                                {project}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </ScrollAnimated>
                ))}
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About Jairosoft
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    Jairosoft is comprised of highly competent Agile Teams with Sitecore certified architects, 
                    project managers, full-stack and software test developers that will focus on end-to-end implementation. 
                    We are teams of experts in requirements gathering and analysis, written Use Case and Stories, 
                    used TFS for managing projects in Agile/SCRUM methodology, and currently implementing SAFe.
                  </p>
                  <p>
                    Our developers are versatile in web development technologies i.e. WebAPI, JSON, ASP.NET Framework, 
                    ASP.Net Core, C#, Azure Cloud, XML, HTML, JavaScript, and CSS, Angular JS, and Knockout JS. 
                    Well-experienced in Software Design and Architecture including, but not limited to Object-Oriented 
                    Analysis and Design, Design Patterns, Domain-Driven Design, SOLID Principles, and N-Tier design.
                  </p>
                  <p>
                    Our software will be tested by our experienced Quality Assurance team including, but not limited to 
                    Test Driven Development (TDD), Unit Testing, Selenium IDE, Atlassian JIRA.
                  </p>
                </div>
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-6 bg-red-600">
          <div className="container mx-auto max-w-4xl text-center">
            <ScrollAnimated animation="fadeInUp">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Let's discuss how our industry expertise can drive your business forward.
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
            </ScrollAnimated>
          </div>
        </section>
      </main>
      <Footer />

      {/* Industry Detail Modal */}
      <Dialog open={!!selectedIndustry} onOpenChange={() => setSelectedIndustry(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Industries
            </DialogTitle>
          </DialogHeader>
          {selectedIndustry && (
            <div className="space-y-4">
              {/* Industry Name */}
              <h3 className="text-xl font-bold text-gray-900">
                {selectedIndustry.name}
              </h3>

              {/* Detailed Description */}
              <DialogDescription className="text-gray-700 leading-relaxed text-base">
                {selectedIndustry.detailedDescription}
              </DialogDescription>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default IndustriesTestimonials;