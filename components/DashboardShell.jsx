"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import { NAV } from "@/lib/nav";

export default function DashboardShell({ children }) {
  const router = useRouter();
  const [open, setOpen]           = useState(false);
  const [active, setActive]       = useState("Dashboard");
  const [showLogout, setShowLogout] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!showLogout) return;
    const onKey = (e) => e.key === "Escape" && setShowLogout(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showLogout]);

  async function confirmLogout() {
    setLoggingOut(true);
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <>
      <div className="shell">
        {open && (
          <div className="overlay" onClick={() => setOpen(false)} aria-hidden="true" />
        )}

        <aside className={"sidebar" + (open ? " open" : "")} aria-label="Main menu">
          {/* Brand */}
          <div className="sidebar-head">
            <Logo onDark />
            <button
              type="button"
              className="icon-btn sidebar-close"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <Icon name="close" size={18} />
            </button>
          </div>

          {/* User card */}
          <div className="sidebar-user">
            <div className="sidebar-avatar">A</div>
            <div className="sidebar-user-name">Ankit Kumar</div>
            <div className="sidebar-user-role">
              <span className="sidebar-user-role-text">ID #A1042</span>
              <span className="sidebar-user-tier">Gold</span>
            </div>
            <div className="sidebar-status">
              <span className="sidebar-status-dot" />
              Online
            </div>
          </div>

          {/* Wallet widget */}
          <div className="sidebar-wallet">
            <div className="sidebar-wallet-row">
              <div className="sidebar-wallet-info">
                <span className="sidebar-wallet-label">Portal Wallet</span>
                <span className="sidebar-wallet-value low">₹14.35</span>
              </div>
              <button type="button" className="sidebar-topup">+ Top up</button>
            </div>
            <div className="sidebar-wallet-sep" />
            <div className="sidebar-wallet-sub">
              IRCTC &nbsp;<strong>₹3,694.90</strong>
            </div>
          </div>

          {/* Navigation */}
          <nav className="nav">
            {NAV.map((group, i) => (
              <div className="nav-group" key={i}>
                {group.label && (
                  <span className="nav-label">{group.label}</span>
                )}
                {group.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={"nav-link" + (active === item.label ? " active" : "")}
                    aria-current={active === item.label ? "page" : undefined}
                    onClick={() => {
                      setActive(item.label);
                      setOpen(false);
                    }}
                  >
                    <Icon name={item.icon} size={18} />
                    {item.label}
                  </a>
                ))}
              </div>
            ))}
          </nav>

          {/* Help card */}
          <div className="help-card">
            <div className="help-card-head">
              <div className="help-card-icon">
                <Icon name="bell" size={15} stroke={2} />
              </div>
              <strong>Need help?</strong>
            </div>
            <p>Contact support for booking or payment issues.</p>
            <a href="#">Contact support →</a>
          </div>

          {/* Logout */}
          <button
            type="button"
            className="logout"
            onClick={() => setShowLogout(true)}
          >
            <Icon name="logout" size={18} />
            Log out
          </button>
        </aside>

        {/* Main column */}
        <div className="main-col">
          {/* Topbar */}
          <header className="topbar">
            <button
              type="button"
              className="icon-btn hamburger"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Icon name="menu" size={20} />
            </button>

            {/* Page title — desktop only */}
            <div className="topbar-brand">
              <span className="topbar-page">Dashboard</span>
              <span className="topbar-crumb">SCPL Portal · Agent #A1042</span>
            </div>

            <div className="search">
              <label htmlFor="q" className="sr-only">Search services</label>
              <Icon name="search" size={16} className="search-icon" />
              <input id="q" type="search" placeholder="Search recharge, bill, ticket…" />
            </div>

            <div className="topbar-spacer" />

            {/* Inline wallet balance — desktop */}
            <div className="topbar-wallet-info">
              <span className="topbar-wallet-label">Wallet</span>
              <span className="topbar-wallet-value">₹14.35</span>
            </div>

            <a href="#" className="btn-topup">
              <Icon name="wallet" size={16} stroke={2} />
              <span>Top-up</span>
            </a>

            <div className="bell-wrap">
              <button type="button" className="icon-btn" aria-label="Notifications (3 unread)">
                <Icon name="bell" size={18} />
              </button>
              <span className="notif-badge" aria-hidden="true">3</span>
            </div>

            <a href="/dashboard/profile" className="profile" aria-label="View profile">
              <span className="avatar" aria-label="Signed in as Ankit">A</span>
              <span className="profile-text">
                <strong>Ankit Kumar</strong>
                <small>Gold Agent</small>
              </span>
            </a>
          </header>

          <main className="page">{children}</main>
        </div>
      </div>

      {/* ── Logout confirmation modal ── */}
      {showLogout && (
        <div
          className="modal-overlay"
          onClick={() => !loggingOut && setShowLogout(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="logout-title"
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">
              <Icon name="logout" size={28} stroke={1.8} />
            </div>
            <h3 id="logout-title">Sign out?</h3>
            <p>
              You&rsquo;ll be signed out of your agent account. Any unsaved
              work will be lost.
            </p>
            <div className="modal-actions">
              <button
                className="btn-cancel"
                onClick={() => setShowLogout(false)}
                disabled={loggingOut}
              >
                Stay signed in
              </button>
              <button
                className="btn-danger"
                onClick={confirmLogout}
                disabled={loggingOut}
              >
                {loggingOut ? "Signing out…" : "Yes, sign out"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
