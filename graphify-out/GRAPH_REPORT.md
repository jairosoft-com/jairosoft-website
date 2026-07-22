# Graph Report - .  (2026-07-22)

## Corpus Check
- Large corpus: 1309 files · ~1,311,511 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 927 nodes · 1339 edges · 120 communities (57 shown, 63 thin omitted)
- Extraction: 95% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 60 edges (avg confidence: 0.83)
- Token cost: 336,070 input · 34,000 output

## Community Hubs (Navigation)
- Site Page Shells & Navigation
- Core Services & Contact Form
- Design System Principles & Style Guide
- Root Layout & Font Setup
- Lint & Dev Dependencies Config
- TypeScript & Next.js Type Config
- Company Partners & Aloha Values
- Sidebar UI Component
- Alert & Hover Card Components
- Contact Page Route
- shadcn/ui Config & Aliases
- Wiki Meta & Governance Docs
- Drawer UI Component
- Button & Calendar Components
- Form Field Components
- UI Styling & Icon Dependencies
- Carousel UI Component
- Client Testimonials & Logos
- Menubar UI Component
- Installed Skills & Security Scanners
- Next.js Architecture Patterns
- Careers Job Listings
- Hero & Navigation Menu Components
- Command Palette Component
- Client & Technology Partnerships
- Custom React Hooks
- Employment Verification API Route
- Internship Application API Route
- Chart UI Component
- Context Menu Component
- Dropdown Menu Component
- Contact Form API Route
- Alert Dialog Component
- Sheet UI Component
- Table UI Component
- Wiki Session Log & Migration History
- Breadcrumb Component
- Technical Leads & Certified Experts
- Website Technology Stack
- GoHighLevel Forms Integration Issue
- Contact Us Page & Service
- Toggle & Toggle Group Components
- NARRA Testimonial & Leadership
- Robots.txt Crawler Policy
- Azure DevOps & Langfuse Setup
- OTP Input Component
- Avatar Component
- Backend Architecture Overview
- UI Library Stack
- Careers Form Types
- ESLint Config
- Agile/SAFe Page Route
- Careers Page Route
- Low-Code/No-Code Page Route
- Terms & Conditions Page Route
- What We Do Page Route
- Code of Conduct Page Route
- Executive Leadership Page Route
- Locations Page Route
- Mission/Vision/Culture Page Route
- Our History Page Route
- Partners Page Route
- Technical Leads Page Route
- Industries & Testimonials Page Route
- NAICS Page Route
- Axios Dependency
- Clsx Dependency
- Cmdk Dependency
- date-fns Dependency
- Embla Carousel Dependency
- form-data Dependency
- React Hook Form Resolvers Dependency
- Input OTP Dependency
- Next.js Dependency
- Next.js Config
- next-themes Dependency
- Radix UI Accordion Dependency
- Radix UI Alert Dialog Dependency
- Radix UI Aspect Ratio Dependency
- Radix UI Checkbox Dependency
- Radix UI Collapsible Dependency
- Radix UI Context Menu Dependency
- Radix UI Dialog Dependency
- Radix UI Dropdown Menu Dependency
- Radix UI Hover Card Dependency
- Radix UI Navigation Menu Dependency
- Radix UI Popover Dependency
- Radix UI Progress Dependency
- Radix UI Radio Group Dependency
- Radix UI Scroll Area Dependency
- Radix UI Select Dependency
- Radix UI Separator Dependency
- Radix UI Slider Dependency
- Radix UI Slot Dependency
- Radix UI Switch Dependency
- Radix UI Tabs Dependency
- Radix UI Toast Dependency
- Radix UI Toggle Dependency
- Radix UI Toggle Group Dependency
- Radix UI Tooltip Dependency
- React Day Picker Dependency
- React Hook Form Dependency
- React Resizable Panels Dependency
- Recharts Dependency
- Sonner Toast Dependency
- Tailwind Merge Dependency
- Tailwindcss Animate Dependency
- TanStack Query Dependency
- Vaul Drawer Dependency
- Zod Dependency
- UI Library Stack (doc mention)
- Tooltip Component
- Playwright CI Workflow

## God Nodes (most connected - your core abstractions)
1. `cn()` - 75 edges
2. `ScrollAnimated()` - 24 edges
3. `compilerOptions` - 20 edges
4. `Style Guide` - 17 edges
5. `Technology Partnership Philosophy` - 15 edges
6. `Wiki Schema` - 15 edges
7. `Vercel Agent-Skills Installed` - 15 edges
8. `Code of Business Conduct (top-level policy)` - 14 edges
9. `Design Principles for an Enterprise B2B Website` - 14 edges
10. `Next.js 16 App Router (Turbopack)` - 13 edges

## Surprising Connections (you probably didn't know these)
- `Legacy Tech Stack (ASP.NET, C#, Angular JS, Knockout JS, WebAPI)` --semantically_similar_to--> `Next.js 16 App Router (Turbopack)`  [INFERRED] [semantically similar]
  content/jairosoft-home-main.md → CLAUDE.md
- `web-design-guidelines skill` --semantically_similar_to--> `Design Principles for an Enterprise B2B Website`  [INFERRED] [semantically similar]
  wiki/ideas/Vercel Agent-Skills Installed.md → context/design-principles.md
- `web-design-guidelines skill` --semantically_similar_to--> `Style Guide`  [INFERRED] [semantically similar]
  wiki/ideas/Vercel Agent-Skills Installed.md → context/style-guide.md
- `Technology Stack Capabilities (Spring Boot, Python, React, Java, Angular JS, Node.js, Docker, Kubernetes, Kafka, Redis, Oracle DB, MongoDB)` --conceptually_related_to--> `React 18`  [INFERRED]
  content/jairosoft-who-we-are-partners.md → CLAUDE.md
- `Aloha Culture (canonical)` --conceptually_related_to--> `Aloha Values Culture`  [INFERRED]
  content/jairosoft-who-we-are-mission-vision-culture.md → CLAUDE.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Low-Code/No-Code Service Offering Echoed Across Home, What-We-Do, Contact, and NAICS Pages** — content_jairosoft_home_main_core_service_nocode_lowcode, content_jairosoft_what_we_do_main_lowcode_nocode, content_jairosoft_contact_us_main_contact_form_subject_options, content_jairosoft_who_we_serve_naics_lowcode_ipa [INFERRED 0.85]
- **Ramon Aseniero Endorsed by Name in Both Client Testimonials** — content_jairosoft_who_we_are_executive_leadership_ramon_aseniero, content_jairosoft_who_we_serve_industries_testimonials_testimonial_peter_stevenson, content_jairosoft_who_we_serve_industries_testimonials_testimonial_mia_peroff [EXTRACTED 1.00]
- **US Government Compliance Framing Aligned Across Code of Conduct and NAICS Pages** — content_jairosoft_who_we_are_code_of_business_conduct_cmmc, content_jairosoft_who_we_are_code_of_business_conduct_far_dfars_compliance, content_jairosoft_who_we_serve_naics_cmmc_reference, content_jairosoft_who_we_serve_naics_government_contracting_ready [INFERRED 0.85]
- **Design Review Methodology Phases** — context_design_review_agent_subagent, context_design_review_agent_phase0_preparation, context_design_review_agent_phase1_interaction_flow, context_design_review_agent_phase2_responsiveness, context_design_review_agent_phase3_visual_polish, context_design_review_agent_phase4_accessibility, context_design_review_agent_phase5_robustness, context_design_review_agent_phase6_code_health, context_design_review_agent_phase7_content_console [EXTRACTED 1.00]
- **Enterprise Design System Synthesis (Sitecore + Fluent + Lightning)** — context_design_principles_doc, context_design_principles_sitecore, context_design_principles_microsoft_fluent, context_design_principles_salesforce_lightning [EXTRACTED 1.00]
- **Design Review Tooling Chain (principles + style guide + agent + invocation surfaces)** — context_design_principles_doc, context_style_guide_doc, context_design_review_agent_subagent, context_design_review_claude_md_snippet_doc, context_design_review_slash_command_doc [INFERRED 0.85]

## Communities (120 total, 63 thin omitted)

### Community 0 - "Site Page Shells & Navigation"
Cohesion: 0.05
Nodes (52): metadata, StickyHeaderProps, posts, testimonials, AccordionContent, AccordionItem, AccordionTrigger, Badge() (+44 more)

### Community 1 - "Core Services & Contact Form"
Cohesion: 0.05
Nodes (47): Contact Form, Contact Form Subject Options, Core Service: AI-First Software Development, Core Service: Lean-Thinking & Agile Software Methodology, Core Service: Nearshore/Offshore/Multi-Shore Resources, Core Service: No-Code/Low-Code App Solution, Home Hero Section (Jairosoft, an AI-First Company), Service: AI/ML - Coming Soon (+39 more)

### Community 2 - "Design System Principles & Style Guide"
Cohesion: 0.07
Nodes (44): Accessibility and Inclusion, Color Palette and Usage Principles, Component Design Principles, Design Principles for an Enterprise B2B Website, Helix (Sitecore frontend methodology, cited as inspiration), Microsoft Fluent (design system reference), Modularity and Scalability (Helix-Inspired), Motion and Animation Guidelines (+36 more)

### Community 3 - "Root Layout & Font Setup"
Cohesion: 0.08
Nodes (31): ibmPlexSans, metadata, montserrat, viewport, Providers(), Toaster(), ToasterProps, Toast (+23 more)

### Community 4 - "Lint & Dev Dependencies Config"
Cohesion: 0.06
Nodes (34): autoprefixer, eslint, eslint-config-next, @eslint/js, devDependencies, autoprefixer, eslint, eslint-config-next (+26 more)

### Community 5 - "TypeScript & Next.js Type Config"
Cohesion: 0.06
Nodes (31): dom, dom.iterable, ES2020, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts (+23 more)

### Community 6 - "Company Partners & Aloha Values"
Cohesion: 0.07
Nodes (31): Aloha Values Culture, AWS Partnership, Google Partner, Jairosoft Inc., Microsoft Partnership, SAFe Partnership, Sitecore Partnership, Agile/SAFe Delivery Practices (TFS, SCRUM, SAFe, TDD, Selenium, JIRA) (+23 more)

### Community 7 - "Sidebar UI Component"
Cohesion: 0.08
Nodes (25): Separator, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel (+17 more)

### Community 8 - "Alert & Hover Card Components"
Cohesion: 0.09
Nodes (13): Alert, AlertDescription, AlertTitle, alertVariants, HoverCardContent, PopoverContent, Progress, RadioGroup (+5 more)

### Community 9 - "Contact Page Route"
Cohesion: 0.12
Nodes (8): metadata, orgLd, Industries(), items, Insights(), logos, QuizCTA(), events

### Community 10 - "shadcn/ui Config & Aliases"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 11 - "Wiki Meta & Governance Docs"
Cohesion: 0.14
Nodes (16): Wiki Backlog, Wiki Index, Wiki Init (2026-07-21), Contradiction Handling Convention (conflict callout), Wiki Schema, Code Taxonomy Bucket, Concepts Taxonomy Bucket, Decisions Taxonomy Bucket (+8 more)

### Community 12 - "Drawer UI Component"
Cohesion: 0.18
Nodes (11): services, DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle, ResizableHandle() (+3 more)

### Community 13 - "Button & Calendar Components"
Cohesion: 0.18
Nodes (12): ButtonProps, buttonVariants, Calendar(), CalendarProps, Pagination(), PaginationContent, PaginationEllipsis(), PaginationItem (+4 more)

### Community 14 - "Form Field Components"
Cohesion: 0.15
Nodes (11): FormControl, FormDescription, FormFieldContext, FormFieldContextValue, FormItem, FormItemContext, FormItemContextValue, FormLabel (+3 more)

### Community 15 - "UI Styling & Icon Dependencies"
Cohesion: 0.15
Nodes (13): class-variance-authority, lucide-react, dependencies, class-variance-authority, lucide-react, @radix-ui/react-avatar, @radix-ui/react-label, @radix-ui/react-menubar (+5 more)

### Community 16 - "Carousel UI Component"
Cohesion: 0.15
Nodes (12): Carousel, CarouselApi, CarouselContent, CarouselContext, CarouselContextProps, CarouselItem, CarouselNext, CarouselOptions (+4 more)

### Community 17 - "Client Testimonials & Logos"
Cohesion: 0.17
Nodes (12): Home Testimonial Excerpt: Peter Stevenson, Client Logo: HomeFundMe, Client Logo: NASA, Client Logo: TruSpace, Client Logo: VITAS Healthcare, Project: Cirque du Soleil Website, Project: HomeFundMe.com, Project: John Hopkins Hospital Website (+4 more)

### Community 18 - "Menubar UI Component"
Cohesion: 0.17
Nodes (11): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarShortcut() (+3 more)

### Community 19 - "Installed Skills & Security Scanners"
Cohesion: 0.21
Nodes (12): Gen (security scanner, identity unclear), Vercel Agent-Skills Installed, Snyk (security scanner), Socket (security scanner), vercel-cli-with-tokens skill, vercel-composition-patterns skill, vercel-optimize skill, vercel-react-best-practices skill (+4 more)

### Community 20 - "Next.js Architecture Patterns"
Cohesion: 0.20
Nodes (11): Client/Server Component Boundary Pattern, Lucide React Icons, next/font/google (IBM Plex Sans, Montserrat), Next.js 16 App Router (Turbopack), @/ Path Alias for src/, Per-Page Header/Footer Rendering Pattern, React 18, ScrollAnimated Component (+3 more)

### Community 21 - "Careers Job Listings"
Cohesion: 0.18
Nodes (11): Job Application Process, Job: Enterprise Solutions Architect, Job: Finance Officer (Davao, Onsite), Job: HR Officer (Davao, Onsite), Job: IT Recruiter (Davao), Job: Marketing Officer (Davao, Onsite), Job Search Feature, Legacy Tech Stack (ASP.NET, C#, Angular JS, Knockout JS, WebAPI) (+3 more)

### Community 22 - "Hero & Navigation Menu Components"
Cohesion: 0.25
Nodes (9): Hero(), HeroProps, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle (+1 more)

### Community 23 - "Command Palette Component"
Cohesion: 0.18
Nodes (9): Command, CommandDialogProps, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator (+1 more)

### Community 24 - "Client & Technology Partnerships"
Cohesion: 0.20
Nodes (10): Client Partnership Philosophy (Trust, Reliability, Shared Success), Other Client Organizations (Colina Health, Hawaiian Airlines, Dignity Health, Doylestown Health, First Republic Bank, Gilead, GoHealth, Penn, P&G, Swapulous, Hyperlink, Modus, Molina Healthcare, Meantis, Cannondale, SIH, Hege Saxeide), Technology Partnership Philosophy, Premier Partner: Any-Mt, Premier Partner: Bubble (Bronze Agency Partner), Premier Partner: Google Partner, Premier Partner Badge: JIT, Premier Partner: Microsoft (+2 more)

### Community 25 - "Custom React Hooks"
Cohesion: 0.20
Nodes (9): react, react, StickyHeader(), useCarousel(), useChart(), useFormField(), SidebarContext, useSidebar() (+1 more)

### Community 26 - "Employment Verification API Route"
Cohesion: 0.31
Nodes (9): addVerificationNote(), createContact(), createOpportunity(), EmploymentVerificationFormData, getContactById(), GoHighLevelContact, GoHighLevelOpportunity, POST() (+1 more)

### Community 27 - "Internship Application API Route"
Cohesion: 0.31
Nodes (9): addInternshipNote(), createContact(), createOpportunity(), getContactById(), GoHighLevelContact, GoHighLevelOpportunity, InternshipFormData, POST() (+1 more)

### Community 28 - "Chart UI Component"
Cohesion: 0.20
Nodes (7): ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartTooltipContent, THEMES

### Community 29 - "Context Menu Component"
Cohesion: 0.20
Nodes (9): ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut(), ContextMenuSubContent (+1 more)

### Community 30 - "Dropdown Menu Component"
Cohesion: 0.20
Nodes (9): DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut(), DropdownMenuSubContent (+1 more)

### Community 31 - "Contact Form API Route"
Cohesion: 0.33
Nodes (8): addContactNote(), ContactFormData, createContact(), createOpportunity(), getContactById(), GoHighLevelContact, GoHighLevelOpportunity, POST()

### Community 32 - "Alert Dialog Component"
Cohesion: 0.22
Nodes (8): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle

### Community 33 - "Sheet UI Component"
Cohesion: 0.22
Nodes (8): SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader(), SheetOverlay, SheetTitle, sheetVariants

### Community 34 - "Table UI Component"
Cohesion: 0.22
Nodes (8): Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow

### Community 35 - "Wiki Session Log & Migration History"
Cohesion: 0.25
Nodes (9): Wiki Log, Session Insights: Azure DevOps Association (2026-07-21), Session Insights: Jairosoft Next.js Migration (2026-07-21), Session Insights: Jairosoft Next.js Migration (2026-07-22), deploy-to-vercel skill, github.com/jairosoft-com/jairosoft-website, Next.js 16 (App Router) Migration, Jairosoft Website (+1 more)

### Community 36 - "Breadcrumb Component"
Cohesion: 0.25
Nodes (7): Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator()

### Community 37 - "Technical Leads & Certified Experts"
Cohesion: 0.29
Nodes (7): Adam Vincent Bernaldez - Principal Software Supervisor, Bomar Sinday - Software Development Manager, Cindy Arrogancia - QA Lead, John Paul Catubig - Product Manager, Karl Jordan Caumban - Agile Project Manager, Mary Grace Garcia - Program Manager, Ryan Vince Castillo - Line Manager

### Community 38 - "Website Technology Stack"
Cohesion: 0.29
Nodes (7): Custom Domain jairosoft.pixeloha.com, GoHighLevel CRM Backend, Next.js 16 App Router (Turbopack), React 18, React Router DOM (Multi-page Routing claim), Tailwind CSS, Vercel Deployment

### Community 39 - "GoHighLevel Forms Integration Issue"
Cohesion: 0.29
Nodes (7): submit-contact API route, submit-employment-verification API route, submit-internship API route, GoHighLevel, Jairosoft Website Forms Broken (No GoHighLevel Replacement), GoHighLevel, GoHighLevel

### Community 40 - "Contact Us Page & Service"
Cohesion: 0.29
Nodes (4): metadata, ContactFormData, submitContactForm(), ContactUs()

### Community 41 - "Toggle & Toggle Group Components"
Cohesion: 0.33
Nodes (5): ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

### Community 42 - "NARRA Testimonial & Leadership"
Cohesion: 0.33
Nodes (6): Home Testimonial Excerpt: Mia Peroff (NARRA), Aldred Donayre - Chief Operating Officer, Marikriss Aseniero - Chief Finance Officer, Ramon Aseniero - CEO & Founder, NARRA (Client), Testimonial: Mia Peroff (NARRA)

### Community 43 - "Robots.txt Crawler Policy"
Cohesion: 0.33
Nodes (6): Bingbot, robots.txt Crawler Allow-All Policy, facebookexternalhit, Googlebot, Twitterbot, Wildcard User-Agent (*)

### Community 44 - "Azure DevOps & Langfuse Setup"
Cohesion: 0.33
Nodes (6): Azure DevOps, .env.example, Langfuse Observability Setup, langfuse-cli@0.0.12, Langfuse Claude Code Skill, Azure DevOps (work tracking)

### Community 45 - "OTP Input Component"
Cohesion: 0.40
Nodes (4): InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

### Community 46 - "Avatar Component"
Cohesion: 0.50
Nodes (3): Avatar, AvatarFallback, AvatarImage

### Community 47 - "Backend Architecture Overview"
Cohesion: 0.67
Nodes (3): GoHighLevel CRM Backend, Next.js Route Handlers (src/app/api/*), Vercel Deployment

### Community 48 - "UI Library Stack"
Cohesion: 0.67
Nodes (3): Radix UI Primitives, shadcn/ui Component Library, Tailwind CSS

### Community 49 - "Careers Form Types"
Cohesion: 0.67
Nodes (3): Verification of Employment Form, Internship Inquiry Form, Internship Required Documents (Resume, Cover Letter, Intent Letter, Portfolio)

## Ambiguous Edges - Review These
- `Next.js 16 App Router (Turbopack)` → `React Router DOM (Multi-page Routing claim)`  [AMBIGUOUS]
  README.md · relation: conceptually_related_to
- `Internship Inquiry Form` → `Premier Partner Badge: JIT`  [AMBIGUOUS]
  content/jairosoft-who-we-are-partners.md · relation: conceptually_related_to
- `Vercel Agent-Skills Installed` → `Gen (security scanner, identity unclear)`  [AMBIGUOUS]
  wiki/ideas/Vercel Agent-Skills Installed.md · relation: references

## Knowledge Gaps
- **446 isolated node(s):** `extends`, `next/core-web-vitals`, `$schema`, `style`, `rsc` (+441 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **63 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Next.js 16 App Router (Turbopack)` and `React Router DOM (Multi-page Routing claim)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Internship Inquiry Form` and `Premier Partner Badge: JIT`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Vercel Agent-Skills Installed` and `Gen (security scanner, identity unclear)`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **Why does `dependencies` connect `UI Styling & Icon Dependencies` to `Lint & Dev Dependencies Config`, `Custom React Hooks`, `Axios Dependency`, `Clsx Dependency`, `Cmdk Dependency`, `date-fns Dependency`, `Embla Carousel Dependency`, `form-data Dependency`, `React Hook Form Resolvers Dependency`, `Input OTP Dependency`, `Next.js Dependency`, `next-themes Dependency`, `Radix UI Accordion Dependency`, `Radix UI Alert Dialog Dependency`, `Radix UI Aspect Ratio Dependency`, `Radix UI Checkbox Dependency`, `Radix UI Collapsible Dependency`, `Radix UI Context Menu Dependency`, `Radix UI Dialog Dependency`, `Radix UI Dropdown Menu Dependency`, `Radix UI Hover Card Dependency`, `Radix UI Navigation Menu Dependency`, `Radix UI Popover Dependency`, `Radix UI Progress Dependency`, `Radix UI Radio Group Dependency`, `Radix UI Scroll Area Dependency`, `Radix UI Select Dependency`, `Radix UI Separator Dependency`, `Radix UI Slider Dependency`, `Radix UI Slot Dependency`, `Radix UI Switch Dependency`, `Radix UI Tabs Dependency`, `Radix UI Toast Dependency`, `Radix UI Toggle Dependency`, `Radix UI Toggle Group Dependency`, `Radix UI Tooltip Dependency`, `React Day Picker Dependency`, `React Hook Form Dependency`, `React Resizable Panels Dependency`, `Recharts Dependency`, `Sonner Toast Dependency`, `Tailwind Merge Dependency`, `Tailwindcss Animate Dependency`, `TanStack Query Dependency`, `Vaul Drawer Dependency`, `Zod Dependency`?**
  _High betweenness centrality (0.160) - this node is a cross-community bridge._
- **Why does `cn()` connect `Drawer UI Component` to `Site Page Shells & Navigation`, `Root Layout & Font Setup`, `Sidebar UI Component`, `Alert & Hover Card Components`, `Button & Calendar Components`, `Form Field Components`, `Carousel UI Component`, `Menubar UI Component`, `Hero & Navigation Menu Components`, `Command Palette Component`, `Custom React Hooks`, `Chart UI Component`, `Context Menu Component`, `Dropdown Menu Component`, `Alert Dialog Component`, `Sheet UI Component`, `Table UI Component`, `Breadcrumb Component`, `Toggle & Toggle Group Components`, `OTP Input Component`, `Avatar Component`, `Tooltip Component`?**
  _High betweenness centrality (0.147) - this node is a cross-community bridge._
- **Why does `react` connect `Custom React Hooks` to `Site Page Shells & Navigation`, `Contact Us Page & Service`, `Root Layout & Font Setup`, `UI Styling & Icon Dependencies`?**
  _High betweenness centrality (0.145) - this node is a cross-community bridge._
- **What connects `extends`, `next/core-web-vitals`, `$schema` to the rest of the system?**
  _446 weakly-connected nodes found - possible documentation gaps or missing edges._