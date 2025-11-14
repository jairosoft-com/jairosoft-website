import React from "react";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";
import { Eye, Target, Heart, Users, Lightbulb, TrendingUp, Handshake } from "lucide-react";

const MissionVisionCulture: React.FC = () => {
  const visionPoints = [
    {
      title: "Core Vision Statement",
      points: [
        "Empower businesses and individuals by revolutionizing industries with cutting-edge AI technologies.",
        "Create intelligent, scalable, and intuitive software solutions that redefine the way we live and work across both government and private sectors.",
        "Seamlessly integrate artificial intelligence into everyday processes to unlock new levels of efficiency, innovation, and personalized experiences in both public and private enterprises."
      ]
    },
    {
      title: "Government & Public Sector Focus",
      points: [
        "Collaborate with government organizations to drive AI solutions for public services, policy-making, and societal benefits."
      ]
    },
    {
      title: "Private Sector Partnership", 
      points: [
        "Partner with private sector leaders to enhance business performance, innovation, and competitive advantage through AI-powered solutions."
      ]
    },
    {
      title: "Ethical Commitment",
      points: [
        "Foster ethical practices and a commitment to continuous learning in AI development.",
        "Drive the next generation of AI-powered transformation, enabling a smarter, more connected world for all sectors."
      ]
    },
    {
      title: "SAFe Framework Integration",
      points: [
        "Deliver high-quality and customer-centric products with efficiency by fostering collaboration, continuous improvement, and alignment across teams and business units by utilizing the SAFe framework.",
        "Using the SAFe frameworks, aim to scale agile practices across organization, ensuring consistent delivery of value, promoting team autonomy, and optimizing workflows to meet market demands and customer expectations."
      ]
    },
    {
      title: "Aloha Spirit",
      points: [
        "Built with Aloha! Create software solutions with care, respect and deep commitment to collaboration and quality. Fosters a culture of kindness, innovation, compassion, and continuous growth."
      ]
    }
  ];

  const cultureValues = [
    {
      emoji: "🤝",
      title: "Kindness",
      description: "Kind acts spread positivity and can inspire others to behave kindly, creating a ripple effect in communities and workplaces.",
      color: "bg-green-50 border-green-200"
    },
    {
      emoji: "🌺", 
      title: "Respect",
      description: "Recognizing and valuing the differences in others, whether it's their opinions, beliefs, or cultural backgrounds.",
      color: "bg-purple-50 border-purple-200"
    },
    {
      emoji: "💙",
      title: "Care", 
      description: "Being responsible for our actions and how they affect others, whether at home, work, or in the community.",
      color: "bg-blue-50 border-blue-200"
    },
    {
      emoji: "💡",
      title: "Innovation",
      description: "Thrives in environments where new ideas are welcomed, and creativity is nurtured. Rather than fearing change, innovation involves embracing it and seeing it as an opportunity for improvement, evolution, and adaptation.",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      emoji: "🤗",
      title: "Compassion",
      description: "Encourages individuals to act with care and understanding toward others' challenges and struggles. Help foster environments where people feel safe, heard, and understood.",
      color: "bg-pink-50 border-pink-200"
    },
    {
      emoji: "🌊",
      title: "Fostering Connection",
      description: "People feel valued and appreciated when treated with kindness, leading to stronger and more meaningful relationships.",
      color: "bg-cyan-50 border-cyan-200"
    },
    {
      emoji: "📈",
      title: "Continuous Growth", 
      description: "Actively help others grow, learn, and develop by offering guidance and constructive feedback.",
      color: "bg-orange-50 border-orange-200"
    }
  ];

  return (
    <>
      <StickyHeader alwaysVisible />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <PageHeader
          title="Our Mission, Vision & Culture"
          subtitle="Built with Aloha! Creating software solutions with care, respect, and deep commitment to collaboration and quality."
          backgroundType="gradient" 
          accentColor="red"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Eye className="h-5 w-5 text-blue-300" />
              <span className="text-white font-medium">Vision-Driven</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Target className="h-5 w-5 text-green-300" />
              <span className="text-white font-medium">Mission-Focused</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Heart className="h-5 w-5 text-pink-300" />
              <span className="text-white font-medium">Aloha Culture</span>
            </div>
          </div>
        </PageHeader>

        {/* Our Vision */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-blue-600 mr-3" />
                  Our Vision
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                  Empowering businesses and revolutionizing industries with cutting-edge AI technologies
                </p>
              </div>

              <div className="space-y-8">
                {visionPoints.map((section, index) => (
                  <ScrollAnimated 
                    key={index} 
                    animation="fadeInUp" 
                    delay={index * 0.1}
                  >
                    <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>
                      <ul className="space-y-3">
                        {section.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollAnimated>
                ))}
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 px-6 bg-gradient-to-br from-red-50 to-blue-50">
          <div className="container mx-auto max-w-4xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                  <Target className="h-8 w-8 text-red-600 mr-3" />
                  Our Mission
                </h2>
                
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our mission is to provide sustainable <strong className="text-red-600">livelihood</strong> through 
                    the power of <strong className="text-blue-600">technology</strong> by creating <strong className="text-green-600">innovative solutions</strong> that 
                    solve complex problems and deliver tangible <strong className="text-purple-600">business value</strong>. 
                    We aim to positively impact both <strong className="text-orange-600">businesses</strong> and <strong className="text-pink-600">communities</strong> by 
                    seamlessly integrating <strong className="text-indigo-600">AI</strong> into operations, driving growth, 
                    and fostering collaboration. Through the <strong className="text-teal-600">SAFe</strong> framework, 
                    we align teams, optimize processes, and continuously improve our ability to deliver solutions 
                    that benefit customers, vendors, and society as a whole.
                  </p>
                </div>
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Aloha Culture */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-pink-600 mr-3" />
                  Aloha Culture
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                  Our company culture is built on the foundation of Aloha values
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cultureValues.map((value, index) => (
                  <ScrollAnimated 
                    key={index} 
                    animation="fadeInUp" 
                    delay={index * 0.1}
                    className="h-full"
                  >
                    <div className={`${value.color} rounded-xl p-6 border-2 h-full flex flex-col`}>
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-2">{value.emoji}</div>
                        <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-grow">{value.description}</p>
                    </div>
                  </ScrollAnimated>
                ))}
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Company Expertise */}
        <section className="py-20 px-6 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">
                  About Jairosoft
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Highly competent Agile Teams delivering end-to-end implementation
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-8">
                <p className="text-gray-300 leading-relaxed mb-8">
                  Jairosoft is comprised of highly competent Agile Teams with Sitecore certified architects, 
                  project managers, full-stack and software test developers that will focus on end-to-end implementation. 
                  We are teams of experts in requirements gathering and analysis, written Use Case and Stories, 
                  used TFS for managing projects in Agile/SCRUM methodology, and currently implementing SAFe.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">Expert Teams</h3>
                    <p className="text-gray-400 text-sm">Agile & SAFe certified professionals</p>
                  </div>
                  <div className="text-center">
                    <Lightbulb className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
                    <p className="text-gray-400 text-sm">Cutting-edge technologies & practices</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">Quality</h3>
                    <p className="text-gray-400 text-sm">TDD, Unit Testing, Selenium IDE</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Our developers are versatile in web development technologies including WebAPI, JSON, ASP.NET Framework, 
                  ASP.Net Core, C#, Azure Cloud, XML, HTML, JavaScript, CSS, Angular JS, and Knockout JS. 
                  Well-experienced in Software Design and Architecture including Object-Oriented Analysis and Design, 
                  Design Patterns, Domain-Driven Design, SOLID Principles, and N-Tier design.
                </p>
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-6 bg-red-600">
          <div className="container mx-auto max-w-4xl text-center">
            <ScrollAnimated animation="fadeInUp">
              <h2 className="text-3xl font-bold text-white mb-6">
                Experience Our Aloha Culture
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Join our team or partner with us to experience the power of kindness, innovation, and continuous growth.
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Partner With Us
              </a>
            </ScrollAnimated>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MissionVisionCulture;