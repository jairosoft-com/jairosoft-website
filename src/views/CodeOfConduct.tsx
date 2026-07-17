"use client";

import React from "react";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";
import { Shield, Scale, AlertTriangle, Users, FileText, Globe } from "lucide-react";

const CodeOfConduct: React.FC = () => {
  return (
    <>
      <StickyHeader alwaysVisible />
      <main className="min-h-screen bg-white">
        <PageHeader
          title="Code of Business Conduct"
          subtitle="Committed to conducting business with integrity, transparency, and responsibility across all operations."
          backgroundType="pattern"
          accentColor="blue"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="h-5 w-5 text-blue-300" />
              <span className="text-white font-medium">Integrity First</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Scale className="h-5 w-5 text-green-300" />
              <span className="text-white font-medium">Ethical Standards</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Globe className="h-5 w-5 text-yellow-300" />
              <span className="text-white font-medium">Global Compliance</span>
            </div>
          </div>
        </PageHeader>

        {/* Introduction */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Jairosoft, we are committed to conducting our business with <strong className="text-blue-600">integrity</strong>, 
                  <strong className="text-green-600"> transparency</strong>, and <strong className="text-purple-600">responsibility</strong>. 
                  This Code of Business Conduct serves as a guide for all employees, contractors, and partners in upholding 
                  ethical and professional standards in every aspect of our operations.
                </p>
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* U.S. Government Compliance */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-blue-600 mr-3" />
                  U.S. Government Compliance
                </h2>
                <p className="text-lg text-gray-600">
                  Adhering to strict regulatory and ethical standards for government contracting
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">FAR & DFARS Compliance</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Procurement Integrity</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Ethical Bidding & Pricing</li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>CMMC Security Compliance</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">False Claims Act</h3>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-red-800 font-medium mb-2">⚠️ Warning</p>
                        <p className="text-sm text-red-700">
                          Violations can result in significant penalties, including civil fines and criminal prosecution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Key Compliance Areas */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Compliance Areas</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: <FileText className="h-6 w-6" />, title: "Data Privacy & Cybersecurity", description: "Secure handling of sensitive information" },
                  { icon: <Scale className="h-6 w-6" />, title: "Intellectual Property", description: "Respect for proprietary software, patents, trademarks" },
                  { icon: <Shield className="h-6 w-6" />, title: "Anti-Corruption", description: "Refrain from bribery or unethical practices" },
                  { icon: <Users className="h-6 w-6" />, title: "Fair Competition", description: "Conduct business with integrity" },
                  { icon: <Globe className="h-6 w-6" />, title: "Export Control", description: "ITAR, EAR, OFAC compliance" },
                  { icon: <AlertTriangle className="h-6 w-6" />, title: "Whistleblower Protection", description: "No retaliation for good faith reports" }
                ].map((area, index) => (
                  <ScrollAnimated key={index} animation="fadeInUp" delay={index * 0.1}>
                    <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 text-blue-600">
                        {area.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
                      <p className="text-sm text-gray-600">{area.description}</p>
                    </div>
                  </ScrollAnimated>
                ))}
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-6 bg-blue-600">
          <div className="container mx-auto max-w-4xl text-center">
            <ScrollAnimated animation="fadeInUp">
              <h2 className="text-3xl font-bold text-white mb-6">
                Commitment to Ethical Excellence
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                By adhering to this Code of Business Conduct, we affirm our commitment to ethical excellence, compliance, and responsible corporate citizenship.
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Learn More About Our Standards
              </a>
            </ScrollAnimated>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CodeOfConduct;