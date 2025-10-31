import React from "react";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";
import { Crown, Users, Star } from "lucide-react";

const ExecutiveLeadership: React.FC = () => {
  const executives = [
    {
      name: "Ramon Aseniero",
      position: "Chief Executive Officer & Founder",
      image: "/images/team/ramon-aseniero-ceo.jpg",
      icon: "👨‍💼"
    },
    {
      name: "Aldred Donayre",
      position: "Chief Operating Officer",
      image: "/images/team/aldred-donayre-coo.jpg",
      icon: "👨‍💼"
    },
    {
      name: "Marikriss Aseniero",
      position: "Chief Finance Officer",
      image: "/images/team/marikriss-aseniero-cfo.jpg",
      icon: "👩‍💼"
    }
  ];

  return (
    <>
      <StickyHeader alwaysVisible />
      <main className="min-h-screen bg-white">
        <PageHeader
          title="Executive Leadership"
          subtitle="Meet the executive leadership team that drives Jairosoft's vision and strategic direction."
          backgroundType="gradient"
          accentColor="red"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Crown className="h-5 w-5 text-yellow-300" />
              <span className="text-white font-medium">Visionary Leaders</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="h-5 w-5 text-blue-300" />
              <span className="text-white font-medium">Strategic Direction</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="h-5 w-5 text-green-300" />
              <span className="text-white font-medium">Excellence Driven</span>
            </div>
          </div>
        </PageHeader>

        {/* Leadership Team */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership Team</h2>
                <p className="text-lg text-gray-600">
                  Experienced leaders driving innovation and excellence at Jairosoft
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {executives.map((executive, index) => (
                  <ScrollAnimated 
                    key={index} 
                    animation="fadeInUp" 
                    delay={index * 0.2}
                  >
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="aspect-w-3 aspect-h-4 bg-gray-100">
                        <img
                          src={executive.image}
                          alt={`${executive.name} - ${executive.position}`}
                          className="w-full h-80 object-cover object-center"
                        />
                      </div>
                      <div className="p-6">
                        <div className="text-center">
                          <div className="text-3xl mb-2">{executive.icon}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {executive.name}
                          </h3>
                          <p className="text-red-600 font-semibold mb-4">
                            {executive.position}
                          </p>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm text-gray-600">
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

        {/* About Jairosoft */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Jairosoft</h2>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Jairosoft is comprised of highly competent Agile Teams with Sitecore certified architects, 
                    project managers, full-stack and software test developers that will focus on end-to-end implementation. 
                    We are teams of experts in requirements gathering and analysis, written Use Case and Stories, 
                    used TFS for managing projects in Agile/SCRUM methodology, and currently implementing SAFe.
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
                Leadership That Delivers Results
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Connect with our leadership team to discuss your next project or partnership opportunity.
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Leadership
              </a>
            </ScrollAnimated>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ExecutiveLeadership;