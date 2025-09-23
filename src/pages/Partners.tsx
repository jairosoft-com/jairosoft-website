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
      logo: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=192,h=192,f=auto,dpr=1,fit=contain/f1744354687488x391487766617957700/scaled%20agile%20partner.png",
      category: "Methodology"
    },
    {
      name: "Sitecore Silver Partner",
      logo: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=192,h=192,f=auto,dpr=1,fit=contain/f1744354708871x756979420750852200/sitecore%20silver%20partner.png",
      category: "CMS Platform"
    },
    {
      name: "Microsoft",
      logo: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=192,h=192,f=auto,dpr=1,fit=contain/f1744354809493x159773946293163330/microsoft.png",
      category: "Cloud & Development"
    },
    {
      name: "Google Partner",
      logo: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=192,h=192,f=auto,dpr=1,fit=contain/f1745293617393x258946384528928600/37ce2e307e48f5f9c6219281539334cd.png",
      category: "Cloud Services"
    }
  ];

  const developmentTools = [
    {
      name: "React",
      logo: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=192,h=192,f=auto,dpr=1,fit=contain/f1743581499599x658634377667592400/react.png"
    },
    {
      name: "Angular JS",
      logo: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=192,h=192,f=auto,dpr=1,fit=contain/f1743581289102x280094664450745150/angular%20js.png"
    },
    {
      name: "Node.js",
      logo: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=192,h=192,f=auto,dpr=1,fit=contain/f1744703114343x165456915525347600/nodes.png"
    },
    {
      name: "Java",
      logo: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=192,h=192,f=auto,dpr=1,fit=contain/f1743581561329x360993837104345300/java.png"
    },
    {
      name: "Python",
      logo: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=192,h=192,f=auto,dpr=1,fit=contain/f1743581486864x717836059627198600/python.png"
    }
  ];

  const infrastructure = [
    {
      name: "Docker",
      logo: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=192,h=192,f=auto,dpr=1,fit=contain/f1744702895176x644516564836209700/docker.png"
    },
    {
      name: "Kubernetes",
      logo: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=192,h=192,f=auto,dpr=1,fit=contain/f1743581571444x105768541288918430/kubernetes.png"
    },
    {
      name: "Kafka",
      logo: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=192,h=192,f=auto,dpr=1,fit=contain/f1743581528439x457330281214968640/kafka.png"
    },
    {
      name: "Redis",
      logo: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=192,h=192,f=auto,dpr=1,fit=contain/f1743581434821x609141132806176400/redis.png"
    }
  ];

  const databases = [
    {
      name: "Oracle Database",
      logo: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=192,h=192,f=auto,dpr=1,fit=contain/f1744702834731x249097634269767940/oracle%20database.png"
    },
    {
      name: "MongoDB",
      logo: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=192,h=192,f=auto,dpr=1,fit=contain/f1743582630829x819886960728118300/mongo%20DB.png"
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