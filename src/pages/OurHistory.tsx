import React from "react";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";
import { Calendar, MapPin, Users, Zap, Globe, Heart } from "lucide-react";

const OurHistory: React.FC = () => {
  const offices = [
    {
      country: "United States",
      locations: [
        {
          city: "California",
          address: "12584 Luna Road Victorville, California 92392",
        },
        {
          city: "Hawaii",
          address: "1050 Queen St Suite 100, Honolulu, HI 96814",
        },
      ],
    },
    {
      country: "Philippines",
      locations: [
        {
          city: "Davao City",
          address:
            "Holy Trinity Avenue, Holy Trinity Village, Cabantian 8000 Davao City",
        },
        {
          city: "Cebu City",
          address: "1049 M.J. Cuenco Avenue Mabolo Cebu City, 6000",
        },
      ],
    },
  ];

  const industries = [
    "Consumer Products",
    "Government Agencies",
    "Healthcare Providers",
    "Educational Institutions",
  ];
  const values = ["Trust", "Reliability", "Shared Success"];

  return (
    <>
      <StickyHeader alwaysVisible />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <PageHeader
          title="Our History"
          subtitle="Founded in 2017 as an AI-first company, empowering businesses with innovative software solutions and continuous innovation."
          backgroundType="gradient"
          accentColor="blue"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Calendar className="h-5 w-5 text-yellow-300" />
              <span className="text-white font-medium">Founded 2017</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Zap className="h-5 w-5 text-green-300" />
              <span className="text-white font-medium">AI-First Company</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Globe className="h-5 w-5 text-blue-300" />
              <span className="text-white font-medium">Global Presence</span>
            </div>
          </div>
        </PageHeader>

        {/* Mission & Vision */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Mission & Vision
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-xl p-8 border border-gray-100">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Founded in 2017, Jairosoft is committed to being an{" "}
                    <strong className="text-red-600">AI-first company</strong>{" "}
                    by providing exceptional software solutions specifically
                    designed for small and medium-sized businesses leveraging
                    the advancements of artificial intelligence technology.
                  </p>
                </div>
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Target Industries */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Industries We Empower
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                  Our mission is to empower enterprises across a variety of
                  industries
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {industries.map((industry, index) => (
                    <ScrollAnimated
                      key={index}
                      animation="fadeInUp"
                      delay={index * 0.1}
                    >
                      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-center mb-4">
                          <Users className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 text-center">
                          {industry}
                        </h3>
                      </div>
                    </ScrollAnimated>
                  ))}
                </div>
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Company Values & Approach
                </h2>
                <div className="bg-gray-50 rounded-xl p-8 mb-12">
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    With years of experience and continuous innovation, we have
                    refined our offerings to address the unique needs and
                    challenges faced by businesses in these sectors. Our
                    dedication to excellence is evident not only in the quality
                    of our products but also in our focus on{" "}
                    <strong className="text-red-600">cost efficiency</strong>,
                    ensuring that our solutions remain accessible to
                    organizations of different sizes and budgets.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    {values.map((value, index) => (
                      <div key={index} className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                          <Heart className="h-6 w-6 text-red-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {value}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Global Presence
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                  To better serve our global clientele, we have strategically
                  established offices in key markets
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {offices.map((country, index) => (
                    <ScrollAnimated
                      key={index}
                      animation="fadeInUp"
                      delay={index * 0.2}
                    >
                      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <MapPin className="h-5 w-5 text-red-600 mr-2" />
                          {country.country}
                        </h3>
                        <div className="space-y-4">
                          {country.locations.map((location, locationIndex) => (
                            <div
                              key={locationIndex}
                              className="border-l-4 border-blue-200 pl-4"
                            >
                              <h4 className="font-medium text-gray-900">
                                {location.city}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {location.address}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ScrollAnimated>
                  ))}
                </div>
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Partnership Philosophy */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Partnership Philosophy
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-xl p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    At Jairosoft, we cultivate{" "}
                    <strong className="text-blue-600">
                      long-term partnerships
                    </strong>{" "}
                    built on trust, reliability, and shared success. By
                    consistently delivering high-quality software solutions and
                    outstanding customer service, we strive to be the preferred
                    technology partner for businesses looking to thrive in
                    today's competitive landscape.
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
                Join Our Journey
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Partner with us to create innovative solutions that drive
                lasting value and business success.
              </p>
              <a
                href="mailto:info@jairosoft.com"
                className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Partnership
              </a>
            </ScrollAnimated>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default OurHistory;
