# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository. Read this file in its entirety before generating or modifying code.

## Key AI Directives

1.  **Server-First:** Your default is React Server Components. Use `"use client"` only as a last resort for interactivity.
2.  **Keep Client Components Small:** Isolate interactivity into "leaf" components.
3.  **Use Server Actions:** All data mutations must be in `/actions` as Server Actions.
4.  **Logic Belongs in `/utils`:** All framework-agnostic business logic (formatting, calculations) goes in `/utils`.
5.  **No `/hooks` Directory:** Do not create a `/hooks` directory. Colocate hooks or, if they are just utilities, place them in `/utils`.
6.  **Simplicity Over DRY:** Do not create complex, premature abstractions. Duplication is acceptable if it maintains readability.

## Project Overview

This is the "presidential-dumpsters" project: **a full-service company providing junk removal, dumpster rentals, excavation, and demolition for both residential and commercial clients.**

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
- **Server Actions for Mutations:** Use Server Actions (`"use server"`) in `/actions` for data mutations (form submissions, database writes). They run on the server and can be called from Client Components.
- **Fetch Data on the Server:** Prefer server-side data fetching (in Server Components, Layouts, or Pages) and passing data down as props. Avoid client-side data fetching (e.g., in a `useEffect`) unless absolutely necessary (e.g., for data that is user-specific and changes frequently on the client).
- **Colocate Logic:** Avoid premature abstraction. Business logic should live in `/utils` and be framework-agnostic (plain TS functions).
- **No Custom Hooks Directory:** Do not create a `/hooks` directory. If you need a custom hook, colocate it with the component using it. Reserve custom hooks *only* for logic that genuinely manages reusable, complex *React state or lifecycles* (e.g., `useLocalStorage`, `useMediaQuery`). Most "hooks" are just utilities that belong in `/utils`.
- **Favor Simplicity:** Don't Repeat Yourself (DRY) is not an absolute rule. Duplicating code 2-3 times is often *better* than introducing a complex, premature abstraction. Favor simplicity and readability over absolute dryness.

## Factoring, Length, and Readability

- **Line Length**: Keep all code lines under **100 characters**. This improves readability and allows for side-by-side diffs.
- **Function Size**: Functions should be small and do one thing well (Single Responsibility Principle). If a function exceeds ~50-75 lines, it's a strong candidate for refactoring.
- **File Size**: Avoid "monster files." A single logic file (like a server action file or a complex component) should ideally be under **300-400 lines**. If it grows larger, refactor it into smaller, more focused modules.
- **Cohesion**: Keep related logic co-located. If a helper function is only used by one other function or file, keep it in that same file rather than exporting it from a global `utils` file.

## Repository Structure

- `src/app/` - App Router routes, pages, layouts, and route-specific components.
- `src/components/` - Shared, reusable UI components. Client Components live here when they need interactivity.
- `src/actions/` - Next.js Server Actions (`"use server"`) for mutations like form submissions and database operations.
- `src/utils/` - Framework-agnostic utility functions (e.g., `formatDate`, `isBusinessOpen`). Pure TypeScript, no React.
- `public/` - Static assets (images, fonts, etc.).

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