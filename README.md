# Jairosoft — Corporate Website

The official website for **Jairosoft Inc.**, an AI-first software solutions company founded in 2017.

## About the Project

This is a React TypeScript application built for Jairosoft's corporate web presence, running on **Next.js 16 (App Router)**. It showcases the company's services, industry expertise, client testimonials, leadership team, and company culture built on the foundation of "Aloha" values.

**Custom Domain**: https://jairosoft.pixeloha.com

---

## Technology Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI Framework | React 18 |
| Component Library | shadcn/ui with Radix UI primitives |
| Styling | Tailwind CSS with CSS variables for theming |
| Fonts | `next/font/google` (IBM Plex Sans, Montserrat) |
| Backend | Next Route Handlers (`src/app/api/*`) → GoHighLevel CRM |
| Form Handling | Plain React state (React Hook Form + Zod available) |
| Icons | Lucide React |
| Notifications | Sonner toasts |

---

## Development Commands

```sh
# Install dependencies
npm i

# Start the dev server (port 8080)
npm run dev

# Build for production
npm run build

# Start the production server (port 8080)
npm run start

# Lint code
npm run lint
```

Backend forms need GoHighLevel credentials — copy `.env.example` to `.env.local` and fill in the values (also set them in the Vercel project).

---

## Project Structure

```
src/
├── app/                 # App Router: layout.tsx, per-route page.tsx (metadata), not-found.tsx
│   └── api/             # Route Handlers (contact, internship, employment-verification)
├── components/
│   ├── layout/          # Header, Footer, StickyHeader, and layout components
│   ├── sections/        # Main page sections (Hero, Services, Industries, etc.)
│   └── ui/              # shadcn/ui reusable components
├── hooks/               # Custom React hooks (scroll animations, mobile detection)
├── lib/                 # Utility functions (cn helper)
├── services/            # Client fetch wrappers that POST to /api/* route handlers
├── views/               # Page components rendered by the app/ route wrappers
└── index.css            # Global stylesheet (imported in app/layout.tsx)
```

---

## Key Features

- **Responsive Design** — Mobile-first approach with Tailwind breakpoints
- **Scroll Animations** — Custom `ScrollAnimated` component and scroll-activated sticky header
- **Video Background** — Hero section with local video file
- **Multi-page Routing** — React Router DOM for internal pages (Careers, Contact, Leadership, etc.)
- **SEO Ready** — Structured data, canonical links, and semantic HTML
- **Design System** — CSS custom properties and shadcn/ui components with Tailwind

---

## Jairosoft at a Glance

- **Founded**: 2017
- **Headquarters**: Victorville, California & Honolulu, Hawaii
- **Offices**: California, Hawaii, Cebu (Philippines), Davao City (Philippines)
- **Focus**: AI-powered software solutions for government, healthcare, education, and consumer products
- **Frameworks**: SAFe (Scaled Agile Framework)
- **Culture**: Built on Aloha — Kindness, Respect, Care, Innovation, Compassion

---

## Deployment

The site targets **Vercel**, which auto-detects Next.js. Set the GoHighLevel environment
variables (see `.env.example`) in the Vercel project settings so the contact / internship /
employment-verification forms work.

## Custom Domain

A custom domain is connected at: https://jairosoft.pixeloha.com — configure it under
**Project > Settings > Domains** in Vercel.

---

## Contributing

Clone this repo, make changes on a branch, run `npm run dev` locally, and open a pull request.

---

## Contact

- **Email**: info@jairosoft.com
- **Phone**: +1 (800)-881-8949
- **Facebook**: https://www.facebook.com/jairosoft.inc
- **LinkedIn**: https://www.linkedin.com/company/jairosoft-inc/
- **Instagram**: https://www.instagram.com/jairosoft_inc/

---

*Copyright © Jairosoft Inc. All rights reserved.*
