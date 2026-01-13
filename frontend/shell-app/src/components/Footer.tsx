const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              About Surveillance System
            </h3>
            <p className="text-gray-600 text-sm">
              An intelligent CCTV monitoring system powered by AI for automated
              security surveillance and real-time threat detection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/dashboard"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/live-feed"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Live Feed
                </a>
              </li>
              <li>
                <a
                  href="/alerts"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Alerts
                </a>
              </li>
              <li>
                <a
                  href="/settings"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Settings
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Technology
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                React 18
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                TypeScript
              </span>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                Module Federation
              </span>
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                Spring Boot
              </span>
              <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">
                YOLOv8
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>
            © {currentYear} Surveillance System. Built with Module Federation.
          </p>
          <p className="mt-2">
            <span className="font-semibold">Shell App</span> (HOST) running on{" "}
            <span className="text-primary-600 font-mono">Port 3000</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
