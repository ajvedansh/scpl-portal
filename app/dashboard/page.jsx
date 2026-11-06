import Icon from "@/components/Icon";
import ServicesBrowser from "@/components/ServicesBrowser";
import BookingTrendChart from "@/components/BookingTrendChart";
import RevenueBreakdownChart from "@/components/RevenueBreakdownChart";

const STATS = [
  {
    label: "Today's bookings",
    value: "24",
    change: "+8% vs yesterday",
    changeType: "up",
    icon: "receipt",
    color: "indigo",
  },
  {
    label: "Wallet balance",
    value: "₹14.35",
    change: "Low — top up soon",
    changeType: "note",
    icon: "wallet",
    color: "orange",
  },
  {
    label: "IRCTC balance",
    value: "₹3,694.90",
    change: "₹500 added today",
    changeType: "up",
    icon: "train",
    color: "success",
  },
  {
    label: "Pending tasks",
    value: "3",
    change: "Action required",
    changeType: "note",
    icon: "warning",
    color: "warning",
  },
];

const QUICK_ACTIONS = [
  { label: "Mobile recharge",  icon: "phone",  tone: "indigo" },
  { label: "Train ticket",     icon: "train",  tone: "orange" },
  { label: "Flight ticket",    icon: "plane",  tone: "orange" },
  { label: "Electricity bill", icon: "bolt",   tone: "indigo" },
  { label: "PAN services",     icon: "id",     tone: "indigo" },
  { label: "AEPS",             icon: "finger", tone: "indigo" },
  { label: "Fastag",           icon: "car",    tone: "orange" },
  { label: "Water bill",       icon: "drop",   tone: "indigo" },
];

const RECENT = [
  {
    icon: "train", tone: "indigo",
    label: "Train ticket booked",
    sub: "PNR 4829381 · Delhi → Mumbai",
    time: "2 min ago", amount: "₹890", status: "success",
  },
  {
    icon: "phone", tone: "orange",
    label: "Mobile recharge",
    sub: "Airtel prepaid · 9811234567",
    time: "15 min ago", amount: "₹199", status: "success",
  },
  {
    icon: "bolt", tone: "indigo",
    label: "Electricity bill paid",
    sub: "JSEB · Customer #4821",
    time: "1 hr ago", amount: "₹1,240", status: "success",
  },
  {
    icon: "plane", tone: "orange",
    label: "Flight ticket",
    sub: "IndiGo 6E-234 · Ref: IN84291",
    time: "3 hr ago", amount: "₹4,550", status: "pending",
  },
];

function today() {
  return new Date().toLocaleDateString("en-IN", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });
}

export default function DashboardPage() {
  return (
    <>
      {/* Greeting */}
      <div className="greeting">
        <div className="greeting-text">
          <h1>Good morning, Ankit 👋</h1>
          <p>Here&rsquo;s what&rsquo;s happening with your account today.</p>
        </div>
        <div className="greeting-date">
          <strong>{today()}</strong>
          <span>Agent ID #A1042</span>
        </div>
      </div>

      {/* Stat cards */}
      <div className="stats-row">
        {STATS.map((s) => (
          <article className={"stat-card " + s.color} key={s.label}>
            <div className="stat-icon-wrap">
              <Icon name={s.icon} size={22} stroke={1.8} />
            </div>
            <div className="stat-body">
              <span className="stat-label">{s.label}</span>
              <span className="stat-value">{s.value}</span>
              <span className={"stat-change " + s.changeType}>{s.change}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Charts row */}
      <div className="charts-row">
        <BookingTrendChart />
        <RevenueBreakdownChart />
      </div>

      {/* Promo + quick add money */}
      <section className="balances">
        <article className="promo">
          <div>
            <span className="promo-kicker">IRCTC AUTHORISED</span>
            <h2>Book smart. Travel easy.</h2>
            <p style={{ marginTop: 8, fontSize: 14, color: "rgba(255,255,255,.7)", lineHeight: 1.5 }}>
              IRCTC balance: <strong style={{ color: "#fff" }}>₹3,694.90</strong>
              &nbsp;·&nbsp;
              Wallet: <strong style={{ color: "#ffb36b" }}>₹14.35</strong>
            </p>
          </div>
          <div className="promo-actions">
            <a href="#" className="btn-orange">
              <Icon name="train" size={17} stroke={2} />
              Train ticket
            </a>
            <a href="#" className="btn-ghost-light">
              <Icon name="plus" size={15} stroke={2.4} />
              Add money
            </a>
          </div>
        </article>
      </section>

      {/* Notice */}
      <div className="notice" role="note">
        <Icon name="warning" size={19} stroke={1.9} />
        <span>
          Unauthorised booking activities may lead to suspension or deactivation of agent IDs.
        </span>
      </div>

      {/* Quick actions */}
      <div className="quick-section">
        <div className="section-head">
          <h2>Quick actions</h2>
          <a href="#services">View all services</a>
        </div>
        <div className="quick-grid">
          {QUICK_ACTIONS.map((q) => (
            <a href="#" key={q.label} className="quick-btn">
              <span className={"quick-icon " + q.tone}>
                <Icon name={q.icon} size={22} stroke={1.8} />
              </span>
              {q.label}
            </a>
          ))}
        </div>
      </div>

      {/* Services browser */}
      <ServicesBrowser />

      {/* Recent activity */}
      <div className="activity-section">
        <div className="section-head">
          <h2>Recent activity</h2>
          <a href="#">View all →</a>
        </div>
        <div className="activity-list">
          {RECENT.map((r, i) => (
            <div className="activity-item" key={i}>
              <span className={"activity-icon " + r.tone}>
                <Icon name={r.icon} size={19} stroke={1.8} />
              </span>
              <div className="activity-body">
                <div className="activity-label">{r.label}</div>
                <div className="activity-sub">{r.sub}</div>
              </div>
              <div className="activity-meta">
                <span className="activity-amount">{r.amount}</span>
                <span className="activity-time">{r.time}</span>
                <span className={"activity-status " + r.status}>
                  {r.status === "success" ? "Success" : "Pending"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="copyright center">
        © 2026 SCPL स्वेच्छा केंद्र. All rights reserved.
      </p>
    </>
  );
}
