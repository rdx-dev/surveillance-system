import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/index.scss";
import PlaceholderPage from "@components/PlaceholderPage";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";
import Loading from "@components/Loading";
import { logger } from "@utils/logger";
import { MFE_NAMES, PORTS, ROUTES } from "@utils/constants";
import ErrorBoundary from "@boundaries/ErrorBoundary";
import { AuthProvider } from "@context/AuthContext";
// Lazy load remote components with error handling
const createLazyRemote = (
  importFn: () => Promise<any>,
  fallbackComponent: React.ComponentType
) => {
  return lazy(() =>
    importFn().catch((error) => {
      logger.warn("Failed to load remote MFE:", error.message);
      return { default: fallbackComponent };
    })
  );
};

// Remote components
const LoginPage = createLazyRemote(
  () => import("auth/LoginPage"),
  () => (
    <PlaceholderPage
      name="Login Page"
      mfeName={MFE_NAMES.AUTH}
      port={PORTS.AUTH_MFE}
      description="Authentication micro frontend for user login"
    />
  )
);

const SignupPage = createLazyRemote(
  () => import("auth/SignupPage"),
  () => (
    <PlaceholderPage
      name="Signup Page"
      mfeName={MFE_NAMES.AUTH}
      port={PORTS.AUTH_MFE}
      description="Authentication micro frontend for user registration"
    />
  )
);

const Dashboard = createLazyRemote(
  () => import("dashboard/Dashboard"),
  () => (
    <PlaceholderPage
      name="Dashboard"
      mfeName={MFE_NAMES.DASHBOARD}
      port={PORTS.DASHBOARD_MFE}
      description="Main dashboard with system overview and statistics"
    />
  )
);

const LiveFeed = createLazyRemote(
  () => import("liveFeed/LiveFeed"),
  () => (
    <PlaceholderPage
      name="Live Feed"
      mfeName={MFE_NAMES.LIVE_FEED}
      port={PORTS.LIVE_FEED_MFE}
      description="Real-time CCTV feed viewer with AI detection overlay"
    />
  )
);

const AlertList = createLazyRemote(
  () => import("alert/AlertList"),
  () => (
    <PlaceholderPage
      name="Alerts"
      mfeName={MFE_NAMES.ALERT}
      port={PORTS.ALERT_MFE}
      description="Alert management and notification center"
    />
  )
);

const Settings = createLazyRemote(
  () => import("settings/Settings"),
  () => (
    <PlaceholderPage
      name="Settings"
      mfeName={MFE_NAMES.SETTINGS}
      port={PORTS.SETTINGS_MFE}
      description="System settings and camera configuration"
    />
  )
);

// Home Page
const HomePage: React.FC = () => (
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Welcome to Surveillance System 🎥
      </h1>
      <p className="text-xl text-gray-600">
        AI-Powered Security Monitoring Platform
      </p>
    </div>

    {/* Status Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {/* Module Federation Status */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-start space-x-4">
          <div className="text-4xl">🔌</div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Module Federation
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">HOST Configured</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">5 Remotes Registered</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">Shared Dependencies</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">Error Boundaries</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Status */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-start space-x-4">
          <div className="text-4xl">🏗️</div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Architecture
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">React 18 + TypeScript</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">React Router v6</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">Context API</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* MFE Status Grid */}
    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        Micro Frontend Status
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { name: "Auth MFE", port: 3001, status: "pending" },
          { name: "Live Feed MFE", port: 3002, status: "pending" },
          { name: "Alert MFE", port: 3003, status: "pending" },
          { name: "Dashboard MFE", port: 3004, status: "pending" },
          { name: "Settings MFE", port: 3005, status: "pending" },
        ].map((mfe) => (
          <div key={mfe.port} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-800">{mfe.name}</span>
              <span className="text-yellow-500 text-xl">⏳</span>
            </div>
            <div className="text-sm text-gray-600">
              Port: <span className="font-mono">{mfe.port}</span>
            </div>
            <div className="text-xs text-yellow-600 mt-2">Not Built Yet</div>
          </div>
        ))}
      </div>
    </div>

    {/* Quick Actions */}
    <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg shadow-lg p-8 text-white">
      <h3 className="text-2xl font-semibold mb-4">Test Navigation</h3>
      <p className="mb-6 opacity-90">
        Click any button below to test Module Federation loading (will show
        placeholders until MFEs are built)
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { to: ROUTES.LOGIN, label: "Login", icon: "🔐" },
          { to: ROUTES.SIGNUP, label: "Sign Up", icon: "📝" },
          { to: ROUTES.DASHBOARD, label: "Dashboard", icon: "📊" },
          { to: ROUTES.LIVE_FEED, label: "Live Feed", icon: "📹" },
          { to: ROUTES.ALERTS, label: "Alerts", icon: "🚨" },
          { to: ROUTES.SETTINGS, label: "Settings", icon: "⚙️" },
        ].map((link) => (
          <a
            key={link.to}
            href={link.to}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-all"
          >
            <span className="text-2xl">{link.icon}</span>
            <span className="font-semibold">{link.label}</span>
          </a>
        ))}
      </div>
    </div>

    {/* Milestone Progress */}
    <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Milestone 1 Progress
      </h3>
      <div className="space-y-3">
        {[
          { task: "Task 1-2: Repository & Structure", done: true },
          { task: "Task 3-4: Configuration & Environment", done: true },
          { task: "Task 5-6: Shell App & Module Federation", done: true },
          { task: "Task 7-8: Components & Testing", done: true },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-3">
            <span className="text-xl">{item.done ? "✅" : "⏳"}</span>
            <span className={item.done ? "text-gray-700" : "text-gray-500"}>
              {item.task}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t">
        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-semibold">
            Milestone 1: Complete! 🎉
          </span>
          <span className="text-green-600 font-bold">100%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
          <div className="bg-green-600 h-3 rounded-full w-full"></div>
        </div>
      </div>
    </div>
  </div>
);

// Not Found Page
const NotFoundPage: React.FC = () => (
  <div className="flex items-center justify-center min-h-[500px]">
    <div className="text-center">
      <div className="text-8xl mb-4">404</div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <a
        href={ROUTES.HOME}
        className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors inline-block"
      >
        Go to Home
      </a>
    </div>
  </div>
);

const App: React.FC = () => {
  logger.info("Shell App initialized");

  return (
    <ErrorBoundary>
      <AuthProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navigation />

            <main className="flex-1 container mx-auto px-4 py-8">
              <Suspense fallback={<Loading message="Loading module..." />}>
                <Routes>
                  <Route path={ROUTES.HOME} element={<HomePage />} />
                  <Route path={ROUTES.LOGIN} element={<LoginPage />} />
                  <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
                  <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                  <Route path={ROUTES.LIVE_FEED} element={<LiveFeed />} />
                  <Route path={ROUTES.ALERTS} element={<AlertList />} />
                  <Route path={ROUTES.SETTINGS} element={<Settings />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
