import React from "react";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";
import { Handshake, Star, Code, Database, Cloud } from "lucide-react";

const Partners: React.FC = () => {
  const premierPartners = [
    {
      name: "Scaled Agile Partner",
      logo: "/images/partners/scaled-agile-partner.png",
      category: "Methodology"
    },
    {
      name: "Sitecore Silver Partner",
      logo: "/images/partners/sitecore-silver-partner.png",
      category: "CMS Platform"
    },
    {
      name: "Microsoft",
      logo: "/images/partners/microsoft.png",
      category: "Cloud & Development"
    },
    {
      name: "Google Partner",
      logo: "/images/partners/google-partner.png",
      category: "Cloud Services"
    }
  ];

  const developmentTools = [
    {
      name: "React",
      logo: "/images/partners/react.png"
    },
    {
      name: "Angular JS",
      logo: "/images/partners/angular.png"
    },
    {
      name: "Node.js",
      logo: "/images/partners/nodejs.png"
    },
    {
      name: "Java",
      logo: "/images/partners/java.png"
    },
    {
      name: "Python",
      logo: "/images/partners/python.png"
    }
  ];

  const infrastructure = [
    {
      name: "Docker",
      logo: "/images/partners/docker.png"
    },
    {
      name: "Kubernetes",
      logo: "/images/partners/kubernetes.png"
    },
    {
      name: "Kafka",
      logo: "/images/partners/kafka.png"
    },
    {
      name: "Redis",
      logo: "/images/partners/redis.png"
    }
  ];

  const databases = [
    {
      name: "Oracle Database",
      logo: "/images/partners/oracle.png"
    },
    {
      name: "MongoDB",
      logo: "/images/partners/mongodb.png"
    }
  ];

  return (
    <>
      <StickyHeader alwaysVisible />
      <main className="min-h-screen bg-white">
        <PageHeader
          title="Partners"
          subtitle="Collaboration is key to delivering innovative and effective software solutions. Together, we create lasting value for businesses worldwide."
          backgroundType="gradient"
          accentColor="blue"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Handshake className="h-5 w-5 text-blue-300" />
              <span className="text-white font-medium">Strategic Alliances</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="h-5 w-5 text-yellow-300" />
              <span className="text-white font-medium">Premier Partners</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Code className="h-5 w-5 text-green-300" />
              <span className="text-white font-medium">Technology Ecosystem</span>
            </div>
          </div>
        </PageHeader>

        {/* Partnership Philosophy */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Partnership Philosophy</h2>
                <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl p-8 border border-gray-100">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    At JairoSoft, we believe in the power of collaboration. Our partners play a crucial role 
                    in helping us deliver innovative and effective software solutions. Together, we strive to 
                    create lasting value and drive success for businesses around the world.
                  </p>
                </div>
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Premier Partners */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Premier Partners</h2>
                <p className="text-lg text-gray-600">
                  Leading technology companies and strategic alliances that enhance our capabilities
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {premierPartners.map((partner, index) => (
                  <ScrollAnimated 
                    key={index} 
                    animation="fadeInUp" 
                    delay={index * 0.1}
                  >
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-center mb-4 h-20">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="max-h-16 w-auto object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                      <p className="text-sm text-blue-600 font-medium">{partner.category}</p>
                    </div>
                  </ScrollAnimated>
                ))}
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Development Frameworks */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                  <Code className="h-8 w-8 text-blue-600 mr-3" />
                  Development Frameworks & Tools
                </h2>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
                {developmentTools.map((tool, index) => (
                  <ScrollAnimated 
                    key={index} 
                    animation="fadeInUp" 
                    delay={index * 0.1}
                  >
                    <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                      <div className="flex items-center justify-center h-16 mb-2">
                        <img
                          src={tool.logo}
                          alt={`${tool.name} logo`}
                          className="max-h-12 w-auto object-contain"
                        />
                      </div>
                      <p className="text-sm font-medium text-gray-700">{tool.name}</p>
                    </div>
                  </ScrollAnimated>
                ))}
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Infrastructure & Cloud */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                  <Cloud className="h-8 w-8 text-green-600 mr-3" />
                  Infrastructure & Cloud
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {infrastructure.map((tool, index) => (
                  <ScrollAnimated 
                    key={index} 
                    animation="fadeInUp" 
                    delay={index * 0.1}
                  >
                    <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-gray-100">
                      <div className="flex items-center justify-center h-16 mb-2">
                        <img
                          src={tool.logo}
                          alt={`${tool.name} logo`}
                          className="max-h-12 w-auto object-contain"
                        />
                      </div>
                      <p className="text-sm font-medium text-gray-700">{tool.name}</p>
                    </div>
                  </ScrollAnimated>
                ))}
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Databases */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                  <Database className="h-8 w-8 text-purple-600 mr-3" />
                  Databases
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {databases.map((db, index) => (
                  <ScrollAnimated 
                    key={index} 
                    animation="fadeInUp" 
                    delay={index * 0.2}
                  >
                    <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
                      <div className="flex items-center justify-center h-20 mb-4">
                        <img
                          src={db.logo}
                          alt={`${db.name} logo`}
                          className="max-h-16 w-auto object-contain"
                        />
                      </div>
                      <p className="text-lg font-medium text-gray-700">{db.name}</p>
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
                Partner With Innovation Leaders
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join our ecosystem of partners and create lasting value together through collaborative innovation.
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Partnership Opportunities
              </a>
            </ScrollAnimated>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Partners;