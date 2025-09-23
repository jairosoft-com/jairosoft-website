import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";
import PageHeader from "@/components/ui/PageHeader";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Building2, Globe } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = React.useState({
    subject: "",
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    message: "",
    agreeToPolicy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const offices = [
    {
      country: "🇺🇸 California, USA",
      address: "12584 Luna Road, Victorville CA 92392",
      type: "Headquarters",
    },
    {
      country: "🇺🇸 Hawaii, USA",
      address: "1050 Queen Street #100 Honolulu, HI 96814 USA",
      type: "Regional Office",
    },
    {
      country: "🇵🇭 Cebu, Philippines",
      address: "1049 M.J Cuenco Avenue Mabolo Cebu City 6000",
      type: "Development Center",
    },
    {
      country: "🇵🇭 Davao City, Philippines",
      address: "Holy Trinity Avenue, Holy Trinity Village, Cabantian 8000",
      type: "Development Center",
    },
  ];

  const subjectOptions = [
    "Sitecore Implementation & Services",
    "Lean-Thinking & Agile Software Methodology",
    "Low-Code/No-Code Development",
    "Nearshore/Offshore/Multi-shore",
    "AI and Machine Learning",
    "Platform Engineering",
    "General Inquiry",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <StickyHeader alwaysVisible />
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team for all your software development needs"
        backgroundType="pattern"
        icon={<Mail className="h-8 w-8" />}
        badges={[
          { text: "Global Presence", variant: "default" },
          { text: "24/7 Support", variant: "secondary" },
        ]}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollAnimated>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Use our contact form for all information requests or contact
                  us directly using the contact information below. Feel free to
                  get in touch with us via email or phone.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Phone className="h-5 w-5 text-red-600" />
                  Phone Contact
                </h3>
                <p className="text-lg text-gray-700">📞 +1 (800) 881-8949</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  Our Global Offices
                </h3>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">
                            {office.country}
                          </h4>
                          <Badge variant="outline" className="text-xs">
                            {office.type}
                          </Badge>
                        </div>
                        <p className="text-gray-600">{office.address}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimated>

          <ScrollAnimated delay={200}>
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Mail className="h-5 w-5 text-red-600" />
                Contact Form
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) =>
                      setFormData({ ...formData, subject: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjectOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Your company name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+1 (000) 000-0000"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your project or inquiry..."
                    rows={4}
                    required
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="privacy"
                    checked={formData.agreeToPolicy}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, agreeToPolicy: !!checked })
                    }
                  />
                  <label
                    htmlFor="privacy"
                    className="text-sm text-gray-600 leading-relaxed"
                  >
                    I agree to have my information stored according to the
                    Privacy Policy.
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
                  disabled={!formData.agreeToPolicy}
                >
                  Submit
                </Button>
              </form>
            </div>
          </ScrollAnimated>
        </div>

        <ScrollAnimated delay={400}>
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
            <Globe className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Follow Us Online</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/jairosoft.inc"
                className="hover:text-blue-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/company/jairosoft-inc/"
                className="hover:text-blue-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/jairosoft_inc/"
                className="hover:text-blue-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <p className="mt-4 text-blue-100">Email: info@jairosoft.com</p>
          </div>
        </ScrollAnimated>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
