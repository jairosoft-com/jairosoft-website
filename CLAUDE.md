# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working on the **Jairosoft corporate website** repository.

## Development Commands

- **Start development server**: `npm run dev` (Next.js dev server on port 8080)
- **Build for production**: `npm run build`
- **Start production server**: `npm run start` (port 8080)
- **Lint code**: `npm run lint` (`next lint`)

## Technology Stack

This is a React TypeScript application built for **Jairosoft Inc.** — an AI-first software solutions company founded in 2017. It was migrated from a Vite SPA to **Next.js 16 (App Router)**.

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI Framework | React 18 |
| Component Library | shadcn/ui with Radix UI primitives |
| Styling | Tailwind CSS with CSS variables for theming |
| Fonts | `next/font/google` (IBM Plex Sans, Montserrat) |
| Form Handling | Plain React state (React Hook Form + Zod available) |
| Backend | Next Route Handlers (`src/app/api/*`) → GoHighLevel CRM |
| Icons | Lucide React |
| Notifications | Sonner toasts |

## Project Structure

```
src/
├── app/                 # App Router: layout.tsx, per-route page.tsx (metadata), not-found.tsx
│   └── api/             # Route Handlers (submit-contact, submit-internship, submit-employment-verification)
├── components/
│   ├── layout/          # Header, Footer, StickyHeader, and layout components
│   ├── sections/        # Main page sections (Hero, Services, Industries, Testimonials, etc.)
│   └── ui/              # shadcn/ui reusable components
├── hooks/               # Custom React hooks (scroll animations, mobile detection)
├── lib/                 # Utility functions (cn helper)
├── services/            # Client fetch wrappers that POST to /api/* route handlers
├── views/              # Page components rendered by the app/ route wrappers (Index, Careers, ContactUs, ...)
└── index.css           # Global stylesheet (Tailwind + CSS variables), imported in app/layout.tsx
```

## Architecture Overview

- **App Router**: Each route is a thin server `page.tsx` under `src/app/**` that exports per-page `metadata` and renders a page component from `src/views/`.
- **Client components**: The site is highly interactive (Radix, scroll animations, forms), so most components under `src/views`, `src/components/sections`, and `src/components/layout` carry the `"use client"` directive. The `app/` route wrappers stay server components so they can export metadata.
- **Layout**: `src/app/layout.tsx` sets up fonts, global metadata, and the client `Providers` (Tooltip + toasts + CookiesBanner). `StickyHeader` and `Footer` are rendered inside each page component (not centralized), preserving the original per-page header behavior (`alwaysVisible` false on `/`, true elsewhere).
- **Navigation**: Internal links use plain `<a href>` (full navigation); active-link highlighting reads the current path via `usePathname` from `next/navigation`.
- **Design System**: shadcn/ui components with Tailwind CSS and CSS custom properties (defined in `src/index.css`).
- **Path Aliases**: Uses `@/` alias for `src/` directory imports.
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints.

## Brand & Design Context

- **Company**: Jairosoft Inc. — AI-first software solutions for SMBs, government, healthcare, and education
- **Brand Colors**: Red (`#e50106`), Black, White, Steel Blue (`#0078D4`)
- **Culture**: Built on "Aloha" values — Kindness, Respect, Care, Innovation, Compassion
- **Key Sections**: Hero (video background), Services, Industries We Serve, Client Testimonials, Company Timeline, News & Insights, Contact
- **Partners**: SAFe, Sitecore, AWS, Microsoft, Google Partner

## Key Configuration Files

- **Next Config** (`next.config.ts`): Turbopack workspace root pin
- **Tailwind Config**: Extended theme with custom colors, animations, and Montserrat font family
- **Components Config** (`components.json`): shadcn/ui configuration with TypeScript and CSS variables (`rsc: true`)
- **TypeScript** (`tsconfig.json`): single config with `@/*` → `./src/*` alias and the Next TS plugin

## Development Notes

- Uses CSS custom properties for theming (defined in `src/index.css`)
- Includes scroll animations via custom `ScrollAnimated` component
- Video background in Hero section uses a local file (`public/lovable-uploads/video-background.mp4`)
- SEO: per-page titles/descriptions via the Metadata API; JSON-LD `Organization` on the home route; canonicals derived from `metadataBase`
- Backend forms require GoHighLevel env vars (see `.env.example`); set them in the Vercel project
- Deployment target: **Vercel** (custom domain: https://jairosoft.pixeloha.com)
- Company content and context are documented in `content/*.md` files for reference
- Images still use raw `<img>` tags (not `next/image`) — a possible future optimization
