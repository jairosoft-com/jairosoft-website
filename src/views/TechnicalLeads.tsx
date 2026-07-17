"use client";

import React, { useState } from "react";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";
import { Code, Cog, CheckCircle, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const TechnicalLeads: React.FC = () => {
  const [selectedLead, setSelectedLead] = useState<
    (typeof technicalLeads)[0] | null
  >(null);

  const technicalLeads = [
    {
      name: "Karl Jordan Caumban",
      position: "Agile Project Manager",
      image: "/images/team/karl-caumban.jpg",
      icon: "👨‍💼",
      biography: `Agile Project Manager/PMO Manager/VMO

Karl Jordan Caumban is a highly accomplished technical project leader with over 15 years of experience in ICT, telecommunications, and engineering. He specializes in agile project management, SAFe, Scrum, and Waterfall methodologies, successfully leading complex technology projects across industries.

Currently, he serves as an Agile Project Manager (PMO/VMO) at Jairosoft, Inc., where he oversees project scope, timelines, and stakeholder engagement while promoting agile best practices. Previously, he held key roles at Saipem, Netcom Africa Limited, Globe Telecom, and Philippine Long Distance Telephone Company, leading ICT site projects, technical solutions, and enterprise-wide technology implementations.

Karl holds a Bachelor's degree in Electronics and Communications Engineering from Adamson University and multiple certifications, including PMP®, Certified SAFe® 6 Agilist, and Cisco Certified Network Professional. His expertise in AI, Microsoft Azure, and Power Platform further strengthens his ability to drive digital transformation in global organizations.`,
    },
    {
      name: "John Paul Catubig",
      position: "Product Manager",
      image: "/images/team/john-paul-catubig.jpg",
      icon: "👨‍💼",
      biography: `Product Manager | Product Owner | Agile Expert

John Paul Catubig is a versatile technology leader with over 12 years of experience in product management, solution architecture, and software development. He has successfully transitioned from hands-on development to leading product strategies for enterprise software, AI solutions, and commercial platforms.

Currently, he serves as a Product Manager/Product Owner at Jairosoft, Inc., since August 2023 where he drives product development and strategic initiatives. Previously, he spent nearly 12 years at Accenture, progressing through various roles, including Product Owner Associate Manager, Technical Architect, and Application Developer. His expertise spans SAFe, Scrum, Kanban Agile methodologies, and AI product development.

John Paul holds a Bachelor's degree in Computer Science from the University of the Philippines and has earned certifications such as Professional Scrum Product Owner™ I (PSPO I). With a strong background in product management, business analysis, and SQL, he continues to deliver high-impact solutions in global organizations.`,
    },
    {
      name: "Bomar Sinday",
      position: "Software Development Manager",
      image: "/images/team/bomar-sinday.jpg",
      icon: "👨‍💼",
      biography: `Engineering/Software Development Manager | Agile & Full-Stack Expert

Bomar Sinday is a seasoned IT professional with over 14 years of experience in software development, IT project management, and agile methodologies. He has a proven track record of leading cross-functional teams, driving software engineering excellence, and implementing strategic IT initiatives to enhance brand awareness and customer engagement.

He joined Jairosoft Inc. in November 2020 as a Senior Full Stack Developer and was later promoted to Software Development Manager in March 2023. Currently, he serves as the Engineering & Software Development Manager, overseeing technical teams, optimizing software development processes, and ensuring the successful delivery of high-quality applications. His leadership focuses on mentorship, agile transformation, and software architecture, particularly in Microservices and Micro Frontends.

He has held key roles as Senior Web Developer at Ratewise (Ireland), Team Lead at Maata Games BV (Netherlands), and Senior Programmer at Thinktank IT Doctors, where he played a pivotal role in architecting, coding, and managing software projects across global teams. His diverse technical expertise spans .NET, PHP, JavaScript frameworks (VueJS, Angular, React Native), Laravel, SQL, and network infrastructure.

Bomar holds a Bachelor’s degree in Information Technology from STI-Davao and has pursued additional studies in Cybersecurity at Harvard. He holds multiple technical certifications, including Visual Graphics Design (TESDA), Trainers Methodology Certification, and Sitecore Symposium 2024.`,
    },
    {
      name: "Adam Vincent Bernaldez",
      position: "Principal Software Supervisor",
      image: "/images/team/adam-bernaldez.png",
      icon: "👨‍💼",
      biography: `Principal Development Supervisor | Full Stack Developer | Agile Expert

Adam Bernaldez is a highly skilled Full Stack Developer with over 8 years of experience specializing in frontend (Vue, React, Angular) and backend (Node.js, PHP, C#) development. He is a Certified SAFe 6 Agilist, with extensive expertise in developing scalable web applications and implementing agile methodologies.

Adam joined Jairosoft Inc. in July 2022 as a Full Stack Developer, working on projects under Stevenson Systems and GoHealth Urgent Care. Due to his technical expertise and leadership skills, he was promoted to Principal Development Supervisor in March 2023. Currently, he serves as an onshore talent for Jairosoft LLC, overseeing project execution, leading development teams, and ensuring the seamless integration of software solutions.

Throughout his career, Adam has held senior technical leadership roles, leading the development of SaaS CRM platforms, real-time insurance verification systems, business analytics tools, and mobile applications. His experience spans cloud technologies (Azure, Kubernetes, Docker), microservices architecture, and agile development practices.

Adam holds a Bachelor of Science in Computer Science from the University of Mindanao and continues to drive innovation and efficiency in software development.`,
    },
    {
      name: "Ryan Vince Castillo",
      position: "Line Manager",
      image: "/images/team/ryan-castillo.jpg",
      icon: "👨‍💼",
      biography: `Line Manager | Software Developer

Ryan Vince Castillo is a results-driven Software Developer with over 7 years of experience specializing in full-stack development, backend services, and cloud-based applications. He has a strong passion for building scalable, modular, and maintainable software solutions, leveraging .NET, Node.js, Go, and cloud technologies like Azure and Docker.

Ryan joined Jairosoft Inc. in April 2021 as a Software Developer and, due to his exceptional technical expertise and leadership skills, was promoted to Line Manager in December 2024. In this role, he leads development teams in enterprise application development, secure authentication, database optimization, and cloud infrastructure management.

Before Jairosoft, he worked as a Computer Programmer at Marsman Drysdale Agribusiness Group and Southwood Mindanao Corporation, where he developed inventory systems, payroll solutions, and custom enterprise applications. Additionally, he has experience as a Freelance Web Developer, building dynamic websites using Wix, WordPress, and custom platforms.

Ryan holds a Bachelor of Science in Information Technology from the University of Southeastern Philippines and is proficient in clean architecture, microservices, event-driven design, and scalable software development. He has extensive experience in backend development, cloud solutions, and database management, with a strong emphasis on writing maintainable, high-performance code for enterprise applications.`,
    },
    {
      name: "Cindy Arrogancia",
      position: "QA Lead",
      image: "/images/team/cindy-arrogancia.png",
      icon: "👩‍💼",
      biography: `QA Lead | Software Quality Assurance Specialist

Cindy Arrogancia is a highly skilled Quality Assurance professional with over 10 years of experience in software testing, test automation, and agile methodologies. She has a strong background in functional testing, API testing, test planning, and bug diagnosis, ensuring the delivery of high-quality software solutions.

Cindy joined Jairosoft Inc. in March 2021 as a Quality Assurance Specialist and, due to her outstanding expertise and leadership skills, was promoted to QA Lead. In this role, she is responsible for task delegation, manual and automated testing, API security testing, regression testing, and load testing using JMeter. She collaborates closely with developers, product managers, and fellow QA engineers to ensure seamless testing and software quality assurance.

Prior to Jairosoft, Cindy gained extensive experience in quality assurance and project management at Accenture Inc. and ICOMM International Inc., where she worked as a Senior QA Engineer, Scrum Master, and Junior Project Manager. Her career has been marked by excellence, earning her multiple awards, including QA of the Year (2015 & 2016), Most Outstanding Project (2018), and Blocker Bug Queen (2022).

Cindy holds a Certificate in Systems and Network Administration from the University of San Carlos - Technological Center and is highly proficient in Azure DevOps, JIRA, agile methodologies, and software quality management.`,
    },
    {
      name: "Mary Grace Garcia",
      position: "Program Manager",
      image: "/images/team/mary-grace-garcia.jpg",
      icon: "👩‍💼",
      biography: `Program Manager | SAFe Practice Consultant | Agile Transformation Leader

Mary Grace Garcia is a Program Manager and Certified SAFe® 6 Practice Consultant with extensive experience in agile transformation, project administration, and enterprise program management. She has been instrumental in driving strategic initiatives, process improvements, and large-scale agile implementations within organizations.

Since January 2020, Mary Grace has been a Program Manager at Jairosoft Inc., where she oversees enterprise-wide projects, stakeholder engagement, and the execution of agile frameworks to optimize business performance. She also served as an Administrator until November 2023, further strengthening her expertise in operational management and agile methodologies.

Mary Grace holds a Bachelor of Arts major in Economics from Holy Cross of Davao College, equipping her with a strong foundation in economic analysis, business strategy, and financial planning. With a deep understanding of SAFe, agile best practices, and team collaboration, she continues to lead teams toward efficiency, scalability, and continuous improvement.`,
    },
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
              <span className="text-white font-medium">
                Technical Excellence
              </span>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Technical Leadership Team
                </h2>
                <p className="text-lg text-gray-600">
                  Certified experts driving innovation and ensuring highest
                  quality standards
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
                          <button
                            onClick={() => setSelectedLead(lead)}
                            className="w-full bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium rounded-lg p-3 transition-colors cursor-pointer text-xs"
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

        {/* Expertise Highlights */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Technical Expertise
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <Code className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Development Excellence
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Full-stack developers versed in modern technologies
                      including ASP.NET, C#, Angular, and cloud platforms.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <Users className="h-8 w-8 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Agile Leadership
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Certified Scrum Masters and SAFe practitioners leading
                      agile transformations.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Quality Assurance
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Expert QA leads ensuring quality through TDD, automated
                      testing, and continuous integration.
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
                Work with our certified experts to build innovative solutions
                that drive your business forward.
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Connect With Our Technical Team
              </a>
            </ScrollAnimated>
          </div>
        </section>
      </main>
      <Footer />

      {/* Technical Lead Biography Modal */}
      <Dialog
        open={selectedLead !== null}
        onOpenChange={() => setSelectedLead(null)}
      >
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Technical Leads & Certified Experts
            </DialogTitle>
          </DialogHeader>
          {selectedLead && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{selectedLead.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedLead.name}
                  </h3>
                  <p className="text-lg text-blue-600 font-medium">
                    {selectedLead.position}
                  </p>
                </div>
              </div>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedLead.biography}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TechnicalLeads;
