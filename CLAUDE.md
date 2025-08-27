# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on port 8080)
- **Build for production**: `npm run build`
- **Build for development**: `npm run build:dev`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Technology Stack

This is a React TypeScript single-page application built with:

- **Build Tool**: Vite with SWC React plugin
- **UI Framework**: React 18 with React Router DOM
- **Component Library**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Notifications**: Sonner toasts

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, and layout components
│   ├── sections/        # Main page sections (Hero, Services, etc.)
│   └── ui/             # shadcn/ui reusable components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions (cn helper)
├── pages/              # Route components (Index, NotFound)
└── main.tsx           # Application entry point
```

## Architecture Overview

- **Single Page Application**: Main content is rendered on the Index page (`src/pages/Index.tsx`)
- **Component-Based Sections**: Homepage is composed of modular sections in `src/components/sections/`
- **Layout Components**: Sticky header and footer are separate layout components
- **Design System**: Uses shadcn/ui components with Tailwind CSS and CSS custom properties
- **Path Aliases**: Uses `@/` alias for `src/` directory imports
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

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
- Built for deployment on Lovable platform but can be deployed anywhere