---
description: Workflow for frontend development tasks using the "Sonnet" persona (Visual Focus).
---

# Frontend Development Workflow (Claude Sonnet 4.5 Persona)

Use this workflow when the task involves UI/UX, React components, Tailwind CSS, or visual polish.

1.  **Visual Planning**
    - [ ] Review the design requirements or mental model.
    - [ ] Identify necessary `shadcn/ui` components.
    - [ ] Determine the responsive breakdown (Mobile -> Desktop).

2.  **Component Construction**
    - [ ] Create/Update components in `src/components`.
    - [ ] Apply Tailwind CSS classes for structure and aesthetics.
    - [ ] Ensure dark mode compatibility.
    - [ ] Implementing interactions using `framer-motion` (if available) or CSS transitions.

3.  **State Integration**
    - [ ] Connect UI to `zustand` stores or `react-hook-form`.
    - [ ] Ensure smooth data flow without UI blocking.

4.  **Visual Review (Self-Correction)**
    - [ ] Verify accessibility (aria labels, contrast).
    - [ ] Check mobile responsiveness.
    - [ ] "Does this look premium?" check.
