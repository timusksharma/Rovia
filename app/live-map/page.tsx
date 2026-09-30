"use client";

import { useState } from "react";
import { Filter, Layers, Pause, Play, Radio, RefreshCw } from "lucide-react";
import { Shell } from "../components/Shell";
import { LiveMap } from "../components/LiveMap";

export default function MapPage() {
  const [play, setPlay] = useState(true);

  return (
    <Shell
      title="Live Telematics Fleet Map"
      subtitle="Real-time multi-axle freight telemetry and Golden Quadrilateral corridor tracking"
      actions={
        <>
          <button className="btn btn-secondary">
            <Filter size={14} /> Corridor Filters
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setPlay(!play)}
          >
            {play ? <Pause size={14} /> : <Play size={14} />}
            {play ? "Pause Stream" : "Resume Stream"}
          </button>
        </>
      }
    >
      <div className="table-controls">
        <select>
          <option>All National Corridors</option>
          <option>Delhi–Mumbai Express</option>
          <option>Western Freight Corridor</option>
          <option>Bengaluru–Chennai Industrial</option>
          <option>Eastern Dedicated Corridor</option>
        </select>
        <select>
          <option>All Vehicles (Active & Idle)</option>
          <option>Active in motion only</option>
          <option>Parked at Hubs</option>
        </select>
        <select>
          <option>All Cargo Priorities</option>
          <option>Critical (Cold Chain)</option>
          <option>Express Freight</option>
        </select>
        <span className="status-pill status-active" style={{ marginLeft: "auto" }}>
          <span className="status-dot" />
          <Radio size={12} className="inline mr-1" /> Telemetry Stream Active (2.4s)
        </span>
      </div>

      <LiveMap expanded />
    </Shell>
  );
}
