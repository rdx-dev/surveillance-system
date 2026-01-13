export const APP_NAME = "Surveillance System";
export const APP_VERSION = "1.0.0";

// Routes
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  DASHBOARD: "/dashboard",
  LIVE_FEED: "/live-feed",
  ALERTS: "/alerts",
  SETTINGS: "/settings",
} as const;

// Ports
export const PORTS = {
  SHELL: 3000,
  AUTH_MFE: 3001,
  LIVE_FEED_MFE: 3002,
  ALERT_MFE: 3003,
  DASHBOARD_MFE: 3004,
  SETTINGS_MFE: 3005,
  API_GATEWAY: 8080,
} as const;

// MFE Names
export const MFE_NAMES = {
  AUTH: "auth",
  LIVE_FEED: "liveFeed",
  ALERT: "alert",
  DASHBOARD: "dashboard",
  SETTINGS: "settings",
} as const;

// Environment
export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";
export const IS_PRODUCTION = process.env.NODE_ENV === "production";
