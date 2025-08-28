import React from "react";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";
import { Code, Cog, CheckCircle, Users } from "lucide-react";

const TechnicalLeads: React.FC = () => {
  const technicalLeads = [
    {
      name: "Karl Jordan Caumban",
      position: "Agile Project Manager",
      image: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=512,h=601,f=auto,dpr=1,fit=contain/f1743735203528x917088806508847900/Caumban%2C%20Karl.jfif",
      icon: "👨‍💼"
    },
    {
      name: "John Paul Catubig",
      position: "Product Manager",
      image: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=512,h=601,f=auto,dpr=1,fit=contain/f1743735252224x772237535318115500/Catubig%2C%20John%20Paul.jpg",
      icon: "👨‍💼"
    },
    {
      name: "Bomar Sinday",
      position: "Software Development Manager",
      image: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=512,h=601,f=auto,dpr=1,fit=contain/f1743735326994x102659480505900020/%28Selected%29%20DSC_0073-2.jpg",
      icon: "👨‍💼"
    },
    {
      name: "Adam Vincent Bernaldez",
      position: "Principal Software Supervisor",
      image: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=512,h=601,f=auto,dpr=1,fit=contain/f1743736805683x364296015345688600/Adam%20Vincent%20Bernaldez%20%28GoHealth%20Project%20Lead%29.png",
      icon: "👨‍💼"
    },
    {
      name: "Ryan Vince Castillo",
      position: "Line Manager",
      image: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=512,h=601,f=auto,dpr=1,fit=contain/f1743735445021x221799476506544500/%28Selected%29%20DSC_0092-2.jpg",
      icon: "👨‍💼"
    },
    {
      name: "Cindy Arrogancia",
      position: "QA Lead",
      image: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=512,h=601,f=auto,dpr=1,fit=contain/f1743736791746x753480723329094300/Arrogancia%2C%20Cindy%20-%20ID.png",
      icon: "👩‍💼"
    },
    {
      name: "Mary Grace Garcia",
      position: "Program Manager",
      image: "https://d34e910e9c4f6a4df0791b0a9b6b7141.cdn.bubble.io/cdn-cgi/image/w=512,h=601,f=auto,dpr=1,fit=contain/f1743735574828x225243451021794660/%28Selected%29%20DSC_0163.jpg",
      icon: "👩‍💼"
    }
  ];

  return (
    <>
      <StickyHeader alwaysVisible />
      <main className="min-h-screen bg-white">
        <PageHeader
          title="Technical Leads & Certified Experts"
          subtitle="Meet our technical leadership team and certified experts who drive innovation and ensure the highest quality in software development."
          backgroundType="pattern"
          accentColor="blue"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Code className="h-5 w-5 text-blue-300" />
              <span className="text-white font-medium">Technical Excellence</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Cog className="h-5 w-5 text-green-300" />
              <span className="text-white font-medium">Innovation Driven</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="h-5 w-5 text-yellow-300" />
              <span className="text-white font-medium">Certified Experts</span>
            </div>
          </div>
        </PageHeader>

        {/* Technical Leadership Team */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Leadership Team</h2>
                <p className="text-lg text-gray-600">
                  Certified experts driving innovation and ensuring highest quality standards
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {technicalLeads.map((lead, index) => (
                  <ScrollAnimated 
                    key={index} 
                    animation="fadeInUp" 
                    delay={index * 0.1}
                  >
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="aspect-w-3 aspect-h-4 bg-gray-100">
                        <img
                          src={lead.image}
                          alt={`${lead.name} - ${lead.position}`}
                          className="w-full h-64 object-cover object-center"
                        />
                      </div>
                      <div className="p-4">
                        <div className="text-center">
                          <div className="text-2xl mb-2">{lead.icon}</div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {lead.name}
                          </h3>
                          <p className="text-blue-600 font-semibold text-sm mb-3">
                            {lead.position}
                          </p>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <p className="text-xs text-gray-600">
                              Biography (Additional details available)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimated>
                ))}
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Expertise Highlights */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Technical Expertise</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <Code className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Development Excellence</h3>
                    <p className="text-gray-600 text-sm">
                      Full-stack developers versed in modern technologies including ASP.NET, C#, Angular, and cloud platforms.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <Users className="h-8 w-8 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Agile Leadership</h3>
                    <p className="text-gray-600 text-sm">
                      Certified Scrum Masters and SAFe practitioners leading agile transformations.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Quality Assurance</h3>
                    <p className="text-gray-600 text-sm">
                      Expert QA leads ensuring quality through TDD, automated testing, and continuous integration.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-6 bg-blue-600">
          <div className="container mx-auto max-w-4xl text-center">
            <ScrollAnimated animation="fadeInUp">
              <h2 className="text-3xl font-bold text-white mb-6">
                Technical Excellence You Can Trust
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Work with our certified experts to build innovative solutions that drive your business forward.
              </p>
              <a
                href="mailto:info@jairosoft.com"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Connect With Our Technical Team
              </a>
            </ScrollAnimated>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TechnicalLeads;