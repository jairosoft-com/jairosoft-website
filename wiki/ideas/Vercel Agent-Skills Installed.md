---
title: Vercel Agent-Skills Installed
type: idea
tags: [jairosoft-website, tooling, vercel, security, claude-code]
created: 2026-07-22
updated: 2026-07-22
source_count: 0
aliases: []
provenance: synthesis
status: raw
---

On 2026-07-22, `npx skills add vercel-labs/agent-skills` installed 9 skills
into `.agents/skills/` (project-local directory, symlinked into Claude Code)
for the [[Jairosoft Website]] repo:

- vercel-composition-patterns
- deploy-to-vercel
- vercel-react-best-practices
- vercel-react-native-skills
- vercel-react-view-transitions
- vercel-cli-with-tokens
- vercel-optimize
- web-design-guidelines
- writing-guidelines

Key claims:
- Gen and Socket security scans came back clean (Safe / 0 alerts) for all 9.
- Snyk flagged 3 as **Medium risk**: `vercel-cli-with-tokens`,
  `web-design-guidelines`, `writing-guidelines` — worth a closer look before
  relying on them, per the installer's own prompt ("Review skills before use;
  they run with full agent permissions").
- Open question: whether `.agents/skills/` should be committed to the repo or
  added to `.gitignore` — undecided as of this writing.

## Sources
- Session: Jairosoft Next.js Migration (2026-07-22)
