"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "hubble-theme";
const COOKIE_KEY = "hubble-theme";

const getInitialTheme = () => {
  if (typeof document === "undefined") {
    return "dark";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem(STORAGE_KEY, next);
    document.cookie = `${COOKIE_KEY}=${next}; path=/; max-age=31536000`;
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-fg/90 shadow-soft transition hover:bg-surface"
    >
      <span className="h-2 w-2 rounded-full bg-primary" />
      {theme === "dark" ? "Dark mode" : "Light mode"}
    </button>
  );
}
