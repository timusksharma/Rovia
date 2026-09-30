"use client";

import Link from "next/link";
import { Phone, Plus, Star, Users, CheckCircle2 } from "lucide-react";
import { Shell } from "../components/Shell";
import { Kpi, Status } from "../components/UI";
import { useOps } from "../lib/store";

export default function Drivers() {
  const { state, can } = useOps();

  return (
    <Shell
      title="Drivers & Crew Fleet"
      subtitle="Driver certifications, live on-route assignments, and safety scores"
      actions={
        <button
          disabled={!can("drivers")}
          className="btn btn-primary"
          onClick={() => alert("Driver onboarding wizard available in full deployment.")}
        >
          <Plus size={14} /> Onboard Driver
        </button>
      }
    >
      <div className="grid-kpi-4">
        <Kpi
          label="Total Active Crew"
          value={String(state.drivers.length)}
          icon={Users}
          tone="blue"
        />
        <Kpi
          label="Currently On Route"
          value={String(state.drivers.filter(x => x.status === "On route").length)}
          icon={Users}
          tone="cyan"
        />
        <Kpi
          label="Fleet Driver Rating"
          value="4.8"
          icon={Star}
          tone="green"
        />
        <Kpi
          label="On-Time Delivery Score"
          value="94.6%"
          delta="2.8%"
          icon={CheckCircle2}
          tone="green"
        />
      </div>

      <div className="grid cards-grid">
        {state.drivers.map(d => (
          <Link
            href={`/drivers/${d.id}`}
            className="asset-card"
            key={d.id}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <header>
              <div className="user-avatar-gradient" style={{ width: 48, height: 48, fontSize: 14 }}>
                {d.avatar}
              </div>
              <Status value={d.status} />
            </header>

            <h3 style={{ margin: "14px 0 2px", fontSize: 16 }}>{d.name}</h3>
            <p style={{ fontSize: 12, color: "var(--text-muted)", margin: 0 }}>
              {d.phone}
            </p>

            <div
              className="info-grid"
              style={{ padding: "14px 0 0", gridTemplateColumns: "1fr 1fr" }}
            >
              <div className="info-box">
                <span>RATING</span>
                <b style={{ color: "#d97706" }}>★ {d.rating}</b>
              </div>
              <div className="info-box">
                <span>ON-TIME</span>
                <b style={{ color: "#16a34a" }}>{d.onTime}%</b>
              </div>
            </div>

            <footer style={{ marginTop: "auto", paddingTop: 14 }}>
              <span>{d.trips} verified trips</span>
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "var(--panel-muted)",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--primary)"
                }}
              >
                <Phone size={13} />
              </span>
            </footer>
          </Link>
        ))}
      </div>
    </Shell>
  );
}
