import Logo from "@/components/Logo";
import LoginForm from "@/components/LoginForm";
import HeroIllustration from "@/components/HeroIllustration";
import Icon from "@/components/Icon";

export const metadata = { title: "Agent login · SCPL" };

const FEATURES = [
  { icon: "check",  text: "Instant confirmation" },
  { icon: "shield", text: "Safe & secure booking" },
  { icon: "clock",  text: "24×7 customer support" },
  { icon: "trend",  text: "Best fares guaranteed" },
];

const HERO_STATS = [
  { value: "2L+",    label: "Tickets booked" },
  { value: "99.8%",  label: "Uptime" },
  { value: "12,000+",label: "Active agents" },
];

export default function LoginPage() {
  return (
    <main className="login-page">
      {/* Animated background blobs */}
      <div className="login-bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* ── Left: Login card ── */}
      <section className="login-card-wrap">
        <div className="login-card">
          <div className="login-card-head">
            <Logo />
            <span className="pill-soft">Agent portal</span>
          </div>

          <div className="login-title">
            <h1>Welcome back</h1>
            <p>Sign in with your registered username or mobile number.</p>
          </div>

          <LoginForm />

          <div className="divider">
            <span>New to SCPL?</span>
          </div>

          <a href="#" className="btn-outline">
            Register as new agent
          </a>

          <p className="copyright">
            © 2026 SCPL स्वेच्छा केंद्र. All rights reserved.
          </p>
        </div>
      </section>

      {/* ── Right: Hero ── */}
      <section className="login-hero">
        <div className="badge-irctc">
          <Icon name="shield" size={15} stroke={2.2} />
          IRCTC authorised service provider
        </div>

        <div className="hero-copy">
          <h2>
            <span>Book smart.</span>
            <span className="accent">Travel easy.</span>
          </h2>
          <p>
            <strong>Your journey, our priority.</strong> Train tickets, flights,
            recharges and bill payments — all from one agent wallet.
          </p>
        </div>

        <div className="hero-stats">
          {HERO_STATS.map((s) => (
            <div className="hero-stat" key={s.label}>
              <strong>{s.value}</strong>
              <small>{s.label}</small>
            </div>
          ))}
        </div>

        <HeroIllustration />

        <ul className="chips">
          {FEATURES.map((f) => (
            <li key={f.text}>
              <Icon name={f.icon} size={18} stroke={2.2} />
              {f.text}
            </li>
          ))}
        </ul>

        <div className="news">
          <span className="news-icon">
            <Icon name="bell" size={18} stroke={2} />
          </span>
          <div>
            <h3>Important notice</h3>
            <p>
              Unauthorised booking activity may lead to suspension or
              deactivation of agent IDs. Please follow guidelines.
            </p>
          </div>
        </div>

        <ul className="contact">
          <li><Icon name="mail" size={14} /> agentlogin@scinfotech.com</li>
          <li><Icon name="landline" size={14} /> 9263005815</li>
          <li><Icon name="globe" size={14} /> www.scinfotech.in</li>
        </ul>
      </section>
    </main>
  );
}
