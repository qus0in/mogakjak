---
description: Rules for Git branching strategy and post-task knowledge consolidation.
---

# Operational Workflow & Lifecycle

These rules govern how every task should be initiated and concluded to ensure code stability and continuous system improvement.

## 1. 🌿 Git Branching Strategy (Strict Flow)
**Rule**: Use `dev` as an ephemeral feature branch. Always sync with `main` before starting.

1.  **Start of Task (Initialization)**:
    *   **Sync Main**:
        ```bash
        git switch main
        git pull origin main
        ```
    *   **Reset Dev**:
        ```bash
        git branch -D dev  # Delete existing dev
        ```
    *   **Version Bump (Minor)**:
        *   Update the minor version based on the current main state *before* branching.
        *   `npm version minor --no-git-tag-version`
        *   *Note*: This change is staged/carried over to the new branch.
    *   **Create Branch**:
        ```bash
        git switch -c dev
        git add package.json
        git commit -m "chore: Start new version cycle (Minor bump)"
        ```

2.  **Commit Convention**:
    *   Stage changes: `git add .`
    *   Commit command: `git commit -m "prefix: Korean message"`
    *   **Prefixes (English)**:
        *   `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
    *   **Message**: Must be in **Korean** (한글).

3.  **End of Task (PR Preparation)**:
    *   **Version Bump (Patch)**:
        *   Before pushing the PR, update the patch version.
        *   `npm version patch --no-git-tag-version`
        *   `git add package.json`
        *   `git commit -m "chore: bump patch version for PR"`
    *   **Push & PR**:
        *   `git push origin dev --force` (if needed)
        *   `gh pr create --base main --head dev --title "Title" --body "Description"`

## 2. 🧠 Knowledge Consolidation (Continuous Improvement)
**Rule**: Every session must end with a system upgrade.

1.  **Review**: At the completion of the requested task, review:
    *   What was the original request?
    *   What new patterns or fix strategies were discovered?
    *   Did a rule or workflow fail/cause friction?

2.  **Update**:
    *   **Rules**: Update `.agent/rules/*.md` if a new constraints or best practice was found.
    *   **Skills**: Update `.agent/skills/*.md` if a new technique was mastered.
    *   **Workflows**: Update `.agent/workflows/*.md` if the process needs refinement.

3.  **Commit**: Include these metadata updates in the final commit/PR.
