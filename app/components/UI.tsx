"use client";

import {
  AlertCircle,
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Download,
  MoreHorizontal,
  Package,
  Sparkles,
  Truck,
  X
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Shipment, ShipmentStatus } from "../lib/types";
import { statusOrder, useOps } from "../lib/store";

export const inr = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(n);

export function Status({ value }: { value: string }) {
  const norm = value.toLowerCase().replaceAll(" ", "-");
  return (
    <span className={`status-pill status-${norm}`}>
      <span className="status-dot" />
      {value}
    </span>
  );
}

export function Kpi({
  label,
  value,
  delta,
  icon: Icon,
  tone = "blue"
}: {
  label: string;
  value: string;
  delta?: string;
  icon: React.ElementType;
  tone?: "blue" | "cyan" | "green" | "amber" | "red";
}) {
  const isDown = delta?.startsWith("-");
  return (
    <article className={`kpi-card tone-${tone}`}>
      <div className="kpi-top">
        <span className="kpi-label">{label}</span>
        <div className="kpi-icon-wrap">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div className="kpi-main">
        <b className="kpi-value">{value}</b>
        {/* Visual mini bar sparkline */}
        <div className="kpi-spark">
          {[40, 65, 50, 85, 70, 95, 80].map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}%` }}
              className={i === 6 ? "active" : ""}
            />
          ))}
        </div>
      </div>
      {delta && (
        <div className="kpi-foot">
          <span className={`kpi-trend ${isDown ? "trend-down" : "trend-up"}`}>
            {isDown ? <ArrowDownRight size={14} /> : <ArrowUpRight size={14} />}
            {delta.replace("-", "")}
          </span>
          <span className="kpi-subtext">vs last week</span>
        </div>
      )}
    </article>
  );
}

export function ShipmentTable({
  limit,
  shipments
}: {
  limit?: number;
  shipments?: Shipment[];
}) {
  const { state } = useOps();
  const list = (shipments || state.shipments).slice(0, limit || 999);

  return (
    <div className="table-container">
      <table className="modern-table">
        <thead>
          <tr>
            <th>Shipment ID</th>
            <th>Client</th>
            <th>Route Corridor</th>
            <th>Assigned Vehicle</th>
            <th>ETA</th>
            <th>Status</th>
            <th style={{ textAlign: "right" }}>Value</th>
            <th style={{ width: 44 }} />
          </tr>
        </thead>
        <tbody>
          {list.map(s => {
            const vehicle = state.vehicles.find(v => v.id === s.vehicleId);
            return (
              <tr key={s.id}>
                <td>
                  <Link className="shipment-link" href={`/orders/${s.id}`}>
                    <Package size={14} className="text-blue-600" />
                    <span>{s.id}</span>
                  </Link>
                  <span className={`priority-tag p-${s.priority.toLowerCase()}`}>
                    {s.priority}
                  </span>
                </td>
                <td>
                  <div className="client-cell">
                    <b>{s.customer}</b>
                    <small>{(s.weight / 1000).toFixed(1)} tons · {s.cargo[0]?.category || "General"}</small>
                  </div>
                </td>
                <td>
                  <div className="route-cell">
                    <span className="origin">{s.origin}</span>
                    <ChevronRight size={13} className="route-sep" />
                    <span className="dest">{s.destination}</span>
                  </div>
                </td>
                <td>
                  {vehicle ? (
                    <div className="vehicle-cell">
                      <Truck size={14} className="text-slate-500" />
                      <span>{vehicle.registration}</span>
                    </div>
                  ) : (
                    <span className="text-slate-400 text-xs">Unassigned</span>
                  )}
                </td>
                <td>
                  <div className="eta-cell">
                    <Clock3 size={13} />
                    <span>{s.eta}</span>
                  </div>
                </td>
                <td>
                  <Status value={s.status} />
                </td>
                <td style={{ textAlign: "right" }}>
                  <b className="price-val">{inr(s.value)}</b>
                </td>
                <td>
                  <button
                    className="action-menu-btn"
                    aria-label={`Actions for ${s.id}`}
                  >
                    <MoreHorizontal size={15} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {list.length === 0 && <Empty title="No matching shipments found" />}
    </div>
  );
}

export function Empty({ title = "Nothing here yet" }: { title?: string }) {
  return (
    <div className="empty-state">
      <div className="empty-icon">
        <Package size={28} />
      </div>
      <b>{title}</b>
      <p>Try modifying your search or changing active filters.</p>
    </div>
  );
}

export function PermissionButton({
  area,
  children,
  ...rest
}: {
  area: string;
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  const { can, state } = useOps();
  return (
    <button
      disabled={!can(area)}
      title={
        !can(area)
          ? `${state.role} does not have permission for this action`
          : undefined
      }
      {...rest}
    >
      {children}
    </button>
  );
}

export function CreateShipment({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { createShipment } = useOps();
  const [form, setForm] = useState({
    customer: "",
    origin: "New Delhi",
    destination: "Jaipur",
    weight: "8500",
    priority: "Express"
  });
  const [error, setError] = useState("");

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.customer.trim() || !form.weight) {
      setError("Customer company name and weight are required.");
      return;
    }
    const id = `RVL-${Math.floor(10000 + Math.random() * 90000)}`;
    createShipment({
      id,
      customer: form.customer,
      origin: form.origin,
      destination: form.destination,
      status: "Pending",
      priority: form.priority as Shipment["priority"],
      weight: +form.weight,
      value: +form.weight * 35,
      progress: 0,
      eta: "Awaiting dispatch assignment",
      created: "Today",
      notes: "Created via control tower dispatch console.",
      cargo: [
        {
          id: `CG-${Date.now().toString().slice(-4)}`,
          description: "Palletized freight",
          weight: +form.weight,
          quantity: Math.max(1, Math.round(+form.weight / 250)),
          category: "Commercial"
        }
      ],
      stops: [],
      events: []
    });
    onClose();
  };

  return (
    <div
      className="modal-backdrop"
      onMouseDown={e => e.target === e.currentTarget && onClose()}
    >
      <form className="drawer-panel" onSubmit={submit}>
        <header className="drawer-header">
          <div>
            <span className="drawer-eyebrow">Dispatch Console</span>
            <h2>Create New Shipment</h2>
          </div>
          <button
            type="button"
            className="icon-close"
            onClick={onClose}
            aria-label="Close form"
          >
            <X size={18} />
          </button>
        </header>

        <div className="drawer-body">
          <label className="form-field">
            <span>Customer / Consignee</span>
            <input
              value={form.customer}
              onChange={e => setForm({ ...form, customer: e.target.value })}
              placeholder="e.g. Tata Advanced Systems, Flipkart Wholesale"
              required
            />
          </label>

          <div className="form-row-2">
            <label className="form-field">
              <span>Origin Hub</span>
              <select
                value={form.origin}
                onChange={e => setForm({ ...form, origin: e.target.value })}
              >
                {[
                  "New Delhi",
                  "Mumbai",
                  "Bengaluru",
                  "Chennai",
                  "Hyderabad",
                  "Kolkata",
                  "Lucknow",
                  "Ahmedabad"
                ].map(x => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>

            <label className="form-field">
              <span>Destination Terminal</span>
              <select
                value={form.destination}
                onChange={e =>
                  setForm({ ...form, destination: e.target.value })
                }
              >
                {[
                  "Jaipur",
                  "Pune",
                  "Chennai",
                  "Hyderabad",
                  "Ahmedabad",
                  "Lucknow",
                  "Delhi NCR",
                  "Chandigarh",
                  "Udaipur"
                ].map(x => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="form-row-2">
            <label className="form-field">
              <span>Gross Weight (kg)</span>
              <input
                type="number"
                min="50"
                value={form.weight}
                onChange={e => setForm({ ...form, weight: e.target.value })}
                required
              />
            </label>

            <label className="form-field">
              <span>Service Priority</span>
              <select
                value={form.priority}
                onChange={e => setForm({ ...form, priority: e.target.value })}
              >
                <option value="Standard">Standard Freight</option>
                <option value="Express">Express Transit</option>
                <option value="Critical">Critical (Cold-Chain/Hazmat)</option>
              </select>
            </label>
          </div>

          {error && (
            <div className="form-error-banner">
              <AlertCircle size={15} />
              <span>{error}</span>
            </div>
          )}

          <div className="preview-card">
            <div className="preview-route">
              <span className="dot-start" />
              <b>{form.origin} Hub</b>
              <span className="route-arrow">→</span>
              <span className="dot-end" />
              <b>{form.destination} Terminal</b>
            </div>
            <p className="preview-caption">
              Estimated cargo value:{" "}
              <b>{inr((Number(form.weight) || 0) * 35)}</b>. Vehicle and driver
              telemetry will synchronize upon dispatch.
            </p>
          </div>
        </div>

        <footer className="drawer-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onClose}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Confirm & Dispatch
          </button>
        </footer>
      </form>
    </div>
  );
}

export function StatusSelect({ shipment }: { shipment: Shipment }) {
  const { updateShipment, can, state } = useOps();
  return (
    <select
      className="status-dropdown"
      disabled={!can("orders")}
      title={
        !can("orders")
          ? `${state.role} cannot change shipment status`
          : undefined
      }
      value={shipment.status}
      onChange={e =>
        updateShipment(shipment.id, {
          status: e.target.value as ShipmentStatus,
          progress: e.target.value === "Delivered" ? 100 : shipment.progress
        })
      }
    >
      {statusOrder.map(x => (
        <option key={x}>{x}</option>
      ))}
    </select>
  );
}

export function ExportButton({
  filename = "rovia-orders.csv"
}: {
  filename?: string;
}) {
  const exportIt = () => {
    const blob = new Blob(
      [
        "id,customer,origin,destination,status,value\nRVL-58461,GreenMart Retail,New Delhi,Jaipur,In Transit,284000\nRVL-58457,Aster Healthcare,Mumbai,Pune,Delayed,620000\n"
      ],
      { type: "text/csv" }
    );
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  };
  return (
    <button className="btn btn-secondary" onClick={exportIt}>
      <Download size={14} /> Export CSV
    </button>
  );
}

export function AlertIcon({ type }: { type: string }) {
  return type === "Delay" ? (
    <Clock3 className="text-amber-500" />
  ) : type === "Maintenance" ? (
    <Truck className="text-red-500" />
  ) : type === "Deviation" ? (
    <AlertTriangle className="text-rose-600" />
  ) : (
    <CheckCircle2 className="text-emerald-500" />
  );
}
