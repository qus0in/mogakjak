# Mogakjak (모각작)

Mogakjak은 **Next.js 16**, **Cloudflare Pages**, **shadcn/ui**를 기반으로 구축된 모던 웹 애플리케이션입니다.  
엄격한 린팅, 테스트 자동화, 그리고 AI 에이전트 협업 워크플로우를 갖춘 강력한 개발 환경을 제공합니다.

## 🛠️ 기술 스택 (Tech Stack)

### Core
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

### 상태 및 데이터 관리 (State & Data Management)
- **Client State**: [Zustand](https://github.com/pmndrs/zustand)
- **Server State**: [TanStack Query v5](https://tanstack.com/query/latest)
- **Forms**: [React Hook Form](https://react-hook-form.com/)

### Cloudflare 통합 (Cloudflare Integration)
- **Hosting**: Cloudflare Pages
- **Database**: D1 (설정 완료)
- **KV Storage**: KV (설정 완료)
- **Local Dev**: `@cloudflare/next-on-pages` (Edge Runtime 시뮬레이션)

### 테스트 및 품질 (Testing & Quality)
- **Unit/Integration**: [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/)
- **E2E**: [Playwright](https://playwright.dev/)
- **API Mocking**: [MSW (Mock Service Worker)](https://mswjs.io/)
- **CI/CD**: GitHub Actions (Lint, Type Check, Test)

---

## 🚀 시작하기 (Getting Started)

### 필수 조건 (Prerequisites)
- Node.js 20+
- pnpm 10+

### 설치 (Installation)
```bash
pnpm install
```

### 개발 서버 실행 (Development)
```bash
pnpm dev
# http://localhost:3000 에서 실행되며 Cloudflare 바인딩이 활성화됩니다.
```

### 테스트 (Testing)
```bash
# 단위 테스트 (Unit Tests)
pnpm test

# E2E 테스트 (E2E Tests)
pnpm test:e2e
```

### 배포 빌드 (Deployment)
```bash
pnpm pages:build
pnpm preview
```

---

## 🤖 AI 에이전트 시스템 (Antigravity)

이 프로젝트는 `.agent/` 디렉토리에 정의된 특수 AI 에이전트 시스템을 따릅니다.

### 페르소나 (Personas)
- **⚡️ Flash**: 로직, 백엔드 구현, 디버깅 (Google 3 Flash)
- **🎨 Sonnet**: 프론트엔드, UI/UX 디자인 (Claude Sonnet 4.5)
- **🧠 Pro**: 아키텍처, 유지보수, 문서화 (Google 3 Pro)

### 개발 규칙 (Development Rules)
- **브랜치 관리**: `main` (안정 버전) <-> `dev` (작업 브랜치).
- **커밋 메시지**: `prefix: 한글 메시지` (예: `feat: 로그인 기능 구현`).
- **이슈 관리**: AI와의 논의 내용은 `[Chat]` 이슈 템플릿을 사용해 기록합니다.

---

## 📂 프로젝트 구조 (Project Structure)

```
├── .agent/              # AI 규칙, 워크플로우, 스킬 정의
├── .github/             # CI 워크플로우, 이슈 템플릿
├── src/
│   ├── app/             # Next.js App Router
│   ├── components/      # React 컴포넌트 (shadcn/ui)
│   ├── lib/             # 유틸리티 함수
│   ├── mocks/           # MSW 핸들러
│   ├── providers/       # 전역 프로바이더
│   └── ...
├── tests/               # (선택 사항) 별도 테스트 폴더
├── playwright.config.ts # E2E 설정
├── vitest.config.ts     # 단위 테스트 설정
└── wrangler.toml        # Cloudflare 설정
```
