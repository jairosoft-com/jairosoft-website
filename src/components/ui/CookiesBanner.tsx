"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";

const CookiesBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isManageOpen, setIsManageOpen] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('jairosoft-cookies-accepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('jairosoft-cookies-accepted', 'all');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('jairosoft-cookies-accepted', 'essential');
    setIsVisible(false);
  };

  const handleManageSettings = () => {
    setIsManageOpen(true);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('jairosoft-cookies-accepted', 'custom');
    setIsVisible(false);
    setIsManageOpen(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
        <Card className="max-w-6xl mx-auto bg-white border border-gray-200 shadow-xl">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-2 bg-red-50 rounded-lg">
                <Cookie className="h-6 w-6 text-red-600" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Your Privacy Matters to Jairosoft
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Jairosoft values your privacy. We use cookies to enhance your experience, analyze website performance, and tailor content to your preferences. By clicking "Accept All", you agree to our use of cookies as outlined in our Privacy Policy. You can manage your cookie settings or decline non-essential cookies at any time.
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 transition-colors ml-4"
                    aria-label="Close cookie banner"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={handleAcceptAll}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-sm font-medium"
                  >
                    Accept All
                  </Button>
                  <Button 
                    onClick={handleManageSettings}
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 text-sm font-medium"
                  >
                    Manage Settings
                  </Button>
                  <Button 
                    onClick={handleDecline}
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 text-sm font-medium"
                  >
                    Decline
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Manage Settings Modal */}
      {isManageOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[70] flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl bg-white">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Cookie Preferences</h3>
                <button
                  onClick={() => setIsManageOpen(false)}
                  className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close settings"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Essential Cookies</h4>
                      <p className="text-sm text-gray-600">Required for basic website functionality</p>
                    </div>
                    <div className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                      Always Active
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Analytics Cookies</h4>
                      <p className="text-sm text-gray-600">Help us understand how visitors use our website</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Marketing Cookies</h4>
                      <p className="text-sm text-gray-600">Used to deliver personalized advertisements</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Functional Cookies</h4>
                      <p className="text-sm text-gray-600">Enable enhanced functionality and personalization</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button 
                  onClick={handleSavePreferences}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-sm font-medium flex-1 sm:flex-initial"
                >
                  Save Preferences
                </Button>
                <Button 
                  onClick={handleAcceptAll}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm font-medium flex-1 sm:flex-initial"
                >
                  Accept All
                </Button>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                You can change these settings at any time. For more information, see our{" "}
                <a href="/privacy-policy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default CookiesBanner;