/* eslint-disable @typescript-eslint/no-explicit-any */
// AUTOMATICALLY GENERATED - DO NOT EDIT
import dynamic from "next/dynamic"

export type Component = {
  name: string
  type: string
  title?: string
  description?: string
  files?: Array<{ path: string; type: string; target?: string }>
  [key: string]: any
}

const REGISTRY_ITEMS: Component[] = [
  {
    "name": "metrics",
    "type": "registry:theme",
    "title": "Metrics by REVREBEL",
    "description": "A bold hotel performance command center for REVREBEL Metrics: dark-blue strategy, smoke-light surfaces, retro-tech contrast, saturated status colors, punchy Khand typography, and dashboard UI built for clarity, speed, and action.",
    "cssVars": {
      "light": {
        "background": "oklch(0.9659 0.0065 208.7829)",
        "foreground": "oklch(0.3373 0.0925 258.5200)",
        "card": "oklch(1.0000 0 0)",
        "card-foreground": "oklch(0.3373 0.0925 258.5200)",
        "popover": "oklch(1.0000 0 0)",
        "popover-foreground": "oklch(0.3373 0.0925 258.5200)",
        "primary": "oklch(0.3373 0.0925 258.5200)",
        "primary-foreground": "oklch(0.9659 0.0065 208.7829)",
        "secondary": "oklch(0.8642 0.1141 79.7487)",
        "secondary-foreground": "oklch(0.3373 0.0925 258.5200)",
        "muted": "oklch(0.8463 0.0383 219.9626)",
        "muted-foreground": "oklch(0.3373 0.0925 258.5200)",
        "accent": "oklch(0.7170 0.1537 37.7036)",
        "accent-foreground": "oklch(1.0000 0 0)",
        "destructive": "oklch(0.6254 0.1812 27.1628)",
        "destructive-foreground": "oklch(1.0000 0 0)",
        "border": "oklch(0.3373 0.0925 258.5200)",
        "input": "oklch(0.8463 0.0383 219.9626)",
        "ring": "oklch(0.3373 0.0925 258.5200)",
        "chart-1": "oklch(0.8300 0.0400 219.3500)",
        "chart-2": "oklch(0.8400 0.1400 85.2100)",
        "chart-3": "oklch(0.6600 0.1800 44.7300)",
        "chart-4": "oklch(0.5500 0.2100 32)",
        "chart-5": "oklch(0.4500 0.1400 340.2100)",
        "sidebar": "oklch(0.9659 0.0065 208.7829)",
        "sidebar-foreground": "oklch(0.3373 0.0925 258.5200)",
        "sidebar-primary": "oklch(0.3373 0.0925 258.5200)",
        "sidebar-primary-foreground": "oklch(1.0000 0 0)",
        "sidebar-accent": "oklch(0.8463 0.0383 219.9626)",
        "sidebar-accent-foreground": "oklch(0.3373 0.0925 258.5200)",
        "sidebar-border": "oklch(0.3373 0.0925 258.5200)",
        "sidebar-ring": "oklch(0.3373 0.0925 258.5200)",
        "radius": "0.1rem",
        "font-brand": "\"Barlow\", sans-serif",
        "font-numbers": "\"Funnel Sans\", sans-serif",
        "font-eyebrow": "\"Supreme\", \"Segoe UI Variable\", \"Segoe UI\", \"Aptos\", \"Calibri\", \"Arial\", sans-serif",
        "font-buttons": "\"Khand\", ui-sans-serif, sans-serif, system-ui",
        "font-display": "\"Khand\", ui-sans-serif, sans-serif, system-ui",
        "font-sans": "\"Khand\", ui-sans-serif, sans-serif, system-ui",
        "font-serif": "\"Roboto\", ui-sans-serif, sans-serif, system-ui",
        "font-mono": "\"Fira Code\", ui-monospace, monospace",
        "color-background": "var(--background)",
        "color-foreground": "var(--foreground)",
        "color-card": "oklch(1.0000 0 0)",
        "color-card-foreground": "var(--card-foreground)",
        "color-popover": "var(--popover)",
        "color-popover-foreground": "var(--popover-foreground)",
        "color-primary": "var(--base-primary)",
        "color-primary-foreground": "var(--primary-foreground)",
        "color-secondary": "var(--secondary)",
        "color-secondary-foreground": "var(--secondary-foreground)",
        "color-muted": "var(--muted)",
        "color-muted-foreground": "var(--muted-foreground)",
        "color-accent": "var(--accent)",
        "color-accent-foreground": "var(--accent-foreground)",
        "color-destructive": "var(--destructive)",
        "color-destructive-foreground": "var(--destructive-foreground)",
        "color-border": "var(--border)",
        "color-input": "var(--input)",
        "color-ring": "var(--ring)",
        "color-chart-1": "var(--chart-1)",
        "color-chart-2": "var(--chart-2)",
        "color-chart-3": "var(--chart-3)",
        "color-chart-4": "var(--chart-4)",
        "color-chart-5": "var(--chart-5)",
        "color-sidebar": "var(--sidebar)",
        "color-sidebar-foreground": "var(--sidebar-foreground)",
        "color-sidebar-primary": "var(--sidebar-primary)",
        "color-sidebar-primary-foreground": "var(--sidebar-primary-foreground)",
        "color-sidebar-accent": "var(--sidebar-accent)",
        "color-sidebar-accent-foreground": "var(--sidebar-accent-foreground)",
        "color-sidebar-border": "var(--sidebar-border)",
        "color-sidebar-ring": "var(--sidebar-ring)",
        "color-chart-6": "var(--chart-6)",
        "color-chart-7": "var(--chart-7)",
        "color-dark-blue": "var(--primary-b000)",
        "color-dark-blue-fade": "var(--primary-l200)",
        "color-dark-blue-inverse": "var(--base-color-4-d100)",
        "color-dark-blue-inverse-fade": "var(--base-color-4-l200)",
        "color-dark-blue-100": "var(--primary-l400)",
        "color-dark-blue-200": "var(--primary-l300)",
        "color-dark-blue-300": "var(--primary-l200)",
        "color-dark-blue-400": "var(--primary-l100)",
        "color-dark-blue-500": "var(--primary-b000)",
        "color-dark-blue-600": "var(--primary-d100)",
        "color-dark-blue-700": "var(--primary-d200)",
        "color-dark-blue-800": "var(--primary-d300)",
        "color-dark-blue-900": "var(--primary-d400)",
        "color-dark-blue-100-inverse": "var(--base-color-4-d400)",
        "color-dark-blue-200-inverse": "var(--base-color-4-d300)",
        "color-dark-blue-300-inverse": "var(--base-color-4-d200)",
        "color-dark-blue-400-inverse": "var(--base-color-4-d100)",
        "color-dark-blue-500-inverse": "var(--base-color-4-b000)",
        "color-dark-blue-600-inverse": "var(--base-color-4-l100)",
        "color-dark-blue-700-inverse": "var(--base-color-4-l200)",
        "color-dark-blue-800-inverse": "var(--base-color-4-l300)",
        "color-dark-blue-900-inverse": "var(--base-color-4-l400)",
        "color-blue-50": "var(--primary-l500)",
        "color-blue-100": "var(--primary-l400)",
        "color-blue-200": "var(--primary-l300)",
        "color-blue-300": "var(--primary-l200)",
        "color-blue-400": "var(--primary-l100)",
        "color-blue-500": "var(--primary-b000)",
        "color-blue-600": "var(--primary-d100)",
        "color-blue-700": "var(--primary-d200)",
        "color-blue-800": "var(--primary-d300)",
        "color-blue-900": "var(--primary-d400)",
        "color-blue-950": "var(--primary-d500)",
        "color-dark-green": "var(--base-color-1)",
        "color-dark-green-fade": "var(--base-color-1-fade)",
        "color-dark-green-inverse": "var(--base-color-1-inverse)",
        "color-dark-green-inverse-fade": "var(--base-color-1-inverse-fade)",
        "color-dark-green-100": "var(--base-color-1-l400)",
        "color-dark-green-200": "var(--base-color-1-l300)",
        "color-dark-green-300": "var(--base-color-1-l200)",
        "color-dark-green-400": "var(--base-color-1-l100)",
        "color-dark-green-500": "var(--base-color-1-b000)",
        "color-dark-green-600": "var(--base-color-1-d100)",
        "color-dark-green-700": "var(--base-color-1-d200)",
        "color-dark-green-800": "var(--base-color-1-d300)",
        "color-dark-green-900": "var(--base-color-1-d400)",
        "color-emerald-50": "var(--base-color-1-l400)",
        "color-emerald-100": "var(--base-color-1-l400)",
        "color-emerald-200": "var(--base-color-1-l300)",
        "color-emerald-300": "var(--base-color-1-l200)",
        "color-emerald-400": "var(--base-color-1-l100)",
        "color-emerald-500": "var(--base-color-1-b000)",
        "color-emerald-600": "var(--base-color-1-d100)",
        "color-emerald-700": "var(--base-color-1-d200)",
        "color-emerald-800": "var(--base-color-1-d300)",
        "color-emerald-900": "var(--base-color-1-d400)",
        "color-emerald-950": "var(--base-color-1-l400)",
        "color-dark-green-100-inverse": "var(--base-color-9-d400)",
        "color-dark-green-200-inverse": "var(--base-color-9-d300)",
        "color-dark-green-300-inverse": "var(--base-color-9-d200)",
        "color-dark-green-400-inverse": "var(--base-color-9-d100)",
        "color-dark-green-500-inverse": "var(--base-color-9-b000)",
        "color-dark-green-600-inverse": "var(--base-color-9-l100)",
        "color-dark-green-700-inverse": "var(--base-color-9-l200)",
        "color-dark-green-800-inverse": "var(--base-color-9-l300)",
        "color-dark-green-900-inverse": "var(--base-color-9-l400)",
        "color-green": "var(--base-color-2)",
        "color-green-fade": "var(--base-color-2-fade)",
        "color-green-inverse": "var(--base-color-2-inverse)",
        "color-green-inverse-fade": "var(--base-color-2-inverse-fade)",
        "color-green-100": "var(--base-color-2-l400)",
        "color-green-200": "var(--base-color-2-l300)",
        "color-green-300": "var(--base-color-2-l200)",
        "color-green-400": "var(--base-color-2-l100)",
        "color-green-500": "var(--base-color-2-b000)",
        "color-green-600": "var(--base-color-2-d100)",
        "color-green-700": "var(--base-color-2-d200)",
        "color-green-800": "var(--base-color-2-d300)",
        "color-green-900": "var(--base-color-2-d400)",
        "color-teal-50": "var(--base-color-2-l500)",
        "color-teal-100": "var(--base-color-2-l400)",
        "color-teal-200": "var(--base-color-2-l300)",
        "color-teal-300": "var(--base-color-2-l200)",
        "color-teal-400": "var(--base-color-2-l100)",
        "color-teal-500": "var(--base-color-2-b000)",
        "color-teal-600": "var(--base-color-2-d100)",
        "color-teal-700": "var(--base-color-2-d200)",
        "color-teal-800": "var(--base-color-2-d300)",
        "color-teal-900": "var(--base-color-2-d400)",
        "color-teal-950": "var(--base-color-2-d500)",
        "color-green-100-inverse": "var(--base-color-5-d400)",
        "color-green-200-inverse": "var(--base-color-5-d300)",
        "color-green-300-inverse": "var(--base-color-5-d200)",
        "color-green-400-inverse": "var(--base-color-5-d100)",
        "color-green-500-inverse": "var(--base-color-5-b000)",
        "color-green-600-inverse": "var(--base-color-5-l100)",
        "color-green-700-inverse": "var(--base-color-5-l200)",
        "color-green-800-inverse": "var(--base-color-5-l300)",
        "color-green-900-inverse": "var(--base-color-5-l400)",
        "color-light-green": "var(--base-color-3)",
        "color-light-green-fade": "var(--base-color-3-fade)",
        "color-light-green-inverse": "var(--base-color-3-inverse)",
        "color-light-green-inverse-fade": "var(--base-color-3-inverse-fade)",
        "color-light-green-100": "var(--base-color-3-l400)",
        "color-light-green-200": "var(--base-color-3-l300)",
        "color-light-green-300": "var(--base-color-3-l200)",
        "color-light-green-400": "var(--base-color-3-l100)",
        "color-light-green-500": "var(--base-color-3-b000)",
        "color-light-green-600": "var(--base-color-3-d100)",
        "color-light-green-700": "var(--base-color-3-d200)",
        "color-light-green-800": "var(--base-color-3-d300)",
        "color-light-green-900": "var(--base-color-3-d400)",
        "color-lime-50": "var(--base-color-3-l400)",
        "color-lime-100": "var(--base-color-3-l400)",
        "color-lime-200": "var(--base-color-3-l300)",
        "color-lime-300": "var(--base-color-3-l200)",
        "color-lime-400": "var(--base-color-3-l100)",
        "color-lime-500": "var(--base-color-3-b000)",
        "color-lime-600": "var(--base-color-3-d100)",
        "color-lime-700": "var(--base-color-3-d200)",
        "color-lime-800": "var(--base-color-3-d300)",
        "color-lime-900": "var(--base-color-3-d400)",
        "color-lime-950": "var(--base-color-3-d400)",
        "color-light-green-100-inverse": "var(--base-color-8-d400)",
        "color-light-green-200-inverse": "var(--base-color-8-d300)",
        "color-light-green-300-inverse": "var(--base-color-8-d200)",
        "color-light-green-400-inverse": "var(--base-color-8-d100)",
        "color-light-green-500-inverse": "var(--base-color-8-b000)",
        "color-light-green-600-inverse": "var(--base-color-8-l100)",
        "color-light-green-700-inverse": "var(--base-color-8-l200)",
        "color-light-green-800-inverse": "var(--base-color-8-l300)",
        "color-light-green-900-inverse": "var(--base-color-8-l400)",
        "color-light-blue": "var(--base-color-4)",
        "color-light-blue-fade": "var(--base-color-4-inverse)",
        "color-light-blue-inverse": "var(--base-color-4-inverse)",
        "color-light-blue-inverse-fade": "var(--base-color-4-inverse-fade)",
        "color-light-blue-100": "var(--base-color-4-l400)",
        "color-light-blue-200": "var(--base-color-4-l300)",
        "color-light-blue-300": "var(--base-color-4-l200)",
        "color-light-blue-400": "var(--base-color-4-l100)",
        "color-light-blue-500": "var(--base-color-4-b000)",
        "color-light-blue-600": "var(--base-color-4-d100)",
        "color-light-blue-700": "var(--base-color-4-d200)",
        "color-light-blue-800": "var(--base-color-4-d300)",
        "color-light-blue-900": "var(--base-color-4-d400)",
        "color-cyan-50": "var(--base-color-4-l400)",
        "color-cyan-100": "var(--base-color-4-l400)",
        "color-cyan-200": "var(--base-color-4-l300)",
        "color-cyan-300": "var(--base-color-4-l200)",
        "color-cyan-400": "var(--base-color-4-l100)",
        "color-cyan-500": "var(--base-color-4-b000)",
        "color-cyan-600": "var(--base-color-4-d100)",
        "color-cyan-700": "var(--base-color-4-d200)",
        "color-cyan-800": "var(--base-color-4-d300)",
        "color-cyan-900": "var(--base-color-4-d400)",
        "color-cyan-950": "var(--base-color-4-d400)",
        "color-light-blue-100-inverse": "var(--primary-d400)",
        "color-light-blue-200-inverse": "var(--primary-d300)",
        "color-light-blue-300-inverse": "var(--primary-d200)",
        "color-light-blue-400-inverse": "var(--primary-d100)",
        "color-light-blue-500-inverse": "var(--primary-b000)",
        "color-light-blue-600-inverse": "var(--primary-l100)",
        "color-light-blue-700-inverse": "var(--primary-l200)",
        "color-light-blue-800-inverse": "var(--primary-l300)",
        "color-light-blue-900-inverse": "var(--primary-l400)",
        "color-yellow": "var(--base-color-5)",
        "color-yellow-fade": "var(--base-color-5-fade)",
        "color-yellow-inverse": "var(--base-color-5-inverse)",
        "color-yellow-inverse-fade": "var(--base-color-5-inverse-fade)",
        "color-yellow-100": "var(--base-color-5-l400)",
        "color-yellow-200": "var(--base-color-5-l300)",
        "color-yellow-300": "var(--base-color-5-l200)",
        "color-yellow-400": "var(--base-color-5-l100)",
        "color-yellow-500": "var(--base-color-5-b000)",
        "color-yellow-600": "var(--base-color-5-d100)",
        "color-yellow-700": "var(--base-color-5-d200)",
        "color-yellow-800": "var(--base-color-5-d300)",
        "color-yellow-900": "var(--base-color-5-d400)",
        "color-yellow-100-inverse": "var(--primary-d400)",
        "color-yellow-200-inverse": "var(--primary-d300)",
        "color-yellow-300-inverse": "var(--primary-d200)",
        "color-yellow-400-inverse": "var(--primary-d100)",
        "color-yellow-500-inverse": "var(--primary-b000)",
        "color-yellow-600-inverse": "var(--primary-l100)",
        "color-yellow-700-inverse": "var(--primary-l200)",
        "color-yellow-800-inverse": "var(--primary-l300)",
        "color-yellow-900-inverse": "var(--primary-l400)",
        "color-orange": "var(--base-color-6)",
        "color-orange-fade": "var(--base-color-6-fade)",
        "color-orange-inverse": "var(--base-color-6-inverse)",
        "color-orange-inverse-fade": "var(--base-color-6-inverse-fade)",
        "color-orange-50": "var(--base-color-6-l500)",
        "color-orange-100": "var(--base-color-6-l400)",
        "color-orange-200": "var(--base-color-6-l300)",
        "color-orange-300": "var(--base-color-6-l200)",
        "color-orange-400": "var(--base-color-6-l100)",
        "color-orange-500": "var(--base-color-6-b000)",
        "color-orange-600": "var(--base-color-6-d100)",
        "color-orange-700": "var(--base-color-6-d200)",
        "color-orange-800": "var(--base-color-6-d300)",
        "color-orange-900": "var(--base-color-6-d400)",
        "color-orange-950": "var(--base-color-6-d400)",
        "color-orange-100-inverse": "var(--primary-l400)",
        "color-orange-200-inverse": "var(--primary-l300)",
        "color-orange-300-inverse": "var(--primary-l200)",
        "color-orange-400-inverse": "var(--primary-l100)",
        "color-orange-500-inverse": "var(--primary-b000)",
        "color-orange-600-inverse": "var(--primary-d100)",
        "color-orange-700-inverse": "var(--primary-d200)",
        "color-orange-800-inverse": "var(--primary-d300)",
        "color-orange-900-inverse": "var(--primary-d400)",
        "color-red": "var(--base-color-7)",
        "color-red-fade": "var(--base-color-7-fade)",
        "color-red-inverse": "var(--base-color-7-inverse)",
        "color-red-inverse-fade": "var(--base-color-7-inverse-fade)",
        "color-red-50": "var(--base-color-7-l500)",
        "color-red-100": "var(--base-color-7-l400)",
        "color-red-200": "var(--base-color-7-l300)",
        "color-red-300": "var(--base-color-7-l200)",
        "color-red-400": "var(--base-color-7-l100)",
        "color-red-500": "var(--base-color-7-b000)",
        "color-red-600": "var(--base-color-7-d100)",
        "color-red-700": "var(--base-color-7-d200)",
        "color-red-800": "var(--base-color-7-d300)",
        "color-red-900": "var(--base-color-7-d400)",
        "color-red-950": "var(--base-color-7-l500)",
        "color-red-100-inverse": "var(--base-color-4-d400)",
        "color-red-200-inverse": "var(--base-color-4-d300)",
        "color-red-300-inverse": "var(--base-color-4-d200)",
        "color-red-400-inverse": "var(--base-color-4-d100)",
        "color-red-500-inverse": "var(--base-color-4-b000)",
        "color-red-600-inverse": "var(--base-color-4-l100)",
        "color-red-700-inverse": "var(--base-color-4-l200)",
        "color-red-800-inverse": "var(--base-color-4-l300)",
        "color-red-900-inverse": "var(--base-color-4-l400)",
        "color-purple": "var(--base-color-8)",
        "color-purple-fade": "var(--base-color-8-fade)",
        "color-purple-inverse": "var(--base-color-8-inverse)",
        "color-purple-inverse-fade": "var(--base-color-8-inverse-fade)",
        "color-purple-50": "var(--base-color-8-l500)",
        "color-purple-100": "var(--base-color-8-l400)",
        "color-purple-200": "var(--base-color-8-l300)",
        "color-purple-300": "var(--base-color-8-l200)",
        "color-purple-400": "var(--base-color-8-l100)",
        "color-purple-500": "var(--base-color-8-b000)",
        "color-purple-600": "var(--base-color-8-d100)",
        "color-purple-700": "var(--base-color-8-d200)",
        "color-purple-800": "var(--base-color-8-d300)",
        "color-purple-900": "var(--base-color-8-d400)",
        "color-purple-950": "var(--base-color-8-d500)",
        "color-purple-100-inverse": "var(--base-color-3-d400)",
        "color-purple-200-inverse": "var(--base-color-3-d300)",
        "color-purple-300-inverse": "var(--base-color-3-d200)",
        "color-purple-400-inverse": "var(--base-color-3-d100)",
        "color-purple-500-inverse": "var(--base-color-3-b000)",
        "color-purple-600-inverse": "var(--base-color-3-l100)",
        "color-purple-700-inverse": "var(--base-color-3-l200)",
        "color-purple-800-inverse": "var(--base-color-3-l300)",
        "color-purple-900-inverse": "var(--base-color-3-l400)",
        "color-smoke": "var(--base-color-9)",
        "color-smoke-fade": "var(--base-color-9-fade)",
        "color-smoke-inverse": "var(--base-color-9-inverse)",
        "color-smoke-inverse-fade": "var(--base-color-9-inverse-fade)",
        "color-smoke-100": "var(--base-color-9-l400)",
        "color-smoke-200": "var(--base-color-9-l300)",
        "color-smoke-300": "var(--base-color-9-l200)",
        "color-smoke-400": "var(--base-color-9-l100)",
        "color-smoke-500": "var(--base-color-9-b000)",
        "color-smoke-600": "var(--base-color-9-d100)",
        "color-smoke-700": "var(--base-color-9-d200)",
        "color-smoke-800": "var(--base-color-9-d300)",
        "color-smoke-900": "var(--base-color-9-d400)",
        "color-slate-50": "var(--base-color-9-b000)",
        "color-slate-100": "var(--base-color-9-l400)",
        "color-slate-200": "var(--base-color-9-l300)",
        "color-slate-300": "var(--base-color-9-l200)",
        "color-slate-400": "var(--base-color-9-l100)",
        "color-slate-500": "var(--base-color-9-b000)",
        "color-slate-600": "var(--base-color-9-d100)",
        "color-slate-700": "var(--base-color-9-d200)",
        "color-slate-800": "var(--base-color-9-d300)",
        "color-slate-900": "var(--base-color-9-d400)",
        "color-slate-950": "var(--base-color-9-d400)",
        "color-grey-100": "var(--base-grey-l700)",
        "color-grey-150": "var(--base-grey-l600)",
        "color-grey-200": "var(--base-grey-l500)",
        "color-grey-250": "var(--base-grey-l400)",
        "color-grey-300": "var(--base-grey-l300)",
        "color-grey-350": "var(--base-grey-l200)",
        "color-grey-400": "var(--base-grey-l100)",
        "color-grey-450": "var(--base-grey-d100)",
        "color-grey-500": "var(--base-grey-d200)",
        "color-grey-550": "var(--base-grey-d200)",
        "color-grey-600": "var(--base-grey-d400)",
        "color-grey-650": "var(--base-grey-d500)",
        "color-grey-700": "var(--base-grey-d600)",
        "color-grey-750": "var(--base-grey-d700)",
        "color-grey-800": "var(--base-grey-d800)",
        "shadow-2xs": "var(--shadow-2xs)",
        "shadow-xs": "var(--shadow-xs)",
        "shadow-sm": "0.95px .5px 0 currentColor,1.45px 1px 0 currentColor,1.95px 1.5px 0 currentColor,2.45px 2px 0 currentColor,2.95px 2.5px 0 currentColor,3.45px 3px 0 currentColor,3.95px 3.5px 0 currentColor",
        "shadow": "0.95px .5px 0 currentColor,1.45px 1px 0 currentColor,1.95px 1.5px 0 currentColor,2.45px 2px 0 currentColor,2.95px 2.5px 0 currentColor,3.45px 3px 0 currentColor,3.95px 3.5px 0 currentColor,4.45px 4px 0 currentColor, currentColor,4.95px 4.5px 0 currentColor,5.45px 5px 0",
        "shadow-md": "0.95px .5px 0 currentColor,1.45px 1px 0 currentColor,1.95px 1.5px 0 currentColor,2.45px 2px 0 currentColor,2.95px 2.5px 0 currentColor,3.45px 3px 0 currentColor,3.95px 3.5px 0 currentColor,4.45px 4px 0 currentColor",
        "shadow-lg": "0.95px .5px 0 currentColor,1.45px 1px 0 currentColor,1.95px 1.5px 0 currentColor,2.45px 2px 0 currentColor,2.95px 2.5px 0 currentColor,3.45px 3px 0 currentColor,3.95px 3.5px 0 currentColor,4.45px 4px 0 currentColor,4.95px 4.5px 0 currentColor,5.45px 5px 0 currentColor,5.95px 5.5px 0 currentColor,6.45px 6px 0 currentColor,6.95px 6.5px 0 currentColor,7.45px 7px 0 currentColor,7.95px 7.5px 0 currentColor,8.45px 8px 0",
        "shadow-xl": "0.95px .5px 0 currentColor,1.45px 1px 0 currentColor,1.95px 1.5px 0 currentColor,2.45px 2px 0 currentColor,2.95px 2.5px 0 currentColor,3.45px 3px 0 currentColor,3.95px 3.5px 0 currentColor,4.45px 4px 0 currentColor,4.95px 4.5px 0 currentColor,5.45px 5px 0 currentColor,5.95px 5.5px 0 currentColor,6.45px 6px 0 currentColor,6.95px 6.5px 0 currentColor,7.45px 7px 0 currentColor,7.95px 7.5px 0 currentColor,8.45px 8px 0 currentColor,8.95px 8.5px 0 currentColor,9.45px 9px 0 currentColor,9.95px 9.5px 0 currentColor,10.45px 10px 0 currentColor",
        "shadow-2xl": "var(--shadow-2xl)",
        "radius-xs": ".25rem",
        "radius-sm": "calc(var(--radius) * 0.6)",
        "radius-md": "calc(var(--radius) * 0.8)",
        "radius-lg": "var(--radius)",
        "radius-xl": "calc(var(--radius) * 1.4)",
        "radius-2xl": "calc(var(--radius) * 1.8)",
        "radius-3xl": "calc(var(--radius) * 2.2)",
        "radius-4xl": "calc(var(--radius) * 2.6)",
        "tracking-tighter": "calc(var(--tracking-normal) - 0.05em)",
        "tracking-tight": "calc(var(--tracking-normal) - 0.025em)",
        "tracking-normal": "0em",
        "tracking-wide": "calc(var(--tracking-normal) + 0.025em)",
        "tracking-wider": "calc(var(--tracking-normal) + 0.05em)",
        "tracking-widest": "calc(var(--tracking-normal) + 0.1em)",
        "animate-rainbow": "rainbow var(--speed, 2s) infinite linear",
        "animate-heartbeat": "heartbeat 2s infinite ease-in-out",
        "spacing-xxs": ".5rem",
        "spacing-xs": "1rem",
        "spacing-sm": "2rem",
        "spacing-md": "3rem",
        "spacing-lg": "4rem",
        "spacing-xl": "6rem",
        "spacing-xxl": "8rem",
        "color-opacity-25": "color-mix(in oklch, var(--dark-blue), transparent 75%)",
        "color-opacity-50": "color-mix(in oklch, var(--dark-blue), transparent 50%)",
        "color-opacity-75": "color-mix(in oklch, var(--dark-blue), transparent 25%)",
        "chart-6": "oklch(52% 0.10 230.09)",
        "chart-7": "oklch(65% 0.12 219.43)",
        "chart-8": "oklch(78% 0.11 195.12)",
        "spacing": "0.25rem",
        "base-primary": "oklch(0.3373 0.0925 258.5200)",
        "base-primary-fade": "oklch(61.56% 0.0494 258.73)",
        "base-primary-inverse": "oklch(83% 0.04 220)",
        "base-primary-inverse-fade": "oklch(86.40% 0.032 220)",
        "base-color-1": "oklch(54.28% 0.0982 220.31)",
        "base-color-1-fade": "oklch(71.63% 0.0762 214.60)",
        "base-color-1-inverse": "oklch(96% 0.01 210)",
        "base-color-1-inverse-fade": "oklch(86.40% 0.009 210)",
        "base-color-2": "oklch(66.27% 0.114 206.90)",
        "base-color-2-fade": "oklch(78.23% 0.094 203.21)",
        "base-color-2-inverse": "oklch(84% 0.14 85.21)",
        "base-color-2-inverse-fade": "oklch(94.00% 0.050 85.21)",
        "base-color-3": "#71c9c5",
        "base-color-3-fade": "oklch(86.35% 0.054 193.29)",
        "base-color-3-inverse": "oklch(45% 0.14 340)",
        "base-color-3-inverse-fade": "oklch(56.00% 0.112 340)",
        "base-color-4": "oklch(83% 0.04 220)",
        "base-color-4-fade": "oklch(90.61% 0.023 220.74)",
        "base-color-4-inverse": "oklch(27% 0.09 254.40)",
        "base-color-4-inverse-fade": "oklch(61.56% 0.0494 258.73)",
        "base-color-5": "oklch(84% 0.14 85.21)",
        "base-color-5-fade": "oklch(94.00% 0.050 85.21)",
        "base-color-5-inverse": "oklch(27% 0.09 254.40)",
        "base-color-5-inverse-fade": "oklch(61.56% 0.0494 258.73)",
        "base-color-6": "oklch(66% 0.18 45)",
        "base-color-6-fade": "oklch(82.08% 0.088 38.17)",
        "base-color-6-inverse": "oklch(27% 0.09 254.40)",
        "base-color-6-inverse-fade": "oklch(61.56% 0.0494 258.73)",
        "base-color-7": "oklch(55% 0.21 32)",
        "base-color-7-fade": "oklch(68.73% 0.144 25.60)",
        "base-color-7-inverse": "oklch(83% 0.04 220)",
        "base-color-7-inverse-fade": "oklch(90.61% 0.023 220.74)",
        "base-color-8": "oklch(45% 0.14 340)",
        "base-color-8-fade": "oklch(69.83% 0.061 347.29)",
        "base-color-8-inverse": "oklch(77.98% 0.085 191.74)",
        "base-color-8-inverse-fade": "oklch(86.35% 0.054 193.29)",
        "base-color-9": "oklch(96% 0.01 210)",
        "base-color-9-fade": "oklch(96.96% 0.005 212.02 / 0.5)",
        "base-color-9-inverse": "oklch(27% 0.09 254.40)",
        "base-color-9-inverse-fade": "oklch(61.56% 0.0494 258.73)",
        "primary-l500": "oklch(68.50% 0.0399 258.40)",
        "primary-l400": "oklch(61.56% 0.0494 258.73)",
        "primary-l300": "oklch(54.80% 0.0595 258.95)",
        "primary-l200": "oklch(47.91% 0.0703 259.06)",
        "primary-l100": "oklch(40.78% 0.0807 258.08)",
        "primary-b000": "oklch(33.73% 0.0925 258.52)",
        "primary-d100": "oklch(31.65% 0.0845 258.31)",
        "primary-d200": "oklch(29.28% 0.0776 259.05)",
        "primary-d300": "oklch(27.00% 0.0681 257.71)",
        "primary-d400": "oklch(24.53% 0.0608 258.67)",
        "primary-d500": "oklch(22.28% 0.0519 258.36)",
        "base-color-1-l400": "oklch(71.63% 0.0762 214.60)",
        "base-color-1-l300": "oklch(67.07% 0.0856 214.58)",
        "base-color-1-l200": "oklch(62.66% 0.0933 215.98)",
        "base-color-1-l100": "oklch(58.35% 0.0973 217.21)",
        "base-color-1-b000": "oklch(54.28% 0.0982 220.31)",
        "base-color-1-d100": "oklch(50.44% 0.0907 219.77)",
        "base-color-1-d200": "oklch(46.26% 0.0835 220.24)",
        "base-color-1-d300": "oklch(42.26% 0.0757 219.56)",
        "base-color-1-d400": "oklch(37.87% 0.0682 220.12)",
        "base-color-2-l500": "oklch(81.68% 0.081 203.65)",
        "base-color-2-l400": "oklch(78.23% 0.094 203.21)",
        "base-color-2-l300": "oklch(74.99% 0.104 203.94)",
        "base-color-2-l200": "oklch(71.90% 0.111 204.81)",
        "base-color-2-l100": "oklch(68.97% 0.114 205.27)",
        "base-color-2-b000": "oklch(66.27% 0.114 206.90)",
        "base-color-2-d100": "oklch(61.23% 0.105 207.31)",
        "base-color-2-d200": "oklch(56.35% 0.097 206.84)",
        "base-color-2-d300": "oklch(51.06% 0.087 206.33)",
        "base-color-2-d400": "oklch(45.94% 0.079 205.57)",
        "base-color-2-d500": "oklch(40.38% 0.069 206.07)",
        "base-color-3-l400": "oklch(86.35% 0.054 193.29)",
        "base-color-3-l300": "oklch(84.26% 0.063 192.24)",
        "base-color-3-l200": "oklch(81.97% 0.070 192.45)",
        "base-color-3-l100": "oklch(79.94% 0.078 191.58)",
        "base-color-3-b000": "oklch(77.98% 0.085 191.74)",
        "base-color-3-d100": "oklch(71.86% 0.078 192.37)",
        "base-color-3-d200": "oklch(65.90% 0.071 191.99)",
        "base-color-3-d300": "oklch(59.81% 0.064 191.50)",
        "base-color-3-d400": "oklch(53.53% 0.057 192.45)",
        "base-color-4-l400": "oklch(90.61% 0.023 220.74)",
        "base-color-4-l300": "oklch(89.18% 0.026 217.96)",
        "base-color-4-l200": "oklch(87.50% 0.030 220.61)",
        "base-color-4-l100": "oklch(86.03% 0.035 219.90)",
        "base-color-4-b000": "oklch(84.63% 0.038 219.96)",
        "base-color-4-d100": "oklch(78.00% 0.035 220.66)",
        "base-color-4-d200": "oklch(71.47% 0.032 220.74)",
        "base-color-4-d300": "oklch(64.80% 0.029 220.85)",
        "base-color-4-d400": "oklch(57.94% 0.025 221.09)",
        "base-color-5-l400": "oklch(94.00% 0.050 85.21)",
        "base-color-5-l300": "oklch(91.00% 0.070 85.21)",
        "base-color-5-l200": "oklch(88.04% 0.100 85.13)",
        "base-color-5-l100": "oklch(86.00% 0.120 85.21)",
        "base-color-5-b000": "oklch(86.42% 0.114 79.75)",
        "base-color-5-d100": "oklch(79.71% 0.105 79.05)",
        "base-color-5-d200": "oklch(73.06% 0.095 79.20)",
        "base-color-5-d300": "oklch(66.25% 0.086 79.38)",
        "base-color-5-d400": "oklch(59.27% 0.076 79.62)",
        "base-color-6-l500": "oklch(85.02% 0.072 37.58)",
        "base-color-6-l400": "oklch(82.08% 0.088 38.17)",
        "base-color-6-l300": "oklch(79.32% 0.105 38.34)",
        "base-color-6-l200": "oklch(76.67% 0.121 37.91)",
        "base-color-6-l100": "oklch(74.11% 0.138 38.05)",
        "base-color-6-b000": "oklch(71.70% 0.154 37.70)",
        "base-color-6-d100": "oklch(66.16% 0.141 37.56)",
        "base-color-6-d200": "oklch(60.80% 0.128 37.87)",
        "base-color-6-d300": "oklch(55.16% 0.115 37.54)",
        "base-color-6-d400": "oklch(49.39% 0.101 38.16)",
        "base-color-6-d500": "oklch(43.77% 0.087 37.71)",
        "base-color-7-l500": "oklch(79.91% 0.085 23.54)",
        "base-color-7-l400": "oklch(75.89% 0.105 24.16)",
        "base-color-7-l300": "oklch(72.15% 0.125 24.22)",
        "base-color-7-l200": "oklch(68.73% 0.144 25.60)",
        "base-color-7-l100": "oklch(65.42% 0.164 26.11)",
        "base-color-7-b000": "oklch(62.54% 0.181 27.16)",
        "base-color-7-d100": "oklch(57.79% 0.166 27.45)",
        "base-color-7-d200": "oklch(53.12% 0.151 27.38)",
        "base-color-7-d300": "oklch(48.18% 0.135 27.29)",
        "base-color-7-d400": "oklch(43.29% 0.119 27.17)",
        "base-color-7-d500": "oklch(38.27% 0.103 26.25)",
        "base-color-8-l500": "oklch(75.12% 0.050 345.99)",
        "base-color-8-l400": "oklch(69.83% 0.061 347.29)",
        "base-color-8-l300": "oklch(64.53% 0.072 347.34)",
        "base-color-8-l200": "oklch(59.51% 0.083 348.54)",
        "base-color-8-l100": "oklch(54.32% 0.096 349.45)",
        "base-color-8-b000": "oklch(49.40% 0.108 350.12)",
        "base-color-8-d100": "oklch(45.74% 0.099 349.97)",
        "base-color-8-d200": "oklch(42.15% 0.090 350.34)",
        "base-color-8-d300": "oklch(38.53% 0.081 349.71)",
        "base-color-8-d400": "oklch(34.77% 0.071 350.15)",
        "base-color-8-d500": "oklch(31.14% 0.060 349.81)",
        "base-color-9-l400": "oklch(97.93% 0.004 215.51)",
        "base-color-9-l300": "oklab(97.63% -0.003 -0.00)",
        "base-color-9-l200": "oklch(97.26% 0.005 212.03)",
        "base-color-9-l100": "oklch(96.96% 0.005 212.02)",
        "base-color-9-b000": "oklch(96.59% 0.006 209.63)",
        "base-color-9-d100": "oklch(89.29% 0.006 197.89)",
        "base-color-9-d200": "oklch(81.66% 0.005 211.84)",
        "base-color-9-d300": "oklch(74.04% 0.005 197.84)",
        "base-color-9-d400": "oklch(66.02% 0.004 215.06)",
        "base-grey-l700": "oklch(95.0% 0.009 254)",
        "base-grey-l600": "oklch(90.0% 0.008 254)",
        "base-grey-l500": "oklch(85.0% 0.007 254)",
        "base-grey-l400": "oklch(80.0% 0.006 254)",
        "base-grey-l300": "oklch(75.0% 0.005 254)",
        "base-grey-l200": "oklch(70.0% 0.004 254)",
        "base-grey-l100": "oklch(65.0% 0.003 254)",
        "base-grey-d100": "oklch(60.0% 0.002 254)",
        "base-grey-d200": "oklch(55.0% 0.001 254)",
        "base-grey-d300": "oklch(50.0% 0.000 254)",
        "base-grey-d400": "oklch(45.0% 0.001 254)",
        "base-grey-d500": "oklch(40.0% 0.002 254)",
        "base-grey-d600": "oklch(35.0% 0.003 254)",
        "base-grey-d700": "oklch(40.0% 0.004 254)",
        "base-grey-d800": "oklch(45.0% 0.005 254)"
      },
      "dark": {
        "background": "oklch(0.2228 0.0519 258.36)",
        "foreground": "oklch(0.9659 0.0065 208.7829)",
        "card": "oklch(0.2453 0.0608 258.67)",
        "card-foreground": "oklch(0.9659 0.0065 208.7829)",
        "popover": "oklch(0.2453 0.0608 258.67)",
        "popover-foreground": "oklch(0.9659 0.0065 208.7829)",
        "primary": "oklch(0.8463 0.0383 219.9626)",
        "primary-foreground": "oklch(0.2228 0.0519 258.36)",
        "secondary": "oklch(0.7170 0.1537 37.7036)",
        "secondary-foreground": "oklch(1.0000 0 0)",
        "muted": "oklch(0.2700 0.0681 257.71)",
        "muted-foreground": "oklch(0.8918 0.026 217.96)",
        "accent": "oklch(0.8642 0.1141 79.7487)",
        "accent-foreground": "oklch(0.2228 0.0519 258.36)",
        "destructive": "oklch(0.6254 0.1812 27.1628)",
        "destructive-foreground": "oklch(1.0000 0 0)",
        "border": "oklch(0.4791 0.0703 259.06)",
        "input": "oklch(0.2700 0.0681 257.71)",
        "ring": "oklch(0.8463 0.0383 219.9626)",
        "chart-1": "oklch(0.8463 0.0383 219.9626)",
        "chart-2": "oklch(0.8642 0.1141 79.7487)",
        "chart-3": "oklch(0.7170 0.1537 37.7036)",
        "chart-4": "oklch(0.6254 0.1812 27.1628)",
        "chart-5": "oklch(0.4940 0.108 350.12)",
        "sidebar": "oklch(0.2453 0.0608 258.67)",
        "sidebar-foreground": "oklch(0.9659 0.0065 208.7829)",
        "sidebar-primary": "oklch(0.8463 0.0383 219.9626)",
        "sidebar-primary-foreground": "oklch(0.2228 0.0519 258.36)",
        "sidebar-accent": "oklch(0.7170 0.1537 37.7036)",
        "sidebar-accent-foreground": "oklch(1.0000 0 0)",
        "sidebar-border": "oklch(0.4791 0.0703 259.06)",
        "sidebar-ring": "oklch(0.8463 0.0383 219.9626)",
        "radius": "0.1rem",
        "font-brand": "\"Barlow\", sans-serif",
        "font-numbers": "\"Funnel Sans\", sans-serif",
        "font-eyebrow": "\"Supreme\", \"Segoe UI Variable\", \"Segoe UI\", \"Aptos\", \"Calibri\", \"Arial\", sans-serif",
        "font-buttons": "\"Khand\", ui-sans-serif, sans-serif, system-ui",
        "font-display": "\"Khand\", ui-sans-serif, sans-serif, system-ui",
        "font-sans": "\"Khand\", ui-sans-serif, sans-serif, system-ui",
        "font-serif": "\"Roboto\", ui-sans-serif, sans-serif, system-ui",
        "font-mono": "\"Fira Code\", ui-monospace, monospace",
        "color-background": "var(--background)",
        "color-foreground": "var(--foreground)",
        "color-card": "oklch(1.0000 0 0)",
        "color-card-foreground": "var(--card-foreground)",
        "color-popover": "var(--popover)",
        "color-popover-foreground": "var(--popover-foreground)",
        "color-primary": "var(--base-primary)",
        "color-primary-foreground": "var(--primary-foreground)",
        "color-secondary": "var(--secondary)",
        "color-secondary-foreground": "var(--secondary-foreground)",
        "color-muted": "var(--muted)",
        "color-muted-foreground": "var(--muted-foreground)",
        "color-accent": "var(--accent)",
        "color-accent-foreground": "var(--accent-foreground)",
        "color-destructive": "var(--destructive)",
        "color-destructive-foreground": "var(--destructive-foreground)",
        "color-border": "var(--border)",
        "color-input": "var(--input)",
        "color-ring": "var(--ring)",
        "color-chart-1": "var(--chart-1)",
        "color-chart-2": "var(--chart-2)",
        "color-chart-3": "var(--chart-3)",
        "color-chart-4": "var(--chart-4)",
        "color-chart-5": "var(--chart-5)",
        "color-sidebar": "var(--sidebar)",
        "color-sidebar-foreground": "var(--sidebar-foreground)",
        "color-sidebar-primary": "var(--sidebar-primary)",
        "color-sidebar-primary-foreground": "var(--sidebar-primary-foreground)",
        "color-sidebar-accent": "var(--sidebar-accent)",
        "color-sidebar-accent-foreground": "var(--sidebar-accent-foreground)",
        "color-sidebar-border": "var(--sidebar-border)",
        "color-sidebar-ring": "var(--sidebar-ring)",
        "color-chart-6": "var(--chart-6)",
        "color-chart-7": "var(--chart-7)",
        "color-dark-blue": "var(--primary-b000)",
        "color-dark-blue-fade": "var(--primary-l200)",
        "color-dark-blue-inverse": "var(--base-color-4-d100)",
        "color-dark-blue-inverse-fade": "var(--base-color-4-l200)",
        "color-dark-blue-100": "var(--primary-l400)",
        "color-dark-blue-200": "var(--primary-l300)",
        "color-dark-blue-300": "var(--primary-l200)",
        "color-dark-blue-400": "var(--primary-l100)",
        "color-dark-blue-500": "var(--primary-b000)",
        "color-dark-blue-600": "var(--primary-d100)",
        "color-dark-blue-700": "var(--primary-d200)",
        "color-dark-blue-800": "var(--primary-d300)",
        "color-dark-blue-900": "var(--primary-d400)",
        "color-dark-blue-100-inverse": "var(--base-color-4-d400)",
        "color-dark-blue-200-inverse": "var(--base-color-4-d300)",
        "color-dark-blue-300-inverse": "var(--base-color-4-d200)",
        "color-dark-blue-400-inverse": "var(--base-color-4-d100)",
        "color-dark-blue-500-inverse": "var(--base-color-4-b000)",
        "color-dark-blue-600-inverse": "var(--base-color-4-l100)",
        "color-dark-blue-700-inverse": "var(--base-color-4-l200)",
        "color-dark-blue-800-inverse": "var(--base-color-4-l300)",
        "color-dark-blue-900-inverse": "var(--base-color-4-l400)",
        "color-blue-50": "var(--primary-l500)",
        "color-blue-100": "var(--primary-l400)",
        "color-blue-200": "var(--primary-l300)",
        "color-blue-300": "var(--primary-l200)",
        "color-blue-400": "var(--primary-l100)",
        "color-blue-500": "var(--primary-b000)",
        "color-blue-600": "var(--primary-d100)",
        "color-blue-700": "var(--primary-d200)",
        "color-blue-800": "var(--primary-d300)",
        "color-blue-900": "var(--primary-d400)",
        "color-blue-950": "var(--primary-d500)",
        "color-dark-green": "var(--base-color-1)",
        "color-dark-green-fade": "var(--base-color-1-fade)",
        "color-dark-green-inverse": "var(--base-color-1-inverse)",
        "color-dark-green-inverse-fade": "var(--base-color-1-inverse-fade)",
        "color-dark-green-100": "var(--base-color-1-l400)",
        "color-dark-green-200": "var(--base-color-1-l300)",
        "color-dark-green-300": "var(--base-color-1-l200)",
        "color-dark-green-400": "var(--base-color-1-l100)",
        "color-dark-green-500": "var(--base-color-1-b000)",
        "color-dark-green-600": "var(--base-color-1-d100)",
        "color-dark-green-700": "var(--base-color-1-d200)",
        "color-dark-green-800": "var(--base-color-1-d300)",
        "color-dark-green-900": "var(--base-color-1-d400)",
        "color-emerald-50": "var(--base-color-1-l400)",
        "color-emerald-100": "var(--base-color-1-l400)",
        "color-emerald-200": "var(--base-color-1-l300)",
        "color-emerald-300": "var(--base-color-1-l200)",
        "color-emerald-400": "var(--base-color-1-l100)",
        "color-emerald-500": "var(--base-color-1-b000)",
        "color-emerald-600": "var(--base-color-1-d100)",
        "color-emerald-700": "var(--base-color-1-d200)",
        "color-emerald-800": "var(--base-color-1-d300)",
        "color-emerald-900": "var(--base-color-1-d400)",
        "color-emerald-950": "var(--base-color-1-l400)",
        "color-dark-green-100-inverse": "var(--base-color-9-d400)",
        "color-dark-green-200-inverse": "var(--base-color-9-d300)",
        "color-dark-green-300-inverse": "var(--base-color-9-d200)",
        "color-dark-green-400-inverse": "var(--base-color-9-d100)",
        "color-dark-green-500-inverse": "var(--base-color-9-b000)",
        "color-dark-green-600-inverse": "var(--base-color-9-l100)",
        "color-dark-green-700-inverse": "var(--base-color-9-l200)",
        "color-dark-green-800-inverse": "var(--base-color-9-l300)",
        "color-dark-green-900-inverse": "var(--base-color-9-l400)",
        "color-green": "var(--base-color-2)",
        "color-green-fade": "var(--base-color-2-fade)",
        "color-green-inverse": "var(--base-color-2-inverse)",
        "color-green-inverse-fade": "var(--base-color-2-inverse-fade)",
        "color-green-100": "var(--base-color-2-l400)",
        "color-green-200": "var(--base-color-2-l300)",
        "color-green-300": "var(--base-color-2-l200)",
        "color-green-400": "var(--base-color-2-l100)",
        "color-green-500": "var(--base-color-2-b000)",
        "color-green-600": "var(--base-color-2-d100)",
        "color-green-700": "var(--base-color-2-d200)",
        "color-green-800": "var(--base-color-2-d300)",
        "color-green-900": "var(--base-color-2-d400)",
        "color-teal-50": "var(--base-color-2-l500)",
        "color-teal-100": "var(--base-color-2-l400)",
        "color-teal-200": "var(--base-color-2-l300)",
        "color-teal-300": "var(--base-color-2-l200)",
        "color-teal-400": "var(--base-color-2-l100)",
        "color-teal-500": "var(--base-color-2-b000)",
        "color-teal-600": "var(--base-color-2-d100)",
        "color-teal-700": "var(--base-color-2-d200)",
        "color-teal-800": "var(--base-color-2-d300)",
        "color-teal-900": "var(--base-color-2-d400)",
        "color-teal-950": "var(--base-color-2-d500)",
        "color-green-100-inverse": "var(--base-color-5-d400)",
        "color-green-200-inverse": "var(--base-color-5-d300)",
        "color-green-300-inverse": "var(--base-color-5-d200)",
        "color-green-400-inverse": "var(--base-color-5-d100)",
        "color-green-500-inverse": "var(--base-color-5-b000)",
        "color-green-600-inverse": "var(--base-color-5-l100)",
        "color-green-700-inverse": "var(--base-color-5-l200)",
        "color-green-800-inverse": "var(--base-color-5-l300)",
        "color-green-900-inverse": "var(--base-color-5-l400)",
        "color-light-green": "var(--base-color-3)",
        "color-light-green-fade": "var(--base-color-3-fade)",
        "color-light-green-inverse": "var(--base-color-3-inverse)",
        "color-light-green-inverse-fade": "var(--base-color-3-inverse-fade)",
        "color-light-green-100": "var(--base-color-3-l400)",
        "color-light-green-200": "var(--base-color-3-l300)",
        "color-light-green-300": "var(--base-color-3-l200)",
        "color-light-green-400": "var(--base-color-3-l100)",
        "color-light-green-500": "var(--base-color-3-b000)",
        "color-light-green-600": "var(--base-color-3-d100)",
        "color-light-green-700": "var(--base-color-3-d200)",
        "color-light-green-800": "var(--base-color-3-d300)",
        "color-light-green-900": "var(--base-color-3-d400)",
        "color-lime-50": "var(--base-color-3-l400)",
        "color-lime-100": "var(--base-color-3-l400)",
        "color-lime-200": "var(--base-color-3-l300)",
        "color-lime-300": "var(--base-color-3-l200)",
        "color-lime-400": "var(--base-color-3-l100)",
        "color-lime-500": "var(--base-color-3-b000)",
        "color-lime-600": "var(--base-color-3-d100)",
        "color-lime-700": "var(--base-color-3-d200)",
        "color-lime-800": "var(--base-color-3-d300)",
        "color-lime-900": "var(--base-color-3-d400)",
        "color-lime-950": "var(--base-color-3-d400)",
        "color-light-green-100-inverse": "var(--base-color-8-d400)",
        "color-light-green-200-inverse": "var(--base-color-8-d300)",
        "color-light-green-300-inverse": "var(--base-color-8-d200)",
        "color-light-green-400-inverse": "var(--base-color-8-d100)",
        "color-light-green-500-inverse": "var(--base-color-8-b000)",
        "color-light-green-600-inverse": "var(--base-color-8-l100)",
        "color-light-green-700-inverse": "var(--base-color-8-l200)",
        "color-light-green-800-inverse": "var(--base-color-8-l300)",
        "color-light-green-900-inverse": "var(--base-color-8-l400)",
        "color-light-blue": "var(--base-color-4)",
        "color-light-blue-fade": "var(--base-color-4-inverse)",
        "color-light-blue-inverse": "var(--base-color-4-inverse)",
        "color-light-blue-inverse-fade": "var(--base-color-4-inverse-fade)",
        "color-light-blue-100": "var(--base-color-4-l400)",
        "color-light-blue-200": "var(--base-color-4-l300)",
        "color-light-blue-300": "var(--base-color-4-l200)",
        "color-light-blue-400": "var(--base-color-4-l100)",
        "color-light-blue-500": "var(--base-color-4-b000)",
        "color-light-blue-600": "var(--base-color-4-d100)",
        "color-light-blue-700": "var(--base-color-4-d200)",
        "color-light-blue-800": "var(--base-color-4-d300)",
        "color-light-blue-900": "var(--base-color-4-d400)",
        "color-cyan-50": "var(--base-color-4-l400)",
        "color-cyan-100": "var(--base-color-4-l400)",
        "color-cyan-200": "var(--base-color-4-l300)",
        "color-cyan-300": "var(--base-color-4-l200)",
        "color-cyan-400": "var(--base-color-4-l100)",
        "color-cyan-500": "var(--base-color-4-b000)",
        "color-cyan-600": "var(--base-color-4-d100)",
        "color-cyan-700": "var(--base-color-4-d200)",
        "color-cyan-800": "var(--base-color-4-d300)",
        "color-cyan-900": "var(--base-color-4-d400)",
        "color-cyan-950": "var(--base-color-4-d400)",
        "color-light-blue-100-inverse": "var(--primary-d400)",
        "color-light-blue-200-inverse": "var(--primary-d300)",
        "color-light-blue-300-inverse": "var(--primary-d200)",
        "color-light-blue-400-inverse": "var(--primary-d100)",
        "color-light-blue-500-inverse": "var(--primary-b000)",
        "color-light-blue-600-inverse": "var(--primary-l100)",
        "color-light-blue-700-inverse": "var(--primary-l200)",
        "color-light-blue-800-inverse": "var(--primary-l300)",
        "color-light-blue-900-inverse": "var(--primary-l400)",
        "color-yellow": "var(--base-color-5)",
        "color-yellow-fade": "var(--base-color-5-fade)",
        "color-yellow-inverse": "var(--base-color-5-inverse)",
        "color-yellow-inverse-fade": "var(--base-color-5-inverse-fade)",
        "color-yellow-100": "var(--base-color-5-l400)",
        "color-yellow-200": "var(--base-color-5-l300)",
        "color-yellow-300": "var(--base-color-5-l200)",
        "color-yellow-400": "var(--base-color-5-l100)",
        "color-yellow-500": "var(--base-color-5-b000)",
        "color-yellow-600": "var(--base-color-5-d100)",
        "color-yellow-700": "var(--base-color-5-d200)",
        "color-yellow-800": "var(--base-color-5-d300)",
        "color-yellow-900": "var(--base-color-5-d400)",
        "color-yellow-100-inverse": "var(--primary-d400)",
        "color-yellow-200-inverse": "var(--primary-d300)",
        "color-yellow-300-inverse": "var(--primary-d200)",
        "color-yellow-400-inverse": "var(--primary-d100)",
        "color-yellow-500-inverse": "var(--primary-b000)",
        "color-yellow-600-inverse": "var(--primary-l100)",
        "color-yellow-700-inverse": "var(--primary-l200)",
        "color-yellow-800-inverse": "var(--primary-l300)",
        "color-yellow-900-inverse": "var(--primary-l400)",
        "color-orange": "var(--base-color-6)",
        "color-orange-fade": "var(--base-color-6-fade)",
        "color-orange-inverse": "var(--base-color-6-inverse)",
        "color-orange-inverse-fade": "var(--base-color-6-inverse-fade)",
        "color-orange-50": "var(--base-color-6-l500)",
        "color-orange-100": "var(--base-color-6-l400)",
        "color-orange-200": "var(--base-color-6-l300)",
        "color-orange-300": "var(--base-color-6-l200)",
        "color-orange-400": "var(--base-color-6-l100)",
        "color-orange-500": "var(--base-color-6-b000)",
        "color-orange-600": "var(--base-color-6-d100)",
        "color-orange-700": "var(--base-color-6-d200)",
        "color-orange-800": "var(--base-color-6-d300)",
        "color-orange-900": "var(--base-color-6-d400)",
        "color-orange-950": "var(--base-color-6-d400)",
        "color-orange-100-inverse": "var(--primary-l400)",
        "color-orange-200-inverse": "var(--primary-l300)",
        "color-orange-300-inverse": "var(--primary-l200)",
        "color-orange-400-inverse": "var(--primary-l100)",
        "color-orange-500-inverse": "var(--primary-b000)",
        "color-orange-600-inverse": "var(--primary-d100)",
        "color-orange-700-inverse": "var(--primary-d200)",
        "color-orange-800-inverse": "var(--primary-d300)",
        "color-orange-900-inverse": "var(--primary-d400)",
        "color-red": "var(--base-color-7)",
        "color-red-fade": "var(--base-color-7-fade)",
        "color-red-inverse": "var(--base-color-7-inverse)",
        "color-red-inverse-fade": "var(--base-color-7-inverse-fade)",
        "color-red-50": "var(--base-color-7-l500)",
        "color-red-100": "var(--base-color-7-l400)",
        "color-red-200": "var(--base-color-7-l300)",
        "color-red-300": "var(--base-color-7-l200)",
        "color-red-400": "var(--base-color-7-l100)",
        "color-red-500": "var(--base-color-7-b000)",
        "color-red-600": "var(--base-color-7-d100)",
        "color-red-700": "var(--base-color-7-d200)",
        "color-red-800": "var(--base-color-7-d300)",
        "color-red-900": "var(--base-color-7-d400)",
        "color-red-950": "var(--base-color-7-l500)",
        "color-red-100-inverse": "var(--base-color-4-d400)",
        "color-red-200-inverse": "var(--base-color-4-d300)",
        "color-red-300-inverse": "var(--base-color-4-d200)",
        "color-red-400-inverse": "var(--base-color-4-d100)",
        "color-red-500-inverse": "var(--base-color-4-b000)",
        "color-red-600-inverse": "var(--base-color-4-l100)",
        "color-red-700-inverse": "var(--base-color-4-l200)",
        "color-red-800-inverse": "var(--base-color-4-l300)",
        "color-red-900-inverse": "var(--base-color-4-l400)",
        "color-purple": "var(--base-color-8)",
        "color-purple-fade": "var(--base-color-8-fade)",
        "color-purple-inverse": "var(--base-color-8-inverse)",
        "color-purple-inverse-fade": "var(--base-color-8-inverse-fade)",
        "color-purple-50": "var(--base-color-8-l500)",
        "color-purple-100": "var(--base-color-8-l400)",
        "color-purple-200": "var(--base-color-8-l300)",
        "color-purple-300": "var(--base-color-8-l200)",
        "color-purple-400": "var(--base-color-8-l100)",
        "color-purple-500": "var(--base-color-8-b000)",
        "color-purple-600": "var(--base-color-8-d100)",
        "color-purple-700": "var(--base-color-8-d200)",
        "color-purple-800": "var(--base-color-8-d300)",
        "color-purple-900": "var(--base-color-8-d400)",
        "color-purple-950": "var(--base-color-8-d500)",
        "color-purple-100-inverse": "var(--base-color-3-d400)",
        "color-purple-200-inverse": "var(--base-color-3-d300)",
        "color-purple-300-inverse": "var(--base-color-3-d200)",
        "color-purple-400-inverse": "var(--base-color-3-d100)",
        "color-purple-500-inverse": "var(--base-color-3-b000)",
        "color-purple-600-inverse": "var(--base-color-3-l100)",
        "color-purple-700-inverse": "var(--base-color-3-l200)",
        "color-purple-800-inverse": "var(--base-color-3-l300)",
        "color-purple-900-inverse": "var(--base-color-3-l400)",
        "color-smoke": "var(--base-color-9)",
        "color-smoke-fade": "var(--base-color-9-fade)",
        "color-smoke-inverse": "var(--base-color-9-inverse)",
        "color-smoke-inverse-fade": "var(--base-color-9-inverse-fade)",
        "color-smoke-100": "var(--base-color-9-l400)",
        "color-smoke-200": "var(--base-color-9-l300)",
        "color-smoke-300": "var(--base-color-9-l200)",
        "color-smoke-400": "var(--base-color-9-l100)",
        "color-smoke-500": "var(--base-color-9-b000)",
        "color-smoke-600": "var(--base-color-9-d100)",
        "color-smoke-700": "var(--base-color-9-d200)",
        "color-smoke-800": "var(--base-color-9-d300)",
        "color-smoke-900": "var(--base-color-9-d400)",
        "color-slate-50": "var(--base-color-9-b000)",
        "color-slate-100": "var(--base-color-9-l400)",
        "color-slate-200": "var(--base-color-9-l300)",
        "color-slate-300": "var(--base-color-9-l200)",
        "color-slate-400": "var(--base-color-9-l100)",
        "color-slate-500": "var(--base-color-9-b000)",
        "color-slate-600": "var(--base-color-9-d100)",
        "color-slate-700": "var(--base-color-9-d200)",
        "color-slate-800": "var(--base-color-9-d300)",
        "color-slate-900": "var(--base-color-9-d400)",
        "color-slate-950": "var(--base-color-9-d400)",
        "color-grey-100": "var(--base-grey-l700)",
        "color-grey-150": "var(--base-grey-l600)",
        "color-grey-200": "var(--base-grey-l500)",
        "color-grey-250": "var(--base-grey-l400)",
        "color-grey-300": "var(--base-grey-l300)",
        "color-grey-350": "var(--base-grey-l200)",
        "color-grey-400": "var(--base-grey-l100)",
        "color-grey-450": "var(--base-grey-d100)",
        "color-grey-500": "var(--base-grey-d200)",
        "color-grey-550": "var(--base-grey-d200)",
        "color-grey-600": "var(--base-grey-d400)",
        "color-grey-650": "var(--base-grey-d500)",
        "color-grey-700": "var(--base-grey-d600)",
        "color-grey-750": "var(--base-grey-d700)",
        "color-grey-800": "var(--base-grey-d800)",
        "shadow-2xs": "var(--shadow-2xs)",
        "shadow-xs": "var(--shadow-xs)",
        "shadow-sm": "0.95px .5px 0 currentColor,1.45px 1px 0 currentColor,1.95px 1.5px 0 currentColor,2.45px 2px 0 currentColor,2.95px 2.5px 0 currentColor,3.45px 3px 0 currentColor,3.95px 3.5px 0 currentColor",
        "shadow": "0.95px .5px 0 currentColor,1.45px 1px 0 currentColor,1.95px 1.5px 0 currentColor,2.45px 2px 0 currentColor,2.95px 2.5px 0 currentColor,3.45px 3px 0 currentColor,3.95px 3.5px 0 currentColor,4.45px 4px 0 currentColor, currentColor,4.95px 4.5px 0 currentColor,5.45px 5px 0",
        "shadow-md": "0.95px .5px 0 currentColor,1.45px 1px 0 currentColor,1.95px 1.5px 0 currentColor,2.45px 2px 0 currentColor,2.95px 2.5px 0 currentColor,3.45px 3px 0 currentColor,3.95px 3.5px 0 currentColor,4.45px 4px 0 currentColor",
        "shadow-lg": "0.95px .5px 0 currentColor,1.45px 1px 0 currentColor,1.95px 1.5px 0 currentColor,2.45px 2px 0 currentColor,2.95px 2.5px 0 currentColor,3.45px 3px 0 currentColor,3.95px 3.5px 0 currentColor,4.45px 4px 0 currentColor,4.95px 4.5px 0 currentColor,5.45px 5px 0 currentColor,5.95px 5.5px 0 currentColor,6.45px 6px 0 currentColor,6.95px 6.5px 0 currentColor,7.45px 7px 0 currentColor,7.95px 7.5px 0 currentColor,8.45px 8px 0",
        "shadow-xl": "0.95px .5px 0 currentColor,1.45px 1px 0 currentColor,1.95px 1.5px 0 currentColor,2.45px 2px 0 currentColor,2.95px 2.5px 0 currentColor,3.45px 3px 0 currentColor,3.95px 3.5px 0 currentColor,4.45px 4px 0 currentColor,4.95px 4.5px 0 currentColor,5.45px 5px 0 currentColor,5.95px 5.5px 0 currentColor,6.45px 6px 0 currentColor,6.95px 6.5px 0 currentColor,7.45px 7px 0 currentColor,7.95px 7.5px 0 currentColor,8.45px 8px 0 currentColor,8.95px 8.5px 0 currentColor,9.45px 9px 0 currentColor,9.95px 9.5px 0 currentColor,10.45px 10px 0 currentColor",
        "shadow-2xl": "var(--shadow-2xl)",
        "radius-xs": ".25rem",
        "radius-sm": "calc(var(--radius) * 0.6)",
        "radius-md": "calc(var(--radius) * 0.8)",
        "radius-lg": "var(--radius)",
        "radius-xl": "calc(var(--radius) * 1.4)",
        "radius-2xl": "calc(var(--radius) * 1.8)",
        "radius-3xl": "calc(var(--radius) * 2.2)",
        "radius-4xl": "calc(var(--radius) * 2.6)",
        "tracking-tighter": "calc(var(--tracking-normal) - 0.05em)",
        "tracking-tight": "calc(var(--tracking-normal) - 0.025em)",
        "tracking-normal": "0em",
        "tracking-wide": "calc(var(--tracking-normal) + 0.025em)",
        "tracking-wider": "calc(var(--tracking-normal) + 0.05em)",
        "tracking-widest": "calc(var(--tracking-normal) + 0.1em)",
        "animate-rainbow": "rainbow var(--speed, 2s) infinite linear",
        "animate-heartbeat": "heartbeat 2s infinite ease-in-out",
        "spacing-xxs": ".5rem",
        "spacing-xs": "1rem",
        "spacing-sm": "2rem",
        "spacing-md": "3rem",
        "spacing-lg": "4rem",
        "spacing-xl": "6rem",
        "spacing-xxl": "8rem",
        "color-opacity-25": "color-mix(in oklch, var(--dark-blue), transparent 75%)",
        "color-opacity-50": "color-mix(in oklch, var(--dark-blue), transparent 50%)",
        "color-opacity-75": "color-mix(in oklch, var(--dark-blue), transparent 25%)",
        "chart-6": "oklch(52% 0.10 230.09)",
        "chart-7": "oklch(65% 0.12 219.43)",
        "chart-8": "oklch(78% 0.11 195.12)",
        "spacing": "0.25rem",
        "base-primary": "oklch(0.3373 0.0925 258.5200)",
        "base-primary-fade": "oklch(61.56% 0.0494 258.73)",
        "base-primary-inverse": "oklch(83% 0.04 220)",
        "base-primary-inverse-fade": "oklch(86.40% 0.032 220)",
        "base-color-1": "oklch(54.28% 0.0982 220.31)",
        "base-color-1-fade": "oklch(71.63% 0.0762 214.60)",
        "base-color-1-inverse": "oklch(96% 0.01 210)",
        "base-color-1-inverse-fade": "oklch(86.40% 0.009 210)",
        "base-color-2": "oklch(66.27% 0.114 206.90)",
        "base-color-2-fade": "oklch(78.23% 0.094 203.21)",
        "base-color-2-inverse": "oklch(84% 0.14 85.21)",
        "base-color-2-inverse-fade": "oklch(94.00% 0.050 85.21)",
        "base-color-3": "#71c9c5",
        "base-color-3-fade": "oklch(86.35% 0.054 193.29)",
        "base-color-3-inverse": "oklch(45% 0.14 340)",
        "base-color-3-inverse-fade": "oklch(56.00% 0.112 340)",
        "base-color-4": "oklch(83% 0.04 220)",
        "base-color-4-fade": "oklch(90.61% 0.023 220.74)",
        "base-color-4-inverse": "oklch(27% 0.09 254.40)",
        "base-color-4-inverse-fade": "oklch(61.56% 0.0494 258.73)",
        "base-color-5": "oklch(84% 0.14 85.21)",
        "base-color-5-fade": "oklch(94.00% 0.050 85.21)",
        "base-color-5-inverse": "oklch(27% 0.09 254.40)",
        "base-color-5-inverse-fade": "oklch(61.56% 0.0494 258.73)",
        "base-color-6": "oklch(66% 0.18 45)",
        "base-color-6-fade": "oklch(82.08% 0.088 38.17)",
        "base-color-6-inverse": "oklch(27% 0.09 254.40)",
        "base-color-6-inverse-fade": "oklch(61.56% 0.0494 258.73)",
        "base-color-7": "oklch(55% 0.21 32)",
        "base-color-7-fade": "oklch(68.73% 0.144 25.60)",
        "base-color-7-inverse": "oklch(83% 0.04 220)",
        "base-color-7-inverse-fade": "oklch(90.61% 0.023 220.74)",
        "base-color-8": "oklch(45% 0.14 340)",
        "base-color-8-fade": "oklch(69.83% 0.061 347.29)",
        "base-color-8-inverse": "oklch(77.98% 0.085 191.74)",
        "base-color-8-inverse-fade": "oklch(86.35% 0.054 193.29)",
        "base-color-9": "oklch(96% 0.01 210)",
        "base-color-9-fade": "oklch(96.96% 0.005 212.02 / 0.5)",
        "base-color-9-inverse": "oklch(27% 0.09 254.40)",
        "base-color-9-inverse-fade": "oklch(61.56% 0.0494 258.73)",
        "primary-l500": "oklch(68.50% 0.0399 258.40)",
        "primary-l400": "oklch(61.56% 0.0494 258.73)",
        "primary-l300": "oklch(54.80% 0.0595 258.95)",
        "primary-l200": "oklch(47.91% 0.0703 259.06)",
        "primary-l100": "oklch(40.78% 0.0807 258.08)",
        "primary-b000": "oklch(33.73% 0.0925 258.52)",
        "primary-d100": "oklch(31.65% 0.0845 258.31)",
        "primary-d200": "oklch(29.28% 0.0776 259.05)",
        "primary-d300": "oklch(27.00% 0.0681 257.71)",
        "primary-d400": "oklch(24.53% 0.0608 258.67)",
        "primary-d500": "oklch(22.28% 0.0519 258.36)",
        "base-color-1-l400": "oklch(71.63% 0.0762 214.60)",
        "base-color-1-l300": "oklch(67.07% 0.0856 214.58)",
        "base-color-1-l200": "oklch(62.66% 0.0933 215.98)",
        "base-color-1-l100": "oklch(58.35% 0.0973 217.21)",
        "base-color-1-b000": "oklch(54.28% 0.0982 220.31)",
        "base-color-1-d100": "oklch(50.44% 0.0907 219.77)",
        "base-color-1-d200": "oklch(46.26% 0.0835 220.24)",
        "base-color-1-d300": "oklch(42.26% 0.0757 219.56)",
        "base-color-1-d400": "oklch(37.87% 0.0682 220.12)",
        "base-color-2-l500": "oklch(81.68% 0.081 203.65)",
        "base-color-2-l400": "oklch(78.23% 0.094 203.21)",
        "base-color-2-l300": "oklch(74.99% 0.104 203.94)",
        "base-color-2-l200": "oklch(71.90% 0.111 204.81)",
        "base-color-2-l100": "oklch(68.97% 0.114 205.27)",
        "base-color-2-b000": "oklch(66.27% 0.114 206.90)",
        "base-color-2-d100": "oklch(61.23% 0.105 207.31)",
        "base-color-2-d200": "oklch(56.35% 0.097 206.84)",
        "base-color-2-d300": "oklch(51.06% 0.087 206.33)",
        "base-color-2-d400": "oklch(45.94% 0.079 205.57)",
        "base-color-2-d500": "oklch(40.38% 0.069 206.07)",
        "base-color-3-l400": "oklch(86.35% 0.054 193.29)",
        "base-color-3-l300": "oklch(84.26% 0.063 192.24)",
        "base-color-3-l200": "oklch(81.97% 0.070 192.45)",
        "base-color-3-l100": "oklch(79.94% 0.078 191.58)",
        "base-color-3-b000": "oklch(77.98% 0.085 191.74)",
        "base-color-3-d100": "oklch(71.86% 0.078 192.37)",
        "base-color-3-d200": "oklch(65.90% 0.071 191.99)",
        "base-color-3-d300": "oklch(59.81% 0.064 191.50)",
        "base-color-3-d400": "oklch(53.53% 0.057 192.45)",
        "base-color-4-l400": "oklch(90.61% 0.023 220.74)",
        "base-color-4-l300": "oklch(89.18% 0.026 217.96)",
        "base-color-4-l200": "oklch(87.50% 0.030 220.61)",
        "base-color-4-l100": "oklch(86.03% 0.035 219.90)",
        "base-color-4-b000": "oklch(84.63% 0.038 219.96)",
        "base-color-4-d100": "oklch(78.00% 0.035 220.66)",
        "base-color-4-d200": "oklch(71.47% 0.032 220.74)",
        "base-color-4-d300": "oklch(64.80% 0.029 220.85)",
        "base-color-4-d400": "oklch(57.94% 0.025 221.09)",
        "base-color-5-l400": "oklch(94.00% 0.050 85.21)",
        "base-color-5-l300": "oklch(91.00% 0.070 85.21)",
        "base-color-5-l200": "oklch(88.04% 0.100 85.13)",
        "base-color-5-l100": "oklch(86.00% 0.120 85.21)",
        "base-color-5-b000": "oklch(86.42% 0.114 79.75)",
        "base-color-5-d100": "oklch(79.71% 0.105 79.05)",
        "base-color-5-d200": "oklch(73.06% 0.095 79.20)",
        "base-color-5-d300": "oklch(66.25% 0.086 79.38)",
        "base-color-5-d400": "oklch(59.27% 0.076 79.62)",
        "base-color-6-l500": "oklch(85.02% 0.072 37.58)",
        "base-color-6-l400": "oklch(82.08% 0.088 38.17)",
        "base-color-6-l300": "oklch(79.32% 0.105 38.34)",
        "base-color-6-l200": "oklch(76.67% 0.121 37.91)",
        "base-color-6-l100": "oklch(74.11% 0.138 38.05)",
        "base-color-6-b000": "oklch(71.70% 0.154 37.70)",
        "base-color-6-d100": "oklch(66.16% 0.141 37.56)",
        "base-color-6-d200": "oklch(60.80% 0.128 37.87)",
        "base-color-6-d300": "oklch(55.16% 0.115 37.54)",
        "base-color-6-d400": "oklch(49.39% 0.101 38.16)",
        "base-color-6-d500": "oklch(43.77% 0.087 37.71)",
        "base-color-7-l500": "oklch(79.91% 0.085 23.54)",
        "base-color-7-l400": "oklch(75.89% 0.105 24.16)",
        "base-color-7-l300": "oklch(72.15% 0.125 24.22)",
        "base-color-7-l200": "oklch(68.73% 0.144 25.60)",
        "base-color-7-l100": "oklch(65.42% 0.164 26.11)",
        "base-color-7-b000": "oklch(62.54% 0.181 27.16)",
        "base-color-7-d100": "oklch(57.79% 0.166 27.45)",
        "base-color-7-d200": "oklch(53.12% 0.151 27.38)",
        "base-color-7-d300": "oklch(48.18% 0.135 27.29)",
        "base-color-7-d400": "oklch(43.29% 0.119 27.17)",
        "base-color-7-d500": "oklch(38.27% 0.103 26.25)",
        "base-color-8-l500": "oklch(75.12% 0.050 345.99)",
        "base-color-8-l400": "oklch(69.83% 0.061 347.29)",
        "base-color-8-l300": "oklch(64.53% 0.072 347.34)",
        "base-color-8-l200": "oklch(59.51% 0.083 348.54)",
        "base-color-8-l100": "oklch(54.32% 0.096 349.45)",
        "base-color-8-b000": "oklch(49.40% 0.108 350.12)",
        "base-color-8-d100": "oklch(45.74% 0.099 349.97)",
        "base-color-8-d200": "oklch(42.15% 0.090 350.34)",
        "base-color-8-d300": "oklch(38.53% 0.081 349.71)",
        "base-color-8-d400": "oklch(34.77% 0.071 350.15)",
        "base-color-8-d500": "oklch(31.14% 0.060 349.81)",
        "base-color-9-l400": "oklch(97.93% 0.004 215.51)",
        "base-color-9-l300": "oklab(97.63% -0.003 -0.00)",
        "base-color-9-l200": "oklch(97.26% 0.005 212.03)",
        "base-color-9-l100": "oklch(96.96% 0.005 212.02)",
        "base-color-9-b000": "oklch(96.59% 0.006 209.63)",
        "base-color-9-d100": "oklch(89.29% 0.006 197.89)",
        "base-color-9-d200": "oklch(81.66% 0.005 211.84)",
        "base-color-9-d300": "oklch(74.04% 0.005 197.84)",
        "base-color-9-d400": "oklch(66.02% 0.004 215.06)",
        "base-grey-l700": "oklch(95.0% 0.009 254)",
        "base-grey-l600": "oklch(90.0% 0.008 254)",
        "base-grey-l500": "oklch(85.0% 0.007 254)",
        "base-grey-l400": "oklch(80.0% 0.006 254)",
        "base-grey-l300": "oklch(75.0% 0.005 254)",
        "base-grey-l200": "oklch(70.0% 0.004 254)",
        "base-grey-l100": "oklch(65.0% 0.003 254)",
        "base-grey-d100": "oklch(60.0% 0.002 254)",
        "base-grey-d200": "oklch(55.0% 0.001 254)",
        "base-grey-d300": "oklch(50.0% 0.000 254)",
        "base-grey-d400": "oklch(45.0% 0.001 254)",
        "base-grey-d500": "oklch(40.0% 0.002 254)",
        "base-grey-d600": "oklch(35.0% 0.003 254)",
        "base-grey-d700": "oklch(40.0% 0.004 254)",
        "base-grey-d800": "oklch(45.0% 0.005 254)"
      }
    },
    "dependencies": [
      "radix-ui"
    ],
    "files": [
      {
        "path": "registry/common/globals.css",
        "type": "registry:style",
        "target": "src/app/globals.css"
      },
      {
        "path": "registry/common/postcss.config.mjs",
        "type": "registry:file",
        "target": "postcss.config.mjs"
      },
      {
        "path": "registry/common/tsconfig.json",
        "type": "registry:file",
        "target": "tsconfig.json"
      },
      {
        "path": "registry/common/package.json",
        "type": "registry:file",
        "target": "package.json"
      },
      {
        "path": "registry/common/utils.ts",
        "type": "registry:lib",
        "target": "src/lib/utils.ts"
      },
      {
        "path": "registry/common/use-mobile.ts",
        "type": "registry:hook",
        "target": "src/hooks/use-mobile.ts"
      }
    ]
  },
  {
    "name": "blank",
    "type": "registry:block",
    "title": "Blank",
    "description": "A blank application with all brand components and code",
    "registryDependencies": [
      "https://metrics-ui.revrebel.io/r/theme.json",
      "https://metrics-ui.revrebel.io/r/brand-header.json",
      "https://metrics-ui.revrebel.io/r/brand-sidebar.json",
      "https://metrics-ui.revrebel.io/r/login.json",
      "https://metrics-ui.revrebel.io/r/logo.json",
      "https://metrics-ui.revrebel.io/r/hero.json",
      "https://metrics-ui.revrebel.io/r/promo.json",
      "https://metrics-ui.revrebel.io/r/product-grid.json",
      "https://metrics-ui.revrebel.io/r/accordion.json",
      "https://metrics-ui.revrebel.io/r/alert.json",
      "https://metrics-ui.revrebel.io/r/alert-dialog.json",
      "https://metrics-ui.revrebel.io/r/aspect-ratio.json",
      "https://metrics-ui.revrebel.io/r/avatar.json",
      "https://metrics-ui.revrebel.io/r/badge.json",
      "https://metrics-ui.revrebel.io/r/breadcrumb.json",
      "https://metrics-ui.revrebel.io/r/button.json",
      "https://metrics-ui.revrebel.io/r/calendar.json",
      "https://metrics-ui.revrebel.io/r/card.json",
      "https://metrics-ui.revrebel.io/r/carousel.json",
      "https://metrics-ui.revrebel.io/r/chart.json",
      "https://metrics-ui.revrebel.io/r/checkbox.json",
      "https://metrics-ui.revrebel.io/r/collapsible.json",
      "https://metrics-ui.revrebel.io/r/command.json",
      "https://metrics-ui.revrebel.io/r/context-menu.json",
      "https://metrics-ui.revrebel.io/r/dialog.json",
      "https://metrics-ui.revrebel.io/r/drawer.json",
      "https://metrics-ui.revrebel.io/r/dropdown-menu.json",
      "https://metrics-ui.revrebel.io/r/form.json",
      "https://metrics-ui.revrebel.io/r/hover-card.json",
      "https://metrics-ui.revrebel.io/r/input.json",
      "https://metrics-ui.revrebel.io/r/input-otp.json",
      "https://metrics-ui.revrebel.io/r/label.json",
      "https://metrics-ui.revrebel.io/r/menubar.json",
      "https://metrics-ui.revrebel.io/r/navigation-menu.json",
      "https://metrics-ui.revrebel.io/r/pagination.json",
      "https://metrics-ui.revrebel.io/r/popover.json",
      "https://metrics-ui.revrebel.io/r/progress.json",
      "https://metrics-ui.revrebel.io/r/radio-group.json",
      "https://metrics-ui.revrebel.io/r/resizable.json",
      "https://metrics-ui.revrebel.io/r/scroll-area.json",
      "https://metrics-ui.revrebel.io/r/select.json",
      "https://metrics-ui.revrebel.io/r/separator.json",
      "https://metrics-ui.revrebel.io/r/sheet.json",
      "https://metrics-ui.revrebel.io/r/sidebar.json",
      "https://metrics-ui.revrebel.io/r/skeleton.json",
      "https://metrics-ui.revrebel.io/r/slider.json",
      "https://metrics-ui.revrebel.io/r/sonner.json",
      "https://metrics-ui.revrebel.io/r/switch.json",
      "https://metrics-ui.revrebel.io/r/table.json",
      "https://metrics-ui.revrebel.io/r/tabs.json",
      "https://metrics-ui.revrebel.io/r/textarea.json",
      "https://metrics-ui.revrebel.io/r/toggle.json",
      "https://metrics-ui.revrebel.io/r/toggle-group.json",
      "https://metrics-ui.revrebel.io/r/tooltip.json",
      "https://metrics-ui.revrebel.io/r/data-table.json",
      "https://metrics-ui.revrebel.io/r/date-picker.json"
    ],
    "files": [
      {
        "path": "registry/app/demo/[name]/blocks/minimal-layout.tsx",
        "type": "registry:file",
        "target": "src/app/layout.tsx"
      },
      {
        "path": "registry/app/demo/[name]/blocks/blank-page.tsx",
        "type": "registry:page",
        "target": "src/app/page.tsx"
      }
    ]
  },
  {
    "name": "dashboard",
    "type": "registry:block",
    "title": "Dashboard",
    "description": "A dashboard application with your brand themed components",
    "registryDependencies": [
      "https://metrics-ui.revrebel.io/r/theme.json",
      "https://metrics-ui.revrebel.io/r/brand-header.json",
      "https://metrics-ui.revrebel.io/r/brand-sidebar.json",
      "https://metrics-ui.revrebel.io/r/login.json",
      "https://metrics-ui.revrebel.io/r/logo.json",
      "https://metrics-ui.revrebel.io/r/hero.json",
      "https://metrics-ui.revrebel.io/r/promo.json",
      "https://metrics-ui.revrebel.io/r/product-grid.json",
      "https://metrics-ui.revrebel.io/r/accordion.json",
      "https://metrics-ui.revrebel.io/r/alert.json",
      "https://metrics-ui.revrebel.io/r/alert-dialog.json",
      "https://metrics-ui.revrebel.io/r/aspect-ratio.json",
      "https://metrics-ui.revrebel.io/r/avatar.json",
      "https://metrics-ui.revrebel.io/r/badge.json",
      "https://metrics-ui.revrebel.io/r/breadcrumb.json",
      "https://metrics-ui.revrebel.io/r/button.json",
      "https://metrics-ui.revrebel.io/r/calendar.json",
      "https://metrics-ui.revrebel.io/r/card.json",
      "https://metrics-ui.revrebel.io/r/carousel.json",
      "https://metrics-ui.revrebel.io/r/chart.json",
      "https://metrics-ui.revrebel.io/r/checkbox.json",
      "https://metrics-ui.revrebel.io/r/collapsible.json",
      "https://metrics-ui.revrebel.io/r/command.json",
      "https://metrics-ui.revrebel.io/r/context-menu.json",
      "https://metrics-ui.revrebel.io/r/dialog.json",
      "https://metrics-ui.revrebel.io/r/drawer.json",
      "https://metrics-ui.revrebel.io/r/dropdown-menu.json",
      "https://metrics-ui.revrebel.io/r/form.json",
      "https://metrics-ui.revrebel.io/r/hover-card.json",
      "https://metrics-ui.revrebel.io/r/input.json",
      "https://metrics-ui.revrebel.io/r/input-otp.json",
      "https://metrics-ui.revrebel.io/r/label.json",
      "https://metrics-ui.revrebel.io/r/menubar.json",
      "https://metrics-ui.revrebel.io/r/navigation-menu.json",
      "https://metrics-ui.revrebel.io/r/pagination.json",
      "https://metrics-ui.revrebel.io/r/popover.json",
      "https://metrics-ui.revrebel.io/r/progress.json",
      "https://metrics-ui.revrebel.io/r/radio-group.json",
      "https://metrics-ui.revrebel.io/r/resizable.json",
      "https://metrics-ui.revrebel.io/r/scroll-area.json",
      "https://metrics-ui.revrebel.io/r/select.json",
      "https://metrics-ui.revrebel.io/r/separator.json",
      "https://metrics-ui.revrebel.io/r/sheet.json",
      "https://metrics-ui.revrebel.io/r/sidebar.json",
      "https://metrics-ui.revrebel.io/r/skeleton.json",
      "https://metrics-ui.revrebel.io/r/slider.json",
      "https://metrics-ui.revrebel.io/r/sonner.json",
      "https://metrics-ui.revrebel.io/r/switch.json",
      "https://metrics-ui.revrebel.io/r/table.json",
      "https://metrics-ui.revrebel.io/r/tabs.json",
      "https://metrics-ui.revrebel.io/r/textarea.json",
      "https://metrics-ui.revrebel.io/r/toggle.json",
      "https://metrics-ui.revrebel.io/r/toggle-group.json",
      "https://metrics-ui.revrebel.io/r/tooltip.json",
      "https://metrics-ui.revrebel.io/r/data-table.json",
      "https://metrics-ui.revrebel.io/r/date-picker.json"
    ],
    "files": [
      {
        "path": "registry/app/demo/[name]/blocks/shell-layout.tsx",
        "type": "registry:file",
        "target": "src/app/layout.tsx"
      },
      {
        "path": "registry/app/demo/[name]/blocks/dashboard-page.tsx",
        "type": "registry:page",
        "target": "src/app/page.tsx"
      }
    ]
  },
  {
    "name": "store",
    "type": "registry:block",
    "title": "Store",
    "description": "A store application with your brand themed components",
    "registryDependencies": [
      "https://metrics-ui.revrebel.io/r/theme.json",
      "https://metrics-ui.revrebel.io/r/brand-header.json",
      "https://metrics-ui.revrebel.io/r/brand-sidebar.json",
      "https://metrics-ui.revrebel.io/r/login.json",
      "https://metrics-ui.revrebel.io/r/logo.json",
      "https://metrics-ui.revrebel.io/r/hero.json",
      "https://metrics-ui.revrebel.io/r/promo.json",
      "https://metrics-ui.revrebel.io/r/product-grid.json",
      "https://metrics-ui.revrebel.io/r/accordion.json",
      "https://metrics-ui.revrebel.io/r/alert.json",
      "https://metrics-ui.revrebel.io/r/alert-dialog.json",
      "https://metrics-ui.revrebel.io/r/aspect-ratio.json",
      "https://metrics-ui.revrebel.io/r/avatar.json",
      "https://metrics-ui.revrebel.io/r/badge.json",
      "https://metrics-ui.revrebel.io/r/breadcrumb.json",
      "https://metrics-ui.revrebel.io/r/button.json",
      "https://metrics-ui.revrebel.io/r/calendar.json",
      "https://metrics-ui.revrebel.io/r/card.json",
      "https://metrics-ui.revrebel.io/r/carousel.json",
      "https://metrics-ui.revrebel.io/r/chart.json",
      "https://metrics-ui.revrebel.io/r/checkbox.json",
      "https://metrics-ui.revrebel.io/r/collapsible.json",
      "https://metrics-ui.revrebel.io/r/command.json",
      "https://metrics-ui.revrebel.io/r/context-menu.json",
      "https://metrics-ui.revrebel.io/r/dialog.json",
      "https://metrics-ui.revrebel.io/r/drawer.json",
      "https://metrics-ui.revrebel.io/r/dropdown-menu.json",
      "https://metrics-ui.revrebel.io/r/form.json",
      "https://metrics-ui.revrebel.io/r/hover-card.json",
      "https://metrics-ui.revrebel.io/r/input.json",
      "https://metrics-ui.revrebel.io/r/input-otp.json",
      "https://metrics-ui.revrebel.io/r/label.json",
      "https://metrics-ui.revrebel.io/r/menubar.json",
      "https://metrics-ui.revrebel.io/r/navigation-menu.json",
      "https://metrics-ui.revrebel.io/r/pagination.json",
      "https://metrics-ui.revrebel.io/r/popover.json",
      "https://metrics-ui.revrebel.io/r/progress.json",
      "https://metrics-ui.revrebel.io/r/radio-group.json",
      "https://metrics-ui.revrebel.io/r/resizable.json",
      "https://metrics-ui.revrebel.io/r/scroll-area.json",
      "https://metrics-ui.revrebel.io/r/select.json",
      "https://metrics-ui.revrebel.io/r/separator.json",
      "https://metrics-ui.revrebel.io/r/sheet.json",
      "https://metrics-ui.revrebel.io/r/sidebar.json",
      "https://metrics-ui.revrebel.io/r/skeleton.json",
      "https://metrics-ui.revrebel.io/r/slider.json",
      "https://metrics-ui.revrebel.io/r/sonner.json",
      "https://metrics-ui.revrebel.io/r/switch.json",
      "https://metrics-ui.revrebel.io/r/table.json",
      "https://metrics-ui.revrebel.io/r/tabs.json",
      "https://metrics-ui.revrebel.io/r/textarea.json",
      "https://metrics-ui.revrebel.io/r/toggle.json",
      "https://metrics-ui.revrebel.io/r/toggle-group.json",
      "https://metrics-ui.revrebel.io/r/tooltip.json",
      "https://metrics-ui.revrebel.io/r/data-table.json",
      "https://metrics-ui.revrebel.io/r/date-picker.json"
    ],
    "files": [
      {
        "path": "registry/app/demo/[name]/blocks/minimal-layout.tsx",
        "type": "registry:file",
        "target": "src/app/layout.tsx"
      },
      {
        "path": "registry/app/demo/[name]/blocks/store-page.tsx",
        "type": "registry:page",
        "target": "src/app/page.tsx"
      }
    ]
  },
  {
    "name": "brand-header",
    "type": "registry:component",
    "title": "Brand Header",
    "description": "A styled, simple, reusable header",
    "registryDependencies": [
      "https://metrics-ui.revrebel.io/r/theme.json",
      "https://metrics-ui.revrebel.io/r/button.json",
      "https://metrics-ui.revrebel.io/r/input.json",
      "https://metrics-ui.revrebel.io/r/avatar.json",
      "https://metrics-ui.revrebel.io/r/sidebar.json",
      "https://metrics-ui.revrebel.io/r/sonner.json",
      "https://metrics-ui.revrebel.io/r/logo.json"
    ],
    "files": [
      {
        "path": "registry/app/demo/[name]/components/brand-header.tsx",
        "type": "registry:component",
        "target": "src/components/brand-header.tsx"
      },
      {
        "path": "registry/app/demo/[name]/blocks/shell-layout.tsx",
        "type": "registry:file",
        "target": "src/app/layout.tsx"
      },
      {
        "path": "registry/app/demo/[name]/blocks/blank-page.tsx",
        "type": "registry:page",
        "target": "src/app/page.tsx"
      }
    ]
  },
  {
    "name": "brand-sidebar",
    "type": "registry:component",
    "title": "Brand Sidebar",
    "description": "A styled, simple, reusable sidebar",
    "registryDependencies": [
      "https://metrics-ui.revrebel.io/r/theme.json",
      "https://metrics-ui.revrebel.io/r/badge.json",
      "https://metrics-ui.revrebel.io/r/button.json",
      "https://metrics-ui.revrebel.io/r/sidebar.json",
      "https://metrics-ui.revrebel.io/r/sonner.json"
    ],
    "files": [
      {
        "path": "registry/app/demo/[name]/components/brand-sidebar.tsx",
        "type": "registry:component",
        "target": "src/components/brand-sidebar.tsx"
      },
      {
        "path": "registry/app/demo/[name]/blocks/shell-layout.tsx",
        "type": "registry:file",
        "target": "src/app/layout.tsx"
      },
      {
        "path": "registry/app/demo/[name]/blocks/blank-page.tsx",
        "type": "registry:page",
        "target": "src/app/page.tsx"
      }
    ]
  },
  {
    "name": "login",
    "type": "registry:component",
    "title": "Login",
    "description": "Username & password login section with customer quote.",
    "registryDependencies": [
      "https://metrics-ui.revrebel.io/r/theme.json",
      "https://metrics-ui.revrebel.io/r/badge.json",
      "https://metrics-ui.revrebel.io/r/button.json",
      "https://metrics-ui.revrebel.io/r/logo.json"
    ],
    "files": [
      {
        "path": "registry/app/demo/[name]/components/login.tsx",
        "type": "registry:component",
        "target": "src/components/login.tsx"
      },
      {
        "path": "registry/app/demo/[name]/blocks/minimal-layout.tsx",
        "type": "registry:file",
        "target": "src/app/layout.tsx"
      },
      {
        "path": "registry/app/demo/[name]/blocks/blank-page.tsx",
        "type": "registry:page",
        "target": "src/app/page.tsx"
      }
    ]
  },
  {
    "name": "logo",
    "type": "registry:component",
    "title": "Brand Logo",
    "description": "A styled, simple, reusable logo",
    "registryDependencies": [
      "https://metrics-ui.revrebel.io/r/theme.json"
    ],
    "files": [
      {
        "path": "registry/app/demo/[name]/components/logo.tsx",
        "type": "registry:component",
        "target": "src/components/logo.tsx"
      },
      {
        "path": "registry/app/demo/[name]/blocks/minimal-layout.tsx",
        "type": "registry:file",
        "target": "src/app/layout.tsx"
      },
      {
        "path": "registry/app/demo/[name]/blocks/blank-page.tsx",
        "type": "registry:page",
        "target": "src/app/page.tsx"
      }
    ]
  },
  {
    "name": "hero",
    "type": "registry:component",
    "title": "Hero",
    "description": "Attention-grabbing section for the top of your landing pages.",
    "registryDependencies": [
      "https://metrics-ui.revrebel.io/r/theme.json",
      "https://metrics-ui.revrebel.io/r/badge.json",
      "https://metrics-ui.revrebel.io/r/button.json"
    ],
    "files": [
      {
        "path": "registry/app/demo/[name]/components/hero.tsx",
        "type": "registry:component",
        "target": "src/components/hero.tsx"
      },
      {
        "path": "registry/app/demo/[name]/blocks/minimal-layout.tsx",
        "type": "registry:file",
        "target": "src/app/layout.tsx"
      },
      {
        "path": "registry/app/demo/[name]/blocks/blank-page.tsx",
        "type": "registry:page",
        "target": "src/app/page.tsx"
      }
    ]
  },
  {
    "name": "promo",
    "type": "registry:component",
    "title": "Promo",
    "description": "Attention-grabbing section to display the current promotional deal.",
    "registryDependencies": [
      "https://metrics-ui.revrebel.io/r/theme.json",
      "https://metrics-ui.revrebel.io/r/button.json"
    ],
    "files": [
      {
        "path": "registry/app/demo/[name]/components/promo.tsx",
        "type": "registry:component",
        "target": "src/components/promo.tsx"
      },
      {
        "path": "registry/app/demo/[name]/blocks/minimal-layout.tsx",
        "type": "registry:file",
        "target": "src/app/layout.tsx"
      },
      {
        "path": "registry/app/demo/[name]/blocks/blank-page.tsx",
        "type": "registry:page",
        "target": "src/app/page.tsx"
      }
    ]
  },
  {
    "name": "product-grid",
    "type": "registry:component",
    "title": "Product Grid",
    "description": "Product grid displaying all products with API to fetch data",
    "registryDependencies": [
      "https://metrics-ui.revrebel.io/r/theme.json"
    ],
    "files": [
      {
        "path": "registry/app/demo/[name]/components/product-grid.tsx",
        "type": "registry:component",
        "target": "src/components/product-grid.tsx"
      },
      {
        "path": "registry/app/demo/[name]/components/product-grid.tsx",
        "type": "registry:lib",
        "target": "src/lib/products.ts"
      },
      {
        "path": "registry/app/demo/[name]/blocks/minimal-layout.tsx",
        "type": "registry:file",
        "target": "src/app/layout.tsx"
      }
    ]
  },
  {
    "name": "accordion",
    "type": "registry:ui",
    "title": "Accordion",
    "description": "A vertically stacked set of interactive headings that each reveal a section of content.",
    "files": [
      {
        "path": "src/primitives/ui/accordion.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "alert",
    "type": "registry:ui",
    "title": "Alert",
    "description": "Displays a callout for user attention.",
    "files": [
      {
        "path": "src/primitives/ui/alert.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "alert-dialog",
    "type": "registry:ui",
    "title": "Alert Dialog",
    "description": "A modal dialog that interrupts the user with important content and expects a response.",
    "files": [
      {
        "path": "src/primitives/ui/alert-dialog.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "aspect-ratio",
    "type": "registry:ui",
    "title": "Aspect Ratio",
    "description": "Displays content within a desired ratio.",
    "files": [
      {
        "path": "src/primitives/ui/aspect-ratio.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "avatar",
    "type": "registry:ui",
    "title": "Avatar",
    "description": "An image element with a fallback for representing the user.",
    "files": [
      {
        "path": "src/primitives/ui/avatar.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "badge",
    "type": "registry:ui",
    "title": "Badge",
    "description": "Displays a small count or status indicator.",
    "files": [
      {
        "path": "src/primitives/ui/badge.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "breadcrumb",
    "type": "registry:ui",
    "title": "Breadcrumb",
    "description": "Displays the path to the current resource using a hierarchy of links.",
    "files": [
      {
        "path": "src/primitives/ui/breadcrumb.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button",
    "type": "registry:ui",
    "title": "Button",
    "description": "Allows users to take actions with a single click or tap.",
    "files": [
      {
        "path": "src/primitives/buttons/button.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "calendar",
    "type": "registry:ui",
    "title": "Calendar",
    "description": "A date field component that allows users to enter and edit date.",
    "files": [
      {
        "path": "src/primitives/ui/calendar.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "card",
    "type": "registry:ui",
    "title": "Card",
    "description": "Containers for displaying content and actions about a single subject.",
    "files": [
      {
        "path": "src/primitives/ui/card.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "carousel",
    "type": "registry:ui",
    "title": "Carousel",
    "description": "A carousel with motion and swipe built using Embla.",
    "files": [
      {
        "path": "src/primitives/ui/carousel.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "chart",
    "type": "registry:ui",
    "title": "Chart",
    "description": "Beautiful charts. Built using Recharts. Copy and paste into your apps.",
    "files": [
      {
        "path": "src/primitives/charts/chart.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "checkbox",
    "type": "registry:ui",
    "title": "Checkbox",
    "description": "Allows users to select multiple items from a list of options.",
    "files": [
      {
        "path": "src/primitives/ui/checkbox.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "collapsible",
    "type": "registry:ui",
    "title": "Collapsible",
    "description": "An interactive component which expands/collapses a panel.",
    "files": [
      {
        "path": "src/primitives/ui/collapsible.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "command",
    "type": "registry:ui",
    "title": "Command",
    "description": "Fast, composable, unstyled command menu for React.",
    "files": [
      {
        "path": "src/primitives/ui/command.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "context-menu",
    "type": "registry:ui",
    "title": "Context Menu",
    "description": "Displays a menu located at the pointer, triggered by a right-click or a long-press.",
    "files": [
      {
        "path": "src/primitives/ui/context-menu.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "dialog",
    "type": "registry:ui",
    "title": "Dialog",
    "description": "A modal dialog that interrupts the user with important content.",
    "files": [
      {
        "path": "src/primitives/ui/dialog.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "drawer",
    "type": "registry:ui",
    "title": "Drawer",
    "description": "A drawer component for React.",
    "files": [
      {
        "path": "src/primitives/ui/drawer.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "dropdown-menu",
    "type": "registry:ui",
    "title": "Dropdown Menu",
    "description": "Displays a menu to the user triggered by a button.",
    "files": [
      {
        "path": "src/primitives/dropdowns/dropdown-menu.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "form",
    "type": "registry:ui",
    "title": "Form",
    "description": "Building forms with React Hook Form and Zod.",
    "files": [
      {
        "path": "src/primitives/auto-form/form.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "hover-card",
    "type": "registry:ui",
    "title": "Hover Card",
    "description": "For sighted users to preview content available behind a link.",
    "files": [
      {
        "path": "src/primitives/ui/hover-card.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input",
    "type": "registry:ui",
    "title": "Input",
    "description": "Displays a form input field or a component that looks like an input field.",
    "files": [
      {
        "path": "src/primitives/inputs/input.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-otp",
    "type": "registry:ui",
    "title": "Input OTP",
    "description": "Accessible one-time password component with copy paste functionality.",
    "files": [
      {
        "path": "src/primitives/inputs/input-otp.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "label",
    "type": "registry:ui",
    "title": "Label",
    "description": "Renders an accessible label associated with controls.",
    "files": [
      {
        "path": "src/primitives/ui/label.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "menubar",
    "type": "registry:ui",
    "title": "Menubar",
    "description": "A visually persistent menu common in desktop applications.",
    "files": [
      {
        "path": "src/primitives/menus/menubar.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "navigation-menu",
    "type": "registry:ui",
    "title": "Navigation Menu",
    "description": "A collection of links for navigating websites.",
    "files": [
      {
        "path": "src/primitives/menus/navigation-menu.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "pagination",
    "type": "registry:ui",
    "title": "Pagination",
    "description": "Pagination with page navigation, next and previous links.",
    "files": [
      {
        "path": "registry/app/demo/[name]/ui/pagination.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "popover",
    "type": "registry:ui",
    "title": "Popover",
    "description": "Displays rich content in a portal, triggered by a button.",
    "files": [
      {
        "path": "src/primitives/popovers/popover.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "progress",
    "type": "registry:ui",
    "title": "Progress",
    "description": "Displays an indicator showing the completion progress of a task.",
    "files": [
      {
        "path": "src/primitives/ui/progress.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "radio-group",
    "type": "registry:ui",
    "title": "Radio Group",
    "description": "A set of checkable buttons where only one button can be checked at a time.",
    "files": [
      {
        "path": "src/primitives/ui/radio-group.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "resizable",
    "type": "registry:ui",
    "title": "Resizable",
    "description": "Accessible resizable panel groups and layouts with keyboard support.",
    "files": [
      {
        "path": "registry/app/demo/[name]/ui/resizable.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "scroll-area",
    "type": "registry:ui",
    "title": "Scroll Area",
    "description": "Augments native scroll functionality for custom, cross-browser styling.",
    "files": [
      {
        "path": "src/primitives/ui/scroll-area.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "select",
    "type": "registry:ui",
    "title": "Select",
    "description": "Displays a list of options for the user to pick from—triggered by a button.",
    "files": [
      {
        "path": "src/primitives/ui/select.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "separator",
    "type": "registry:ui",
    "title": "Separator",
    "description": "Visually or semantically separates content.",
    "files": [
      {
        "path": "src/primitives/ui/separator.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "sheet",
    "type": "registry:ui",
    "title": "Sheet",
    "description": "Extends the Dialog component to display content that complements the main content of the screen.",
    "files": [
      {
        "path": "src/primitives/ui/sheet.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "sidebar",
    "type": "registry:ui",
    "title": "Sidebar",
    "description": "A composable, themeable and customizable sidebar component.",
    "files": [
      {
        "path": "src/primitives/layouts/sidebar.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "skeleton",
    "type": "registry:ui",
    "title": "Skeleton",
    "description": "Use to show a placeholder while content is loading.",
    "files": [
      {
        "path": "src/primitives/skeleton/skeleton.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "slider",
    "type": "registry:ui",
    "title": "Slider",
    "description": "An input where the user selects a value from within a given range.",
    "files": [
      {
        "path": "src/primitives/ui/slider.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "sonner",
    "type": "registry:ui",
    "title": "Sonner",
    "description": "An opinionated toast component for React.",
    "files": [
      {
        "path": "src/primitives/ui/sonner.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "switch",
    "type": "registry:ui",
    "title": "Switch",
    "description": "A control that allows the user to toggle between checked and not checked.",
    "files": [
      {
        "path": "src/primitives/ui/switch.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "table",
    "type": "registry:ui",
    "title": "Table",
    "description": "A responsive table component.",
    "files": [
      {
        "path": "src/primitives/tables/table.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "tabs",
    "type": "registry:ui",
    "title": "Tabs",
    "description": "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    "files": [
      {
        "path": "src/primitives/ui/tabs.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "textarea",
    "type": "registry:ui",
    "title": "Textarea",
    "description": "Displays a form textarea or a component that looks like a textarea.",
    "files": [
      {
        "path": "src/primitives/ui/textarea.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "toggle",
    "type": "registry:ui",
    "title": "Toggle",
    "description": "A two-state button that can be either on or off.",
    "files": [
      {
        "path": "src/primitives/ui/toggle.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "toggle-group",
    "type": "registry:ui",
    "title": "Toggle Group",
    "description": "A set of two-state buttons that can be toggled on or off.",
    "registryDependencies": [
      "https://metrics-ui.revrebel.io/r/toggle.json"
    ],
    "files": [
      {
        "path": "src/primitives/ui/toggle-group.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "tooltip",
    "type": "registry:ui",
    "title": "Tooltip",
    "description": "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    "files": [
      {
        "path": "src/primitives/ui/tooltip.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "data-table",
    "type": "registry:ui",
    "title": "Data Table",
    "description": "Powerful table and datagrids built using TanStack Table.",
    "registryDependencies": [
      "https://metrics-ui.revrebel.io/r/table.json"
    ],
    "files": []
  },
  {
    "name": "date-picker",
    "type": "registry:ui",
    "title": "Date Picker",
    "description": "A date picker component with range and presets.",
    "registryDependencies": [
      "https://metrics-ui.revrebel.io/r/button.json",
      "https://metrics-ui.revrebel.io/r/calendar.json",
      "https://metrics-ui.revrebel.io/r/popover.json"
    ],
    "files": []
  },
  {
    "name": "config",
    "type": "registry:ui",
    "title": "Config",
    "description": "Auto-generated registry entry for config.",
    "files": [
      {
        "path": "src/primitives/auto-form/config.ts",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "dependencies",
    "type": "registry:ui",
    "title": "Dependencies",
    "description": "Auto-generated registry entry for dependencies.",
    "files": [
      {
        "path": "src/primitives/auto-form/dependencies.ts",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "array",
    "type": "registry:ui",
    "title": "Array",
    "description": "Auto-generated registry entry for array.",
    "files": [
      {
        "path": "src/primitives/auto-form/fields/array.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "date",
    "type": "registry:ui",
    "title": "Date",
    "description": "Auto-generated registry entry for date.",
    "files": [
      {
        "path": "src/primitives/auto-form/fields/date.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "enum",
    "type": "registry:ui",
    "title": "Enum",
    "description": "Auto-generated registry entry for enum.",
    "files": [
      {
        "path": "src/primitives/auto-form/fields/enum.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "field-group",
    "type": "registry:ui",
    "title": "Field Group",
    "description": "Auto-generated registry entry for field-group.",
    "files": [
      {
        "path": "src/primitives/auto-form/fields/field-group.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "field",
    "type": "registry:ui",
    "title": "Field",
    "description": "Auto-generated registry entry for field.",
    "files": [
      {
        "path": "src/primitives/auto-form/fields/field.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "number",
    "type": "registry:ui",
    "title": "Number",
    "description": "Auto-generated registry entry for number.",
    "files": [
      {
        "path": "src/primitives/auto-form/fields/number.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "object",
    "type": "registry:ui",
    "title": "Object",
    "description": "Auto-generated registry entry for object.",
    "files": [
      {
        "path": "src/primitives/auto-form/fields/object.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "helpers",
    "type": "registry:ui",
    "title": "Helpers",
    "description": "Auto-generated registry entry for helpers.",
    "files": [
      {
        "path": "src/primitives/auto-form/helpers.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "shared-form-types",
    "type": "registry:ui",
    "title": "Shared Form Types",
    "description": "Auto-generated registry entry for shared-form-types.",
    "files": [
      {
        "path": "src/primitives/auto-form/shared-form-types.ts",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "types",
    "type": "registry:ui",
    "title": "Types",
    "description": "Auto-generated registry entry for types.",
    "files": [
      {
        "path": "src/primitives/auto-form/types.ts",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-default",
    "type": "registry:ui",
    "title": "Button Default",
    "description": "Auto-generated registry entry for button-default.",
    "files": [
      {
        "path": "src/primitives/buttons/button-default.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-destructive",
    "type": "registry:ui",
    "title": "Button Destructive",
    "description": "Auto-generated registry entry for button-destructive.",
    "files": [
      {
        "path": "src/primitives/buttons/button-destructive.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-ghost",
    "type": "registry:ui",
    "title": "Button Ghost",
    "description": "Auto-generated registry entry for button-ghost.",
    "files": [
      {
        "path": "src/primitives/buttons/button-ghost.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-group-dropdown",
    "type": "registry:ui",
    "title": "Button Group Dropdown",
    "description": "Auto-generated registry entry for button-group-dropdown.",
    "files": [
      {
        "path": "src/primitives/buttons/button-group-dropdown.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-group-input-group",
    "type": "registry:ui",
    "title": "Button Group Input Group",
    "description": "Auto-generated registry entry for button-group-input-group.",
    "files": [
      {
        "path": "src/primitives/buttons/button-group-input-group.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-group-input",
    "type": "registry:ui",
    "title": "Button Group Input",
    "description": "Auto-generated registry entry for button-group-input.",
    "files": [
      {
        "path": "src/primitives/buttons/button-group-input.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-group-nested",
    "type": "registry:ui",
    "title": "Button Group Nested",
    "description": "Auto-generated registry entry for button-group-nested.",
    "files": [
      {
        "path": "src/primitives/buttons/button-group-nested.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-group-orientation",
    "type": "registry:ui",
    "title": "Button Group Orientation",
    "description": "Auto-generated registry entry for button-group-orientation.",
    "files": [
      {
        "path": "src/primitives/buttons/button-group-orientation.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-group-popover",
    "type": "registry:ui",
    "title": "Button Group Popover",
    "description": "Auto-generated registry entry for button-group-popover.",
    "files": [
      {
        "path": "src/primitives/buttons/button-group-popover.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-group-select",
    "type": "registry:ui",
    "title": "Button Group Select",
    "description": "Auto-generated registry entry for button-group-select.",
    "files": [
      {
        "path": "src/primitives/buttons/button-group-select.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-group-separator",
    "type": "registry:ui",
    "title": "Button Group Separator",
    "description": "Auto-generated registry entry for button-group-separator.",
    "files": [
      {
        "path": "src/primitives/buttons/button-group-separator.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-group-size",
    "type": "registry:ui",
    "title": "Button Group Size",
    "description": "Auto-generated registry entry for button-group-size.",
    "files": [
      {
        "path": "src/primitives/buttons/button-group-size.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-group-split",
    "type": "registry:ui",
    "title": "Button Group Split",
    "description": "Auto-generated registry entry for button-group-split.",
    "files": [
      {
        "path": "src/primitives/buttons/button-group-split.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-group",
    "type": "registry:ui",
    "title": "Button Group",
    "description": "Auto-generated registry entry for button-group.",
    "files": [
      {
        "path": "src/primitives/buttons/button-group.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-icon",
    "type": "registry:ui",
    "title": "Button Icon",
    "description": "Auto-generated registry entry for button-icon.",
    "files": [
      {
        "path": "src/primitives/buttons/button-icon.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-link",
    "type": "registry:ui",
    "title": "Button Link",
    "description": "Auto-generated registry entry for button-link.",
    "files": [
      {
        "path": "src/primitives/buttons/button-link.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-outline",
    "type": "registry:ui",
    "title": "Button Outline",
    "description": "Auto-generated registry entry for button-outline.",
    "files": [
      {
        "path": "src/primitives/buttons/button-outline.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-render",
    "type": "registry:ui",
    "title": "Button Render",
    "description": "Auto-generated registry entry for button-render.",
    "files": [
      {
        "path": "src/primitives/buttons/button-render.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-rounded",
    "type": "registry:ui",
    "title": "Button Rounded",
    "description": "Auto-generated registry entry for button-rounded.",
    "files": [
      {
        "path": "src/primitives/buttons/button-rounded.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-secondary",
    "type": "registry:ui",
    "title": "Button Secondary",
    "description": "Auto-generated registry entry for button-secondary.",
    "files": [
      {
        "path": "src/primitives/buttons/button-secondary.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-size",
    "type": "registry:ui",
    "title": "Button Size",
    "description": "Auto-generated registry entry for button-size.",
    "files": [
      {
        "path": "src/primitives/buttons/button-size.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-spinner",
    "type": "registry:ui",
    "title": "Button Spinner",
    "description": "Auto-generated registry entry for button-spinner.",
    "files": [
      {
        "path": "src/primitives/buttons/button-spinner.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "button-with-icon",
    "type": "registry:ui",
    "title": "Button With Icon",
    "description": "Auto-generated registry entry for button-with-icon.",
    "files": [
      {
        "path": "src/primitives/buttons/button-with-icon.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "discover-button",
    "type": "registry:ui",
    "title": "Discover Button",
    "description": "Auto-generated registry entry for discover-button.",
    "files": [
      {
        "path": "src/primitives/buttons/discover-button.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "status-button",
    "type": "registry:ui",
    "title": "Status Button",
    "description": "Auto-generated registry entry for status-button.",
    "files": [
      {
        "path": "src/primitives/buttons/status-button.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "toolbar-button",
    "type": "registry:ui",
    "title": "Toolbar Button",
    "description": "Auto-generated registry entry for toolbar-button.",
    "files": [
      {
        "path": "src/primitives/buttons/toolbar-button.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "chart-demos",
    "type": "registry:ui",
    "title": "Chart Demos",
    "description": "Auto-generated registry entry for chart-demos.",
    "files": [
      {
        "path": "src/primitives/charts/chart-demos.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "chart-sales-metrics",
    "type": "registry:ui",
    "title": "Chart Sales Metrics",
    "description": "Auto-generated registry entry for chart-sales-metrics.",
    "files": [
      {
        "path": "src/primitives/charts/chart-sales-metrics.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "line-chart",
    "type": "registry:ui",
    "title": "Line Chart",
    "description": "Auto-generated registry entry for line-chart.",
    "files": [
      {
        "path": "src/primitives/charts/line-chart.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "statistics-card",
    "type": "registry:ui",
    "title": "Statistics Card",
    "description": "Auto-generated registry entry for statistics-card.",
    "files": [
      {
        "path": "src/primitives/charts/statistics-card.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "statistics-with-status",
    "type": "registry:ui",
    "title": "Statistics With Status",
    "description": "Auto-generated registry entry for statistics-with-status.",
    "files": [
      {
        "path": "src/primitives/charts/statistics-with-status.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "widget-product-insights",
    "type": "registry:ui",
    "title": "Widget Product Insights",
    "description": "Auto-generated registry entry for widget-product-insights.",
    "files": [
      {
        "path": "src/primitives/charts/widget-product-insights.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "widget-total-earning",
    "type": "registry:ui",
    "title": "Widget Total Earning",
    "description": "Auto-generated registry entry for widget-total-earning.",
    "files": [
      {
        "path": "src/primitives/charts/widget-total-earning.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "data-grid-column-filter",
    "type": "registry:ui",
    "title": "Data Grid Column Filter",
    "description": "Auto-generated registry entry for data-grid-column-filter.",
    "files": [
      {
        "path": "src/primitives/data-grid/data-grid-column-filter.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "data-grid-column-header",
    "type": "registry:ui",
    "title": "Data Grid Column Header",
    "description": "Auto-generated registry entry for data-grid-column-header.",
    "files": [
      {
        "path": "src/primitives/data-grid/data-grid-column-header.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "data-grid-column-visibility",
    "type": "registry:ui",
    "title": "Data Grid Column Visibility",
    "description": "Auto-generated registry entry for data-grid-column-visibility.",
    "files": [
      {
        "path": "src/primitives/data-grid/data-grid-column-visibility.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "data-grid-pagination",
    "type": "registry:ui",
    "title": "Data Grid Pagination",
    "description": "Auto-generated registry entry for data-grid-pagination.",
    "files": [
      {
        "path": "src/primitives/data-grid/data-grid-pagination.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "data-grid-table-dnd-rows",
    "type": "registry:ui",
    "title": "Data Grid Table Dnd Rows",
    "description": "Auto-generated registry entry for data-grid-table-dnd-rows.",
    "files": [
      {
        "path": "src/primitives/data-grid/data-grid-table-dnd-rows.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "data-grid-table-dnd",
    "type": "registry:ui",
    "title": "Data Grid Table Dnd",
    "description": "Auto-generated registry entry for data-grid-table-dnd.",
    "files": [
      {
        "path": "src/primitives/data-grid/data-grid-table-dnd.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "data-grid-table",
    "type": "registry:ui",
    "title": "Data Grid Table",
    "description": "Auto-generated registry entry for data-grid-table.",
    "files": [
      {
        "path": "src/primitives/data-grid/data-grid-table.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "data-grid",
    "type": "registry:ui",
    "title": "Data Grid",
    "description": "Auto-generated registry entry for data-grid.",
    "files": [
      {
        "path": "src/primitives/data-grid/data-grid.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "dropdown-language",
    "type": "registry:ui",
    "title": "Dropdown Language",
    "description": "Auto-generated registry entry for dropdown-language.",
    "files": [
      {
        "path": "src/primitives/dropdowns/dropdown-language.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "dropdown-menu-avatar",
    "type": "registry:ui",
    "title": "Dropdown Menu Avatar",
    "description": "Auto-generated registry entry for dropdown-menu-avatar.",
    "files": [
      {
        "path": "src/primitives/dropdowns/dropdown-menu-avatar.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "dropdown-menu-basic",
    "type": "registry:ui",
    "title": "Dropdown Menu Basic",
    "description": "Auto-generated registry entry for dropdown-menu-basic.",
    "files": [
      {
        "path": "src/primitives/dropdowns/dropdown-menu-basic.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "dropdown-menu-checkboxes-icons",
    "type": "registry:ui",
    "title": "Dropdown Menu Checkboxes Icons",
    "description": "Auto-generated registry entry for dropdown-menu-checkboxes-icons.",
    "files": [
      {
        "path": "src/primitives/dropdowns/dropdown-menu-checkboxes-icons.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "dropdown-menu-checkboxes",
    "type": "registry:ui",
    "title": "Dropdown Menu Checkboxes",
    "description": "Auto-generated registry entry for dropdown-menu-checkboxes.",
    "files": [
      {
        "path": "src/primitives/dropdowns/dropdown-menu-checkboxes.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "dropdown-menu-destructive",
    "type": "registry:ui",
    "title": "Dropdown Menu Destructive",
    "description": "Auto-generated registry entry for dropdown-menu-destructive.",
    "files": [
      {
        "path": "src/primitives/dropdowns/dropdown-menu-destructive.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "dropdown-menu-icons",
    "type": "registry:ui",
    "title": "Dropdown Menu Icons",
    "description": "Auto-generated registry entry for dropdown-menu-icons.",
    "files": [
      {
        "path": "src/primitives/dropdowns/dropdown-menu-icons.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "dropdown-menu-radio-group",
    "type": "registry:ui",
    "title": "Dropdown Menu Radio Group",
    "description": "Auto-generated registry entry for dropdown-menu-radio-group.",
    "files": [
      {
        "path": "src/primitives/dropdowns/dropdown-menu-radio-group.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "dropdown-menu-radio-icons",
    "type": "registry:ui",
    "title": "Dropdown Menu Radio Icons",
    "description": "Auto-generated registry entry for dropdown-menu-radio-icons.",
    "files": [
      {
        "path": "src/primitives/dropdowns/dropdown-menu-radio-icons.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "dropdown-menu-shortcuts",
    "type": "registry:ui",
    "title": "Dropdown Menu Shortcuts",
    "description": "Auto-generated registry entry for dropdown-menu-shortcuts.",
    "files": [
      {
        "path": "src/primitives/dropdowns/dropdown-menu-shortcuts.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "dropdown-menu-submenu",
    "type": "registry:ui",
    "title": "Dropdown Menu Submenu",
    "description": "Auto-generated registry entry for dropdown-menu-submenu.",
    "files": [
      {
        "path": "src/primitives/dropdowns/dropdown-menu-submenu.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "dropdown-profile",
    "type": "registry:ui",
    "title": "Dropdown Profile",
    "description": "Auto-generated registry entry for dropdown-profile.",
    "files": [
      {
        "path": "src/primitives/dropdowns/dropdown-profile.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "select-dropdown",
    "type": "registry:ui",
    "title": "Select Dropdown",
    "description": "Auto-generated registry entry for select-dropdown.",
    "files": [
      {
        "path": "src/primitives/dropdowns/select-dropdown.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "smooth-dropdown",
    "type": "registry:ui",
    "title": "Smooth Dropdown",
    "description": "Auto-generated registry entry for smooth-dropdown.",
    "files": [
      {
        "path": "src/primitives/dropdowns/smooth-dropdown.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "image-edit-block",
    "type": "registry:ui",
    "title": "Image Edit Block",
    "description": "Auto-generated registry entry for image-edit-block.",
    "files": [
      {
        "path": "src/primitives/image-blocks/image-edit-block.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "image-edit-dialog",
    "type": "registry:ui",
    "title": "Image Edit Dialog",
    "description": "Auto-generated registry entry for image-edit-dialog.",
    "files": [
      {
        "path": "src/primitives/image-blocks/image-edit-dialog.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "combobox-option",
    "type": "registry:ui",
    "title": "Combobox Option",
    "description": "Auto-generated registry entry for combobox-option.",
    "files": [
      {
        "path": "src/primitives/inputs/combobox-option.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "combobox",
    "type": "registry:ui",
    "title": "Combobox",
    "description": "Auto-generated registry entry for combobox.",
    "files": [
      {
        "path": "src/primitives/inputs/combobox.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-badge",
    "type": "registry:ui",
    "title": "Input Badge",
    "description": "Auto-generated registry entry for input-badge.",
    "files": [
      {
        "path": "src/primitives/inputs/input-badge.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-basic",
    "type": "registry:ui",
    "title": "Input Basic",
    "description": "Auto-generated registry entry for input-basic.",
    "files": [
      {
        "path": "src/primitives/inputs/input-basic.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-button-group",
    "type": "registry:ui",
    "title": "Input Button Group",
    "description": "Auto-generated registry entry for input-button-group.",
    "files": [
      {
        "path": "src/primitives/inputs/input-button-group.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-disabled",
    "type": "registry:ui",
    "title": "Input Disabled",
    "description": "Auto-generated registry entry for input-disabled.",
    "files": [
      {
        "path": "src/primitives/inputs/input-disabled.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-field",
    "type": "registry:ui",
    "title": "Input Field",
    "description": "Auto-generated registry entry for input-field.",
    "files": [
      {
        "path": "src/primitives/inputs/input-field.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-fieldgroup",
    "type": "registry:ui",
    "title": "Input Fieldgroup",
    "description": "Auto-generated registry entry for input-fieldgroup.",
    "files": [
      {
        "path": "src/primitives/inputs/input-fieldgroup.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-file",
    "type": "registry:ui",
    "title": "Input File",
    "description": "Auto-generated registry entry for input-file.",
    "files": [
      {
        "path": "src/primitives/inputs/input-file.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-form",
    "type": "registry:ui",
    "title": "Input Form",
    "description": "Auto-generated registry entry for input-form.",
    "files": [
      {
        "path": "src/primitives/inputs/input-form.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-grid",
    "type": "registry:ui",
    "title": "Input Grid",
    "description": "Auto-generated registry entry for input-grid.",
    "files": [
      {
        "path": "src/primitives/inputs/input-grid.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-basic",
    "type": "registry:ui",
    "title": "Input Group Basic",
    "description": "Auto-generated registry entry for input-group-basic.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-basic.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-block-end",
    "type": "registry:ui",
    "title": "Input Group Block End",
    "description": "Auto-generated registry entry for input-group-block-end.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-block-end.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-block-start",
    "type": "registry:ui",
    "title": "Input Group Block Start",
    "description": "Auto-generated registry entry for input-group-block-start.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-block-start.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-button-group",
    "type": "registry:ui",
    "title": "Input Group Button Group",
    "description": "Auto-generated registry entry for input-group-button-group.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-button-group.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-button",
    "type": "registry:ui",
    "title": "Input Group Button",
    "description": "Auto-generated registry entry for input-group-button.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-button.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-custom",
    "type": "registry:ui",
    "title": "Input Group Custom",
    "description": "Auto-generated registry entry for input-group-custom.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-custom.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-dropdown",
    "type": "registry:ui",
    "title": "Input Group Dropdown",
    "description": "Auto-generated registry entry for input-group-dropdown.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-dropdown.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-icon",
    "type": "registry:ui",
    "title": "Input Group Icon",
    "description": "Auto-generated registry entry for input-group-icon.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-icon.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-in-card",
    "type": "registry:ui",
    "title": "Input Group In Card",
    "description": "Auto-generated registry entry for input-group-in-card.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-in-card.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-inline-end",
    "type": "registry:ui",
    "title": "Input Group Inline End",
    "description": "Auto-generated registry entry for input-group-inline-end.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-inline-end.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-inline-start",
    "type": "registry:ui",
    "title": "Input Group Inline Start",
    "description": "Auto-generated registry entry for input-group-inline-start.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-inline-start.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-kbd",
    "type": "registry:ui",
    "title": "Input Group Kbd",
    "description": "Auto-generated registry entry for input-group-kbd.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-kbd.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-label",
    "type": "registry:ui",
    "title": "Input Group Label",
    "description": "Auto-generated registry entry for input-group-label.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-label.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-spinner",
    "type": "registry:ui",
    "title": "Input Group Spinner",
    "description": "Auto-generated registry entry for input-group-spinner.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-spinner.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-text",
    "type": "registry:ui",
    "title": "Input Group Text",
    "description": "Auto-generated registry entry for input-group-text.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-text.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-textarea-examples",
    "type": "registry:ui",
    "title": "Input Group Textarea Examples",
    "description": "Auto-generated registry entry for input-group-textarea-examples.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-textarea-examples.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-textarea",
    "type": "registry:ui",
    "title": "Input Group Textarea",
    "description": "Auto-generated registry entry for input-group-textarea.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-textarea.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-tooltip",
    "type": "registry:ui",
    "title": "Input Group Tooltip",
    "description": "Auto-generated registry entry for input-group-tooltip.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-tooltip.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-with-addons",
    "type": "registry:ui",
    "title": "Input Group With Addons",
    "description": "Auto-generated registry entry for input-group-with-addons.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-with-addons.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-with-buttons",
    "type": "registry:ui",
    "title": "Input Group With Buttons",
    "description": "Auto-generated registry entry for input-group-with-buttons.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-with-buttons.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-with-kbd",
    "type": "registry:ui",
    "title": "Input Group With Kbd",
    "description": "Auto-generated registry entry for input-group-with-kbd.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-with-kbd.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group-with-tooltip",
    "type": "registry:ui",
    "title": "Input Group With Tooltip",
    "description": "Auto-generated registry entry for input-group-with-tooltip.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group-with-tooltip.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-group",
    "type": "registry:ui",
    "title": "Input Group",
    "description": "Auto-generated registry entry for input-group.",
    "files": [
      {
        "path": "src/primitives/inputs/input-group.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-inline",
    "type": "registry:ui",
    "title": "Input Inline",
    "description": "Auto-generated registry entry for input-inline.",
    "files": [
      {
        "path": "src/primitives/inputs/input-inline.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-input-group",
    "type": "registry:ui",
    "title": "Input Input Group",
    "description": "Auto-generated registry entry for input-input-group.",
    "files": [
      {
        "path": "src/primitives/inputs/input-input-group.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-invalid",
    "type": "registry:ui",
    "title": "Input Invalid",
    "description": "Auto-generated registry entry for input-invalid.",
    "files": [
      {
        "path": "src/primitives/inputs/input-invalid.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-otp-alphanumeric",
    "type": "registry:ui",
    "title": "Input Otp Alphanumeric",
    "description": "Auto-generated registry entry for input-otp-alphanumeric.",
    "files": [
      {
        "path": "src/primitives/inputs/input-otp-alphanumeric.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-otp-controlled",
    "type": "registry:ui",
    "title": "Input Otp Controlled",
    "description": "Auto-generated registry entry for input-otp-controlled.",
    "files": [
      {
        "path": "src/primitives/inputs/input-otp-controlled.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-otp-disabled",
    "type": "registry:ui",
    "title": "Input Otp Disabled",
    "description": "Auto-generated registry entry for input-otp-disabled.",
    "files": [
      {
        "path": "src/primitives/inputs/input-otp-disabled.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-otp-form",
    "type": "registry:ui",
    "title": "Input Otp Form",
    "description": "Auto-generated registry entry for input-otp-form.",
    "files": [
      {
        "path": "src/primitives/inputs/input-otp-form.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-otp-four-digits",
    "type": "registry:ui",
    "title": "Input Otp Four Digits",
    "description": "Auto-generated registry entry for input-otp-four-digits.",
    "files": [
      {
        "path": "src/primitives/inputs/input-otp-four-digits.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-otp-invalid",
    "type": "registry:ui",
    "title": "Input Otp Invalid",
    "description": "Auto-generated registry entry for input-otp-invalid.",
    "files": [
      {
        "path": "src/primitives/inputs/input-otp-invalid.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-otp-pattern",
    "type": "registry:ui",
    "title": "Input Otp Pattern",
    "description": "Auto-generated registry entry for input-otp-pattern.",
    "files": [
      {
        "path": "src/primitives/inputs/input-otp-pattern.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "input-otp-separator",
    "type": "registry:ui",
    "title": "Input Otp Separator",
    "description": "Auto-generated registry entry for input-otp-separator.",
    "files": [
      {
        "path": "src/primitives/inputs/input-otp-separator.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "coming-soon",
    "type": "registry:ui",
    "title": "Coming Soon",
    "description": "Auto-generated registry entry for coming-soon.",
    "files": [
      {
        "path": "src/primitives/layouts/coming-soon.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "measured-container",
    "type": "registry:ui",
    "title": "Measured Container",
    "description": "Auto-generated registry entry for measured-container.",
    "files": [
      {
        "path": "src/primitives/layouts/measured-container.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "navigation-progress",
    "type": "registry:ui",
    "title": "Navigation Progress",
    "description": "Auto-generated registry entry for navigation-progress.",
    "files": [
      {
        "path": "src/primitives/layouts/navigation-progress.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "resizable-handle",
    "type": "registry:ui",
    "title": "Resizable Handle",
    "description": "Auto-generated registry entry for resizable-handle.",
    "files": [
      {
        "path": "src/primitives/layouts/resizable-handle.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "resizable-vertical",
    "type": "registry:ui",
    "title": "Resizable Vertical",
    "description": "Auto-generated registry entry for resizable-vertical.",
    "files": [
      {
        "path": "src/primitives/layouts/resizable-vertical.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "social-proof-01",
    "type": "registry:ui",
    "title": "Social Proof 01",
    "description": "Auto-generated registry entry for social-proof-01.",
    "files": [
      {
        "path": "src/primitives/layouts/social-proof-01.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "social-proof-07",
    "type": "registry:ui",
    "title": "Social Proof 07",
    "description": "Auto-generated registry entry for social-proof-07.",
    "files": [
      {
        "path": "src/primitives/layouts/social-proof-07.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "sub-nav",
    "type": "registry:ui",
    "title": "Sub Nav",
    "description": "Auto-generated registry entry for sub-nav.",
    "files": [
      {
        "path": "src/primitives/layouts/sub-nav.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "swap-layout-loader",
    "type": "registry:ui",
    "title": "Swap Layout Loader",
    "description": "Auto-generated registry entry for swap-layout-loader.",
    "files": [
      {
        "path": "src/primitives/layouts/swap-layout-loader.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "swap-layout",
    "type": "registry:ui",
    "title": "Swap Layout",
    "description": "Auto-generated registry entry for swap-layout.",
    "files": [
      {
        "path": "src/primitives/layouts/swap-layout.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "link-bubble-menu",
    "type": "registry:ui",
    "title": "Link Bubble Menu",
    "description": "Auto-generated registry entry for link-bubble-menu.",
    "files": [
      {
        "path": "src/primitives/links/link-bubble-menu.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "link-edit-block",
    "type": "registry:ui",
    "title": "Link Edit Block",
    "description": "Auto-generated registry entry for link-edit-block.",
    "files": [
      {
        "path": "src/primitives/links/link-edit-block.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "link-edit-popover",
    "type": "registry:ui",
    "title": "Link Edit Popover",
    "description": "Auto-generated registry entry for link-edit-popover.",
    "files": [
      {
        "path": "src/primitives/links/link-edit-popover.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "link-popover-block",
    "type": "registry:ui",
    "title": "Link Popover Block",
    "description": "Auto-generated registry entry for link-popover-block.",
    "files": [
      {
        "path": "src/primitives/links/link-popover-block.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "list-item",
    "type": "registry:ui",
    "title": "List Item",
    "description": "Auto-generated registry entry for list-item.",
    "files": [
      {
        "path": "src/primitives/lists/list-item.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "menu-option",
    "type": "registry:ui",
    "title": "Menu Option",
    "description": "Auto-generated registry entry for menu-option.",
    "files": [
      {
        "path": "src/primitives/menus/menu-option.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "menu-other",
    "type": "registry:ui",
    "title": "Menu Other",
    "description": "Auto-generated registry entry for menu-other.",
    "files": [
      {
        "path": "src/primitives/menus/menu-other.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "menu",
    "type": "registry:ui",
    "title": "Menu",
    "description": "Auto-generated registry entry for menu.",
    "files": [
      {
        "path": "src/primitives/menus/menu.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "menubar-checkbox",
    "type": "registry:ui",
    "title": "Menubar Checkbox",
    "description": "Auto-generated registry entry for menubar-checkbox.",
    "files": [
      {
        "path": "src/primitives/menus/menubar-checkbox.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "menubar-icons",
    "type": "registry:ui",
    "title": "Menubar Icons",
    "description": "Auto-generated registry entry for menubar-icons.",
    "files": [
      {
        "path": "src/primitives/menus/menubar-icons.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "menubar-radio",
    "type": "registry:ui",
    "title": "Menubar Radio",
    "description": "Auto-generated registry entry for menubar-radio.",
    "files": [
      {
        "path": "src/primitives/menus/menubar-radio.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "menubar-submenu",
    "type": "registry:ui",
    "title": "Menubar Submenu",
    "description": "Auto-generated registry entry for menubar-submenu.",
    "files": [
      {
        "path": "src/primitives/menus/menubar-submenu.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "popover-alignments",
    "type": "registry:ui",
    "title": "Popover Alignments",
    "description": "Auto-generated registry entry for popover-alignments.",
    "files": [
      {
        "path": "src/primitives/popovers/popover-alignments.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "popover-basic",
    "type": "registry:ui",
    "title": "Popover Basic",
    "description": "Auto-generated registry entry for popover-basic.",
    "files": [
      {
        "path": "src/primitives/popovers/popover-basic.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "popover-form",
    "type": "registry:ui",
    "title": "Popover Form",
    "description": "Auto-generated registry entry for popover-form.",
    "files": [
      {
        "path": "src/primitives/popovers/popover-form.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "add-to-cursor",
    "type": "registry:ui",
    "title": "Add To Cursor",
    "description": "Auto-generated registry entry for add-to-cursor.",
    "files": [
      {
        "path": "src/primitives/registry/add-to-cursor.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "component-card",
    "type": "registry:ui",
    "title": "Component Card",
    "description": "Auto-generated registry entry for component-card.",
    "files": [
      {
        "path": "src/primitives/registry/component-card.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "mcp-tabs",
    "type": "registry:ui",
    "title": "Mcp Tabs",
    "description": "Auto-generated registry entry for mcp-tabs.",
    "files": [
      {
        "path": "src/primitives/registry/mcp-tabs.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "open-in-v0",
    "type": "registry:ui",
    "title": "Open In V0",
    "description": "Auto-generated registry entry for open-in-v0.",
    "files": [
      {
        "path": "src/primitives/registry/open-in-v0.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "registry-logo",
    "type": "registry:ui",
    "title": "Registry Logo",
    "description": "Auto-generated registry entry for registry-logo.",
    "files": [
      {
        "path": "src/primitives/registry/registry-logo.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "registry-sidebar",
    "type": "registry:ui",
    "title": "Registry Sidebar",
    "description": "Auto-generated registry entry for registry-sidebar.",
    "files": [
      {
        "path": "src/primitives/registry/registry-sidebar.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "theme-toggle",
    "type": "registry:ui",
    "title": "Theme Toggle",
    "description": "Auto-generated registry entry for theme-toggle.",
    "files": [
      {
        "path": "src/primitives/registry/theme-toggle.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "five",
    "type": "registry:ui",
    "title": "Five",
    "description": "Auto-generated registry entry for five.",
    "files": [
      {
        "path": "src/primitives/sections/five.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "four",
    "type": "registry:ui",
    "title": "Four",
    "description": "Auto-generated registry entry for four.",
    "files": [
      {
        "path": "src/primitives/sections/four.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "one",
    "type": "registry:ui",
    "title": "One",
    "description": "Auto-generated registry entry for one.",
    "files": [
      {
        "path": "src/primitives/sections/one.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "three",
    "type": "registry:ui",
    "title": "Three",
    "description": "Auto-generated registry entry for three.",
    "files": [
      {
        "path": "src/primitives/sections/three.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "toolbar-section",
    "type": "registry:ui",
    "title": "Toolbar Section",
    "description": "Auto-generated registry entry for toolbar-section.",
    "files": [
      {
        "path": "src/primitives/sections/toolbar-section.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "two",
    "type": "registry:ui",
    "title": "Two",
    "description": "Auto-generated registry entry for two.",
    "files": [
      {
        "path": "src/primitives/sections/two.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "empty-state",
    "type": "registry:ui",
    "title": "Empty State",
    "description": "Auto-generated registry entry for empty-state.",
    "files": [
      {
        "path": "src/primitives/skeleton/empty-state.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "skeleton-avatar",
    "type": "registry:ui",
    "title": "Skeleton Avatar",
    "description": "Auto-generated registry entry for skeleton-avatar.",
    "files": [
      {
        "path": "src/primitives/skeleton/skeleton-avatar.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "skeleton-card",
    "type": "registry:ui",
    "title": "Skeleton Card",
    "description": "Auto-generated registry entry for skeleton-card.",
    "files": [
      {
        "path": "src/primitives/skeleton/skeleton-card.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "skeleton-demo",
    "type": "registry:ui",
    "title": "Skeleton Demo",
    "description": "Auto-generated registry entry for skeleton-demo.",
    "files": [
      {
        "path": "src/primitives/skeleton/skeleton-demo.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "skeleton-form",
    "type": "registry:ui",
    "title": "Skeleton Form",
    "description": "Auto-generated registry entry for skeleton-form.",
    "files": [
      {
        "path": "src/primitives/skeleton/skeleton-form.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "skeleton-table",
    "type": "registry:ui",
    "title": "Skeleton Table",
    "description": "Auto-generated registry entry for skeleton-table.",
    "files": [
      {
        "path": "src/primitives/skeleton/skeleton-table.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "skeleton-text",
    "type": "registry:ui",
    "title": "Skeleton Text",
    "description": "Auto-generated registry entry for skeleton-text.",
    "files": [
      {
        "path": "src/primitives/skeleton/skeleton-text.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "datatable-transaction",
    "type": "registry:ui",
    "title": "Datatable Transaction",
    "description": "Auto-generated registry entry for datatable-transaction.",
    "files": [
      {
        "path": "src/primitives/tables/datatable-transaction.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "table-actions",
    "type": "registry:ui",
    "title": "Table Actions",
    "description": "Auto-generated registry entry for table-actions.",
    "files": [
      {
        "path": "src/primitives/tables/table-actions.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "table-footer",
    "type": "registry:ui",
    "title": "Table Footer",
    "description": "Auto-generated registry entry for table-footer.",
    "files": [
      {
        "path": "src/primitives/tables/table-footer.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "discrete-tabs",
    "type": "registry:ui",
    "title": "Discrete Tabs",
    "description": "Auto-generated registry entry for discrete-tabs.",
    "files": [
      {
        "path": "src/primitives/tabs/discrete-tabs.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "tabs-disabled",
    "type": "registry:ui",
    "title": "Tabs Disabled",
    "description": "Auto-generated registry entry for tabs-disabled.",
    "files": [
      {
        "path": "src/primitives/tabs/tabs-disabled.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "tabs-icons",
    "type": "registry:ui",
    "title": "Tabs Icons",
    "description": "Auto-generated registry entry for tabs-icons.",
    "files": [
      {
        "path": "src/primitives/tabs/tabs-icons.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "tabs-line",
    "type": "registry:ui",
    "title": "Tabs Line",
    "description": "Auto-generated registry entry for tabs-line.",
    "files": [
      {
        "path": "src/primitives/tabs/tabs-line.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "tabs-vertical",
    "type": "registry:ui",
    "title": "Tabs Vertical",
    "description": "Auto-generated registry entry for tabs-vertical.",
    "files": [
      {
        "path": "src/primitives/tabs/tabs-vertical.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "long-text",
    "type": "registry:ui",
    "title": "Long Text",
    "description": "Auto-generated registry entry for long-text.",
    "files": [
      {
        "path": "src/primitives/textarea/long-text.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "textarea-button",
    "type": "registry:ui",
    "title": "Textarea Button",
    "description": "Auto-generated registry entry for textarea-button.",
    "files": [
      {
        "path": "src/primitives/textarea/textarea-button.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "textarea-disabled",
    "type": "registry:ui",
    "title": "Textarea Disabled",
    "description": "Auto-generated registry entry for textarea-disabled.",
    "files": [
      {
        "path": "src/primitives/textarea/textarea-disabled.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "textarea-field",
    "type": "registry:ui",
    "title": "Textarea Field",
    "description": "Auto-generated registry entry for textarea-field.",
    "files": [
      {
        "path": "src/primitives/textarea/textarea-field.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "textarea-invalid",
    "type": "registry:ui",
    "title": "Textarea Invalid",
    "description": "Auto-generated registry entry for textarea-invalid.",
    "files": [
      {
        "path": "src/primitives/textarea/textarea-invalid.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "v1-1-0",
    "type": "registry:ui",
    "title": "V1 1 0",
    "description": "Auto-generated registry entry for v1-1-0.",
    "files": [
      {
        "path": "src/primitives/timelines/content/v1-1-0.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "v1-2-0",
    "type": "registry:ui",
    "title": "V1 2 0",
    "description": "Auto-generated registry entry for v1-2-0.",
    "files": [
      {
        "path": "src/primitives/timelines/content/v1-2-0.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "v1-3-0",
    "type": "registry:ui",
    "title": "V1 3 0",
    "description": "Auto-generated registry entry for v1-3-0.",
    "files": [
      {
        "path": "src/primitives/timelines/content/v1-3-0.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "timeline-component-05",
    "type": "registry:ui",
    "title": "Timeline Component 05",
    "description": "Auto-generated registry entry for timeline-component-05.",
    "files": [
      {
        "path": "src/primitives/timelines/timeline-component-05.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "typography-blockquote",
    "type": "registry:ui",
    "title": "Typography Blockquote",
    "description": "Auto-generated registry entry for typography-blockquote.",
    "files": [
      {
        "path": "src/primitives/typography/typography-blockquote.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "typography-h1",
    "type": "registry:ui",
    "title": "Typography H1",
    "description": "Auto-generated registry entry for typography-h1.",
    "files": [
      {
        "path": "src/primitives/typography/typography-h1.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "typography-h2",
    "type": "registry:ui",
    "title": "Typography H2",
    "description": "Auto-generated registry entry for typography-h2.",
    "files": [
      {
        "path": "src/primitives/typography/typography-h2.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "typography-h3",
    "type": "registry:ui",
    "title": "Typography H3",
    "description": "Auto-generated registry entry for typography-h3.",
    "files": [
      {
        "path": "src/primitives/typography/typography-h3.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "typography-h4",
    "type": "registry:ui",
    "title": "Typography H4",
    "description": "Auto-generated registry entry for typography-h4.",
    "files": [
      {
        "path": "src/primitives/typography/typography-h4.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "typography-inline-code",
    "type": "registry:ui",
    "title": "Typography Inline Code",
    "description": "Auto-generated registry entry for typography-inline-code.",
    "files": [
      {
        "path": "src/primitives/typography/typography-inline-code.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "typography-large",
    "type": "registry:ui",
    "title": "Typography Large",
    "description": "Auto-generated registry entry for typography-large.",
    "files": [
      {
        "path": "src/primitives/typography/typography-large.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "typography-lead",
    "type": "registry:ui",
    "title": "Typography Lead",
    "description": "Auto-generated registry entry for typography-lead.",
    "files": [
      {
        "path": "src/primitives/typography/typography-lead.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "typography-list",
    "type": "registry:ui",
    "title": "Typography List",
    "description": "Auto-generated registry entry for typography-list.",
    "files": [
      {
        "path": "src/primitives/typography/typography-list.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "typography-muted",
    "type": "registry:ui",
    "title": "Typography Muted",
    "description": "Auto-generated registry entry for typography-muted.",
    "files": [
      {
        "path": "src/primitives/typography/typography-muted.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "typography-p",
    "type": "registry:ui",
    "title": "Typography P",
    "description": "Auto-generated registry entry for typography-p.",
    "files": [
      {
        "path": "src/primitives/typography/typography-p.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "typography-small",
    "type": "registry:ui",
    "title": "Typography Small",
    "description": "Auto-generated registry entry for typography-small.",
    "files": [
      {
        "path": "src/primitives/typography/typography-small.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "typography-table",
    "type": "registry:ui",
    "title": "Typography Table",
    "description": "Auto-generated registry entry for typography-table.",
    "files": [
      {
        "path": "src/primitives/typography/typography-table.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "command-menu",
    "type": "registry:ui",
    "title": "Command Menu",
    "description": "Auto-generated registry entry for command-menu.",
    "files": [
      {
        "path": "src/primitives/ui/command-menu.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "config-drawer",
    "type": "registry:ui",
    "title": "Config Drawer",
    "description": "Auto-generated registry entry for config-drawer.",
    "files": [
      {
        "path": "src/primitives/ui/config-drawer.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "copy-code",
    "type": "registry:ui",
    "title": "Copy Code",
    "description": "Auto-generated registry entry for copy-code.",
    "files": [
      {
        "path": "src/primitives/ui/copy-code.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "day-picker",
    "type": "registry:ui",
    "title": "Day Picker",
    "description": "Auto-generated registry entry for day-picker.",
    "files": [
      {
        "path": "src/primitives/ui/day-picker.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "direction",
    "type": "registry:ui",
    "title": "Direction",
    "description": "Auto-generated registry entry for direction.",
    "files": [
      {
        "path": "src/primitives/ui/direction.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "edit-switch",
    "type": "registry:ui",
    "title": "Edit Switch",
    "description": "Auto-generated registry entry for edit-switch.",
    "files": [
      {
        "path": "src/primitives/ui/edit-switch.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "empty",
    "type": "registry:ui",
    "title": "Empty",
    "description": "Auto-generated registry entry for empty.",
    "files": [
      {
        "path": "src/primitives/ui/empty.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "filters",
    "type": "registry:ui",
    "title": "Filters",
    "description": "Auto-generated registry entry for filters.",
    "files": [
      {
        "path": "src/primitives/ui/filters.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "group",
    "type": "registry:ui",
    "title": "Group",
    "description": "Auto-generated registry entry for group.",
    "files": [
      {
        "path": "src/primitives/ui/group.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "hover-card-sides",
    "type": "registry:ui",
    "title": "Hover Card Sides",
    "description": "Auto-generated registry entry for hover-card-sides.",
    "files": [
      {
        "path": "src/primitives/ui/hover-card-sides.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "item",
    "type": "registry:ui",
    "title": "Item",
    "description": "Auto-generated registry entry for item.",
    "files": [
      {
        "path": "src/primitives/ui/item.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "kbd",
    "type": "registry:ui",
    "title": "Kbd",
    "description": "Auto-generated registry entry for kbd.",
    "files": [
      {
        "path": "src/primitives/ui/kbd.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "native-select",
    "type": "registry:ui",
    "title": "Native Select",
    "description": "Auto-generated registry entry for native-select.",
    "files": [
      {
        "path": "src/primitives/ui/native-select.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "number-field",
    "type": "registry:ui",
    "title": "Number Field",
    "description": "Auto-generated registry entry for number-field.",
    "files": [
      {
        "path": "src/primitives/ui/number-field.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "preview-card",
    "type": "registry:ui",
    "title": "Preview Card",
    "description": "Auto-generated registry entry for preview-card.",
    "files": [
      {
        "path": "src/primitives/ui/preview-card.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "rating",
    "type": "registry:ui",
    "title": "Rating",
    "description": "Auto-generated registry entry for rating.",
    "files": [
      {
        "path": "src/primitives/ui/rating.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "sortable-table-head",
    "type": "registry:ui",
    "title": "Sortable Table Head",
    "description": "Auto-generated registry entry for sortable-table-head.",
    "files": [
      {
        "path": "src/primitives/ui/sortable-table-head.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "spinner",
    "type": "registry:ui",
    "title": "Spinner",
    "description": "Auto-generated registry entry for spinner.",
    "files": [
      {
        "path": "src/primitives/ui/spinner.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "toast",
    "type": "registry:ui",
    "title": "Toast",
    "description": "Auto-generated registry entry for toast.",
    "files": [
      {
        "path": "src/primitives/ui/toast.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "account-settings",
    "type": "registry:ui",
    "title": "Account Settings",
    "description": "Auto-generated registry entry for account-settings.",
    "files": [
      {
        "path": "src/primitives/users/account-settings.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "connect-account",
    "type": "registry:ui",
    "title": "Connect Account",
    "description": "Auto-generated registry entry for connect-account.",
    "files": [
      {
        "path": "src/primitives/users/connect-account.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "danger-zone",
    "type": "registry:ui",
    "title": "Danger Zone",
    "description": "Auto-generated registry entry for danger-zone.",
    "files": [
      {
        "path": "src/primitives/users/danger-zone.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "email-password",
    "type": "registry:ui",
    "title": "Email Password",
    "description": "Auto-generated registry entry for email-password.",
    "files": [
      {
        "path": "src/primitives/users/email-password.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "forgot-password-form",
    "type": "registry:ui",
    "title": "Forgot Password Form",
    "description": "Auto-generated registry entry for forgot-password-form.",
    "files": [
      {
        "path": "src/primitives/users/forgot-password-form.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "forgot-password",
    "type": "registry:ui",
    "title": "Forgot Password",
    "description": "Auto-generated registry entry for forgot-password.",
    "files": [
      {
        "path": "src/primitives/users/forgot-password.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "login-form",
    "type": "registry:ui",
    "title": "Login Form",
    "description": "Auto-generated registry entry for login-form.",
    "files": [
      {
        "path": "src/primitives/users/login-form.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "login-page",
    "type": "registry:ui",
    "title": "Login Page",
    "description": "Auto-generated registry entry for login-page.",
    "files": [
      {
        "path": "src/primitives/users/login-page.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "password-input",
    "type": "registry:ui",
    "title": "Password Input",
    "description": "Auto-generated registry entry for password-input.",
    "files": [
      {
        "path": "src/primitives/users/password-input.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "personal-info",
    "type": "registry:ui",
    "title": "Personal Info",
    "description": "Auto-generated registry entry for personal-info.",
    "files": [
      {
        "path": "src/primitives/users/personal-info.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "profile-dropdown",
    "type": "registry:ui",
    "title": "Profile Dropdown",
    "description": "Auto-generated registry entry for profile-dropdown.",
    "files": [
      {
        "path": "src/primitives/users/profile-dropdown.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "register-form",
    "type": "registry:ui",
    "title": "Register Form",
    "description": "Auto-generated registry entry for register-form.",
    "files": [
      {
        "path": "src/primitives/users/register-form.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "register",
    "type": "registry:ui",
    "title": "Register",
    "description": "Auto-generated registry entry for register.",
    "files": [
      {
        "path": "src/primitives/users/register.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "sign-out-dialog",
    "type": "registry:ui",
    "title": "Sign Out Dialog",
    "description": "Auto-generated registry entry for sign-out-dialog.",
    "files": [
      {
        "path": "src/primitives/users/sign-out-dialog.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "social-url",
    "type": "registry:ui",
    "title": "Social Url",
    "description": "Auto-generated registry entry for social-url.",
    "files": [
      {
        "path": "src/primitives/users/social-url.tsx",
        "type": "registry:ui"
      }
    ]
  },
  {
    "name": "verify-email",
    "type": "registry:ui",
    "title": "Verify Email",
    "description": "Auto-generated registry entry for verify-email.",
    "files": [
      {
        "path": "src/primitives/users/verify-email.tsx",
        "type": "registry:ui"
      }
    ]
  }
] as Component[]


export const PLAYGROUND_REGISTRY: Record<string, any> = {
  ui_accordion: {
    name: "accordion",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/accordion").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_account_settings: {
    name: "account-settings",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/users/account-settings").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_add_to_cursor: {
    name: "add-to-cursor",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/registry/add-to-cursor").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_alert: {
    name: "alert",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/alert").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_alert_dialog: {
    name: "alert-dialog",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/alert-dialog").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_array: {
    name: "array",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/auto-form/fields/array").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_aspect_ratio: {
    name: "aspect-ratio",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/aspect-ratio").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_avatar: {
    name: "avatar",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/avatar").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_badge: {
    name: "badge",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/badge").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_brand_header: {
    name: "brand-header",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/layouts/brand-header").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_brand_sidebar: {
    name: "brand-sidebar",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/layouts/brand-sidebar").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_breadcrumb: {
    name: "breadcrumb",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/breadcrumb").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button: {
    name: "button",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_default: {
    name: "button-default",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-default").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_destructive: {
    name: "button-destructive",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-destructive").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_ghost: {
    name: "button-ghost",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-ghost").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_group: {
    name: "button-group",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-group").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_group_dropdown: {
    name: "button-group-dropdown",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-group-dropdown").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_group_input: {
    name: "button-group-input",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-group-input").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_group_input_group: {
    name: "button-group-input-group",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-group-input-group").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_group_nested: {
    name: "button-group-nested",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-group-nested").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_group_orientation: {
    name: "button-group-orientation",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-group-orientation").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_group_popover: {
    name: "button-group-popover",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-group-popover").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_group_select: {
    name: "button-group-select",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-group-select").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_group_separator: {
    name: "button-group-separator",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-group-separator").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_group_size: {
    name: "button-group-size",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-group-size").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_group_split: {
    name: "button-group-split",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-group-split").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_icon: {
    name: "button-icon",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-icon").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_link: {
    name: "button-link",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-link").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_outline: {
    name: "button-outline",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-outline").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_render: {
    name: "button-render",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-render").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_rounded: {
    name: "button-rounded",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-rounded").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_secondary: {
    name: "button-secondary",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-secondary").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_size: {
    name: "button-size",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-size").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_spinner: {
    name: "button-spinner",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-spinner").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_button_with_icon: {
    name: "button-with-icon",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/button-with-icon").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_calendar: {
    name: "calendar",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/calendar").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_card: {
    name: "card",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/card").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_carousel: {
    name: "carousel",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/carousel").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_chart: {
    name: "chart",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/charts/chart").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_chart_demos: {
    name: "chart-demos",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/charts/chart-demos").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_chart_sales_metrics: {
    name: "chart-sales-metrics",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/charts/chart-sales-metrics").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_checkbox: {
    name: "checkbox",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/auto-form/fields/checkbox").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_checkbox: {
    name: "checkbox",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/checkbox").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_collapsible: {
    name: "collapsible",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/collapsible").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_combobox: {
    name: "combobox",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/combobox").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_combobox: {
    name: "combobox",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/combobox").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_combobox_option: {
    name: "combobox-option",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/combobox-option").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_coming_soon: {
    name: "coming-soon",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/layouts/coming-soon").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_command: {
    name: "command",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/command").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_command_menu: {
    name: "command-menu",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/command-menu").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_component_card: {
    name: "component-card",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/registry/component-card").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_config_drawer: {
    name: "config-drawer",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/config-drawer").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_connect_account: {
    name: "connect-account",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/users/connect-account").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_context_menu: {
    name: "context-menu",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/context-menu").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_copy_code: {
    name: "copy-code",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/copy-code").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_danger_zone: {
    name: "danger-zone",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/users/danger-zone").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_data_grid: {
    name: "data-grid",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/data-grid/data-grid").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_data_grid_column_filter: {
    name: "data-grid-column-filter",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/data-grid/data-grid-column-filter").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_data_grid_column_header: {
    name: "data-grid-column-header",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/data-grid/data-grid-column-header").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_data_grid_column_visibility: {
    name: "data-grid-column-visibility",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/data-grid/data-grid-column-visibility").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_data_grid_pagination: {
    name: "data-grid-pagination",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/data-grid/data-grid-pagination").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_data_grid_table: {
    name: "data-grid-table",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/data-grid/data-grid-table").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_data_grid_table_dnd: {
    name: "data-grid-table-dnd",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/data-grid/data-grid-table-dnd").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_data_grid_table_dnd_rows: {
    name: "data-grid-table-dnd-rows",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/data-grid/data-grid-table-dnd-rows").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_datatable_transaction: {
    name: "datatable-transaction",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/tables/datatable-transaction").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_date: {
    name: "date",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/auto-form/fields/date").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_date_picker: {
    name: "date-picker",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/date-picker").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_day_picker: {
    name: "day-picker",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/day-picker").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_dialog: {
    name: "dialog",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/dialog").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_direction: {
    name: "direction",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/direction").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_discover_button: {
    name: "discover-button",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/discover-button").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_discrete_tabs: {
    name: "discrete-tabs",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/tabs/discrete-tabs").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_drawer: {
    name: "drawer",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/drawer").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_dropdown_language: {
    name: "dropdown-language",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/dropdowns/dropdown-language").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_dropdown_menu: {
    name: "dropdown-menu",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/dropdowns/dropdown-menu").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_dropdown_menu_avatar: {
    name: "dropdown-menu-avatar",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/dropdowns/dropdown-menu-avatar").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_dropdown_menu_basic: {
    name: "dropdown-menu-basic",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/dropdowns/dropdown-menu-basic").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_dropdown_menu_checkboxes: {
    name: "dropdown-menu-checkboxes",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/dropdowns/dropdown-menu-checkboxes").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_dropdown_menu_checkboxes_icons: {
    name: "dropdown-menu-checkboxes-icons",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/dropdowns/dropdown-menu-checkboxes-icons").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_dropdown_menu_destructive: {
    name: "dropdown-menu-destructive",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/dropdowns/dropdown-menu-destructive").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_dropdown_menu_icons: {
    name: "dropdown-menu-icons",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/dropdowns/dropdown-menu-icons").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_dropdown_menu_radio_group: {
    name: "dropdown-menu-radio-group",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/dropdowns/dropdown-menu-radio-group").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_dropdown_menu_radio_icons: {
    name: "dropdown-menu-radio-icons",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/dropdowns/dropdown-menu-radio-icons").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_dropdown_menu_shortcuts: {
    name: "dropdown-menu-shortcuts",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/dropdowns/dropdown-menu-shortcuts").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_dropdown_menu_submenu: {
    name: "dropdown-menu-submenu",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/dropdowns/dropdown-menu-submenu").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_dropdown_profile: {
    name: "dropdown-profile",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/dropdowns/dropdown-profile").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_edit_switch: {
    name: "edit-switch",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/edit-switch").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_email_password: {
    name: "email-password",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/users/email-password").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_empty: {
    name: "empty",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/empty").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_empty_state: {
    name: "empty-state",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/skeleton/empty-state").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_enum: {
    name: "enum",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/auto-form/fields/enum").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_field: {
    name: "field",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/auto-form/fields/field").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_field_group: {
    name: "field-group",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/auto-form/fields/field-group").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_filters: {
    name: "filters",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/filters").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_five: {
    name: "five",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/sections/five").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_forgot_password: {
    name: "forgot-password",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/users/forgot-password").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_forgot_password_form: {
    name: "forgot-password-form",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/users/forgot-password-form").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_form: {
    name: "form",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/auto-form/fields/form").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_form: {
    name: "form",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/auto-form/form").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_four: {
    name: "four",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/sections/four").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_group: {
    name: "group",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/group").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_helpers: {
    name: "helpers",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/auto-form/helpers").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_hero: {
    name: "hero",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/layouts/hero").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_hover_card: {
    name: "hover-card",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/hover-card").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_hover_card_sides: {
    name: "hover-card-sides",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/hover-card-sides").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_image_edit_block: {
    name: "image-edit-block",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/image-blocks/image-edit-block").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_image_edit_dialog: {
    name: "image-edit-dialog",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/image-blocks/image-edit-dialog").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input: {
    name: "input",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/auto-form/fields/input").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input: {
    name: "input",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_badge: {
    name: "input-badge",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-badge").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_basic: {
    name: "input-basic",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-basic").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_button_group: {
    name: "input-button-group",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-button-group").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_disabled: {
    name: "input-disabled",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-disabled").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_field: {
    name: "input-field",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-field").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_fieldgroup: {
    name: "input-fieldgroup",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-fieldgroup").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_file: {
    name: "input-file",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-file").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_form: {
    name: "input-form",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-form").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_grid: {
    name: "input-grid",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-grid").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group: {
    name: "input-group",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_basic: {
    name: "input-group-basic",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-basic").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_block_end: {
    name: "input-group-block-end",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-block-end").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_block_start: {
    name: "input-group-block-start",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-block-start").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_button: {
    name: "input-group-button",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-button").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_button_group: {
    name: "input-group-button-group",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-button-group").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_custom: {
    name: "input-group-custom",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-custom").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_dropdown: {
    name: "input-group-dropdown",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-dropdown").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_icon: {
    name: "input-group-icon",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-icon").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_in_card: {
    name: "input-group-in-card",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-in-card").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_inline_end: {
    name: "input-group-inline-end",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-inline-end").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_inline_start: {
    name: "input-group-inline-start",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-inline-start").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_kbd: {
    name: "input-group-kbd",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-kbd").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_label: {
    name: "input-group-label",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-label").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_spinner: {
    name: "input-group-spinner",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-spinner").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_text: {
    name: "input-group-text",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-text").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_textarea: {
    name: "input-group-textarea",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-textarea").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_textarea_examples: {
    name: "input-group-textarea-examples",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-textarea-examples").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_tooltip: {
    name: "input-group-tooltip",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-tooltip").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_with_addons: {
    name: "input-group-with-addons",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-with-addons").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_with_buttons: {
    name: "input-group-with-buttons",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-with-buttons").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_with_kbd: {
    name: "input-group-with-kbd",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-with-kbd").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_group_with_tooltip: {
    name: "input-group-with-tooltip",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-group-with-tooltip").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_inline: {
    name: "input-inline",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-inline").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_input_group: {
    name: "input-input-group",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-input-group").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_invalid: {
    name: "input-invalid",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-invalid").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_otp: {
    name: "input-otp",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-otp").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_otp_alphanumeric: {
    name: "input-otp-alphanumeric",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-otp-alphanumeric").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_otp_controlled: {
    name: "input-otp-controlled",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-otp-controlled").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_otp_disabled: {
    name: "input-otp-disabled",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-otp-disabled").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_otp_form: {
    name: "input-otp-form",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-otp-form").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_otp_four_digits: {
    name: "input-otp-four-digits",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-otp-four-digits").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_otp_invalid: {
    name: "input-otp-invalid",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-otp-invalid").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_otp_pattern: {
    name: "input-otp-pattern",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-otp-pattern").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_input_otp_separator: {
    name: "input-otp-separator",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/inputs/input-otp-separator").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_item: {
    name: "item",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/item").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_kbd: {
    name: "kbd",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/kbd").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_label: {
    name: "label",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/auto-form/common/label").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_label: {
    name: "label",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/label").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_line_chart: {
    name: "line-chart",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/charts/line-chart").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_link_bubble_menu: {
    name: "link-bubble-menu",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/links/link-bubble-menu").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_link_edit_block: {
    name: "link-edit-block",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/links/link-edit-block").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_link_edit_popover: {
    name: "link-edit-popover",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/links/link-edit-popover").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_link_popover_block: {
    name: "link-popover-block",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/links/link-popover-block").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_list_item: {
    name: "list-item",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/lists/list-item").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_login: {
    name: "login",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/users/login").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_login_form: {
    name: "login-form",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/users/login-form").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_login_page: {
    name: "login-page",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/users/login-page").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_logo: {
    name: "logo",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/logo").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_long_text: {
    name: "long-text",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/textarea/long-text").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_mcp_tabs: {
    name: "mcp-tabs",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/registry/mcp-tabs").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_measured_container: {
    name: "measured-container",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/layouts/measured-container").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_menu: {
    name: "menu",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/menus/menu").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_menu_option: {
    name: "menu-option",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/menus/menu-option").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_menu_other: {
    name: "menu-other",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/menus/menu-other").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_menubar: {
    name: "menubar",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/menus/menubar").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_menubar_checkbox: {
    name: "menubar-checkbox",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/menus/menubar-checkbox").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_menubar_icons: {
    name: "menubar-icons",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/menus/menubar-icons").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_menubar_radio: {
    name: "menubar-radio",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/menus/menubar-radio").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_menubar_submenu: {
    name: "menubar-submenu",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/menus/menubar-submenu").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_native_select: {
    name: "native-select",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/native-select").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_navigation_menu: {
    name: "navigation-menu",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/layouts/navigation-menu").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_navigation_menu: {
    name: "navigation-menu",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/menus/navigation-menu").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_navigation_progress: {
    name: "navigation-progress",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/layouts/navigation-progress").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_number: {
    name: "number",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/auto-form/fields/number").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_number_field: {
    name: "number-field",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/number-field").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_object: {
    name: "object",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/auto-form/fields/object").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_one: {
    name: "one",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/sections/one").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_open_in_v0: {
    name: "open-in-v0",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/registry/open-in-v0").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_password_input: {
    name: "password-input",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/users/password-input").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_personal_info: {
    name: "personal-info",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/users/personal-info").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_popover: {
    name: "popover",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/popovers/popover").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_popover_alignments: {
    name: "popover-alignments",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/popovers/popover-alignments").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_popover_basic: {
    name: "popover-basic",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/popovers/popover-basic").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_popover_form: {
    name: "popover-form",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/popovers/popover-form").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_preview_card: {
    name: "preview-card",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/preview-card").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_product_grid: {
    name: "product-grid",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/product-grid").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_profile_dropdown: {
    name: "profile-dropdown",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/users/profile-dropdown").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_progress: {
    name: "progress",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/progress").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_promo: {
    name: "promo",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/promo").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_radio_group: {
    name: "radio-group",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/auto-form/fields/radio-group").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_radio_group: {
    name: "radio-group",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/radio-group").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_rating: {
    name: "rating",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/rating").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_register: {
    name: "register",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/users/register").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_register_form: {
    name: "register-form",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/users/register-form").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_registry_logo: {
    name: "registry-logo",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/registry/registry-logo").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_registry_sidebar: {
    name: "registry-sidebar",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/registry/registry-sidebar").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_resizable_handle: {
    name: "resizable-handle",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/layouts/resizable-handle").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_resizable_vertical: {
    name: "resizable-vertical",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/layouts/resizable-vertical").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_scroll_area: {
    name: "scroll-area",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/scroll-area").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_select: {
    name: "select",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/select").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_select_dropdown: {
    name: "select-dropdown",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/dropdowns/select-dropdown").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_separator: {
    name: "separator",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/separator").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_sheet: {
    name: "sheet",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/sheet").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_sidebar: {
    name: "sidebar",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/layouts/sidebar").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_sign_out_dialog: {
    name: "sign-out-dialog",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/users/sign-out-dialog").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_skeleton: {
    name: "skeleton",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/skeleton/skeleton").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_skeleton_avatar: {
    name: "skeleton-avatar",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/skeleton/skeleton-avatar").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_skeleton_card: {
    name: "skeleton-card",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/skeleton/skeleton-card").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_skeleton_demo: {
    name: "skeleton-demo",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/skeleton/skeleton-demo").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_skeleton_form: {
    name: "skeleton-form",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/skeleton/skeleton-form").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_skeleton_table: {
    name: "skeleton-table",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/skeleton/skeleton-table").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_skeleton_text: {
    name: "skeleton-text",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/skeleton/skeleton-text").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_slider: {
    name: "slider",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/slider").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_smooth_dropdown: {
    name: "smooth-dropdown",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/dropdowns/smooth-dropdown").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_social_proof_01: {
    name: "social-proof-01",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/layouts/social-proof-01").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_social_proof_07: {
    name: "social-proof-07",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/layouts/social-proof-07").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_social_url: {
    name: "social-url",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/users/social-url").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_sonner: {
    name: "sonner",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/sonner").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_sortable_table_head: {
    name: "sortable-table-head",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/sortable-table-head").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_spinner: {
    name: "spinner",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/spinner").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_statistics_card: {
    name: "statistics-card",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/charts/statistics-card").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_statistics_with_status: {
    name: "statistics-with-status",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/charts/statistics-with-status").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_status_button: {
    name: "status-button",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/status-button").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_sub_nav: {
    name: "sub-nav",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/layouts/sub-nav").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_swap_layout: {
    name: "swap-layout",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/layouts/swap-layout").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_swap_layout_loader: {
    name: "swap-layout-loader",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/layouts/swap-layout-loader").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_switch: {
    name: "switch",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/auto-form/fields/switch").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_switch: {
    name: "switch",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/switch").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_table: {
    name: "table",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/tables/table").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_table_actions: {
    name: "table-actions",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/tables/table-actions").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_table_footer: {
    name: "table-footer",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/tables/table-footer").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_tabs: {
    name: "tabs",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/tabs/tabs").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_tabs: {
    name: "tabs",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/tabs").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_tabs_disabled: {
    name: "tabs-disabled",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/tabs/tabs-disabled").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_tabs_icons: {
    name: "tabs-icons",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/tabs/tabs-icons").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_tabs_line: {
    name: "tabs-line",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/tabs/tabs-line").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_tabs_vertical: {
    name: "tabs-vertical",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/tabs/tabs-vertical").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_textarea: {
    name: "textarea",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/auto-form/fields/textarea").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_textarea: {
    name: "textarea",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/textarea/textarea").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_textarea: {
    name: "textarea",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/textarea").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_textarea_button: {
    name: "textarea-button",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/textarea/textarea-button").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_textarea_disabled: {
    name: "textarea-disabled",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/textarea/textarea-disabled").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_textarea_field: {
    name: "textarea-field",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/textarea/textarea-field").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_textarea_invalid: {
    name: "textarea-invalid",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/textarea/textarea-invalid").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_theme_toggle: {
    name: "theme-toggle",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/registry/theme-toggle").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_three: {
    name: "three",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/sections/three").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_timeline_component_05: {
    name: "timeline-component-05",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/timelines/timeline-component-05").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_toast: {
    name: "toast",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/toast").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_toggle: {
    name: "toggle",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/toggle").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_toggle_group: {
    name: "toggle-group",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/toggle-group").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_toolbar_button: {
    name: "toolbar-button",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/buttons/toolbar-button").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_toolbar_section: {
    name: "toolbar-section",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/sections/toolbar-section").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_tooltip: {
    name: "tooltip",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/auto-form/common/tooltip").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_tooltip: {
    name: "tooltip",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/ui/tooltip").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_two: {
    name: "two",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/sections/two").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_typography_blockquote: {
    name: "typography-blockquote",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/typography/typography-blockquote").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_typography_h1: {
    name: "typography-h1",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/typography/typography-h1").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_typography_h2: {
    name: "typography-h2",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/typography/typography-h2").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_typography_h3: {
    name: "typography-h3",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/typography/typography-h3").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_typography_h4: {
    name: "typography-h4",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/typography/typography-h4").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_typography_inline_code: {
    name: "typography-inline-code",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/typography/typography-inline-code").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_typography_large: {
    name: "typography-large",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/typography/typography-large").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_typography_lead: {
    name: "typography-lead",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/typography/typography-lead").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_typography_list: {
    name: "typography-list",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/typography/typography-list").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_typography_muted: {
    name: "typography-muted",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/typography/typography-muted").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_typography_p: {
    name: "typography-p",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/typography/typography-p").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_typography_small: {
    name: "typography-small",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/typography/typography-small").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_typography_table: {
    name: "typography-table",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/typography/typography-table").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_v1_1_0: {
    name: "v1-1-0",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/timelines/content/v1-1-0").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_v1_2_0: {
    name: "v1-2-0",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/timelines/content/v1-2-0").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_v1_3_0: {
    name: "v1-3-0",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/timelines/content/v1-3-0").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_verify_email: {
    name: "verify-email",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/users/verify-email").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_widget_product_insights: {
    name: "widget-product-insights",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/charts/widget-product-insights").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  },
  ui_widget_total_earning: {
    name: "widget-total-earning",
    type: "ui-primitive",
    component: dynamic(() => import("@/primitives/charts/widget-total-earning").then((mod) => {
      const m = mod as Record<string, unknown>
      const componentLike = Object.keys(m).find((key) => /^[A-Z]/.test(key) && typeof m[key] === "function")
      return (m.default as unknown) || (componentLike ? (m[componentLike] as unknown) : (m[Object.keys(m)[0]] as unknown))
    })),
    metadata: null,
  }
}

export function getRegistryItems(): Component[] {
  return REGISTRY_ITEMS
}

export function getRegistryItem(name: string): Component | undefined {
  return REGISTRY_ITEMS.find((item) => item.name === name)
}

export function getBlocks(): Component[] {
  return REGISTRY_ITEMS.filter((item) => item.type === "registry:block")
}

export function getUIPrimitives(): Component[] {
  return REGISTRY_ITEMS.filter((item) => item.type === "registry:ui")
}

export function getComponents(): Component[] {
  return REGISTRY_ITEMS.filter((item) => item.type === "registry:component")
}
