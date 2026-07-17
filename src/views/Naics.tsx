"use client";

import React from "react";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";
import { CheckCircle, Shield, Award, Zap } from "lucide-react";

const Naics: React.FC = () => {
  const services541511 = [
    {
      category: "Custom Software Development & Engineering",
      items: [
        "Full-Stack Web & Mobile App Development (iOS, Android, Web)",
        "AI-Powered Enterprise Software & Workflow Automation",
        "Cloud-Native Application Development & API Integration",
        "Secure Software Development Life Cycle (SDLC) & DevSecOps Implementation"
      ]
    },
    {
      category: "Agile Software Development & Legacy System Modernization",
      items: [
        "COBOL & Mainframe Modernization to Cloud-Native Microservices",
        "Enterprise CRM, ERP & Secure API Development",
        "AI & RPA-Powered Software Automation for Business & Government Operations"
      ]
    },
    {
      category: "AI-Powered Solutions & Advanced Analytics",
      items: [
        "AI-Based Predictive Analytics & Risk Management",
        "Natural Language Processing (NLP) for Document Automation & Chatbots",
        "Geospatial Intelligence (GEOINT) & AI-Enhanced Remote Sensing"
      ]
    },
    {
      category: "Low-Code/No-Code & Intelligent Process Automation (IPA)",
      items: [
        "Microsoft PowerApps, Mendix, OutSystems & Low-Code Development",
        "Robotic Process Automation (RPA) for Federal & Enterprise Workflow Optimization"
      ]
    }
  ];

  const services541512 = [
    {
      category: "IT Systems Design & Integration",
      items: [
        "Enterprise IT Modernization & Digital Transformation Consulting",
        "Hybrid IT Systems Integration & Secure Cloud Infrastructure Design",
        "Data Center Consolidation & Network Optimization"
      ]
    },
    {
      category: "Cybersecurity & Compliance Solutions",
      items: [
        "Zero Trust Security Architecture (ZTA) & AI-Powered Cyber Defense",
        "Security Information & Event Management (SIEM) & 24/7 Threat Intelligence",
        "Identity & Access Management (IAM), MFA & Biometric Authentication",
        "CMMC, FedRAMP, NIST 800-171, ISO 27001, SOC 2 Compliance Consulting"
      ]
    },
    {
      category: "Cloud Computing & IT Infrastructure",
      items: [
        "AWS GovCloud, Microsoft Azure Government, Google Cloud Federal Solutions",
        "Multi-Cloud Security Strategy & DevSecOps Deployment",
        "Secure Data Encryption, Backup & Disaster Recovery Solutions"
      ]
    },
    {
      category: "Network & Smart Infrastructure Solutions",
      items: [
        "5G & Edge Computing for Defense, Government & Enterprise IT",
        "AI-Driven SD-WAN & Remote Workforce IT Security",
        "Hyperconverged Infrastructure (HCI) for IT Modernization"
      ]
    }
  ];

  const additionalServices = [
    {
      naics: "541519",
      title: "Other Computer-Related Services",
      items: [
        "AI-Powered Business Intelligence & Decision Support Systems",
        "Data Science, Big Data Analytics & AI-Powered Predictive Modeling",
        "IT Help Desk & Managed Technical Support Services"
      ]
    },
    {
      naics: "518210",
      title: "Data Processing, Hosting, and Related Services",
      items: [
        "Secure Cloud Hosting & Data Management (FedRAMP-Compliant)",
        "AI-Powered Data Processing & Business Intelligence Solutions",
        "Data Warehousing & Digital Transformation Analytics"
      ]
    },
    {
      naics: "611420",
      title: "Computer Training & Workforce Development",
      items: [
        "Cybersecurity Training (CMMC, FedRAMP, NIST, ISO 27001)",
        "Cloud Computing & DevSecOps Training for Federal & Enterprise IT Teams",
        "AI & Data Science Training for Digital Workforce Development"
      ]
    }
  ];

  const partnerships = [
    {
      name: "SAFe Partnership",
      logo: "/images/logos/safe-partnership.svg"
    },
    {
      name: "Sitecore",
      logo: "/images/logos/sitecore.svg"
    },
    {
      name: "AWS",
      logo: "/images/logos/aws.svg"
    },
    {
      name: "Microsoft",
      logo: "/images/logos/microsoft.svg"
    },
    {
      name: "Google Partner",
      logo: "/images/logos/google-partner.svg"
    }
  ];

  return (
    <>
      <StickyHeader alwaysVisible />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <PageHeader
          title="NAICS Code Product & Service Offerings"
          subtitle="Primary NAICS: 541511 & 541512 | AI-Driven Software | Cybersecurity & Cloud Solutions | Government Contracting Ready"
          backgroundType="pattern"
          accentColor="blue"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="h-5 w-5 text-blue-300" />
              <span className="text-white font-medium">FedRAMP Compliant</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Award className="h-5 w-5 text-yellow-300" />
              <span className="text-white font-medium">CMMC Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Zap className="h-5 w-5 text-green-300" />
              <span className="text-white font-medium">AI-First Solutions</span>
            </div>
          </div>
        </PageHeader>

        {/* Primary NAICS 541511 */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  NAICS 541511 – Custom Computer Programming Services
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                  Jairosoft develops customized software applications, specializing in secure, 
                  scalable, and AI-driven solutions for government, defense, and enterprise clients.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {services541511.map((service, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {service.category}
                      </h3>
                      <ul className="space-y-3">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Primary NAICS 541512 */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  NAICS 541512 – Computer Systems Design Services
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                  Jairosoft delivers IT system integration, cybersecurity, cloud solutions, 
                  and digital transformation services.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {services541512.map((service, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {service.category}
                      </h3>
                      <ul className="space-y-3">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Additional NAICS Codes */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Additional NAICS Codes That Jairosoft Offers
                </h2>
                <p className="text-lg text-gray-600">
                  Complementary services supporting 541511 & 541512 projects
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {additionalServices.map((service, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <div className="text-center mb-6">
                      <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">
                        NAICS {service.naics}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Partnerships */}
        <section className="py-20 px-6 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Our Technology Partners
                </h2>
                <p className="text-lg text-gray-300">
                  Trusted partnerships enabling world-class solutions
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-12">
                {partnerships.map((partner, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-6 bg-red-600">
          <div className="container mx-auto max-w-4xl text-center">
            <ScrollAnimated animation="fadeInUp">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Government or Enterprise Operations?
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Let's discuss how our NAICS-certified services can accelerate your digital transformation.
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Our Team
              </a>
            </ScrollAnimated>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Naics;