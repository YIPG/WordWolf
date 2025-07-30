# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Word Wolf (ワードウルフ) web game built with React and TypeScript. It's a party game where players are assigned similar words, but some players (wolves) get a different word and must blend in.

## Common Development Commands

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build

# Run tests
yarn test

# Build Tailwind CSS (run before start or build)
yarn build:style
```

## Modern Version

The modernized version has been moved to a separate repository: **[WordWolf-v2](https://github.com/YIPG/WordWolf-v2)**

Key improvements in v2:
- React 18.3 with Vite for 10x faster builds
- Modern TypeScript 5.x
- React Router v6
- Tailwind CSS v3
- Google Analytics 4
- Modern PWA implementation

Commands for v2:
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Architecture Overview

### Core Technologies
- React 16.12 with TypeScript (modern version uses React 18)
- React Router for navigation
- Tailwind CSS for styling (with PostCSS)
- localForage for persistent state storage
- React Hook Form for form handling

### State Management
The app uses React Context API with custom hooks for state management:

- **NameListProvider** (`src/logic/NameList.tsx`): Manages player names with IndexedDB persistence
- **GameSettingProvider** (`src/logic/GameSetting.tsx`): Manages game configuration including:
  - Player assignments (civil vs wolf)
  - Word assignments
  - Talk time settings
  - Category selection

### Routing Structure
The game follows a linear flow through these routes:
1. `/` - Home screen
2. `/setting/people` - Player name entry
3. `/setting/game` - Game configuration
4. `/game/word` - Word display to each player
5. `/game/talk` - Discussion timer
6. `/game/vote` - Voting phase
7. `/game/result` - Game results

### Key Implementation Details

- **Word Data**: Located in `src/assets/words.ts`, contains 400+ word pairs organized by categories
- **Persistence**: Uses localForage to save game state in IndexedDB between sessions
- **Context Pattern**: Uses a factory function `createCtx` (`src/context.tsx`) to create typed contexts
- **Styling**: Uses Tailwind CSS with custom button styles defined as `.btn` classes

### Development Notes

- The app uses PostCSS to process Tailwind CSS. The `prebuild` and `prestart` scripts ensure styles are compiled
- Google Analytics is integrated for page tracking (GA4 in modern version)
- The project includes PWA support with manifest and service worker
- TypeScript is configured with strict mode enabled
- Modern version uses Vite instead of Create React App for faster builds