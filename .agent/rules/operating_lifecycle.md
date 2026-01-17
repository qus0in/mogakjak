---
description: Rules for Git branching strategy and post-task knowledge consolidation.
---

# Operational Workflow & Lifecycle

These rules govern how every task should be initiated and concluded to ensure code stability and continuous system improvement.

## 1. 🌿 Git Branching Strategy
**Rule**: Never commit directly to `main` for new features or complex tasks.

1.  **Start of Task**:
    *   Ensure you are on the `dev` branch.
    *   Use `git switch dev` (or `git switch -c dev` if creating new).
    *   *Note*: If a specific feature branch is needed, branch off `dev` (e.g., `feature/login`), but for general "new work", `dev` is the working standard.

2.  **Commit Convention**:
    *   Stage changes: `git add .`
    *   Commit command: `git commit -m "prefix: Korean message"`
    *   **Prefixes (English)**:
        *   `feat`: New feature (새로운 기능)
        *   `fix`: Bug fix (버그 수정)
        *   `docs`: Documentation (문서 수정)
        *   `style`: Formatting/CSS (코드 포맷팅, 세미콜론 누락 등)
        *   `refactor`: Code refactoring (리팩토링)
        *   `test`: Test code (테스트 코드)
        *   `chore`: Build/Tool/Config (빌드 업무, 패키지 매니저 등)
    *   **Message**: Must be in **Korean** (한글).
    *   *Example*: `feat: 사용자 로그인 기능 구현`

3.  **End of Task (PR)**:
    *   Once work is verified, submit a Pull Request to `main`.
    *   Use GitHub CLI: `gh pr create --base main --head dev --title "Title" --body "Description"`
    *   *Self-Correction*: If strictly local, ensure code is merged to `dev`.

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
