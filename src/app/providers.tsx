"use client";

import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import CookiesBanner from "@/components/ui/CookiesBanner";

/**
 * Client-side global providers, mounted once in the root layout.
 *
 * Replaces the provider tree that lived in the old Vite `App.tsx`
 * (TooltipProvider + Toaster + Sonner + the global CookiesBanner).
 * `BrowserRouter` is dropped — routing is now handled by the App Router.
 * `QueryClientProvider` is dropped — TanStack Query was never used for
 * data fetching (zero useQuery/useMutation calls).
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      {children}
      <Toaster />
      <Sonner />
      <CookiesBanner />
    </TooltipProvider>
  );
}
