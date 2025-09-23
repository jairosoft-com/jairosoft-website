import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookiesBanner from "@/components/ui/CookiesBanner";
import Index from "./pages/Index";
import Naics from "./pages/Naics";
import IndustriesTestimonials from "./pages/IndustriesTestimonials";
import OurHistory from "./pages/OurHistory";
import MissionVisionCulture from "./pages/MissionVisionCulture";
import CodeOfConduct from "./pages/CodeOfConduct";
import ExecutiveLeadership from "./pages/ExecutiveLeadership";
import TechnicalLeads from "./pages/TechnicalLeads";
import Partners from "./pages/Partners";
import Locations from "./pages/Locations";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import WhatWeDo from "./pages/WhatWeDo";
import AgileSafe from "./pages/AgileSafe";
import LowCodeNoCode from "./pages/LowCodeNoCode";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/who-we-serve/naics" element={<Naics />} />
          <Route path="/who-we-serve/industries-testimonials" element={<IndustriesTestimonials />} />
          <Route path="/who-we-are/our-history" element={<OurHistory />} />
          <Route path="/who-we-are/mission-vision-culture" element={<MissionVisionCulture />} />
          <Route path="/who-we-are/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/who-we-are/executive-leadership" element={<ExecutiveLeadership />} />
          <Route path="/who-we-are/technical-leads" element={<TechnicalLeads />} />
          <Route path="/who-we-are/partners" element={<Partners />} />
          <Route path="/who-we-are/locations" element={<Locations />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/agile-safe" element={<AgileSafe />} />
          <Route path="/low-code-no-code" element={<LowCodeNoCode />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookiesBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
