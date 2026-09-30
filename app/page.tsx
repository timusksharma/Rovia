"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  Filter,
  Layers,
  MapPin,
  MessageCircle,
  MoreVertical,
  Navigation,
  Package,
  Phone,
  Plus,
  Radio,
  Search,
  SlidersHorizontal,
  Star,
  Truck,
  Users
} from "lucide-react";
import { Shell } from "./components/Shell";
import { DeliveryChart, DeliveryGaugeDonut, DrivingHoursDonut } from "./components/Charts";
import { LiveMap } from "./components/LiveMap";
import { CreateShipment, Kpi, ShipmentTable, Status, inr } from "./components/UI";
import { TruckSideProfile, CoachSideProfile } from "./components/VehicleIllustrations";
import { useOps } from "./lib/store";

export default function Dashboard() {
  const { state, unresolved, can } = useOps();
  const [createOpen, setCreateOpen] = useState(false);
  const [selectedShipmentId, setSelectedShipmentId] = useState<string>("RVL-58461");
  const [activeTabTime, setActiveTabTime] = useState<"Day" | "Week" | "Month">("Month");
  const [deliverySearch, setDeliverySearch] = useState("");

  const activeShipments = state.shipments.filter(x =>
    ["Picked Up", "In Transit", "Delayed", "Assigned"].includes(x.status)
  );

  const filteredOngoing = activeShipments.filter(
    s =>
      s.id.toLowerCase().includes(deliverySearch.toLowerCase()) ||
      s.customer.toLowerCase().includes(deliverySearch.toLowerCase()) ||
      s.destination.toLowerCase().includes(deliverySearch.toLowerCase())
  );

  const currentShipment =
    state.shipments.find(s => s.id === selectedShipmentId) || activeShipments[0] || state.shipments[0];

  const currentVehicle =
    state.vehicles.find(v => v.id === currentShipment?.vehicleId) || state.vehicles[0];

  const currentDriver =
    state.drivers.find(d => d.id === currentShipment?.driverId) || state.drivers[0];

  return (
    <Shell>
      {/* TOP KPI ROW: 4 Stat Cards (Image 2 & 3 style) */}
      <div className="grid-kpi-4">
        <Kpi
          label="Total Shipments"
          value="128"
          delta="14.2%"
          icon={Package}
          tone="blue"
        />
        <Kpi
          label="Active In Transit"
          value={String(activeShipments.length)}
          delta="8.1%"
          icon={Truck}
          tone="cyan"
        />
        <Kpi
          label="On-Time Delivery"
          value="95.4%"
          delta="2.3%"
          icon={CheckCircle2}
          tone="green"
        />
        <Kpi
          label="Open Exceptions"
          value={String(unresolved.length)}
          delta="-25.0%"
          icon={AlertTriangle}
          tone="red"
        />
      </div>

      {/* MIDDLE SECTION: Ongoing Deliveries + Live Network Map (Image 1 "Swift Haul" style) */}
      <div className="dispatch-cockpit-grid">
        {/* Left Column: Ongoing Deliveries List */}
        <section className="ongoing-delivery-panel">
          <div className="ongoing-head">
            <div>
              <h2 className="section-heading">Ongoing Deliveries</h2>
              <span className="section-sub">
                {activeShipments.length} active dispatches en route
              </span>
            </div>
            <Link href="/orders" className="view-all-link">
              View all <ArrowRight size={13} />
            </Link>
          </div>

          {/* Quick Search inside Deliveries Stream */}
          <div className="ongoing-search-bar">
            <Search size={14} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search active orders, city..."
              value={deliverySearch}
              onChange={e => setDeliverySearch(e.target.value)}
            />
          </div>

          {/* Delivery Stream Cards */}
          <div className="ongoing-cards-scroll">
            {filteredOngoing.map(shipment => {
              const isSelected = shipment.id === selectedShipmentId;
              const driver = state.drivers.find(d => d.id === shipment.driverId);

              return (
                <article
                  key={shipment.id}
                  onClick={() => setSelectedShipmentId(shipment.id)}
                  className={`ongoing-card ${isSelected ? "selected" : ""}`}
                >
                  {/* Card Header: Number, Category, Truck Profile */}
                  <div className="ongoing-card-top">
                    <div>
                      <span className="card-number-lbl">Shipment number</span>
                      <h3 className="card-shipment-id">{shipment.id}</h3>
                      <span className="card-cargo-category">
                        {shipment.cargo[0]?.category || "General"} · {shipment.cargo[0]?.description || "Palletized freight"}
                      </span>
                    </div>
                    <div className="card-truck-visual">
                      <TruckSideProfile />
                    </div>
                  </div>

                  {/* Route Stepper: Origin -> Dotted Line -> Destination */}
                  <div className="ongoing-route-stepper">
                    <div className="route-step">
                      <span className="step-circle origin-point" />
                      <div className="step-info">
                        <b>{shipment.origin} Hub</b>
                        <small>Origin · Dispatched 09:20</small>
                      </div>
                    </div>
                    <div className="route-line-vertical">
                      <span className="line-distance">284 km</span>
                    </div>
                    <div className="route-step">
                      <span className="step-circle dest-point" />
                      <div className="step-info">
                        <b>{shipment.destination} Terminal</b>
                        <small>ETA {shipment.eta}</small>
                      </div>
                    </div>
                  </div>

                  {/* Client & Driver Footer */}
                  <div className="ongoing-card-footer">
                    <div className="driver-mini-info">
                      <div className="driver-avatar-ring">
                        {driver?.avatar || shipment.customer.slice(0, 2).toUpperCase()}
                      </div>
                      <div className="driver-names">
                        <b>{driver?.name || shipment.customer}</b>
                        <small>{driver ? "Driver · " + driver.status : "Client"}</small>
                      </div>
                    </div>
                    <div className="driver-quick-actions">
                      <button
                        className="quick-action-circle"
                        title={`Call ${driver?.name || shipment.customer}`}
                        aria-label="Call"
                        onClick={e => {
                          e.stopPropagation();
                          alert(`Calling ${driver?.name || shipment.customer}: ${driver?.phone || "+91 98765 43210"}`);
                        }}
                      >
                        <Phone size={13} />
                      </button>
                      <Link
                        href="/messages"
                        className="quick-action-circle"
                        title="Chat message"
                        aria-label="Send message"
                        onClick={e => e.stopPropagation()}
                      >
                        <MessageCircle size={13} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Right Column: Live Map Control Tower */}
        <section className="live-map-tower-panel">
          <div className="tower-head">
            <div>
              <div className="tower-title-row">
                <h2 className="section-heading">Live Telematics Control Map</h2>
                <span className="telemetry-live-pill">
                  <span className="pulsing-beacon" />
                  LIVE NETWORK
                </span>
              </div>
              <p className="section-sub">
                Tracking {activeShipments.length} active highway lanes and GPS-equipped vehicles
              </p>
            </div>
            <Link href="/live-map" className="btn btn-secondary btn-sm">
              <Compass size={14} /> Full Map
            </Link>
          </div>

          <div className="map-view-container">
            <LiveMap highlightedShipmentId={selectedShipmentId} />
          </div>
        </section>
      </div>

      {/* BOTTOM SECTION: Analytics, Schedule & Vehicle Specs (Image 2 & 3 style) */}
      <div className="analytics-fleet-grid">
        {/* Analytics Card */}
        <section className="panel-white analytics-card">
          <div className="panel-title-bar">
            <div>
              <h3 className="card-title">Shipment Volume Analytics</h3>
              <p className="card-desc">Completed vs Exceptions comparison</p>
            </div>
            <div className="period-segmented-control">
              {(["Day", "Week", "Month"] as const).map(tab => (
                <button
                  key={tab}
                  className={`segment-btn ${activeTabTime === tab ? "active" : ""}`}
                  onClick={() => setActiveTabTime(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <DeliveryChart />
          <div className="analytics-metrics-strip">
            <div className="strip-metric">
              <span>TOTAL COMPLETED</span>
              <b>482</b>
              <small className="text-emerald-600">+12% vs last month</small>
            </div>
            <div className="strip-metric">
              <span>IN TRANSIT</span>
              <b>{activeShipments.length}</b>
              <small className="text-blue-600">Active on road</small>
            </div>
            <div className="strip-metric">
              <span>SCHEDULED VALUE</span>
              <b>{inr(4250000)}</b>
              <small className="text-slate-500">Gross cargo insured</small>
            </div>
          </div>
        </section>

        {/* Driving Hours & Completion Gauge */}
        <section className="panel-white gauge-card">
          <div className="panel-title-bar">
            <div>
              <h3 className="card-title">Network Completion</h3>
              <p className="card-desc">Today&apos;s fulfillment SLA</p>
            </div>
            <span className="rating-pill">
              <Star size={12} fill="#f59e0b" className="text-amber-500" />
              <b>4.9</b>
            </span>
          </div>
          <DeliveryGaugeDonut percentage={85} />
          <div className="driving-hours-section">
            <span className="sub-header-lbl">DRIVING HOURS TODAY</span>
            <DrivingHoursDonut />
          </div>
        </section>

        {/* Current Vehicle Showcase (Image 2 style) */}
        <section className="panel-white vehicle-spec-card">
          <div className="panel-title-bar">
            <div>
              <h3 className="card-title">Active Vehicle Asset</h3>
              <p className="card-desc">{currentVehicle.registration} · {currentVehicle.model}</p>
            </div>
            <Link href={`/fleet/${currentVehicle.id}`} className="icon-link-btn" title="View details">
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="vehicle-visual-box">
            {currentVehicle.type.includes("Heavy") || currentVehicle.type.includes("Container") ? (
              <TruckSideProfile className="h-28" />
            ) : (
              <CoachSideProfile className="h-28" />
            )}
          </div>

          <div className="spec-attributes-list">
            <div className="spec-row">
              <span className="spec-label">Payload Capacity</span>
              <b className="spec-value">{(currentVehicle.capacity / 1000).toFixed(1)} Metric Tons</b>
            </div>
            <div className="spec-row">
              <span className="spec-label">Fuel Efficiency</span>
              <b className="spec-value">8.4 km / liter (Diesel)</b>
            </div>
            <div className="spec-row">
              <span className="spec-label">Current Driver</span>
              <b className="spec-value">{currentDriver?.name || "Assigned Driver"}</b>
            </div>
            <div className="spec-row">
              <span className="spec-label">Service Inspection</span>
              <b className="spec-value text-blue-600">Due 15 Oct 2026</b>
            </div>
          </div>
        </section>
      </div>

      {/* RECENT ACTIVITY & PRIORITY ORDERS TABLE */}
      <section className="panel-white table-panel">
        <div className="panel-title-bar">
          <div>
            <h3 className="card-title">Priority Corridor Dispatches</h3>
            <p className="card-desc">High-priority freight movements across national corridors</p>
          </div>
          <div className="table-actions-right">
            <Link href="/orders" className="btn btn-secondary btn-sm">
              All Orders ({state.shipments.length})
            </Link>
            {can("orders") && (
              <button
                className="btn btn-primary btn-sm"
                onClick={() => setCreateOpen(true)}
              >
                <Plus size={14} /> New Order
              </button>
            )}
          </div>
        </div>
        <ShipmentTable limit={6} />
      </section>

      {/* Create Shipment Drawer */}
      <CreateShipment open={createOpen} onClose={() => setCreateOpen(false)} />
    </Shell>
  );
}
