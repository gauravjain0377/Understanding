# Understanding

A thinking space for learning how software actually works — conceptually, visually, and intuitively.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - React components
- `content/concepts/` - MDX concept files
- `lib/` - Utility functions for MDX processing and concept management

## Adding New Concepts

Create a new `.mdx` file in `content/concepts/` with frontmatter:

```mdx
---
title: "Your Concept Title"
description: "A brief description"
category: "Category Name"
related: ["related-concept-slug"]
---

Your content here...
```

## Building for Production

```bash
npm run build
npm start
```

## Features

- **Focus Mode**: A reading tunnel effect that dims content around your reading position
- **Concept Connections**: Sidebar showing related concepts as you read
- **Progressive Reveals**: Content fades in smoothly as you scroll
- **Minimalist Design**: Calm, book-like typography and spacing

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- MDX for content
- next-mdx-remote for MDX processing
