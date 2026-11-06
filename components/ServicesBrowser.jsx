"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { TABS, SECTIONS } from "@/lib/services";

const FAV_KEY = "scpl_favourites";

export default function ServicesBrowser() {
  const [tab, setTab] = useState("all");
  const [favs, setFavs] = useState({ train: true, flight: true });

  // Load saved favourites once.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(FAV_KEY);
      if (saved) setFavs(JSON.parse(saved));
    } catch (e) {
      /* storage unavailable, keep defaults */
    }
  }, []);

  function toggleFav(id) {
    setFavs((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(FAV_KEY, JSON.stringify(next));
      } catch (e) {
        /* ignore */
      }
      return next;
    });
  }

  const visible = SECTIONS.filter((s) => s.groups.includes(tab));

  return (
    <div id="services" className="services">
      <div className="tabs" role="tablist" aria-label="Service groups">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            className={"tab" + (tab === t.id ? " active" : "")}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {visible.map((section) => (
        <section key={section.id} className="svc-section">
          <h2>{section.title}</h2>
          <div className="svc-grid">
            {section.items.map((item) => {
              const on = !!favs[item.id];
              return (
                <div className="svc-card" key={item.id}>
                  <a href={item.href} className="svc-link">
                    <span className={"svc-icon " + section.tone}>
                      <Icon name={item.icon} size={26} />
                    </span>
                    <span className="svc-text">
                      <strong>{item.label}</strong>
                      <small>{item.hint}</small>
                    </span>
                  </a>
                  <button
                    type="button"
                    className="fav"
                    onClick={() => toggleFav(item.id)}
                    aria-pressed={on}
                    aria-label={(on ? "Remove " : "Add ") + item.label + (on ? " from favourites" : " to favourites")}
                  >
                    <Icon name="star" size={18} stroke={2} fill={on ? "#FF8A2B" : "none"} />
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
