# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the "presidential-dumpsters" project - a Next.js application built with TypeScript, Tailwind CSS, and Turbopack.

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server with Turbopack
pnpm dev

# Build for production with Turbopack
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Architecture

  - **Framework**: Next.js 15.x (App Router)
  - **Core Philosophy**: **Server-First.** We leverage React Server Components (RSCs) by default. Client-side interactivity (`"use client"`) is an *opt-in* for specific, minimal components.
  - **Language**: TypeScript
  - **Styling**: Tailwind CSS (v4+)
  - **Build & Dev**: Turbopack (via `pnpm dev` and `pnpm build`)
  - **Package Manager**: pnpm

## Code Patterns

Embrace Modern Next.js (15+) & React (19+) Patterns.

  - **RSCs by Default:** Components are Server Components unless they require interactivity (state, effects, event handlers), at which point they must use `"use client"`.
  - **Keep Client Components Small:** Isolate interactivity. A `"use client"` directive makes the component and *all its children* client components. Push state and interactivity as deep into the component tree (to "leaf" components) as possible.
  - **Fetch Data on the Server:** Prefer server-side data fetching (in Server Components, Layouts, or Pages) and passing data down as props. Avoid client-side data fetching (e.g., in a `useEffect`) unless absolutely necessary (e.g., for data that is user-specific and changes frequently on the client).
  - **Colocate Logic:** Avoid premature abstraction. Business logic should live in `/utils` and be framework-agnostic (plain TS functions).
  - **No Unnecessary Hook Wrappers:** Do not wrap simple utilities or business logic in a custom hook. Reserve custom hooks (`useSomething`) *only* for logic that genuinely manages reusable, complex *React state or lifecycles* (e.g., `useLocalStorage`, `useMediaQuery`).
  - **Favor Simplicity:** Don't Repeat Yourself (DRY) is not an absolute rule. Duplicating code 2-3 times is often *better* than introducing a complex, premature abstraction. Favor simplicity and readability over absolute dryness.

## Repository Structure

  - `src/app/` - App Router routes, pages, layouts, and route-specific components.
  - `src/components/` - Shared, reusable, and ideally "dumb" UI components (e.g., `<Button />`, `<Card />`).
  - `src/utils/` - Project-wide, framework-agnostic utility functions (e.g., `formatDate`, `isBusinessOpen`).
  - `public/` - Static assets (images, fonts, etc.).

## Configuration Files

  - `next.config.ts` - Next.js configuration
  - `tailwind.config.ts` - Tailwind CSS configuration
  - `tsconfig.json` - TypeScript configuration
  - `eslint.config.mjs` - ESLint configuration
  - `postcss.config.mjs` - PostCSS configuration

## PR Review Standards

### Blocking Reviews (Request Changes):

  - Build, test, or linting failures.
  - Obvious bugs or regressions.
  - Architectural misalignment (e.g., unnecessary client-side fetching, premature abstraction).
  - Breaking changes without a clear migration path or documentation.

### Non-Blocking Feedback (Comments):

  - Suggestions, questions, or alternative approaches.
  - For minor, non-blocking suggestions (style, wording, a small simplification), prefix your comment with **"nit:"** (nitpick). This signals the author can address it at their discretion.

### Communication:

Direct and technical. State: problem, location, what needs fixing. No emojis. No fluff.

## Commit Messages:

Keep commits professional, technical, and emoji-free.