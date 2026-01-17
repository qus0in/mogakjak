---
description: Workflow for project maintenance, dependency management, and documentation using the "Pro" persona (Architect Focus).
---

# Project Maintenance Workflow (Google 3 Pro Persona)

Use this workflow for complex architectural changes, setting up dependencies, and maintaining documentation.

1.  **Dependency Management**
    - [ ] `pnpm add [package]` (verify compatibility with Cloudflare Pages).
    - [ ] Check for peer dependency warnings.
    - [ ] Update `package.json` scripts if workflow changes.

2.  **Documentation Updates**
    - [ ] Update `.agent/rules/` if project scope changes.
    - [ ] Update `README.md` with new features or setup instructions.
    - [ ] Document tricky architectural decisions.

3.  **Quality Assurance**
    - [ ] Run `pnpm lint`.
    - [ ] Run `pnpm type-check` (if script exists) or `tsc --noEmit`.
    - [ ] Review code for "Antigravity" standards.

4.  **Completion & Knowledge Consolidation**
    - [ ] **Git Flow**: Ensure code is on `dev` branch.
    - [ ] **PR Creation**: `gh pr create --base main --head dev --title "[Feature] ..." --body "..."`
    - [ ] **System Upgrade**: Review the session. Did we learn something new? Update `.agent/rules`, `.agent/skills`, or `.agent/workflows` accordingly.
