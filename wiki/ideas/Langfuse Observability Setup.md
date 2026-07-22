---
title: Langfuse Observability Setup
type: idea
tags: [jairosoft-website, tooling, langfuse, llm-observability, claude-code]
created: 2026-07-22
updated: 2026-07-22
source_count: 0
aliases: []
provenance: synthesis
status: raw
---

On 2026-07-22, Langfuse tooling was added to the Claude Code environment used
on the [[Jairosoft Website]] repo:

- The `langfuse` skill was installed **globally** to `~/.claude/skills/langfuse`
  (not project-scoped), fetched from `github.com/langfuse/skills`.
- `langfuse-cli@0.0.12` was installed globally via `npm install -g langfuse-cli`.

Key claims:
- An attempt to add `LANGFUSE_PUBLIC_KEY` / `LANGFUSE_SECRET_KEY` / `LANGFUSE_HOST`
  to this repo's `.env.example` was rejected by the user, who said the keys
  already exist elsewhere (not in this file).
- It's unclear whether Langfuse is intended to integrate with this codebase
  specifically (the site has no visible LLM-facing features today — it's a
  Next.js corporate site backed by GoHighLevel/Azure DevOps) or whether this
  is personal/global tooling unrelated to the project. Revisit if Langfuse
  usage shows up in actual site code or env config.

## Sources
- Session: Jairosoft Next.js Migration (2026-07-22)
