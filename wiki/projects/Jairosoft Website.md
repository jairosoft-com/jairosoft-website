---
title: Jairosoft Website
type: project
tags: [jairosoft-website, nextjs, vercel, azure-devops]
created: 2026-07-21
updated: 2026-07-22
source_count: 0
aliases: [jairosoft-website]
provenance: synthesis
---

The Jairosoft corporate website, migrated from a Vite + React Router SPA to
Next.js 16 (App Router). Deployed on Vercel; source lives in
`jairosoft-com/jairosoft-website` on GitHub.

Key facts:
- **Code**: [[https://github.com/jairosoft-com/jairosoft-website|github.com/jairosoft-com/jairosoft-website]] (public), `main` branch auto-deploys to Vercel.
- **Live**: https://jairosoft-website.vercel.app
- **Work tracking**: Azure DevOps project at https://dev.azure.com/jairo/Jairosoft.com
- **Known issue**: [[Jairosoft Website Forms Broken (No GoHighLevel Replacement)]] — the 3 site forms fail in production since GoHighLevel was dropped; replacement backend undecided.
- **Tooling**: [[Vercel Agent-Skills Installed]] — 9 Vercel agent-skills added to `.agents/skills/`; commit-vs-gitignore undecided. [[Langfuse Observability Setup]] — Langfuse CLI/skill added to the Claude Code environment; unclear if it's meant to integrate with this codebase.

## Sources
- Session: Jairosoft Next.js Migration (2026-07-21)
- Session: Jairosoft Next.js Migration (2026-07-22)
