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

function ContrastCircle({ dark }: { dark: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      style={{
        transform: dark ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <circle cx="12" cy="12" r="9" />
      {/* filled half — its orientation flips with the theme */}
      <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" stroke="none" />
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

  const dark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={dark}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:text-foreground hover:border-foreground/30"
    >
      <span className={mounted ? "opacity-100" : "opacity-0"}>
        <ContrastCircle dark={dark} />
      </span>
    </button>
  );
}
