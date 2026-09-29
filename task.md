# Rovia Logistics — Implementation Checklist

Checked items are implemented and verified in the current repository. Unchecked items are deliberate future production integrations rather than hidden incomplete UI work.

## Foundation and data

- [x] Replace passenger-booking domain and routes.
- [x] Define typed shipment, cargo, route, vehicle, telemetry, maintenance, driver, alert, calendar, document, invoice, message, user and role models.
- [x] Add realistic India-focused mock operations data.
- [x] Add versioned `localStorage` hydration, malformed-data fallback and reset.
- [x] Add shared role permissions and derived state.

## Application shell

- [x] Build persistent desktop sidebar and top navigation.
- [x] Add global search, notifications, profile and role switcher.
- [x] Add tablet navigation rail, mobile drawer and bottom navigation.
- [x] Add consistent Lucide icon and semantic status systems.

## Pages

- [x] Overview dashboard.
- [x] Live fleet map.
- [x] Orders list, board, create flow and generated detail pages.
- [x] Fleet list and generated vehicle detail pages.
- [x] Drivers list and generated driver detail pages.
- [x] Routes and lane utilization.
- [x] Operations calendar.
- [x] Analytics dashboards.
- [x] Finance and invoices.
- [x] Documents and expiry states.
- [x] Messages and local sending.
- [x] Alerts and acknowledgement.
- [x] Users and access roles.
- [x] Settings and demo reset.

## Workflows

- [x] Search and filter shipments.
- [x] Switch list and board order views.
- [x] Create locally persisted shipments with validation.
- [x] Change shipment status from detail pages.
- [x] Acknowledge alerts and update shared state.
- [x] Simulate moving fleet telemetry and selectable map assets.
- [x] Export representative operational CSV data.
- [x] Enforce role-aware disabled actions.

## Quality and verification

- [x] Responsive CSS for 320px through large desktop layouts.
- [x] Reduced-motion behavior.
- [x] Empty and restricted states.
- [x] Unit tests for KPIs, filtering, permissions and status transitions.
- [x] ESLint passes.
- [x] Strict TypeScript check passes.
- [x] Next.js production static export passes.
- [x] All list and generated detail routes are included in the export.
- [x] README and feature catalogue updated.
- [ ] Connect real GPS/maps, authentication and backend services.
- [ ] Add server-enforced permissions and production audit logs.

## Deployment

- [x] Keep the project compatible with the connected Vercel repository.
- [ ] Verify the new production deployment after this redesign is committed and pushed.
