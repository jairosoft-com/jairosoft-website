"use client";

import React from "react";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";

const OurHistory: React.FC = () => {
  return (
    <>
      <StickyHeader alwaysVisible />
      <main className="min-h-screen bg-white">
        {/* Video Section */}
        <section className="relative w-full h-[100vh] min-h-[400px] bg-gray-900">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/jairosoft-history.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* Our History Content */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <ScrollAnimated animation="fadeInUp">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Our History
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  Founded in 2017, Jairosoft is committed to being an AI-first
                  company by providing exceptional software solutions
                  specifically designed for small and medium-sized businesses
                  leveraging the advancements of artificial intelligence
                  technology. Our mission is to empower enterprises across a
                  variety of industries, including consumer products, government
                  agencies, healthcare providers, and educational institutions.
                </p>
                <p>
                  With years of experience and continuous innovation, we have
                  refined our offerings to address the unique needs and
                  challenges faced by businesses in these sectors. Our
                  dedication to excellence is evident not only in the quality of
                  our products but also in our focus on cost efficiency,
                  ensuring that our solutions remain accessible to organizations
                  of different sizes and budgets.
                </p>
                <p>
                  To better serve our global clientele, we have strategically
                  established offices in key markets, including California and
                  Hawaii (USA) and Davao City and Cebu City (Philippines). These
                  locations allow us to leverage local expertise while providing
                  personalized support and services to our valued clients
                  worldwide.
                </p>
                <p>
                  At Jairosoft, we cultivate long-term partnerships built on
                  trust, reliability, and shared success. By consistently
                  delivering high-quality software solutions and outstanding
                  customer service, we strive to be the preferred technology
                  partner for businesses looking to thrive in today's
                  competitive landscape.
                </p>
              </div>
            </ScrollAnimated>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default OurHistory;
