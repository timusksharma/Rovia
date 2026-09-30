"use client";

import { Clock3, Gauge, MapPin, PackageCheck } from "lucide-react";
import { Shell } from "../components/Shell";
import { FleetDonut, PerformanceChart, RevenueChart } from "../components/Charts";
import { ExportButton, Kpi } from "../components/UI";

export default function Analytics() {
  return (
    <Shell
      title="Analytics & Corridor Intelligence"
      subtitle="Network performance telemetry · 23–29 September 2026"
      actions={<ExportButton filename="rovia-analytics.csv" />}
    >
      <div className="table-controls">
        <select>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>This quarter (Q3 2026)</option>
        </select>
        <select>
          <option>All National Corridors</option>
          <option>North Zone (NCR, Punjab, Rajasthan)</option>
          <option>West Zone (Mumbai, Pune, Gujarat)</option>
          <option>South Zone (Bengaluru, Chennai, Hyderabad)</option>
          <option>East Zone (Kolkata, Bihar, Odisha)</option>
        </select>
      </div>

      <div className="grid-kpi-4">
        <Kpi
          label="Total Deliveries"
          value="482"
          delta="12.4%"
          icon={PackageCheck}
          tone="blue"
        />
        <Kpi
          label="On-Time Delivery Rate"
          value="94.8%"
          delta="2.1%"
          icon={Clock3}
          tone="green"
        />
        <Kpi
          label="Fleet Capacity Utilization"
          value="72.3%"
          delta="4.8%"
          icon={Gauge}
          tone="cyan"
        />
        <Kpi
          label="Total Distance Covered"
          value="38,420 km"
          delta="8.6%"
          icon={MapPin}
          tone="blue"
        />
      </div>

      <div className="grid" style={{ gridTemplateColumns: "1.4fr 1fr", gap: 20 }}>
        <section className="panel-white">
          <div className="panel-title-bar">
            <div>
              <h3 className="card-title">Delivery Performance Curve</h3>
              <p className="card-desc">Completed vs Exceptions over operational cycles</p>
            </div>
          </div>
          <PerformanceChart />
        </section>

        <section className="panel-white">
          <div className="panel-title-bar">
            <div>
              <h3 className="card-title">Fleet Availability Distribution</h3>
              <p className="card-desc">Active vs Depot Maintenance status</p>
            </div>
          </div>
          <FleetDonut />
        </section>

        <section className="panel-white">
          <div className="panel-title-bar">
            <div>
              <h3 className="card-title">Weekly Freight Revenue</h3>
              <p className="card-desc">Invoiced transportation revenue (₹ Lakhs)</p>
            </div>
          </div>
          <RevenueChart />
        </section>

        <section className="panel-white">
          <div className="panel-title-bar">
            <div>
              <h3 className="card-title">Root Causes of In-Transit Delays</h3>
              <p className="card-desc">Corridor sensor breakdown</p>
            </div>
          </div>
          <div className="spec-attributes-list">
            {[
              ["Highway congestion & toll bottlenecks", "38%"],
              ["Warehouse dock loading queue", "24%"],
              ["Monsoon weather restrictions", "18%"],
              ["Preventive maintenance stops", "12%"],
              ["Route deviation & re-routing", "8%"]
            ].map(([cause, pct]) => (
              <div className="spec-row" key={cause}>
                <span className="spec-label">{cause}</span>
                <b className="spec-value">{pct}</b>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Shell>
  );
}
