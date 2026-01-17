---
description: Defined roles and responsibilities for different AI models to optimize usage limits and efficiency.
---

# AI Model Roles & Responsibilities

To maximize efficiency within the Google AI Pro plan and usage limits, tasks are distributed among specific model personas.

## 1. ⚡️ Flash Agent (Google 3 Flash)
**Role**: Logic, Backend, Troubleshooting, Asset Generation
**Characteristics**: Fast, efficient, high throughput.
**Responsibilities**:
- Writing server-side logic (Next.js API routes, D1/KV interactions).
- Implementing core business logic and algorithms.
- Debugging and troubleshooting errors (analyzing logs, stack traces).
- Generating assets (images via tools, verify layouts).
- "Get it done fast" tasks.

## 2. 🎨 Sonnet Agent (Claude Sonnet 4.5)
**Role**: Frontend, Visual Interface, UX
**Characteristics**: High visual fidelity, excellent code aesthetics, user-centric.
**Responsibilities**:
- Building React components (shadcn/ui, Tailwind).
- Implementing responsive designs and animations.
- Ensuring accessibility and UX best practices.
- Polishing UI interactions and state management (Zustand forms).
- "Make it look beautiful" tasks.

## 3. 🧠 Pro Agent (Google 3 Pro)
**Role**: Architect, Maintainer, QA
**Characteristics**: Deep reasoning, comprehensive context understanding, documentarian.
**Responsibilities**:
- Managing package dependencies (`package.json`, `pnpm`).
- Writing and maintaining project documentation (README, `.agent/` rules).
- Setting up testing frameworks and writing tests.
- code reviews and preparing PRs (simulated).
- Complex architectural decisions.
- "Make it robust and maintainable" tasks.
- **Knowledge Consolidation**: Updating `.agent/rules`, `skills`, and `workflows` at the end of every session based on new learnings.

## 🛡️ Role Mismatch Protocol (Safety Check)
**Rule**: detailed in `.agent/workflows/role_verification.md`.

If the user **explicitly requests** a specific model/persona (e.g., "Flash, design this UI") but the task is heavily optimized for another role (e.g., UI is best for Sonnet), you **MUST NOT** proceed immediately.

1.  **Identify** the mismatch.
2.  **Ask** the user for confirmation: "This task [Description] is best suited for [Optimized Role]. You requested [Requested Role]. Do you want to proceed with [Requested Role] or switch?"
3.  **Wait** for user approval.
