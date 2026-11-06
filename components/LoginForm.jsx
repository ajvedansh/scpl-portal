"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow]     = useState(false);
  const [error, setError]   = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res  = await fetch("/api/login", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="login-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="username">Username / Mobile no.</label>
        <div className="input-wrap">
          <Icon name="user" size={17} className="input-icon" />
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username or mobile number"
            autoComplete="username"
            required
            disabled={loading}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="password">Password</label>
        <div className="input-wrap">
          <Icon name="lock" size={17} className="input-icon" />
          <input
            id="password"
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            autoComplete="current-password"
            required
            disabled={loading}
            className="has-toggle"
          />
          <button
            type="button"
            className="toggle-pw"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? "Hide password" : "Show password"}
            tabIndex={-1}
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <div className="form-row">
        <label className="check">
          <input type="checkbox" />
          <span>Keep me signed in</span>
        </label>
        <a href="#" className="link-strong">Forgot password?</a>
      </div>

      {error && (
        <div className="alert" role="alert" aria-live="polite">
          {error}
        </div>
      )}

      <button type="submit" className="btn-login" disabled={loading}>
        {loading ? (
          <>
            <span className="btn-login-spinner" aria-hidden="true" />
            Signing in…
          </>
        ) : (
          <>
            Sign in
            <Icon name="arrow" size={18} stroke={2.4} />
          </>
        )}
      </button>
    </form>
  );
}
