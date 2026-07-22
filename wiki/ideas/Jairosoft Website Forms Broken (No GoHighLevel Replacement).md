---
title: Jairosoft Website Forms Broken (No GoHighLevel Replacement)
type: idea
tags: [jairosoft-website, forms, gohighlevel, backend, todo]
created: 2026-07-21
updated: 2026-07-21
source_count: 0
aliases: []
provenance: synthesis
status: raw
---

The [[Jairosoft Website]] Next.js migration has 3 forms (Contact, Internship,
Employment Verification) that submit to GoHighLevel via Next.js API routes.
GoHighLevel is no longer in use, so all 3 forms currently fail in production.

Key claims:
- Routes affected: `src/app/api/submit-contact`, `submit-internship`, `submit-employment-verification`.
- Live site (jairosoft-website.vercel.app) returns `{"error":"Server configuration error"}` on any submission of these 3 forms.
- Replacement backend (email notification, different CRM, or temporarily disabling the forms) is undecided — revisit later.

## Sources
- Session: Jairosoft Next.js Migration (2026-07-21)
