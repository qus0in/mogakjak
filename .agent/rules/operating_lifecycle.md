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
    *   **Format**: `git commit -m "type: subject"`
    *   **Language**: `type` is in English, `subject` is in **Korean** (한글).
    *   **Allowed Types**:
        *   `feat`: 새로운 기능 추가
        *   `fix`: 버그 수정
        *   `docs`: 문서 수정
        *   `style`: 코드 포맷팅, 세미콜론 누락, 안쓰는 import 제거 등 (코드 변경 없음)
        *   `design`: CSS 등 사용자 UI 디자인 변경
        *   `refactor`: 코드 리팩토링 (기능 변경 없음)
        *   `test`: 테스트 코드 추가/수정
        *   `chore`: 빌드 업무, 패키지 매니저, 잡동사니 (소스 코드 변경 없음)
        *   `perf`: 성능 개선
        *   `ci`: CI 구성 파일 및 스크립트 변경
        *   `revert`: 이전 커밋 되돌리기
    *   **Examples**:
        *   `feat: 로그인 API 구현`
        *   `fix: 회원가입 시 유효성 검사 에러 수정`
        *   `design: 메인 페이지 버튼 스타일 변경`

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
