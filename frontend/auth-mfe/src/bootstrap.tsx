import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { logger } from "@utils/logger";

// logger.info("Bootstrap started");
// logger.debug("Environment:", process.env.NODE_ENV);
// logger.debug("Port:", 3001);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Enable Hot Module Replacement in development
if (module.hot) {
  module.hot.accept();
}
