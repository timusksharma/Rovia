"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { chartData } from "../lib/data";

const customTooltipStyle = {
  backgroundColor: "#0f172a",
  border: "1px solid #334155",
  borderRadius: 10,
  fontSize: 12,
  color: "#ffffff",
  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
  padding: "8px 12px"
};

export function DeliveryChart() {
  return (
    <div className="chart-wrap" aria-label="Shipment & Delivery performance chart">
      <ResponsiveContainer width="100%" height={230}>
        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="blueArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#2563eb" stopOpacity={0.0} />
            </linearGradient>
            <linearGradient id="cyanArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#f1f5f9" vertical={false} />
          <XAxis
            dataKey="d"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94a3b8", fontSize: 11 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94a3b8", fontSize: 11 }}
          />
          <Tooltip
            contentStyle={customTooltipStyle}
            itemStyle={{ color: "#ffffff" }}
            cursor={{ stroke: "#cbd5e1", strokeDasharray: "4 4" }}
          />
          <Area
            type="monotone"
            name="Delivered"
            dataKey="delivered"
            stroke="#2563eb"
            strokeWidth={2.5}
            fill="url(#blueArea)"
          />
          <Line
            type="monotone"
            name="Exceptions"
            dataKey="delayed"
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ r: 3, fill: "#ef4444" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function DeliveryGaugeDonut({ percentage = 80 }: { percentage?: number }) {
  const data = [
    { name: "Delivered", value: percentage, color: "#2563eb" },
    { name: "Remaining", value: 100 - percentage, color: "#e2e8f0" }
  ];

  return (
    <div className="gauge-container">
      <div className="gauge-chart">
        <ResponsiveContainer width="100%" height={160}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={55}
              outerRadius={72}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke="none"
            >
              {data.map(entry => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="gauge-center-label">
          <span className="gauge-title">Delivery</span>
          <b className="gauge-number">{percentage}%</b>
        </div>
      </div>
      <div className="gauge-legends">
        <div className="legend-item">
          <span className="legend-dot bg-blue-600" />
          <span>Completed</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot bg-slate-300" />
          <span>In Transit / Pending</span>
        </div>
      </div>
    </div>
  );
}

export function DrivingHoursDonut() {
  const data = [
    { name: "Day time", value: 72, color: "#10b981" },
    { name: "Night time", value: 28, color: "#2563eb" }
  ];

  return (
    <div className="donut-stat-card">
      <div className="donut-chart-mini">
        <ResponsiveContainer width={100} height={100}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={32}
              outerRadius={45}
              dataKey="value"
              stroke="none"
              paddingAngle={4}
            >
              {data.map(entry => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="donut-info">
        <div className="donut-hours">
          <b>16</b>
          <small>hr</small>
          <b>12</b>
          <small>m</small>
        </div>
        <div className="donut-breakdown">
          <span>
            <i className="bg-emerald-500" /> Day (72%)
          </span>
          <span>
            <i className="bg-blue-600" /> Night (28%)
          </span>
        </div>
      </div>
    </div>
  );
}

export function RevenueChart() {
  return (
    <div className="chart-wrap">
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid stroke="#f1f5f9" vertical={false} />
          <XAxis dataKey="d" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 11 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 11 }} />
          <Tooltip contentStyle={customTooltipStyle} cursor={{ fill: "#f8fafc" }} />
          <Bar dataKey="revenue" fill="#2563eb" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function FleetDonut() {
  const data = [
    { name: "Active", value: 5, color: "#10b981" },
    { name: "Idle", value: 2, color: "#f59e0b" },
    { name: "Maintenance", value: 1, color: "#ef4444" }
  ];
  return (
    <div className="chart-wrap">
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={58}
            outerRadius={82}
            dataKey="value"
            paddingAngle={4}
            stroke="none"
          >
            {data.map(x => (
              <Cell key={x.name} fill={x.color} />
            ))}
          </Pie>
          <Tooltip contentStyle={customTooltipStyle} />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11, paddingTop: 10 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PerformanceChart() {
  const extended = [
    ...chartData,
    ...chartData.map((x, i) => ({ ...x, d: `W${i + 2}`, delivered: x.delivered + 6 }))
  ];
  return (
    <div className="chart-wrap tall">
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={extended} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid stroke="#f1f5f9" vertical={false} />
          <XAxis dataKey="d" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 11 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 11 }} />
          <Tooltip contentStyle={customTooltipStyle} />
          <Line
            type="monotone"
            dataKey="delivered"
            stroke="#2563eb"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="delayed"
            stroke="#0ea5e9"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
