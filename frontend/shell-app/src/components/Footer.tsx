import { STRINGS, formatString } from "@/utils/strings";
import { PORTS } from "@/utils/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {STRINGS.footer.about.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {STRINGS.footer.about.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {STRINGS.footer.quickLinks.title}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/dashboard"
                  className="text-gray-600 hover:text-primary-600"
                >
                  {STRINGS.navigation.dashboard}
                </a>
              </li>
              <li>
                <a
                  href="/live-feed"
                  className="text-gray-600 hover:text-primary-600"
                >
                  {STRINGS.navigation.liveFeed}
                </a>
              </li>
              <li>
                <a
                  href="/alerts"
                  className="text-gray-600 hover:text-primary-600"
                >
                  {STRINGS.navigation.alerts}
                </a>
              </li>
              <li>
                <a
                  href="/settings"
                  className="text-gray-600 hover:text-primary-600"
                >
                  {STRINGS.navigation.settings}
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {STRINGS.footer.technology.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                {STRINGS.footer.technology.react18}
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                {STRINGS.footer.technology.typescript}
              </span>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                {STRINGS.footer.technology.moduleFederation}
              </span>
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                {STRINGS.footer.technology.springBoot}
              </span>
              <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">
                {STRINGS.footer.technology.yolov8}
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>
            {formatString(STRINGS.footer.copyright.base, { year: currentYear })}
          </p>
          <p className="mt-2">
            {formatString(STRINGS.footer.copyright.shellApp, {
              port: PORTS.SHELL.toString(),
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
