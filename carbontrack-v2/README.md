# CarbonTrack v2

CarbonTrack v2 is a portfolio-ready web dashboard for CO2 emissions monitoring, fleet tracking, and environmental KPI analysis. The project simulates a SaaS platform for companies that need to visualize emissions, track ESG goals, and identify reduction opportunities.

This application uses fictional local data only. It does not include real authentication, a real database, or sensitive company information.

## Objective

The goal of CarbonTrack v2 is to present a professional product demo with a modern SaaS interface, responsive layouts, bilingual content, light/dark theme support, and deployment-ready architecture for Vercel.

## Tech Stack

- Next.js with App Router
- React
- TypeScript
- Tailwind CSS
- Recharts
- lucide-react
- next-themes
- ESLint

## Features

- Landing page with product positioning and dashboard preview
- Dashboard with KPI cards and Recharts visualizations
- Emissions inventory with search and visual filters
- Fleet page with vehicle cards, table, and high-emission alerts
- Reports page with period selector and executive summary
- Settings page with company data and local preferences
- About page focused on portfolio storytelling
- Floating support chat with mocked PT/EN replies
- Light/dark theme toggle with persisted preference
- PT/EN language toggle with persisted preference

## Routes

- `/` - Product landing and demo entry point
- `/dashboard` - Main environmental dashboard
- `/emissions` - Emissions table and filters
- `/fleet` - Fleet monitoring
- `/reports` - Environmental reports
- `/settings` - Demo preferences
- `/about` - Project explanation for portfolio

## Deploy Target

CarbonTrack v2 is intended to run on Vercel. The Flask version in the parent folder is kept only as the original reference project.

When importing the repository in Vercel, set the project root directory to:

```txt
carbontrack-v2
```

Vercel will then use this Next.js app, not the legacy Flask files.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server only when you need to preview changes locally:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build

Create a production build:

```bash
npm run build
```

Run the production server locally:

```bash
npm run start
```

## Deploy on Vercel

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the repository in Vercel.
3. Set **Root Directory** to `carbontrack-v2`.
4. Keep the framework preset as **Next.js**.
5. Use `npm install` as the install command.
6. Use `npm run build` as the build command.
7. Use `.next` as the output directory.
8. Deploy.

No environment variables are required for the current demo version.

## Project Structure

```txt
src/
  app/
    (app)/
      about/
      dashboard/
      emissions/
      fleet/
      reports/
      settings/
    globals.css
    layout.tsx
    page.tsx
  components/
    charts/
    chat/
    common/
    layout/
    providers/
  data/
  lib/
  messages/
```

## Notes

CarbonTrack v2 is a demonstrative portfolio project. All metrics, vehicles, emissions, reports, recommendations, and chat responses are mocked and fictitious.

## Future Improvements

- Real authentication
- Database and API integration
- Functional PDF export
- Telemetry integrations for fleet data
- Predictive emission reduction models
- User roles and audit history
