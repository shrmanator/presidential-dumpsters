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

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Turbopack (Next.js's fast bundler)
- **Package Manager**: pnpm

## Repository Structure

- `src/` - Source code with App Router structure
- `public/` - Static assets
- `node_modules/` - Dependencies
- `.dist/` - Legacy directory (can be removed)

## Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration  
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration
- `postcss.config.mjs` - PostCSS configuration

# PR Review Standards

## When to Request Changes (blocks merge):
- Build failures
- Test failures
- Linting errors blocking deployment
- Breaking changes without clear migration path

Everything else is situational. Think through each PR on its own.

## When to Comment (doesn't block):
- Suggestions, questions, alternative approaches

## Communication:
Direct and technical. State: problem, location, what needs fixing.

No emojis. No fluff.

## Commit Messages:
No emojis. No Claude mentions.
