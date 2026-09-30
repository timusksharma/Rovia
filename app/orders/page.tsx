"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { LayoutGrid, List, Plus, Search } from "lucide-react";
import { Shell } from "../components/Shell";
import { CreateShipment, ExportButton, ShipmentTable, Status } from "../components/UI";
import { useOps } from "../lib/store";

export default function Orders() {
  const { state, can } = useOps();
  const [status, setStatus] = useState("All");
  const [query, setQuery] = useState("");
  const [create, setCreate] = useState(false);
  const [view, setView] = useState<"list" | "board">("list");

  const filtered = useMemo(
    () =>
      state.shipments.filter(
        s =>
          (status === "All" || s.status === status) &&
          `${s.id} ${s.customer} ${s.origin} ${s.destination}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [state.shipments, status, query]
  );

  return (
    <Shell
      title="Shipments & Freight Dispatches"
      subtitle={`${state.shipments.length} total shipments across national logistics corridors`}
      actions={
        <>
          <ExportButton filename="rovia-orders.csv" />
          {can("orders") && (
            <button className="btn btn-primary" onClick={() => setCreate(true)}>
              <Plus size={14} /> Create Shipment
            </button>
          )}
        </>
      }
    >
      <div className="table-controls">
        <div className="header-search" style={{ maxWidth: 360 }}>
          <Search size={15} className="text-slate-400" />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search orders, clients, routes…"
          />
        </div>

        <select value={status} onChange={e => setStatus(e.target.value)}>
          {[
            "All",
            "Pending",
            "Assigned",
            "Picked Up",
            "In Transit",
            "Delayed",
            "Delivered",
            "Cancelled"
          ].map(x => (
            <option key={x}>{x}</option>
          ))}
        </select>

        <div className="segmented" style={{ marginLeft: "auto" }}>
          <button
            className={view === "list" ? "active" : ""}
            onClick={() => setView("list")}
          >
            <List size={14} /> Table
          </button>
          <button
            className={view === "board" ? "active" : ""}
            onClick={() => setView("board")}
          >
            <LayoutGrid size={14} /> Cards
          </button>
        </div>
      </div>

      {view === "list" ? (
        <section className="panel-white">
          <ShipmentTable shipments={filtered} />
        </section>
      ) : (
        <div className="grid cards-grid">
          {filtered.map(s => (
            <article className="asset-card" key={s.id}>
              <header>
                <Link className="shipment-link" href={`/orders/${s.id}`}>
                  {s.id}
                </Link>
                <Status value={s.status} />
              </header>
              <h3>
                {s.origin} → {s.destination}
              </h3>
              <p>
                {s.customer} · {(s.weight / 1000).toFixed(1)} t
              </p>
              <div className="meter">
                <i style={{ width: `${s.progress}%` }} />
              </div>
              <footer>
                <span>{s.progress}% fulfilled</span>
                <b>{s.eta}</b>
              </footer>
            </article>
          ))}
        </div>
      )}

      <CreateShipment open={create} onClose={() => setCreate(false)} />
    </Shell>
  );
}
