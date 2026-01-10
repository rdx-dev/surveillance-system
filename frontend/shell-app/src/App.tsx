import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles/index.scss";

// Placeholder components for remotes that don't exist yet
const PlaceholderPage: React.FC<{ name: string }> = ({ name }) => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="text-center">
      <div className="text-6xl mb-4">⏳</div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        {name} Coming Soon
      </h2>
      <p className="text-gray-500">
        This micro frontend will be built in upcoming tasks
      </p>
    </div>
  </div>
);

// Lazy load remote components (will fail gracefully until remotes are built)
const LoginPage = lazy(() =>
  import("auth/LoginPage").catch(() => ({
    default: () => <PlaceholderPage name="Login Page (Auth MFE)" />,
  }))
);

const SignupPage = lazy(() =>
  import("auth/SignupPage").catch(() => ({
    default: () => <PlaceholderPage name="Signup Page (Auth MFE)" />,
  }))
);

const Dashboard = lazy(() =>
  import("dashboard/Dashboard").catch(() => ({
    default: () => <PlaceholderPage name="Dashboard (Dashboard MFE)" />,
  }))
);

const LiveFeed = lazy(() =>
  import("liveFeed/LiveFeed").catch(() => ({
    default: () => <PlaceholderPage name="Live Feed (Live Feed MFE)" />,
  }))
);

const AlertList = lazy(() =>
  import("alert/AlertList").catch(() => ({
    default: () => <PlaceholderPage name="Alerts (Alert MFE)" />,
  }))
);

const Settings = lazy(() =>
  import("settings/Settings").catch(() => ({
    default: () => <PlaceholderPage name="Settings (Settings MFE)" />,
  }))
);

// Loading component
const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="text-center">
      <div className="animate-spin text-5xl mb-4">⚙️</div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

// Home page
const HomePage: React.FC = () => (
  <div className="max-w-4xl mx-auto">
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-semibold mb-4">
        Welcome to Surveillance System! 🚀
      </h2>

      <div className="space-y-4 mb-6">
        <div className="flex items-start space-x-3">
          <span className="text-green-500 text-xl">✅</span>
          <div>
            <h3 className="font-semibold">Shell App Configured</h3>
            <p className="text-gray-600 text-sm">
              Module Federation HOST is ready
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <span className="text-green-500 text-xl">✅</span>
          <div>
            <h3 className="font-semibold">React Router Setup</h3>
            <p className="text-gray-600 text-sm">
              Client-side routing configured
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <span className="text-green-500 text-xl">✅</span>
          <div>
            <h3 className="font-semibold">Remote MFE Loading</h3>
            <p className="text-gray-600 text-sm">
              Configured to load 5 micro frontends
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <span className="text-yellow-500 text-xl">⏳</span>
          <div>
            <h3 className="font-semibold">Next: Build Auth MFE</h3>
            <p className="text-gray-600 text-sm">Task 9-12</p>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="font-semibold mb-3">Test Navigation:</h3>
        <div className="grid grid-cols-2 gap-3">
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center"
          >
            Login Page
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-center"
          >
            Signup Page
          </Link>
          <Link
            to="/dashboard"
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-center"
          >
            Dashboard
          </Link>
          <Link
            to="/live-feed"
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-center"
          >
            Live Feed
          </Link>
          <Link
            to="/alerts"
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-center"
          >
            Alerts
          </Link>
          <Link
            to="/settings"
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-center"
          >
            Settings
          </Link>
        </div>
      </div>
    </div>

    <div className="mt-8 text-center text-gray-500 text-sm">
      <p>Shell App (Module Federation HOST)</p>
      <p className="mt-2">
        <strong>Port 3000</strong> | Task 6 Complete! ✨
      </p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-2xl">🎥</span>
                <span className="text-xl font-bold text-primary-600">
                  Surveillance System
                </span>
              </Link>

              <div className="flex items-center space-x-4 text-sm">
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Login
                </Link>
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Dashboard
                </Link>
                <Link
                  to="/live-feed"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Live Feed
                </Link>
                <Link
                  to="/alerts"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Alerts
                </Link>
                <Link
                  to="/settings"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Settings
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/live-feed" element={<LiveFeed />} />
              <Route path="/alerts" element={<AlertList />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t mt-12">
          <div className="container mx-auto px-4 py-6 text-center text-gray-500 text-sm">
            <p>Surveillance System - Shell App (Host)</p>
            <p className="mt-1">Module Federation | React 18 | TypeScript</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
