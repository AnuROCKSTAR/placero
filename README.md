# Placero

Placero is a modern hackathon-grade student placement preparation platform designed for engineering students to learn, practice, and build proof of skills for campus placements.

## Features

- Personalized onboarding and readiness dashboard
- Company war room for target companies
- Skill heatmap and daily missions
- AI career coach using Google Gemini
- Resume bullet lab and proof-of-execution workflow
- Mock interview practice and mistake journaling
- Professional, student-friendly UI with a custom logo

## Tech stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- NextAuth
- Google Gemini API
- Vitest

## Quick start

```bash
npm install
cp .env.example .env.local
npx prisma generate
npx prisma migrate dev --name init
npm run seed
npm run dev
```

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run seed` — seed demo data
- `npm test` — run tests

## Environment variables

See `.env.example` for required keys.

## Project structure

```text
app/
components/
lib/
prisma/
server/
public/
```

## Deployment

The app is compatible with Vercel and PostgreSQL.
