"use client";

import { useState } from "react";
import { Check, Filter, ShieldAlert } from "lucide-react";
import { Shell } from "../components/Shell";
import { AlertIcon, Status } from "../components/UI";
import { useOps } from "../lib/store";

export default function Alerts() {
  const { state, resolveAlert, can } = useOps();
  const [filterTab, setFilterTab] = useState<"Open" | "Resolved" | "All">("Open");
  const [severityFilter, setSeverityFilter] = useState("All");

  const filtered = state.alerts.filter(a => {
    if (filterTab === "Open" && a.resolved) return false;
    if (filterTab === "Resolved" && !a.resolved) return false;
    if (severityFilter !== "All" && a.severity !== severityFilter) return false;
    return true;
  });

  return (
    <Shell
      title="Exceptions & Route Alerts"
      subtitle="Operational incidents, route deviations, and telemetry warnings requiring dispatcher review"
      actions={
        <button className="btn btn-secondary">
          <Filter size={14} /> Filter Rules
        </button>
      }
    >
      <div className="table-controls">
        <div className="segmented">
          {(["Open", "Resolved", "All"] as const).map(tab => (
            <button
              key={tab}
              className={filterTab === tab ? "active" : ""}
              onClick={() => setFilterTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <select
          value={severityFilter}
          onChange={e => setSeverityFilter(e.target.value)}
        >
          <option value="All">All Severity Levels</option>
          <option value="High">High Severity</option>
          <option value="Medium">Medium Severity</option>
          <option value="Low">Low Severity</option>
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {filtered.map(a => (
          <article className="alert-card" key={a.id}>
            <i>
              <AlertIcon type={a.type} />
            </i>
            <div>
              <b style={{ fontSize: 14 }}>{a.title}</b>
              <span>
                {a.detail} · Detected {a.created}
              </span>
            </div>
            {a.resolved ? (
              <Status value="Delivered" />
            ) : (
              <button
                disabled={!can("alerts")}
                className="btn btn-secondary btn-sm"
                onClick={() => resolveAlert(a.id)}
              >
                <Check size={14} /> Resolve Alert
              </button>
            )}
          </article>
        ))}

        {filtered.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">
              <ShieldAlert size={26} />
            </div>
            <b>No alerts found</b>
            <p>All vehicles and corridors are operating within nominal thresholds.</p>
          </div>
        )}
      </div>
    </Shell>
  );
}
