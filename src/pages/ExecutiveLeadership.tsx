import React, { useState } from "react";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";
import { Crown, Users, Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ExecutiveLeadership: React.FC = () => {
  const [selectedExecutive, setSelectedExecutive] = useState<typeof executives[0] | null>(null);

  const executives = [
    {
      name: "Ramon Aseniero",
      position: "Chief Executive Officer & Founder",
      image: "/images/team/ramon-aseniero-ceo.jpg",
      icon: "👨‍💼",
      biography: `Chief Executive Officer & Founder | Technology Leader & Digital Transformation Expert

Ramon Aseniero is a seasoned technology executive and digital transformation strategist with extensive experience in software development, cloud computing, and enterprise content management. As the Chief Executive Officer of Jairosoft, he leads innovative digital solutions, driving growth and efficiency for businesses through cutting-edge technologies.

With a strong technical foundation, Ramon is a Certified Sitecore 10 XM/XP Developer, Certified SAFe Agilist & Practice Consultant, Certified CMS Developer, and Microsoft Certified: Azure AI Fundamentals. His expertise spans web development, cloud architecture, artificial intelligence, and Agile methodologies, enabling organizations to streamline operations and enhance customer experiences.

Throughout his career, he has played a pivotal role in designing and implementing enterprise-level solutions for global clients, leveraging platforms like Sitecore, Azure, and other advanced digital ecosystems. His leadership, combined with his technical acumen, positions him as a trusted advisor in the ever-evolving digital landscape.

Ramon is passionate about innovation, scalability, and digital transformation, ensuring businesses stay ahead in an increasingly technology-driven world.`
    },
    {
      name: "Aldred Donayre",
      position: "Chief Operating Officer",
      image: "/images/team/aldred-donayre-coo.jpg",
      icon: "👨‍💼",
      biography: `Chief Operating Officer | Senior Lead Developer | Software Architect | Certified Sitecore Developer

Aldred Donayre is a highly experienced and results-driven technology leader, software architect, and Chief Operating Officer (COO) of Jairosoft Inc. since 2017. With over 14 years of experience in Agile Software Development, Lean Thinking, and enterprise software architecture, he has played a pivotal role in leading cross-functional teams, driving digital transformation, and implementing large-scale software solutions.

Throughout his tenure at Jairosoft, Aldred has spearheaded enterprise-level projects across various industries, overseeing agile software development, cloud architecture, and microservices implementation. He has successfully led multi-shore teams, delivering high-quality, scalable, and efficient software solutions.

As COO, Aldred is responsible for strategic planning, operational management, and technical leadership, ensuring that Jairosoft continues to innovate and deliver top-tier technology solutions. He specializes in Microsoft Azure, .NET, JavaScript frameworks (ReactJS, NextJS, AngularJS), Kubernetes, Docker, and cloud computing, among other advanced technologies.

Aldred is also a Certified Sitecore Developer, with deep expertise in Sitecore CMS, Sitecore Experience Commerce, and enterprise-level content management solutions. His knowledge in Sitecore development, integration, and optimization has contributed to the success of numerous projects, enhancing user experience and digital engagement.

Aldred holds a Bachelor of Science in Information Technology from the University of the Immaculate Conception. His expertise in software architecture, DevOps, and enterprise technology solutions continues to drive Jairosoft's growth and success in the tech industry.`
    },
    {
      name: "Marikriss Aseniero",
      position: "Chief Finance Officer",
      image: "/images/team/marikriss-aseniero-cfo.jpg",
      icon: "👩‍💼",
      biography: `Chief Financial Officer | Entrepreneur | Healthcare Professional

Marikriss Aseniero is an accomplished financial executive, entrepreneur, and healthcare professional with extensive experience in financial management, strategic planning, and business leadership. She has played a vital role in shaping organizations across both the technology and healthcare sectors.

As the Chief Financial Officer (CFO) of Jairosoft, Marikriss is responsible for overseeing the company's financial strategy, operational efficiency, and long-term sustainability. She was previously the CFO of JairoSolutions, LLC, where she played a key role in financial structuring and business growth before the company transitioned into Jairosoft. Her expertise in financial planning, resource allocation, and corporate strategy has contributed significantly to the company's success.

Beyond her role at Jairosoft, Marikriss is also the Founder and President of ColinaHealth, an organization dedicated to advancing healthcare and wellness solutions. Her passion for innovation in healthcare has driven ColinaHealth's mission to enhance patient care and improve health outcomes.

In addition to her leadership in finance and business, Marikriss is a Registered Nurse at Straub Medical Center, bringing her expertise in healthcare operations, patient care, and clinical management. Her unique combination of financial acumen and healthcare experience allows her to bridge the gap between business strategy and patient-centered solutions.

With a commitment to excellence, innovation, and leadership, Marikriss continues to drive transformational growth and impact across multiple industries.`
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
                          <button
                            onClick={() => setSelectedExecutive(executive)}
                            className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-medium rounded-lg p-4 transition-colors cursor-pointer"
                          >
                            Biography
                          </button>
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

      {/* Executive Biography Modal */}
      <Dialog open={selectedExecutive !== null} onOpenChange={() => setSelectedExecutive(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Executive Leadership
            </DialogTitle>
          </DialogHeader>
          {selectedExecutive && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{selectedExecutive.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedExecutive.name}
                  </h3>
                  <p className="text-lg text-red-600 font-medium">
                    {selectedExecutive.position}
                  </p>
                </div>
              </div>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedExecutive.biography}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ExecutiveLeadership;
