# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bullpedia is a Wikipedia-style website that tracks and ranks public personas who are considered "bullshitters" - particularly tech founders and public figures who make misleading claims or engage in deceptive practices. The site currently features detailed exposés of Brett Adcock (Figure AI/Archer Aviation) and Jesse Lyu (Rabbit Inc/R1 device).

## Architecture

**Static Site with TypeScript + Express Server**: The site generates static HTML pages with TypeScript-compiled JavaScript for interactivity, served by a Node.js Express server.

**Page Structure**: Each individual page (person profile) follows a three-block Wikipedia-style layout:
- Page title
- Short biographical summary (in a gray box)
- Main content with detailed sections

**Data Flow**:
- TypeScript source files in `src/` define page content as hardcoded data structures
- Each page has its own TS file (e.g., `src/index.ts` for Brett Adcock, `src/jesse.ts` for Jesse Lyu)
- Homepage (`src/homepage.ts`) contains a hardcoded rankings array of all personas
- All TS files compile to `dist/` and are served by the Express server

**Content Sources**: Raw investigation materials are stored in `investigations/` folder as text files containing transcripts/analysis of public figures' deceptive practices.

## Development Commands

```bash
# Build TypeScript to JavaScript
npm run build

# Watch mode for development (rebuilds on changes)
npm run dev

# Start the Express server locally
npm start

# Deploy to Fly.io
fly deploy
```

## Content Management

**Adding New Personas**:
1. Create new TypeScript file in `src/` (e.g., `src/newperson.ts`)
2. Use the `PageContent` interface exported from `src/index.ts`
3. Create corresponding HTML file (e.g., `newperson.html`) following existing patterns
4. Add entry to rankings array in `src/homepage.ts`
5. Rebuild and redeploy

**Updating Rankings**: Modify the `rankings` array in `src/homepage.ts`. Each entry needs `rank`, `title`, `url`, and `score` properties.

**Content Guidelines**: Focus on factual documentation of deceptive practices, staged demos, misleading investor claims, and patterns of bullshitting behavior. Use investigation materials from `investigations/` folder as source material.

## Deployment

The app is deployed on Fly.io as `bullpedia.fly.dev`. The Express server serves:
- Homepage at `/` (serves `homepage.html`)
- Individual profile pages by filename (e.g., `/jesse.html`)
- Static assets and compiled JS from `/dist/`

The Dockerfile handles TypeScript compilation during the build process. No additional build steps needed for deployment beyond `fly deploy`.

## Server Configuration

The Express server (`server.js`) uses a simple static file serving approach:
- Root route `/` serves `homepage.html`
- All other routes attempt to serve files directly from the filesystem
- JavaScript files are served from `/dist/` directory
- 404 for non-existent files