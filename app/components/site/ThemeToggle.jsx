/**
 * ThemeToggle — hard-edged Light / Dark segmented control. Writes
 * data-theme on <html> (which semantic.css remaps) and remembers the choice
 * in localStorage. Until the visitor chooses, the system preference applies.
 */
"use client";

import { useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY } from "./theme";

const CHANGE_EVENT = "themechange";
const options = ["light", "dark"];

function subscribe(onChange) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    media.removeEventListener("change", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function getTheme() {
  const explicit = document.documentElement.dataset.theme;
  if (explicit) return explicit;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {}
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function ThemeToggle() {
  // The server can't know the visitor's theme, so neither option is pressed until hydration.
  const theme = useSyncExternalStore(subscribe, getTheme, () => null);

  return (
    <div role="group" aria-label="Colour theme" className="flex border border-strong">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={theme === option}
          onClick={() => setTheme(option)}
          className="theme-option cursor-pointer px-1.5 py-0.5 font-mono text-[0.625rem] leading-none uppercase tracking-label">
          {option}
        </button>
      ))}
    </div>
  );
}
