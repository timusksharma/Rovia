# Rovia Logistics — Feature Catalogue

Rovia Logistics is a frontend-only operations control tower for Indian logistics teams. It demonstrates dispatch, fleet, driver, tracking, finance, compliance, and collaboration workflows using realistic local data and simulated telemetry.

## User roles

- **Admin** — complete access, including users, finance, workspace settings, and demo reset.
- **Dispatcher** — orders, routes, live map, drivers, messages, calendar, and alerts.
- **Fleet Manager** — fleet, drivers, maintenance, documents, telemetry, and analytics.

The role switcher is available in the top navigation. Restricted actions remain visible but disabled with an explanatory tooltip.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | KPIs, live network, delivery chart, priority orders, exceptions, activity |
| `/live-map` | Animated vehicle telemetry, lanes, filters, map controls, selected vehicle data |
| `/orders` | Searchable shipment list and board, filters, export, shipment creation |
| `/orders/[id]` | Route progress, status changes, tracking, cargo, resources, notes |
| `/fleet` | Vehicle inventory, utilization, fuel, status, fleet distribution |
| `/fleet/[id]` | Vehicle telemetry, maintenance, capacity, driver assignment |
| `/drivers` | Driver availability, ratings, compliance and performance |
| `/drivers/[id]` | Driver details, licence, assignments and trip history |
| `/routes` | Indian freight lanes, utilization, distance and active map |
| `/calendar` | Dispatch, delivery, maintenance and compliance calendar |
| `/analytics` | Delivery, utilization, revenue and delay-cause charts |
| `/finance` | Revenue, costs, fuel spend, margins and invoices |
| `/documents` | PODs, invoices, permits, insurance and expiry states |
| `/messages` | Local driver/hub threads and simulated message sending |
| `/alerts` | Delay, deviation, maintenance and document acknowledgements |
| `/users` | Team members, roles and permission descriptions |
| `/settings` | Company, notification, map, units and demo-reset controls |

## Operational features

### Control tower and tracking

- Responsive KPI dashboard with shared operational totals.
- Custom SVG/CSS India network map without external map keys.
- Animated vehicle locations, active lanes, zoom controls and asset selection.
- Simulated speed, fuel, cargo temperature, ETA and last-update telemetry.
- Recharts area, bar, line and donut visualizations with tooltips and legends.

### Orders and dispatch

- Shipment search, status filters, list/board views and CSV export.
- Validated shipment-creation drawer with Indian origins, destinations and INR values.
- Status workflow: Draft, Pending, Assigned, Picked Up, In Transit, Delayed, Delivered and Cancelled.
- Shipment details with progress, cargo, stops, tracking events, assigned driver/vehicle and internal notes.

### Fleet and drivers

- Vehicle status, capacity, utilization, fuel, odometer and telemetry details.
- Maintenance schedules and cost display.
- Driver availability, rating, on-time score, licence details and trip assignments.
- Role-aware controls for fleet, driver and maintenance workflows.

### Analytics, finance and compliance

- Delivery performance, revenue, fleet availability and delay-cause reporting.
- INR revenue, expense, fuel, margin and invoice views.
- Document categories, expiry warnings and proof-of-delivery records.
- Calendar events for dispatch, delivery, maintenance and compliance.

### Collaboration and administration

- Driver and hub message threads with locally simulated replies.
- Operational alerts with acknowledgement and dashboard synchronization.
- Admin, Dispatcher and Fleet Manager role simulation.
- Company, notification, telemetry, unit and reset preferences.

## Responsive and accessible behavior

- Persistent desktop sidebar, collapsed tablet rail, and mobile drawer plus bottom navigation.
- Responsive cards, horizontally scrollable operational tables, sticky mobile actions and touch-sized controls.
- Semantic forms/tables, labelled map controls, visible status text, keyboard-compatible inputs, and reduced-motion support.
- Warm-white control surfaces, charcoal navigation, orange primary actions, and restrained semantic status colors.

## Demo data and persistence

The application uses typed local records for Indian hubs, lanes, vehicles, drivers, customers, cargo, events, documents and invoices. User-created shipments, status updates, alert acknowledgements, role selection and preferences persist in versioned `localStorage`. Settings includes a complete demo reset.

No real authentication, GPS, map tiles, uploads, financial transactions, email, messaging, or backend APIs are used.

## Future integration points

- Replace the local store with authenticated REST or GraphQL services.
- Stream vehicle telemetry through WebSockets or MQTT.
- Connect route geometry to Mapbox, HERE, or Google Maps.
- Store POD files in object storage and connect invoice/payment providers.
- Enforce roles server-side and add audit logs, SSO, and organization tenancy.
