"use client";

import { useEffect, useState } from "react";
import {
  Compass,
  Crosshair,
  Layers3,
  MapPin,
  Minus,
  Navigation,
  Package,
  Plus,
  Radio,
  RotateCw,
  ShieldCheck,
  Truck
} from "lucide-react";
import { useOps } from "../lib/store";
import { Status } from "./UI";

export function LiveMap({
  expanded = false,
  highlightedShipmentId
}: {
  expanded?: boolean;
  highlightedShipmentId?: string;
}) {
  const { state } = useOps();
  const [userSelected, setUserSelected] = useState<string | null>(null);
  const [tick, setTick] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [showWaypoints, setShowWaypoints] = useState(true);

  // Derive active vehicle selection: user click takes precedence, or highlighted shipment vehicle, or default
  const matchedVehicleId = highlightedShipmentId
    ? state.shipments.find(s => s.id === highlightedShipmentId)?.vehicleId
    : null;

  const selected = userSelected ?? matchedVehicleId ?? state.vehicles[0]?.id ?? "VEH-01";

  useEffect(() => {
    const id = setInterval(() => setTick(x => x + 1), 2200);
    return () => clearInterval(id);
  }, []);

  const activeVehicles = state.vehicles.filter(v => v.status === "Active");
  const vehicle = state.vehicles.find(v => v.id === selected) || activeVehicles[0];

  return (
    <div className={`live-map-wrapper ${expanded ? "expanded" : ""}`}>
      {/* Background Cartographic Grid & Roads */}
      <div className="map-surface">
        <svg
          viewBox="0 0 1000 520"
          className="map-vector"
          preserveAspectRatio="none"
          style={{ transform: `scale(${zoom})`, transformOrigin: "center center" }}
        >
          <defs>
            <filter id="glowRoute" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#2563eb" floodOpacity="0.4" />
            </filter>
            <linearGradient id="mainRouteGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Soft Geographic Landmass Fill */}
          <path
            className="map-landmass"
            d="M 120 70 L 260 45 L 360 110 L 460 65 L 580 130 L 740 95 L 860 170 L 820 280 L 720 310 L 660 415 L 530 460 L 410 425 L 300 470 L 205 390 L 150 270 Z"
          />

          {/* Secondary Roads / Arterials */}
          <path
            className="arterial-path"
            d="M 210 160 L 320 210 L 410 180 L 520 250 L 640 230 L 760 300"
          />
          <path
            className="arterial-path"
            d="M 290 380 L 380 310 L 440 320 L 520 250 L 620 140 L 730 160"
          />
          <path
            className="arterial-path"
            d="M 450 70 L 450 180 L 530 250 L 540 450"
          />

          {/* Primary High-Speed Logistics Freight Corridor */}
          <path
            className="primary-freight-lane"
            d="M 260 145 C 330 120, 390 190, 480 230 S 660 270, 770 215"
            filter="url(#glowRoute)"
          />
          {/* Animated Dash Overlay */}
          <path
            className="primary-freight-lane-dash"
            d="M 260 145 C 330 120, 390 190, 480 230 S 660 270, 770 215"
          />

          {/* Western Express Corridor (Delhi - Mumbai - Pune) */}
          <path
            className="secondary-freight-lane"
            d="M 260 145 C 230 230, 220 330, 280 390 S 340 410, 420 425"
          />
        </svg>

        {/* Hub / City Nodes */}
        <div className="hub-marker h-delhi" style={{ left: "26%", top: "27%" }}>
          <span className="hub-dot" />
          <span className="hub-name">DELHI NCR</span>
        </div>
        <div className="hub-marker h-jaipur" style={{ left: "20%", top: "37%" }}>
          <span className="hub-dot" />
          <span className="hub-name">JAIPUR</span>
        </div>
        <div className="hub-marker h-mumbai" style={{ left: "26%", top: "67%" }}>
          <span className="hub-dot" />
          <span className="hub-name">MUMBAI</span>
        </div>
        <div className="hub-marker h-pune" style={{ left: "32%", top: "73%" }}>
          <span className="hub-dot" />
          <span className="hub-name">PUNE</span>
        </div>
        <div className="hub-marker h-bengaluru" style={{ left: "45%", top: "83%" }}>
          <span className="hub-dot" />
          <span className="hub-name">BENGALURU</span>
        </div>
        <div className="hub-marker h-hyderabad" style={{ left: "49%", top: "64%" }}>
          <span className="hub-dot" />
          <span className="hub-name">HYDERABAD</span>
        </div>
        <div className="hub-marker h-kolkata" style={{ left: "78%", top: "52%" }}>
          <span className="hub-dot" />
          <span className="hub-name">KOLKATA</span>
        </div>

        {/* Waypoint Cargo Delivery Parcel Pins (like Image 1 blue square parcel pins) */}
        {showWaypoints && (
          <>
            <div
              className="cargo-waypoint-pin"
              style={{ left: "38%", top: "34%" }}
              title="Bilaspur Logistics Park · Package Picked Up"
            >
              <div className="cargo-box-icon">
                <Package size={13} />
              </div>
            </div>

            <div
              className="cargo-waypoint-pin"
              style={{ left: "62%", top: "42%" }}
              title="Nagpur Distribution Center · In Transit"
            >
              <div className="cargo-box-icon">
                <Package size={13} />
              </div>
            </div>

            <div
              className="cargo-waypoint-pin"
              style={{ left: "71%", top: "68%" }}
              title="Visakhapatnam Port Gateway"
            >
              <div className="cargo-box-icon">
                <Package size={13} />
              </div>
            </div>

            {/* Checkpoint / Rest stop callout (like Image 1 "Secure Parking Elbebrücke") */}
            <div
              className="map-callout-pill"
              style={{ left: "42%", top: "45%" }}
            >
              <ShieldCheck size={12} className="text-blue-600" />
              <div>
                <b>Neemrana FastTrack Hub</b>
                <small>Checkpoint cleared · 15:04</small>
              </div>
            </div>
          </>
        )}

        {/* Dynamic Vehicle Trackers with Directional Arrow (like Image 1 cyan beacon!) */}
        {activeVehicles.map((v, i) => {
          const isCurrent = v.id === selected;
          // compute animated coordinates
          const leftPercent = v.telemetry.x + ((tick + i) % 4) * 0.4;
          const topPercent = v.telemetry.y + ((tick + i) % 3) * 0.3;

          return (
            <button
              key={v.id}
              onClick={() => setUserSelected(v.id)}
              className={`vehicle-beacon ${isCurrent ? "selected" : ""}`}
              style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
              aria-label={`Select vehicle ${v.registration} (${v.model})`}
            >
              {/* Radar pulse ripples */}
              <span className="beacon-ping" />
              <div className="beacon-inner">
                <Navigation size={13} className="beacon-arrow" />
              </div>
              <span className="beacon-plate">{v.registration.split("-")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Floating Map Controls (Image 1 style) */}
      <div className="map-toolbar">
        <button
          onClick={() => setShowWaypoints(!showWaypoints)}
          className={`toolbar-btn ${showWaypoints ? "active" : ""}`}
          title="Toggle Parcel Waypoints"
          aria-label="Toggle waypoints"
        >
          <Layers3 size={15} />
        </button>
        <button
          onClick={() => setZoom(z => Math.min(1.3, z + 0.1))}
          className="toolbar-btn"
          title="Zoom in"
          aria-label="Zoom in"
        >
          <Plus size={15} />
        </button>
        <button
          onClick={() => setZoom(z => Math.max(0.85, z - 0.1))}
          className="toolbar-btn"
          title="Zoom out"
          aria-label="Zoom out"
        >
          <Minus size={15} />
        </button>
        <button
          onClick={() => {
            setZoom(1);
            if (activeVehicles[0]) setUserSelected(activeVehicles[0].id);
          }}
          className="toolbar-btn"
          title="Center on Active Route"
          aria-label="Center map"
        >
          <Crosshair size={15} />
        </button>
      </div>

      {/* Live Telemetry Card HUD (Image 1 & 2 inspired) */}
      {vehicle && (
        <div className="telemetry-hud-card">
          <div className="hud-top">
            <div className="hud-identity">
              <span className="hud-tag">LIVE TELEMETRY</span>
              <b className="hud-reg">{vehicle.registration}</b>
              <small className="hud-model">{vehicle.model}</small>
            </div>
            <Status value={vehicle.status} />
          </div>

          <div className="hud-metrics">
            <div className="hud-metric">
              <span className="metric-lbl">Speed</span>
              <b className="metric-val">{vehicle.telemetry.speed} <small>km/h</small></b>
            </div>
            <div className="hud-metric">
              <span className="metric-lbl">Fuel Level</span>
              <b className="metric-val">{vehicle.telemetry.fuel}%</b>
              <div className="fuel-bar">
                <span style={{ width: `${vehicle.telemetry.fuel}%` }} />
              </div>
            </div>
            <div className="hud-metric">
              <span className="metric-lbl">Cargo Temp</span>
              <b className="metric-val text-emerald-600">
                +{vehicle.telemetry.temperature}°C
              </b>
            </div>
          </div>

          <div className="hud-foot">
            <div className="hud-status-indicator">
              <span className="live-pulsar" />
              <span>GPS Lock: 12 satellites</span>
            </div>
            <time className="hud-time">Sync: {vehicle.telemetry.updated}</time>
          </div>
        </div>
      )}
    </div>
  );
}
