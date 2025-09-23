import React from "react";
import { ScrollAnimated } from "./ScrollAnimated";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundType?: "gradient" | "pattern" | "solid";
  accentColor?: "red" | "blue" | "gray";
  breadcrumb?: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundType = "gradient",
  accentColor = "red",
  breadcrumb,
  children
}) => {
  // Auto-determine breadcrumb based on current path if not provided
  const getBreadcrumb = () => {
    if (breadcrumb) return breadcrumb;

    const path = window.location.pathname;
    if (path.startsWith('/who-we-serve/')) return 'Who We Serve';
    if (path.startsWith('/who-we-are/')) return 'Who We Are';
    if (path === '/what-we-do' || path === '/agile-safe' || path === '/low-code-no-code') return 'What We Do';
    if (path === '/careers') return 'Careers';
    if (path === '/contact-us') return 'Contact';
    return 'Jairosoft';
  };
  const getBackgroundClasses = () => {
    switch (backgroundType) {
      case "pattern":
        return "bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden";
      case "solid":
        return "bg-gray-900";
      case "gradient":
      default:
        return accentColor === "red" 
          ? "bg-gradient-to-br from-red-600 via-red-700 to-gray-900"
          : accentColor === "blue"
          ? "bg-gradient-to-br from-blue-600 via-blue-700 to-gray-900"
          : "bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900";
    }
  };

  const getAccentElements = () => {
    if (backgroundType === "pattern") {
      return (
        <>
          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" className="text-white"/>
            </svg>
          </div>
          
          {/* Floating Elements with Animation */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-red-600/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Additional Tech-themed Elements */}
          <div className="absolute top-32 right-20 opacity-20">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
          </div>
          
          <div className="absolute bottom-32 left-20 opacity-20">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>
        </>
      );
    } else if (backgroundType === "gradient") {
      return (
        <>
          {/* Gradient Overlay Elements */}
          <div className="absolute top-20 right-20 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </>
      );
    }
    return null;
  };

  return (
    <header className={`relative min-h-[60vh] flex items-center justify-center ${getBackgroundClasses()}`}>
      {getAccentElements()}
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <ScrollAnimated animation="fadeInUp">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb or Category Badge */}
            <div className="mb-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                {getBreadcrumb()}
              </span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>
            
            {/* Additional Content */}
            {children}
            
            {/* Decorative Elements */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <div className="h-px bg-white/30 flex-1 max-w-20"></div>
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="h-px bg-white/30 flex-1 max-w-20"></div>
            </div>
          </div>
        </ScrollAnimated>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </header>
  );
};

export default PageHeader;