import { ROUTES } from "@/utils/constants";
import { STRINGS } from "@/utils/strings";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinkClass = (path: string) => {
    return isActive(path)
      ? "text-primary-600 font-semibold border-b-2 border-primary-600"
      : "text-gray-600 hover:text-primary-600 transition-colors";
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-3xl">🎥</span>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary-600">
                {STRINGS.app.name}
              </span>
              <span className="text-xs text-gray-500">
                {STRINGS.app.shellAppLabel}
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to={ROUTES.DASHBOARD}
              className={`${navLinkClass("/dashboard")} py-2`}
            >
              {STRINGS.navigation.dashboard}
            </Link>
            <Link
              to={ROUTES.LIVE_FEED}
              className={`${navLinkClass("/live-feed")} py-2`}
            >
              {STRINGS.navigation.liveFeed}
            </Link>
            <Link to="/alerts" className={`${navLinkClass("/alerts")} py-2`}>
              {STRINGS.navigation.alerts}
            </Link>
            <Link
              to={ROUTES.SETTINGS}
              className={`${navLinkClass("/settings")} py-2`}
            >
              {STRINGS.navigation.settings}
            </Link>
          </div>

          {/* Auth Links */}
          <div className="flex items-center space-x-4">
            <Link
              to={ROUTES.LOGIN}
              className="px-4 py-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              {STRINGS.navigation.login}
            </Link>
            <Link
              to={ROUTES.SIGNUP}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              {STRINGS.navigation.signUp}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
