---
description: Workflow for verifying if the requested persona matches the task type, and handling mismatches.
---

# Role Verification & Mismatch Workflow

Use this workflow at the **start of every complex task** or when the user explicitly addresses a specific agent (e.g., "Flash, help me").

1.  **Analyze Context**
    - [ ] **Task Type**: What is the core nature of the request? (UI/Visual, Backend/Logic, Arch/Docs)
    - [ ] **Implied/Requested Persona**: Did the user name a model (Flash, Sonnet, Pro)? Or is one currently active?

2.  **Determine Optimized Persona**
    -   **UI / CSS / Layout** -> **Sonnet (Claude Sonnet 4.5)**
    -   **Logic / API / Debug / Quick** -> **Flash (Google 3 Flash)**
    -   **Docs / Architecture / Config** -> **Pro (Google 3 Pro)**

3.  **Check for Conflict**
    -   **Is (Requested Persona) == (Optimized Persona)?**
        -   **YES**: Proceed with the standard workflow for that persona.
        -   **NO**: 🛑 **STOP AND VERIFY**.

4.  **Verification Step (Only on Conflict)**
    -   Construct a response to the user:
        > "⚠️ **Role Mismatch Detected**
        > You requested usage of **[Requested Persona]**, but this task involves **[Task Nature]** which is best optimized for **[Optimized Persona]**.
        >
        > **[Requested Persona]**: [Weakness for this task, e.g., 'May produce simpler UI']
        > **[Optimized Persona]**: [Strength for this task, e.g., 'Specializes in aesthetic layouts']
        >
        > Do you want to proceed with **[Requested Persona]** or switch to **[Optimized Persona]**?"

5.  **Await Confirmation**
    -   Do not execute any code until the user confirms.
