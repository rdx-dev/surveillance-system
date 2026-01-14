import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/index.scss";
import PlaceholderPage from "@components/PlaceholderPage";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";
import Loading from "@components/Loading";
import { logger } from "@utils/logger";
import { MFE_NAMES, PORTS, ROUTES } from "@utils/constants";
import { STRINGS } from "@utils/strings";
import ErrorBoundary from "@boundaries/ErrorBoundary";
import { AuthProvider } from "@context/AuthContext";
// Lazy load remote components with error handling
const createLazyRemote = (
  importFn: () => Promise<any>,
  fallbackComponent: React.ComponentType
) => {
  return lazy(() =>
    importFn().catch((error) => {
      logger.warn(STRINGS.logger.failedToLoadRemote, error.message);
      return { default: fallbackComponent };
    })
  );
};

// Remote components
const LoginPage = createLazyRemote(
  () => import("auth/LoginPage"),
  () => (
    <PlaceholderPage
      name={STRINGS.mfe.auth.loginPage}
      mfeName={MFE_NAMES.AUTH}
      port={PORTS.AUTH_MFE}
      description={STRINGS.mfe.auth.description}
    />
  )
);

const SignupPage = createLazyRemote(
  () => import("auth/SignupPage"),
  () => (
    <PlaceholderPage
      name={STRINGS.mfe.auth.signupPage}
      mfeName={MFE_NAMES.AUTH}
      port={PORTS.AUTH_MFE}
      description={STRINGS.mfe.auth.signupDescription}
    />
  )
);

const Dashboard = createLazyRemote(
  () => import("dashboard/Dashboard"),
  () => (
    <PlaceholderPage
      name={STRINGS.mfe.dashboard.name}
      mfeName={MFE_NAMES.DASHBOARD}
      port={PORTS.DASHBOARD_MFE}
      description={STRINGS.mfe.dashboard.description}
    />
  )
);

const LiveFeed = createLazyRemote(
  () => import("liveFeed/LiveFeed"),
  () => (
    <PlaceholderPage
      name={STRINGS.mfe.liveFeed.name}
      mfeName={MFE_NAMES.LIVE_FEED}
      port={PORTS.LIVE_FEED_MFE}
      description={STRINGS.mfe.liveFeed.description}
    />
  )
);

const AlertList = createLazyRemote(
  () => import("alert/AlertList"),
  () => (
    <PlaceholderPage
      name={STRINGS.mfe.alert.name}
      mfeName={MFE_NAMES.ALERT}
      port={PORTS.ALERT_MFE}
      description={STRINGS.mfe.alert.description}
    />
  )
);

const Settings = createLazyRemote(
  () => import("settings/Settings"),
  () => (
    <PlaceholderPage
      name={STRINGS.mfe.settings.name}
      mfeName={MFE_NAMES.SETTINGS}
      port={PORTS.SETTINGS_MFE}
      description={STRINGS.mfe.settings.description}
    />
  )
);

// Home Page
const HomePage: React.FC = () => (
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        {STRINGS.app.welcome}
      </h1>
      <p className="text-xl text-gray-600">{STRINGS.app.description}</p>
    </div>

    {/* Status Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {/* Module Federation Status */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-start space-x-4">
          <div className="text-4xl">🔌</div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {STRINGS.home.moduleFederation.title}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">
                  {STRINGS.home.moduleFederation.hostConfigured}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">
                  {STRINGS.home.moduleFederation.remotesRegistered}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">
                  {STRINGS.home.moduleFederation.sharedDependencies}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">
                  {STRINGS.home.moduleFederation.errorBoundaries}
                </span>
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
              {STRINGS.home.architecture.title}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">
                  {STRINGS.home.architecture.reactTypescript}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">
                  {STRINGS.home.architecture.reactRouter}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">
                  {STRINGS.home.architecture.tailwind}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✅</span>
                <span className="text-gray-700">
                  {STRINGS.home.architecture.contextApi}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* MFE Status Grid */}
    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        {STRINGS.home.mfeStatus.title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { name: STRINGS.home.mfeStatus.authMfe, port: PORTS.AUTH_MFE },
          {
            name: STRINGS.home.mfeStatus.liveFeedMfe,
            port: PORTS.LIVE_FEED_MFE,
          },
          { name: STRINGS.home.mfeStatus.alertMfe, port: PORTS.ALERT_MFE },
          {
            name: STRINGS.home.mfeStatus.dashboardMfe,
            port: PORTS.DASHBOARD_MFE,
          },
          {
            name: STRINGS.home.mfeStatus.settingsMfe,
            port: PORTS.SETTINGS_MFE,
          },
        ].map((mfe) => (
          <div key={mfe.port} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-800">{mfe.name}</span>
              <span className="text-yellow-500 text-xl">⏳</span>
            </div>
            <div className="text-sm text-gray-600">
              {STRINGS.home.mfeStatus.port}:{" "}
              <span className="font-mono">{mfe.port}</span>
            </div>
            <div className="text-xs text-yellow-600 mt-2">
              {STRINGS.home.mfeStatus.notBuiltYet}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Quick Actions */}
    <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg shadow-lg p-8 text-white">
      <h3 className="text-2xl font-semibold mb-4">
        {STRINGS.home.testNavigation.title}
      </h3>
      <p className="mb-6 opacity-90">
        {STRINGS.home.testNavigation.description}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { to: ROUTES.LOGIN, label: STRINGS.navigation.login, icon: "🔐" },
          { to: ROUTES.SIGNUP, label: STRINGS.navigation.signUp, icon: "📝" },
          {
            to: ROUTES.DASHBOARD,
            label: STRINGS.navigation.dashboard,
            icon: "📊",
          },
          {
            to: ROUTES.LIVE_FEED,
            label: STRINGS.navigation.liveFeed,
            icon: "📹",
          },
          { to: ROUTES.ALERTS, label: STRINGS.navigation.alerts, icon: "🚨" },
          {
            to: ROUTES.SETTINGS,
            label: STRINGS.navigation.settings,
            icon: "⚙️",
          },
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
        {STRINGS.home.milestone.title}
      </h3>
      <div className="space-y-3">
        {[
          { task: STRINGS.home.milestone.task1, done: true },
          { task: STRINGS.home.milestone.task2, done: true },
          { task: STRINGS.home.milestone.task3, done: true },
          { task: STRINGS.home.milestone.task4, done: true },
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
            {STRINGS.home.milestone.complete}
          </span>
          <span className="text-green-600 font-bold">
            {STRINGS.home.milestone.progress}
          </span>
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
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        {STRINGS.errors.pageNotFound}
      </h2>
      <p className="text-gray-600 mb-8">
        {STRINGS.errors.pageNotFoundDescription}
      </p>
      <a
        href={ROUTES.HOME}
        className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors inline-block"
      >
        {STRINGS.actions.goToHome}
      </a>
    </div>
  </div>
);

const App: React.FC = () => {
  logger.info(STRINGS.logger.shellAppInitialized);

  return (
    <ErrorBoundary>
      <AuthProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navigation />

            <main className="flex-1 container mx-auto px-4 py-8">
              <Suspense fallback={<Loading message={STRINGS.loading.module} />}>
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
