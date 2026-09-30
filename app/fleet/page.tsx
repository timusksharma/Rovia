"use client";

import Link from "next/link";
import { Gauge, Plus, Truck, Wrench } from "lucide-react";
import { Shell } from "../components/Shell";
import { FleetDonut } from "../components/Charts";
import { Kpi, Status } from "../components/UI";
import { TruckSideProfile, CoachSideProfile } from "../components/VehicleIllustrations";
import { useOps } from "../lib/store";

export default function FleetPage() {
  const { state, can } = useOps();

  return (
    <Shell
      title="Fleet Assets & Telematics"
      subtitle="Real-time multi-axle carrier health, fuel monitoring, and payload utilization"
      actions={
        <button
          disabled={!can("fleet")}
          className="btn btn-primary"
          onClick={() => alert("Fleet provisioning module available in full deployment.")}
        >
          <Plus size={14} /> Add Vehicle Asset
        </button>
      }
    >
      <div className="grid-kpi-4">
        <Kpi
          label="Total Registered Fleet"
          value={String(state.vehicles.length)}
          icon={Truck}
          tone="blue"
        />
        <Kpi
          label="Available Payload Capacity"
          value="42.6 t"
          delta="8.2%"
          icon={Gauge}
          tone="cyan"
        />
        <Kpi
          label="Fleet Capacity Utilization"
          value="68%"
          delta="4.1%"
          icon={Gauge}
          tone="green"
        />
        <Kpi
          label="Maintenance Required"
          value="1"
          delta="-25.0%"
          icon={Wrench}
          tone="red"
        />
      </div>

      <div className="dispatch-cockpit-grid" style={{ gridTemplateColumns: "1fr 340px" }}>
        <div className="grid cards-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {state.vehicles.map(v => (
            <Link
              href={`/fleet/${v.id}`}
              className="asset-card"
              key={v.id}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <header>
                <b className="shipment-link" style={{ fontSize: 15 }}>
                  {v.registration}
                </b>
                <Status value={v.status} />
              </header>

              <div className="vehicle-visual-box" style={{ margin: "14px 0" }}>
                {v.type.includes("Heavy") || v.type.includes("Container") ? (
                  <TruckSideProfile className="h-24" />
                ) : (
                  <CoachSideProfile className="h-24" />
                )}
              </div>

              <h3 style={{ margin: "0 0 4px", fontSize: 16 }}>{v.model}</h3>
              <p style={{ fontSize: 11, color: "var(--text-muted)", margin: 0 }}>
                {v.type} · {(v.capacity / 1000).toFixed(1)}t max capacity
              </p>

              <div className="meter" style={{ marginTop: 14 }}>
                <i style={{ width: `${v.utilization}%` }} />
              </div>

              <footer style={{ marginTop: "auto", paddingTop: 8 }}>
                <span>{v.utilization}% Payload Utilized</span>
                <b style={{ color: "var(--text-main)" }}>{v.telemetry.fuel}% Fuel</b>
              </footer>
            </Link>
          ))}
        </div>

        <section className="panel-white">
          <div className="panel-title-bar">
            <div>
              <h3 className="card-title">Fleet Availability Status</h3>
              <p className="card-desc">Active vs idle carrier distribution</p>
            </div>
          </div>
          <FleetDonut />
          <div className="spec-attributes-list" style={{ marginTop: 20 }}>
            <div className="spec-row">
              <span className="spec-label">Active on National Highways</span>
              <b className="spec-value text-emerald-600">5 Vehicles</b>
            </div>
            <div className="spec-row">
              <span className="spec-label">Staged at Hubs (Idle)</span>
              <b className="spec-value text-amber-600">2 Vehicles</b>
            </div>
            <div className="spec-row">
              <span className="spec-label">Scheduled in Depot Workshop</span>
              <b className="spec-value text-rose-600">1 Vehicle</b>
            </div>
          </div>
        </section>
      </div>
    </Shell>
  );
}
