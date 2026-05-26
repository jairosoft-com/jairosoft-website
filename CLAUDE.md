# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working on the **Jairosoft corporate website** repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on port 8080)
- **Build for production**: `npm run build`
- **Build for development**: `npm run build:dev`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Technology Stack

This is a React TypeScript single-page application built for **Jairosoft Inc.** — an AI-first software solutions company founded in 2017.

| Layer | Technology |
|-------|------------|
| Build Tool | Vite with SWC React plugin |
| UI Framework | React 18 with React Router DOM |
| Component Library | shadcn/ui with Radix UI primitives |
| Styling | Tailwind CSS with CSS variables for theming |
| State Management | TanStack Query for server state |
| Form Handling | React Hook Form with Zod validation |
| Icons | Lucide React |
| Notifications | Sonner toasts |

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, StickyHeader, and layout components
│   ├── sections/        # Main page sections (Hero, Services, Industries, Testimonials, etc.)
│   └── ui/              # shadcn/ui reusable components
├── hooks/               # Custom React hooks (scroll animations, mobile detection)
├── lib/                 # Utility functions (cn helper)
├── pages/               # Route components (Index, Careers, ContactUs, Leadership, etc.)
└── main.tsx            # Application entry point
```

## Architecture Overview

- **Multi-page SPA**: Homepage (`Index.tsx`) plus internal pages (Careers, Contact, Leadership, Mission, etc.)
- **Component-Based Sections**: Homepage is composed of modular sections in `src/components/sections/`
- **Layout Components**: Sticky header (`StickyHeader.tsx`) and large footer (`Footer.tsx`) are separate layout components
- **Design System**: Uses shadcn/ui components with Tailwind CSS and CSS custom properties (defined in `src/index.css`)
- **Path Aliases**: Uses `@/` alias for `src/` directory imports
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Brand & Design Context

- **Company**: Jairosoft Inc. — AI-first software solutions for SMBs, government, healthcare, and education
- **Brand Colors**: Red (`#e50106`), Black, White, Steel Blue (`#0078D4`)
- **Culture**: Built on "Aloha" values — Kindness, Respect, Care, Innovation, Compassion
- **Key Sections**: Hero (video background), Services, Industries We Serve, Client Testimonials, Company Timeline, News & Insights, Contact
- **Partners**: SAFe, Sitecore, AWS, Microsoft, Google Partner

## Key Configuration Files

- **Vite Config**: Development server on port 8080, path aliases, Lovable tagger in dev mode
- **Tailwind Config**: Extended theme with custom colors, animations, and Montserrat font family
- **Components Config**: shadcn/ui configuration with TypeScript and CSS variables
- **TypeScript**: Strict mode enabled with separate configs for app and build tools

## Development Notes

- Uses CSS custom properties for theming (defined in `src/index.css`)
- Includes scroll animations via custom `ScrollAnimated` component
- Video background in Hero section uses local video file
- SEO-ready with structured data and canonical links
- Built for deployment on Lovable platform with custom domain: https://jairosoft.pixeloha.com
- Company content and context are documented in `content/*.md` files for reference
