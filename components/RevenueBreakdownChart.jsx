"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const DATA = [
  { name: "Train tickets",    value: 42, color: "#3a3fd6", amount: "₹3,46,206" },
  { name: "Mobile recharge",  value: 24, color: "#ff8a2b", amount: "₹1,97,832" },
  { name: "Bill payments",    value: 18, color: "#10b981", amount: "₹1,48,374" },
  { name: "Flight tickets",   value: 11, color: "#f59e0b", amount: "₹90,673" },
  { name: "Others",           value: 5,  color: "#a5acff", amount: "₹41,215" },
];

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div style={{
      background: "#fff", border: "1px solid #dde0f3", borderRadius: 12,
      padding: "10px 14px", boxShadow: "0 4px 16px rgba(20,22,58,.1)", fontSize: 13,
    }}>
      <p style={{ fontWeight: 800, color: "#14163a" }}>{d.name}</p>
      <p style={{ color: "#555b80", fontWeight: 700 }}>{d.value}% · {d.amount}</p>
    </div>
  );
};

export default function RevenueBreakdownChart() {
  return (
    <div className="chart-card">
      <div className="chart-head">
        <div>
          <p className="chart-title">Revenue mix</p>
          <p className="chart-sub">By service · this month</p>
        </div>
        <span className="chart-badge">₹8,24,300</span>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={DATA}
            cx="50%"
            cy="50%"
            innerRadius={52}
            outerRadius={80}
            paddingAngle={3}
            dataKey="value"
            strokeWidth={0}
          >
            {DATA.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="chart-legend">
        {DATA.map((d) => (
          <div className="chart-legend-item" key={d.name}>
            <span className="chart-legend-dot" style={{ background: d.color }} />
            <span className="chart-legend-label">{d.name}</span>
            <span className="chart-legend-value">{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
