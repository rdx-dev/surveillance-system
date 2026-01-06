# Shell App (Container)

The main container application that hosts all micro frontends.

## Port

3005

## Purpose

- Acts as the Module Federation host
- Manages routing between MFEs
- Provides shared layout (navigation, header, footer)
- Manages shared state (auth context)

## Getting Started

### Prerequisites

- Node.js (v18.17.0 or higher)
- npm (v9.6.7 or higher)

### Installation

npm install

## Available Scripts

### Development

npm run dev

Starts the development server with hot module replacement (HMR) on port 3005.

### Production Build

npm run build

Creates an optimized production build in the `dist` directory with:

- Code minification and tree shaking
- Code splitting (vendor, React, and app chunks)
- CSS extraction and optimization
- Source maps (hidden for security)

### Code Formatting

npm run format

Formats all source files using Prettier. This command formats:

- TypeScript files (`.ts`, `.tsx`)
- JavaScript files (`.js`, `.jsx`)
- JSON files (`.json`)
- CSS and SCSS files (`.css`, `.scss`)
- Markdown files (`.md`)

**Note:** This command modifies files in place. Make sure to commit your changes before running it, or use version control to review the changes.

### Type Checking

npm run type-check

Runs TypeScript compiler to check for type errors without emitting files.

### Clean Build

npm run clean

Removes the `dist` directory and all build artifacts.

## Code Quality

This project uses:

- **Prettier** for code formatting
- **TypeScript** for type safety
- **ESLint** (recommended for future setup)

### Formatting Configuration

Prettier configuration is defined in `.prettierrc`. The project uses:

- 2 spaces for indentation
- Double quotes
- Semicolons
- 80 character line width
- ES5 trailing commas

To format your code before committing:
npm run format
