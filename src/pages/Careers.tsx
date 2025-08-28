import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollAnimated } from "@/components/ui/ScrollAnimated";
import PageHeader from "@/components/ui/PageHeader";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Building, 
  Search, 
  FileText, 
  GraduationCap,
  User,
  Mail,
  Upload,
  Calendar
} from "lucide-react";

const Careers = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [employmentForm, setEmploymentForm] = React.useState({
    firstName: "",
    lastName: "",
    position: "",
    specificRequest: "",
    email: "",
    authorizationFile: null,
    agreeToPolicy: false
  });
  const [internshipForm, setInternshipForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    school: "",
    course: "",
    renderTimeHours: "",
    attachedFile: null,
    ojtCoordinatorName: "",
    ojtCoordinatorEmail: "",
    agreeToPolicy: false
  });

  const jobOpenings = [
    {
      title: "ENTERPRISE SOLUTIONS ARCHITECT",
      location: "California",
      type: "Full Time",
      posted: "2 months ago",
      company: "Jairosoft LLC",
      description: "Drive forward specific areas of technology architecture. Provide architectural solutions/designs to project execution teams for implementation. Design, engineering, reuse, application of patterns, and create Enabler Epics for the architectures that comprise the solutions in a portfolio.",
      requirements: "Bachelor's degree in Computer Science, Information Technology, Computer Engineering, or related field, plus two (2) years of software engineering experience architecting and developing Sitecore end-to-end solutions.",
      skills: "Sitecore DMS and ECM; Security Administration; System Administration; ASP.NET Framework; xDB; and Unicorn and Team Development for Sitecore (TDS).",
      contact: "Send CV to: HR, Jairosoft LLC, 12584 Luna Road, Victorville, CA 92392."
    },
    {
      title: "Marketing Officer (Onsite)",
      location: "Davao",
      type: "Full Time",
      posted: "4 months ago",
      company: "Jairosoft Inc",
      description: "Respond promptly to student inquiries via email, phone, chat, or social media channels. Assist prospective students in understanding program requirements and benefits.",
      requirements: "Bachelor's degree in Marketing, Communications, or related field.",
      skills: "Digital marketing, social media management, customer service excellence.",
      contact: "Apply through our website or contact HR at hr@jairosoft.com"
    },
    {
      title: "HR Officer (Onsite)",
      location: "Davao",
      type: "Full Time",
      posted: "11 months ago",
      company: "Jairosoft Inc",
      description: "We are looking to employ an HR officer with excellent communication skills, both written and verbal. Expected to be knowledgeable with employment law and HR best practices.",
      requirements: "Bachelor's degree in Human Resources, Psychology, or related field.",
      skills: "HR policies, recruitment, employee relations, compliance.",
      contact: "Apply through our website or contact HR at hr@jairosoft.com"
    },
    {
      title: "Finance Officer (Onsite)",
      location: "Davao",
      type: "Full Time",
      posted: "11 months ago",
      company: "Jairosoft Inc",
      description: "The Finance Officer will be responsible for overseeing the financial activities of the organization, ensuring accurate financial records, preparing financial reports.",
      requirements: "Bachelor's degree in Finance, Accounting, or related field.",
      skills: "Financial analysis, budgeting, accounting software, compliance.",
      contact: "Apply through our website or contact HR at hr@jairosoft.com"
    },
    {
      title: "IT Recruiter",
      location: "Davao",
      type: "Full Time",
      posted: "1 year ago",
      company: "Jairosoft Inc",
      description: "Collaborate with clients and teams to understand the latest candidate requirements. Develop a well-structured recruitment strategy. Write compelling job descriptions.",
      requirements: "Bachelor's degree in Human Resources, Business, or related field.",
      skills: "Technical recruitment, candidate sourcing, interview coordination.",
      contact: "Apply through our website or contact HR at hr@jairosoft.com"
    }
  ];

  const filteredJobs = jobOpenings.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEmploymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Employment verification submitted:", employmentForm);
  };

  const handleInternshipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Internship application submitted:", internshipForm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <StickyHeader alwaysVisible />
      <PageHeader
        title="Careers"
        subtitle="Join our global team and build the future of technology"
        backgroundType="gradient"
        icon={<Briefcase className="h-8 w-8" />}
        badges={[
          { text: "Global Opportunities", variant: "default" },
          { text: "Remote Friendly", variant: "secondary" }
        ]}
      />

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="opportunities" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
            <TabsTrigger value="opportunities" className="flex items-center gap-2 py-3">
              <Briefcase className="h-4 w-4" />
              Current Opportunities
            </TabsTrigger>
            <TabsTrigger value="verification" className="flex items-center gap-2 py-3">
              <FileText className="h-4 w-4" />
              Employment Verification
            </TabsTrigger>
            <TabsTrigger value="internship" className="flex items-center gap-2 py-3">
              <GraduationCap className="h-4 w-4" />
              Internship Program
            </TabsTrigger>
          </TabsList>

          <TabsContent value="opportunities" className="space-y-8">
            <ScrollAnimated>
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Your Next Opportunity</h2>
                <div className="flex gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Enter keywords eg. job title or company name"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Search className="h-4 w-4 mr-2" />
                    Find Job
                  </Button>
                </div>
              </div>
            </ScrollAnimated>

            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <ScrollAnimated key={index} delay={index * 100}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-xl text-gray-900 mb-2">{job.title}</CardTitle>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {job.type}
                            </div>
                            <div className="flex items-center gap-1">
                              <Building className="h-4 w-4" />
                              {job.company}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="mb-2">
                            Posted {job.posted}
                          </Badge>
                          <div>
                            <Button className="bg-red-600 hover:bg-red-700">
                              Apply Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Job Description</h4>
                          <p className="text-gray-600">{job.description}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                          <p className="text-gray-600">{job.requirements}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Special Skills</h4>
                          <p className="text-gray-600">{job.skills}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Application Process</h4>
                          <p className="text-gray-600">{job.contact}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimated>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="verification" className="space-y-8">
            <ScrollAnimated>
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-red-600" />
                  Verification of Employment
                </h2>
                <p className="text-gray-600 mb-6">
                  To request a verification of employment for a current or former Jairosoft employee, 
                  please fill up and submit with attached signed and dated authorization from the employee.
                  Our HR team will process requests in a timely manner.
                </p>
                <p className="text-sm text-gray-500 mb-8">
                  For further assistance, please contact HR at <strong>hr@jairosoft.com</strong>
                </p>

                <form onSubmit={handleEmploymentSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline h-4 w-4 mr-1" />
                        First Name *
                      </label>
                      <Input
                        value={employmentForm.firstName}
                        onChange={(e) => setEmploymentForm({...employmentForm, firstName: e.target.value})}
                        placeholder="Employee's first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline h-4 w-4 mr-1" />
                        Last Name *
                      </label>
                      <Input
                        value={employmentForm.lastName}
                        onChange={(e) => setEmploymentForm({...employmentForm, lastName: e.target.value})}
                        placeholder="Employee's last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Briefcase className="inline h-4 w-4 mr-1" />
                      Position *
                    </label>
                    <Input
                      value={employmentForm.position}
                      onChange={(e) => setEmploymentForm({...employmentForm, position: e.target.value})}
                      placeholder="Employee's position/title"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FileText className="inline h-4 w-4 mr-1" />
                      Specific Request *
                    </label>
                    <Textarea
                      value={employmentForm.specificRequest}
                      onChange={(e) => setEmploymentForm({...employmentForm, specificRequest: e.target.value})}
                      placeholder="Please provide details about what verification information you need..."
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="inline h-4 w-4 mr-1" />
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={employmentForm.email}
                      onChange={(e) => setEmploymentForm({...employmentForm, email: e.target.value})}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Upload className="inline h-4 w-4 mr-1" />
                      Authorization File *
                    </label>
                    <Input
                      type="file"
                      onChange={(e) => setEmploymentForm({...employmentForm, authorizationFile: e.target.files?.[0] || null})}
                      accept=".pdf,.doc,.docx,.jpg,.png"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Upload signed and dated authorization from the employee
                    </p>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="employment-privacy"
                      checked={employmentForm.agreeToPolicy}
                      onCheckedChange={(checked) => setEmploymentForm({...employmentForm, agreeToPolicy: !!checked})}
                    />
                    <label htmlFor="employment-privacy" className="text-sm text-gray-600">
                      I agree to have my information stored according to the Privacy Policy.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
                    disabled={!employmentForm.agreeToPolicy}
                  >
                    Submit Verification Request
                  </Button>
                </form>
              </div>
            </ScrollAnimated>
          </TabsContent>

          <TabsContent value="internship" className="space-y-8">
            <ScrollAnimated>
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-red-600" />
                  Internship Program
                </h2>
                <p className="text-gray-600 mb-6">
                  Jairosoft welcomes internship inquiries from students looking to gain hands-on experience in the industry. 
                  To apply, please submit your request with the required documents.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <Card className="text-center p-4">
                    <FileText className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <h4 className="font-semibold">📄 Resume</h4>
                    <p className="text-sm text-gray-600">Highlight your skills, education, and experiences</p>
                  </Card>
                  <Card className="text-center p-4">
                    <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold">📝 Cover Letter</h4>
                    <p className="text-sm text-gray-600">Express your interest in interning at Jairosoft</p>
                  </Card>
                  <Card className="text-center p-4">
                    <GraduationCap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold">🏫 Intent Letter</h4>
                    <p className="text-sm text-gray-600">Formal endorsement from your institution</p>
                  </Card>
                  <Card className="text-center p-4">
                    <Briefcase className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold">💼 Portfolio</h4>
                    <p className="text-sm text-gray-600">Showcase relevant projects and work samples</p>
                  </Card>
                </div>

                <p className="text-sm text-gray-500 mb-8">
                  For further details on our internship programs, contact us at <strong>jit@jairosoft.com</strong>
                </p>

                <form onSubmit={handleInternshipSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline h-4 w-4 mr-1" />
                        First Name *
                      </label>
                      <Input
                        value={internshipForm.firstName}
                        onChange={(e) => setInternshipForm({...internshipForm, firstName: e.target.value})}
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline h-4 w-4 mr-1" />
                        Last Name *
                      </label>
                      <Input
                        value={internshipForm.lastName}
                        onChange={(e) => setInternshipForm({...internshipForm, lastName: e.target.value})}
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="inline h-4 w-4 mr-1" />
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={internshipForm.email}
                      onChange={(e) => setInternshipForm({...internshipForm, email: e.target.value})}
                      placeholder="your.email@school.edu"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <GraduationCap className="inline h-4 w-4 mr-1" />
                        School *
                      </label>
                      <Input
                        value={internshipForm.school}
                        onChange={(e) => setInternshipForm({...internshipForm, school: e.target.value})}
                        placeholder="Your university/college name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <GraduationCap className="inline h-4 w-4 mr-1" />
                        Course *
                      </label>
                      <Input
                        value={internshipForm.course}
                        onChange={(e) => setInternshipForm({...internshipForm, course: e.target.value})}
                        placeholder="Your degree program"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Render Time Hours *
                    </label>
                    <Input
                      value={internshipForm.renderTimeHours}
                      onChange={(e) => setInternshipForm({...internshipForm, renderTimeHours: e.target.value})}
                      placeholder="Required internship hours (e.g., 300 hours)"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Upload className="inline h-4 w-4 mr-1" />
                      Attached File *
                    </label>
                    <Input
                      type="file"
                      onChange={(e) => setInternshipForm({...internshipForm, attachedFile: e.target.files?.[0] || null})}
                      accept=".zip,.rar,.pdf"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Kindly provide all documents in a ZIP or RAR file
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline h-4 w-4 mr-1" />
                        OJT Coordinator Full Name *
                      </label>
                      <Input
                        value={internshipForm.ojtCoordinatorName}
                        onChange={(e) => setInternshipForm({...internshipForm, ojtCoordinatorName: e.target.value})}
                        placeholder="Coordinator's full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline h-4 w-4 mr-1" />
                        OJT Coordinator Email *
                      </label>
                      <Input
                        type="email"
                        value={internshipForm.ojtCoordinatorEmail}
                        onChange={(e) => setInternshipForm({...internshipForm, ojtCoordinatorEmail: e.target.value})}
                        placeholder="coordinator@school.edu"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="internship-privacy"
                      checked={internshipForm.agreeToPolicy}
                      onCheckedChange={(checked) => setInternshipForm({...internshipForm, agreeToPolicy: !!checked})}
                    />
                    <label htmlFor="internship-privacy" className="text-sm text-gray-600">
                      I agree to have my information stored according to the Privacy Policy.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
                    disabled={!internshipForm.agreeToPolicy}
                  >
                    Submit Internship Application
                  </Button>
                </form>
              </div>
            </ScrollAnimated>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;