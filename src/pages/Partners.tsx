import React, { useState } from "react";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";
import { Handshake, Star, Code, Database, Cloud, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Partners: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<typeof premierPartners[0] | null>(null);

  const premierPartners = [
    {
      name: "Scaled Agile Partner",
      logo: "/images/partners/scaled-agile-partner.png",
      category: "Methodology",
      description: "Through our partnership with Scaled Agile, we deliver SAFe-certified coaching, implementation, and training, enabling enterprise agility and helping organizations scale lean practices for faster, more aligned delivery."
    },
    {
      name: "Sitecore Silver Partner",
      logo: "/images/partners/sitecore-silver-partner.png",
      category: "CMS Platform",
      description: "As a certified Sitecore Silver and Authorized Training Partner, we offer enterprise-grade digital experience solutions and official Sitecore training programs that empower teams to manage content, commerce, and personalization at scale."
    },
    {
      name: "Bubble.io",
      logo: "/images/partners/bubble.png",
      category: "No-Code Platform",
      description: "As a certified partner and official training provider for Bubble.io, we specialize in no-code/low-code development—building and teaching scalable web applications without the need for traditional programming."
    },
    {
      name: "JIT (Jairosoft IT Training)",
      logo: "/images/partners/jit.png",
      category: "Training & Development",
      description: "JIT is Jairosoft's official training and talent development arm. Based in the Philippines, JIT cultivates skilled professionals in software development, Sitecore, Agile methodologies, and no-code platforms."
    },
    {
      name: "AWS",
      logo: "/images/partners/aws.png",
      category: "Cloud Services",
      description: "We utilize AWS to architect secure, scalable, and high-performance cloud solutions—from infrastructure to AI/ML models—ensuring fast and reliable digital services for government and enterprise clients."
    },
    {
      name: "Microsoft",
      logo: "/images/partners/microsoft.png",
      category: "Cloud & Development",
      description: "We integrate Microsoft's cloud and enterprise tools—including Azure and Microsoft 365—to deliver powerful solutions that drive collaboration, performance, and security."
    },
    {
      name: "Google Partner",
      logo: "/images/partners/google-partner.png",
      category: "Cloud Services",
      description: "Our Google partnership allows us to leverage cloud computing, AI, and productivity tools to build smart, scalable platforms and enhance performance with advanced analytics and machine learning."
    },
    {
      name: "ANY Inc",
      logo: "/images/partners/any-inc.png",
      category: "Innovation Partner",
      description: "In partnership with Any Inc., a global innovation and product studio, Jairosoft collaborates on forward-thinking digital solutions and creative technologies."
    }
  ];

  // Technology & Solution Partners - Exact order from live site
  const technologyPartners = [
    { name: "Alberta Cannabis", logo: "/images/partners/alberta-cannabis.png" },
    { name: "SAFe", logo: "/images/partners/safe.png" },
    { name: "Sitecore", logo: "/images/partners/sitecore.png" },
    { name: "Bubble Bronze Agency Partner", logo: "/images/partners/bubble-bronze.png" },
    { name: "Colina Health", logo: "/images/partners/colina-health.png" },
    { name: "Hawaiian Airlines", logo: "/images/partners/hawaiian-airlines.png" },
    { name: "Dignity Health", logo: "/images/partners/dignity-health.png" },
    { name: "Doylestown Health", logo: "/images/partners/doylestown-health.png" },
    { name: "First Republic Bank", logo: "/images/partners/first-republic-bank.png" },
    { name: "Gilead", logo: "/images/partners/gilead.png" },
    { name: "GoHealth", logo: "/images/partners/gohealth.png" },
    { name: "HomeFundMe", logo: "/images/partners/homefundme.png" },
    { name: "Penn Medicine", logo: "/images/partners/penn.png" },
    { name: "P&G", logo: "/images/partners/pg.png" },
    { name: "Spring Boot", logo: "/images/partners/spring-boot.png" },
    { name: "Redis", logo: "/images/partners/redis.png" },
    { name: "Hege Saxeide", logo: "/images/partners/hege-saxeide.png" },
    { name: "Oracle Database", logo: "/images/partners/oracle.png" },
    { name: "Python", logo: "/images/partners/python.png" },
    { name: "React", logo: "/images/partners/react.png" },
    { name: "Docker", logo: "/images/partners/docker.png" },
    { name: "Swapulous", logo: "/images/partners/swapulous.png" },
    { name: "VITAS Healthcare", logo: "/images/partners/vitas.png" },
    { name: "Apache Kafka", logo: "/images/partners/kafka.png" },
    { name: "Java", logo: "/images/partners/java.png" },
    { name: "Hyperlink", logo: "/images/partners/hyperlink.png" },
    { name: "Kubernetes", logo: "/images/partners/kubernetes.png" },
    { name: "M (MUMPS)", logo: "/images/partners/m.png" },
    { name: "Modus", logo: "/images/partners/modus.png" },
    { name: "Molina Healthcare", logo: "/images/partners/molina-healthcare.png" },
    { name: "Mentis", logo: "/images/partners/mentis.png" },
    { name: "MongoDB", logo: "/images/partners/mongodb.png" },
    { name: "NASA", logo: "/images/partners/nasa.png" },
    { name: "Node.js", logo: "/images/partners/nodejs.png" },
    { name: "AngularJS", logo: "/images/partners/angular.png" },
    { name: "Cannondale", logo: "/images/partners/cannondale.png" },
    { name: "TruSpace", logo: "/images/partners/truspace.png" },
    { name: "SIH", logo: "/images/partners/sih.png" },
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
                    <div 
                      onClick={() => setSelectedPartner(partner)}
                      className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all cursor-pointer hover:scale-105"
                    >
                      <div className="flex items-center justify-center mb-4 h-20">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="max-h-16 w-auto object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.innerHTML = `<div class="text-4xl font-bold text-gray-300">${partner.name.charAt(0)}</div>`;
                          }}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                      <p className="text-sm text-blue-600 font-medium">{partner.category}</p>
                      <p className="text-xs text-gray-500 mt-2">Click for details</p>
                    </div>
                  </ScrollAnimated>
                ))}
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Technology & Solution Partners */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology & Solution Partners</h2>
                <p className="text-lg text-gray-600">
                  The technologies, platforms, and organizations we collaborate with to deliver comprehensive solutions
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {technologyPartners.map((partner, index) => (
                  <ScrollAnimated 
                    key={index} 
                    animation="fadeInUp" 
                    delay={index * 0.05}
                  >
                    <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                      <div className="flex items-center justify-center h-16 mb-2">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="max-h-12 w-auto object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.innerHTML = `<div class="text-2xl font-bold text-gray-300">${partner.name.charAt(0)}</div>`;
                          }}
                        />
                      </div>
                      <p className="text-xs font-medium text-gray-700">{partner.name}</p>
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

      {/* Partner Detail Modal */}
      <Dialog open={selectedPartner !== null} onOpenChange={() => setSelectedPartner(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Premier Partners
            </DialogTitle>
          </DialogHeader>
          {selectedPartner && (
            <div className="space-y-6">
              <div className="flex items-center justify-center py-6 bg-gray-50 rounded-lg">
                <img
                  src={selectedPartner.logo}
                  alt={`${selectedPartner.name} logo`}
                  className="max-h-24 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedPartner.name}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-4">
                  {selectedPartner.category}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {selectedPartner.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Partners;
