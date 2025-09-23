import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";
import PageHeader from "@/components/ui/PageHeader";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import {
  FileText,
  Shield,
  Globe,
  Lock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Mail,
  MapPin,
  Calendar,
  Scale
} from "lucide-react";

const TermsAndConditions = () => {
  const sections = [
    {
      number: "1",
      title: "Acceptance of Terms",
      icon: <CheckCircle className="h-5 w-5" />,
      content: (
        <div className="space-y-3">
          <p>By using this Website, you:</p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Confirm that you are at least <strong>18 years old</strong> or have parental consent.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Agree to <strong>comply with all applicable laws and regulations</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Accept these Terms, along with our <strong>Privacy Policy</strong> and <strong>Cookie Policy</strong>.</span>
            </li>
          </ul>
          <p>Jairosoft reserves the right to modify or update these Terms at any time. Continued use after changes signifies your acceptance.</p>
        </div>
      )
    },
    {
      number: "2",
      title: "Website Use & Restrictions",
      icon: <Shield className="h-5 w-5" />,
      content: (
        <div className="space-y-3">
          <p>You may use this Website <strong>only for lawful purposes</strong> and in compliance with these Terms.</p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
              <XCircle className="h-4 w-4" />
              🚫 You May Not:
            </h4>
            <ul className="space-y-1 text-red-700">
              <li>- Use the Website for <strong>fraudulent or illegal activities</strong>.</li>
              <li>- Attempt to <strong>hack, interfere, or disrupt</strong> our systems.</li>
              <li>- Copy, modify, or redistribute content <strong>without permission</strong>.</li>
              <li>- Use automated bots, scrapers, or software to access our data.</li>
              <li>- Impersonate Jairosoft, its employees, or third-party partners.</li>
            </ul>
          </div>
          <p>Violation of these Terms may result in <strong>immediate termination</strong> of access and legal action.</p>
        </div>
      )
    },
    {
      number: "3",
      title: "Intellectual Property Rights",
      icon: <Lock className="h-5 w-5" />,
      content: (
        <div className="space-y-3">
          <p>All content, trademarks, logos, text, images, software, and materials on this Website are the intellectual property of Jairosoft or its licensors.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                ✔ Permitted Uses:
              </h4>
              <p className="text-green-700">You may <strong>view, download, and print materials</strong> for personal, non-commercial use.</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                <XCircle className="h-4 w-4" />
                🚫 Prohibited Uses:
              </h4>
              <p className="text-red-700">Copying, reproducing, modifying, or distributing content <strong>without written consent</strong>.</p>
            </div>
          </div>
          <p>Unauthorized use of our intellectual property <strong>may result in legal action</strong>.</p>
        </div>
      )
    },
    {
      number: "4",
      title: "Products & Services",
      icon: <Globe className="h-5 w-5" />,
      content: (
        <div className="space-y-3">
          <p>Jairosoft provides <strong>custom software development, IT solutions, cybersecurity, and cloud computing services</strong>.</p>
          <p>All services are subject to:</p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Individual <strong>agreements and contracts</strong> for business clients.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Availability based on <strong>contracting terms, licensing, and compliance regulations</strong>.</span>
            </li>
          </ul>
          <p>Jairosoft reserves the right to <strong>modify, discontinue, or update services</strong> without prior notice.</p>
        </div>
      )
    },
    {
      number: "5",
      title: "Third-Party Links & External Websites",
      icon: <Globe className="h-5 w-5" />,
      content: (
        <div className="space-y-3">
          <p>Our Website may contain <strong>links to third-party websites</strong> for convenience.</p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Jairosoft does not control third-party content and is <strong>not responsible for their privacy policies or terms</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Clicking on third-party links <strong>is at your own risk</strong>.</span>
            </li>
          </ul>
          <p>We recommend reviewing <strong>external website policies</strong> before engaging with them.</p>
        </div>
      )
    },
    {
      number: "6",
      title: "Disclaimer of Warranties",
      icon: <AlertTriangle className="h-5 w-5" />,
      content: (
        <div className="space-y-3">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-800 mb-2">We Do Not Guarantee:</h4>
            <ul className="space-y-1 text-yellow-700">
              <li>❌ That the Website will always be error-free, uninterrupted, or secure.</li>
              <li>❌ That information provided is always accurate, complete, or up to date.</li>
              <li>❌ That files or downloads from our Website will be free of viruses or malware.</li>
            </ul>
          </div>
          <p>To the fullest extent permitted by law, <strong>Jairosoft disclaims all warranties, express or implied</strong>.</p>
        </div>
      )
    },
    {
      number: "7",
      title: "Limitation of Liability",
      icon: <Shield className="h-5 w-5" />,
      content: (
        <div className="space-y-3">
          <p>To the maximum extent permitted by law, Jairosoft <strong>shall not be liable for:</strong></p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
              <span>Any <strong>indirect, incidental, punitive, or consequential damages</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
              <span><strong>Loss of data, profits, business opportunities, or reputation</strong> resulting from the use of our Website or services.</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
              <span>Unauthorized access, hacking, or data breaches affecting user information.</span>
            </li>
          </ul>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Liability Cap:</h4>
            <p className="text-blue-700">If Jairosoft is found liable for damages, the total compensation shall <strong>not exceed $100 USD</strong>.</p>
          </div>
        </div>
      )
    },
    {
      number: "8",
      title: "Privacy & Data Protection",
      icon: <Lock className="h-5 w-5" />,
      content: (
        <div className="space-y-3">
          <p>Your use of this Website is also governed by our <strong>Privacy Policy</strong>, which outlines:</p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>How we collect, store, and use your data.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Your rights under <strong>GDPR, CCPA, and other data protection laws</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>How to opt out of marketing communications.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      number: "9",
      title: "Compliance & Legal Requirements",
      icon: <Scale className="h-5 w-5" />,
      content: (
        <div className="space-y-3">
          <p>Jairosoft complies with federal, state, and international regulations, including:</p>
          <div className="grid gap-3">
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold">General Data Protection Regulation (GDPR)</span>
                <span className="text-gray-600"> – Protects EU user data.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold">California Consumer Privacy Act (CCPA)</span>
                <span className="text-gray-600"> – Provides California residents with data rights.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold">Federal Information Security Management Act (FISMA)</span>
                <span className="text-gray-600"> – Ensures federal system security.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold">Cybersecurity Maturity Model Certification (CMMC)</span>
                <span className="text-gray-600"> – Required for U.S. defense contractors.</span>
              </div>
            </div>
          </div>
          <p>If you have <strong>privacy or legal concerns</strong>, please contact <a href="mailto:info@jairosoft.com" className="text-blue-600 hover:underline font-semibold">info@jairosoft.com</a></p>
        </div>
      )
    },
    {
      number: "10",
      title: "Governing Law & Dispute Resolution",
      icon: <Scale className="h-5 w-5" />,
      content: (
        <div className="space-y-3">
          <p>These Terms are governed by the laws of <strong>State of California, USA</strong>, without regard to conflicts of law principles.</p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">✔ Dispute Resolution:</h4>
            <ol className="space-y-2 text-blue-700 list-decimal list-inside">
              <li>First, we will attempt to <strong>resolve disputes informally</strong>.</li>
              <li>If a resolution cannot be reached, any disputes shall be <strong>exclusively resolved through binding arbitration</strong> conducted in <strong>San Bernardino County, California</strong>.</li>
              <li>By using this Website, you agree to <strong>waive your right to participate in class action lawsuits, jury trials, or other proceedings</strong> against Jairosoft.</li>
            </ol>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <StickyHeader alwaysVisible />
      <PageHeader
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our website and services"
        backgroundType="gradient"
        accentColor="blue"
        breadcrumb="Legal"
      />

      <div className="container mx-auto px-4 py-16">

        {/* Header Information */}
        <ScrollAnimated>
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-900">
                  <FileText className="h-6 w-6" />
                  Jairosoft Terms & Conditions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span><strong>Effective Date:</strong> 6th May 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span><strong>Last Updated:</strong> 6th May 2025</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white rounded-lg border border-blue-200">
                  <p className="text-gray-700">
                    Welcome to <strong>Jairosoft</strong> ("Company," "we," "us," or "our"). These <strong>Terms and Conditions</strong> ("Terms")
                    govern your access to and use of <a href="https://jairosoft.com/" className="text-blue-600 hover:underline">https://jairosoft.com/</a> (the "Website")
                    and any related services provided by Jairosoft.
                  </p>
                  <p className="mt-3 text-gray-700">
                    By accessing or using our Website, services, or products, you agree to these Terms. If you <strong>do not agree</strong>,
                    please do not use our Website.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimated>

        {/* Terms Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <ScrollAnimated key={section.number} delay={index * 100}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-900">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full text-sm font-bold">
                      {section.number}
                    </div>
                    <div className="text-blue-600">
                      {section.icon}
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-700 leading-relaxed">
                    {section.content}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimated>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="max-w-4xl mx-auto space-y-6 mt-8">
          <ScrollAnimated>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full text-sm font-bold">11</div>
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  Termination & Account Suspension
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-700">
                  <p>Jairosoft may <strong>suspend or terminate</strong> your access to the Website if you:</p>
                  <ul className="space-y-1 ml-4">
                    <li>🚫 Violate these Terms.</li>
                    <li>🚫 Engage in fraudulent or illegal activity.</li>
                    <li>🚫 Harm Jairosoft's reputation, security, or business operations.</li>
                  </ul>
                  <p>Termination may occur <strong>without prior notice</strong>, at our sole discretion.</p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimated>

          <ScrollAnimated>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full text-sm font-bold">15</div>
                  <Mail className="h-5 w-5 text-blue-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700">
                  <p>For any questions about these Terms & Conditions, please contact:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <div>
                        <span className="font-semibold">Email:</span>
                        <br />
                        <a href="mailto:info@jairosoft.com" className="text-blue-600 hover:underline">info@jairosoft.com</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <div>
                        <span className="font-semibold">Address:</span>
                        <br />
                        <span>12584 Luna Rd, Victorville, CA 92392</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimated>
        </div>

        {/* Call to Action */}
        <ScrollAnimated delay={400}>
          <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
            <FileText className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Questions About Our Terms?</h3>
            <p className="text-lg mb-6 text-blue-100">
              Our legal team is here to help clarify any questions about these terms and conditions.
            </p>
            <a href="/contact-us">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </button>
            </a>
          </div>
        </ScrollAnimated>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;