import React from "react";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";
import { MapPin, Globe, Building, Heart, Users, Zap, Home } from "lucide-react";

const Locations: React.FC = () => {
  const offices = [
    {
      country: "🏢",
      name: "California, USA",
      address: "12584 Luna Road Victorville, California 92392",
      description:
        "Located in the peaceful city of Victorville, California, our Jairosoft office offers a unique home-like ambiance that sets it apart. Designed to feel welcoming and comfortable, the space blends professional functionality with the warmth of a home environment—making it easy to focus, collaborate, and feel at ease.",
      images: [
        "/images/locations/california-1.png",
        "/images/locations/california-2.png",
        "/images/locations/california-3.png",
      ],
    },
    {
      country: "🏝️",
      name: "Hawaii, USA",
      address: "1050 Queen St Suite 100, Honolulu, HI 96814",
      description:
        "Our Jairosoft Hawaii office is located within a dynamic co-working space that reflects the energy and creativity of the islands. Surrounded by like-minded professionals and innovative startups, the environment encourages collaboration, fresh ideas, and flexible workstyles.",
      images: [
        "/images/locations/hawaii-1.jpg",
        "/images/locations/hawaii-2.jpg",
        "/images/locations/hawaii-3.jpg",
      ],
    },
    {
      country: "🏙️",
      name: "Cebu, Philippines",
      address: "1049 M.J. Cuenco Avenue Mabolo Cebu City, 6000",
      description:
        "Strategically located in the heart of Cebu City, the Jairosoft office offers the perfect balance of accessibility and convenience. Surrounded by key business hubs, dining spots, and transportation links, our location puts us right where the action is.",
      images: [
        "/images/locations/cebu-1.jpg",
        "/images/locations/cebu-2.jpg",
        "/images/locations/cebu-3.jpg",
      ],
    },
    {
      country: "🌿",
      name: "Davao, Philippines",
      address:
        "Holy Trinity Avenue, Holy Trinity Village, Cabantian Davao City, 8000",
      description:
        "Nestled in the heart of Davao, the Jairosoft office embodies a perfect balance of nature and contemporary design. Surrounded by lush greenery, our workspace offers a refreshing environment that fosters creativity, productivity, and well-being.",
      images: [
        "/images/locations/california-1.png",
        "/images/locations/california-2.png",
        "/images/locations/california-3.png",
      ],
    },
  ];

  return (
    <>
      <StickyHeader alwaysVisible />
      <main className="min-h-screen bg-white">
        <PageHeader
          title="Our Locations"
          subtitle="Experts in design, technology and organizational transformation with strategically located offices creating inspiring work environments."
          backgroundType="gradient"
          accentColor="red"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Globe className="h-5 w-5 text-blue-300" />
              <span className="text-white font-medium">Global Presence</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Building className="h-5 w-5 text-green-300" />
              <span className="text-white font-medium">4 Offices</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Heart className="h-5 w-5 text-pink-300" />
              <span className="text-white font-medium">Inspiring Spaces</span>
            </div>
          </div>
        </PageHeader>

        {/* Introduction */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Offices
                </h2>
                <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-xl p-8 border border-gray-100">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We're experts in design, technology and organizational
                    transformation. Jairosoft operates globally with
                    strategically located offices that reflect our commitment to
                    innovation, collaboration, and creating inspiring work
                    environments.
                  </p>
                </div>
              </div>
            </ScrollAnimated>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="space-y-16">
                {offices.map((office, index) => (
                  <ScrollAnimated
                    key={index}
                    animation="fadeInUp"
                    delay={index * 0.2}
                  >
                    <div
                      className={`flex flex-col ${
                        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                      } gap-8 items-center`}
                    >
                      {/* Content */}
                      <div className="flex-1 space-y-6">
                        <div className="text-center lg:text-left">
                          <div className="text-4xl mb-2">{office.country}</div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center lg:justify-start">
                            <MapPin className="h-6 w-6 text-red-600 mr-2" />
                            {office.name}
                          </h3>
                          <p className="text-gray-600 font-medium mb-4">
                            {office.address}
                          </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            Description
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            {office.description}
                          </p>
                        </div>

                        {office.name.includes("California") && (
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <div className="flex items-start">
                              <Home className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                              <p className="text-blue-800 text-sm">
                                <strong>Home-like ambiance:</strong> Comfort
                                fuels creativity—our home-inspired office is
                                built just for that.
                              </p>
                            </div>
                          </div>
                        )}

                        {office.name.includes("Hawaii") && (
                          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                            <div className="flex items-start">
                              <Users className="h-5 w-5 text-cyan-600 mt-0.5 mr-2 flex-shrink-0" />
                              <p className="text-cyan-800 text-sm">
                                <strong>Co-working energy:</strong> Where remote
                                work meets community, blending work with the
                                spirit of aloha.
                              </p>
                            </div>
                          </div>
                        )}

                        {office.name.includes("Cebu") && (
                          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                            <div className="flex items-start">
                              <Zap className="h-5 w-5 text-orange-600 mt-0.5 mr-2 flex-shrink-0" />
                              <p className="text-orange-800 text-sm">
                                <strong>City pulse:</strong> Right where the
                                action is—energized by the vibrant city
                                atmosphere.
                              </p>
                            </div>
                          </div>
                        )}

                        {office.name.includes("Davao") && (
                          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <div className="flex items-start">
                              <Heart className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                              <p className="text-green-800 text-sm">
                                <strong>Nature meets technology:</strong> Where
                                technology and nature thrive together in perfect
                                harmony.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Images */}
                      <div className="flex-1">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-4">
                            <img
                              src={office.images[0]}
                              alt={`${office.name} office main view`}
                              className="w-full h-48 object-cover rounded-lg shadow-md"
                            />
                            <img
                              src={office.images[1]}
                              alt={`${office.name} office interior`}
                              className="w-full h-32 object-cover rounded-lg shadow-md"
                            />
                          </div>
                          <div className="mt-8">
                            <img
                              src={office.images[2]}
                              alt={`${office.name} office workspace`}
                              className="w-full h-40 object-cover rounded-lg shadow-md"
                            />
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

        {/* Global Stats */}
        <section className="py-20 px-6 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimated animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Global Excellence
                </h2>
                <p className="text-lg text-gray-300">
                  Delivering world-class solutions from every corner of our
                  network
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">4</div>
                  <p className="text-gray-300">Office Locations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">2</div>
                  <p className="text-gray-300">Countries</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    24/7
                  </div>
                  <p className="text-gray-300">Global Support</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    ∞
                  </div>
                  <p className="text-gray-300">Innovation Potential</p>
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
                Visit Our Offices
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Experience our inspiring work environments and meet our teams
                around the world.
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule a Visit
              </a>
            </ScrollAnimated>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Locations;
