# Rovia Logistics

> A responsive logistics operations control tower for modern Indian supply chains.

[Live showcase](https://rovia-gold.vercel.app/) · [Feature catalogue](./feature.md) · [Implementation checklist](./task.md)

Rovia Logistics is a frontend-only product showcase for dispatchers, fleet managers, and logistics administrators. It combines shipment operations, simulated fleet telemetry, interactive maps, charts, exception management, finance, documents, messages, and role-aware controls in one coherent workspace.

## Highlights

- Map-first overview with animated fleet telemetry across Indian logistics corridors
- Shipment list and board views, creation flow, filtering, CSV export, and status management
- Generated order, vehicle, and driver detail pages
- Fleet utilization, fuel, maintenance, driver performance, and compliance views
- Delivery, revenue, availability, and delay-cause charts powered by Recharts
- Finance, invoices, documents, messages, alerts, users, settings, and operations calendar
- Admin, Dispatcher, and Fleet Manager role simulation
- Responsive desktop, tablet, and mobile operations experience
- Versioned local persistence with a complete demo reset

## Application routes

| Area | Routes |
| --- | --- |
| Control tower | `/`, `/live-map` |
| Shipments | `/orders`, `/orders/[id]`, `/routes`, `/calendar` |
| Resources | `/fleet`, `/fleet/[id]`, `/drivers`, `/drivers/[id]` |
| Intelligence | `/analytics`, `/finance`, `/alerts` |
| Collaboration | `/documents`, `/messages` |
| Administration | `/users`, `/settings` |

## Technology

- Next.js App Router with static export
- React and strict TypeScript
- Recharts for responsive data visualization
- Framer Motion and CSS transitions
- Lucide icon system
- Local typed mock data and versioned `localStorage`
- Vercel production deployment

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Verification commands:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Architecture

- `app/lib/types.ts` defines the operational domain and public state contracts.
- `app/lib/data.ts` provides realistic Indian logistics demo records.
- `app/lib/store.tsx` owns mutations, role permissions, persistence, and shared state.
- `app/components` contains the application shell, map, charts, tables, drawers, and common UI.
- Route folders contain focused page composition and generated detail pages.

## Demo roles

- **Admin:** all platform areas, finance, users, settings, and reset controls.
- **Dispatcher:** shipments, routes, live map, drivers, messages, calendar, and alerts.
- **Fleet Manager:** fleet, drivers, maintenance, documents, telemetry, and analytics.

Use the role menu in the top-right navigation to preview permission behavior. Restricted actions remain visible but disabled with an explanation.

## Data and simulation notice

Rovia Logistics is a portfolio concept. Telemetry, routes, shipments, alerts, invoices, documents, users, and messages are fictional local data. The map is a custom visualization rather than a commercial map integration.

No real authentication, GPS, booking, messaging, file upload, payment, or backend service is connected. Demo changes remain in the current browser and can be removed from **Settings → Demo data**.

## Deployment

The repository is connected to Vercel. Production deployments are created automatically from updates to `main`.

For detailed behavior and remaining production integration points, see [feature.md](./feature.md) and [task.md](./task.md).
