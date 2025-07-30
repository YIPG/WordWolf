# ワードウルフ 🐺 - Modern Version

This is the modernized version of the Word Wolf game, upgraded from the 5-year-old codebase to use latest technologies.

## Tech Stack Updates

- **React**: 16.12 → 18.3 (with new React 18 features)
- **TypeScript**: 3.7.2 → 5.x
- **Build Tool**: Create React App → Vite
- **React Router**: v5 → v6
- **Tailwind CSS**: 1.1.4 → 3.x
- **Analytics**: Universal Analytics → Google Analytics 4
- **PWA**: CRA Service Worker → Vite PWA Plugin

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and add your GA4 tracking ID.

4. Run development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features

- Modern React 18 with TypeScript
- Fast builds with Vite
- PWA support with offline capabilities
- Google Analytics 4 integration
- Tailwind CSS for styling
- Persistent state with localForage

## Migration Notes

The project has been fully modernized while maintaining all original functionality. All dependencies have been updated to their latest versions, and the build process has been significantly improved with Vite.