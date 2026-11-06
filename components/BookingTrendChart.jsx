"use client";

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from "recharts";

const DATA = [
  { day: "Mon",  bookings: 14, revenue: 12400 },
  { day: "Tue",  bookings: 22, revenue: 19800 },
  { day: "Wed",  bookings: 18, revenue: 16200 },
  { day: "Thu",  bookings: 31, revenue: 28400 },
  { day: "Fri",  bookings: 27, revenue: 24100 },
  { day: "Sat",  bookings: 38, revenue: 34600 },
  { day: "Sun",  bookings: 24, revenue: 21800 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: "#fff", border: "1px solid #dde0f3",
      borderRadius: 12, padding: "10px 14px",
      boxShadow: "0 4px 16px rgba(20,22,58,.1)",
      fontSize: 13,
    }}>
      <p style={{ fontWeight: 800, color: "#14163a", marginBottom: 4 }}>{label}</p>
      <p style={{ color: "#3a3fd6", fontWeight: 700 }}>{payload[0].value} bookings</p>
      <p style={{ color: "#555b80", fontWeight: 600 }}>₹{payload[1]?.value?.toLocaleString("en-IN")} revenue</p>
    </div>
  );
};

export default function BookingTrendChart() {
  const total = DATA.reduce((s, d) => s + d.bookings, 0);
  return (
    <div className="chart-card">
      <div className="chart-head">
        <div>
          <p className="chart-title">Booking trend</p>
          <p className="chart-sub">Last 7 days · {total} total bookings</p>
        </div>
        <span className="chart-badge up">↑ 12% vs last week</span>
      </div>

      <ResponsiveContainer width="100%" height={210}>
        <AreaChart data={DATA} margin={{ top: 6, right: 6, left: -24, bottom: 0 }}>
          <defs>
            <linearGradient id="bookGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#3a3fd6" stopOpacity={0.18} />
              <stop offset="95%" stopColor="#3a3fd6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#ff8a2b" stopOpacity={0.14} />
              <stop offset="95%" stopColor="#ff8a2b" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f2f8" vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 12, fontWeight: 700, fill: "#6b718f" }}
            axisLine={false} tickLine={false}
          />
          <YAxis
            yAxisId="left"
            tick={{ fontSize: 11, fontWeight: 600, fill: "#6b718f" }}
            axisLine={false} tickLine={false}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fontSize: 11, fontWeight: 600, fill: "#6b718f" }}
            axisLine={false} tickLine={false}
            tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            yAxisId="left"
            type="monotone"
            dataKey="bookings"
            stroke="#3a3fd6"
            strokeWidth={2.5}
            fill="url(#bookGrad)"
            dot={{ fill: "#3a3fd6", r: 4, strokeWidth: 0 }}
            activeDot={{ r: 6, strokeWidth: 0, fill: "#3a3fd6" }}
          />
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="revenue"
            stroke="#ff8a2b"
            strokeWidth={2}
            fill="url(#revGrad)"
            dot={false}
            activeDot={{ r: 5, strokeWidth: 0, fill: "#ff8a2b" }}
            strokeDasharray="5 3"
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Mini legend */}
      <div style={{ display: "flex", gap: 20, paddingTop: 4 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, fontWeight: 700, color: "#555b80" }}>
          <span style={{ width: 28, height: 3, background: "#3a3fd6", borderRadius: 2, display: "inline-block" }} />
          Bookings
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, fontWeight: 700, color: "#555b80" }}>
          <span style={{ width: 28, height: 3, background: "#ff8a2b", borderRadius: 2, display: "inline-block", opacity: .7 }} />
          Revenue
        </span>
      </div>
    </div>
  );
}
