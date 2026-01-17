---
description: Workflow for backend logic, API routes, and troubleshooting using the "Flash" persona (Efficiency Focus).
---

# Backend & Logic Workflow (Google 3 Flash Persona)

Use this workflow for API implementation, database interactions, logic fixing, and asset generation.

1.  **Logic Analysis**
    - [ ] Break down the algorithmic problem or API requirement.
    - [ ] Design the data shape (Schema).

2.  **Implementation**
    - [ ] Write API Routes (Next.js App Router).
    - [ ] Implement `zod` validation schemas.
    - [ ] Connect to D1/KV/R2 bindings (ensure context safety).
    - [ ] optimize for execution speed (Edge runtime compatibility).

3.  **Troubleshooting (If Applicable)**
    - [ ] Analyze error logs / stack traces.
    - [ ] Identify root cause (logic error vs. configuration error).
    - [ ] Apply fix and verify.

4.  **Asset Generation (If Applicable)**
    - [ ] Use `generate_image` for required placeholders or assets.
