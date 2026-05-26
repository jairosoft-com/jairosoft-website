# Jairosoft — Corporate Website

The official website for **Jairosoft Inc.**, an AI-first software solutions company founded in 2017.

## About the Project

This is a React TypeScript single-page application (SPA) built for Jairosoft's corporate web presence. It showcases the company's services, industry expertise, client testimonials, leadership team, and company culture built on the foundation of "Aloha" values.

**Live URL**: https://jairosoft.lovable.app

**Custom Domain**: https://jairosoft.pixeloha.com

---

## Technology Stack

| Category | Technology |
|----------|------------|
| Build Tool | Vite with SWC React plugin |
| UI Framework | React 18 with React Router DOM |
| Component Library | shadcn/ui with Radix UI primitives |
| Styling | Tailwind CSS with CSS variables for theming |
| State Management | TanStack Query |
| Form Handling | React Hook Form with Zod validation |
| Icons | Lucide React |
| Notifications | Sonner toasts |

---

## Development Commands

```sh
# Install dependencies
npm i

# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, StickyHeader, and layout components
│   ├── sections/        # Main page sections (Hero, Services, Industries, etc.)
│   └── ui/              # shadcn/ui reusable components
├── hooks/               # Custom React hooks (scroll animations, mobile detection)
├── lib/                 # Utility functions (cn helper)
├── pages/               # Route components (Index, Careers, ContactUs, etc.)
└── main.tsx            # Application entry point
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

The site is deployed on the Lovable platform. To publish updates, open the [Lovable Project](https://lovable.dev/projects/9f4e3dec-fd97-4e77-82fe-6f8b846bf9a6) and click **Share → Publish**.

## Custom Domain

A custom domain is connected at: https://jairosoft.pixeloha.com

To update domain settings, navigate to **Project > Settings > Domains** in Lovable.

---

## Contributing

You can edit this project in three ways:

1. **Via Lovable** — Visit the project link above and start prompting.
2. **Via your IDE** — Clone this repo, make changes, and push. Changes sync automatically.
3. **Via GitHub** — Edit files directly in the browser and commit.

---

## Contact

- **Email**: info@jairosoft.com
- **Phone**: +1 (800)-881-8949
- **Facebook**: https://www.facebook.com/jairosoft.inc
- **LinkedIn**: https://www.linkedin.com/company/jairosoft-inc/
- **Instagram**: https://www.instagram.com/jairosoft_inc/

---

*Copyright © Jairosoft Inc. All rights reserved.*
