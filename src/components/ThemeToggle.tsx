"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitial(): Theme {
  if (typeof document === "undefined") return "light";
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function Bulb({ on }: { on: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* bulb glass — filled when "on" */}
      <path
        d="M9 18h6M10 21.5h4M15 14c.2-1 .7-1.7 1.5-2.5A5.6 5.6 0 1 0 7.5 11.5c.8.8 1.3 1.5 1.5 2.5"
        fill={on ? "currentColor" : "none"}
        opacity={on ? 0.18 : 1}
      />
      <path d="M9 18h6M10 21.5h4M15 14c.2-1 .7-1.7 1.5-2.5A5.6 5.6 0 1 0 7.5 11.5c.8.8 1.3 1.5 1.5 2.5" />
      {/* glow rays when on */}
      {on && (
        <g opacity="0.9">
          <path d="M12 1.5v1.4M4.3 4.3l1 1M1.8 12h1.4M19.7 4.3l-1 1M20.8 12h1.4" />
        </g>
      )}
    </svg>
  );
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(getInitial());
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  }

  const on = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={on ? "Switch to dark theme" : "Switch to light theme"}
      aria-pressed={on}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:text-foreground hover:border-foreground/30"
    >
      <span className={mounted ? "opacity-100" : "opacity-0"}>
        <Bulb on={on} />
      </span>
    </button>
  );
}
