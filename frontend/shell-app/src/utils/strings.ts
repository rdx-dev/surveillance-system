export const STRINGS = {
  // ============================================
  // APP & BRANDING
  // ============================================
  app: {
    name: "Surveillance System",
    version: "1.0.0",
    welcome: "Welcome to Surveillance System 🎥",
    description: "AI-Powered Security Monitoring Platform",
    shellAppLabel: "Shell App - Host",
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    dashboard: "Dashboard",
    liveFeed: "Live Feed",
    alerts: "Alerts",
    settings: "Settings",
    login: "Login",
    signUp: "Sign Up",
    home: "Home",
  },

  // ============================================
  // ERRORS & ERROR BOUNDARY
  // ============================================
  errors: {
    generic: "Oops! Something went wrong",
    unexpected: "An unexpected error occurred",
    contactSupport: "If this problem persists, please contact support.",
    pageNotFound: "Page Not Found",
    pageNotFoundDescription: "The page you're looking for doesn't exist.",
    boundary: {
      title: "Oops! Something went wrong",
      message: "An unexpected error occurred",
    },
  },

  // ============================================
  // ACTIONS & BUTTONS
  // ============================================
  actions: {
    tryAgain: "Try Again",
    goToHome: "Go to Home",
    backToHome: "← Back to Home",
    loading: "Loading...",
    pleaseWait: "Please wait...",
  },

  // ============================================
  // HOME PAGE
  // ============================================
  home: {
    moduleFederation: {
      title: "Module Federation",
      hostConfigured: "HOST Configured",
      remotesRegistered: "5 Remotes Registered",
      sharedDependencies: "Shared Dependencies",
      errorBoundaries: "Error Boundaries",
    },
    architecture: {
      title: "Architecture",
      reactTypescript: "React 18 + TypeScript",
      reactRouter: "React Router v6",
      tailwind: "Tailwind CSS",
      contextApi: "Context API",
    },
    mfeStatus: {
      title: "Micro Frontend Status",
      authMfe: "Auth MFE",
      liveFeedMfe: "Live Feed MFE",
      alertMfe: "Alert MFE",
      dashboardMfe: "Dashboard MFE",
      settingsMfe: "Settings MFE",
      port: "Port",
      notBuiltYet: "Not Built Yet",
    },
    testNavigation: {
      title: "Test Navigation",
      description:
        "Click any button below to test Module Federation loading (will show placeholders until MFEs are built)",
    },
    milestone: {
      title: "Milestone 1 Progress",
      task1: "Task 1-2: Repository & Structure",
      task2: "Task 3-4: Configuration & Environment",
      task3: "Task 5-6: Shell App & Module Federation",
      task4: "Task 7-8: Components & Testing",
      complete: "Milestone 1: Complete! 🎉",
      progress: "100%",
    },
  },

  // ============================================
  // MICRO FRONTEND (MFE) DESCRIPTIONS
  // ============================================
  mfe: {
    auth: {
      loginPage: "Login Page",
      signupPage: "Signup Page",
      description: "Authentication micro frontend for user login",
      signupDescription: "Authentication micro frontend for user registration",
    },
    dashboard: {
      name: "Dashboard",
      description: "Main dashboard with system overview and statistics",
    },
    liveFeed: {
      name: "Live Feed",
      description: "Real-time CCTV feed viewer with AI detection overlay",
    },
    alert: {
      name: "Alerts",
      description: "Alert management and notification center",
    },
    settings: {
      name: "Settings",
      description: "System settings and camera configuration",
    },
    status: {
      comingSoon: "Coming Soon",
      notBuiltYet: "Not Built Yet",
      title: "Micro Frontend Status",
      mfeName: "MFE Name",
      port: "Port",
      status: "Status",
      whenAvailable: "When will this be available?",
      whenAvailableDescription:
        "This micro frontend will be built in upcoming tasks. Module Federation is configured and ready to load this remote as soon as it's deployed.",
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    about: {
      title: "About Surveillance System",
      description:
        "An intelligent CCTV monitoring system powered by AI for automated security surveillance and real-time threat detection.",
    },
    quickLinks: {
      title: "Quick Links",
    },
    technology: {
      title: "Technology",
      react18: "React 18",
      typescript: "TypeScript",
      moduleFederation: "Module Federation",
      springBoot: "Spring Boot",
      yolov8: "YOLOv8",
    },
    copyright: {
      base: "© {year} Surveillance System. Built with Module Federation.",
      shellApp: "Shell App (HOST) running on Port {port}",
    },
  },

  // ============================================
  // LOADING STATES
  // ============================================
  loading: {
    default: "Loading...",
    module: "Loading module...",
    pleaseWait: "Please wait...",
  },

  // ============================================
  // LOGGER MESSAGES
  // ============================================
  logger: {
    shellAppInitialized: "Shell App initialized",
    failedToLoadRemote: "Failed to load remote MFE:",
  },
} as const;

// ============================================
// TYPE EXPORTS (for type safety)
// ============================================

/**
 * Type-safe access to string keys
 * Useful for autocomplete and refactoring
 */
export type StringKey = keyof typeof STRINGS;

/**
 * Helper type for nested string access
 * Example: StringPath<typeof STRINGS> = "app.name" | "errors.generic" | ...
 */
export type StringPath<T> = T extends string
  ? never
  : {
      [K in keyof T]: K extends string
        ? T[K] extends string
          ? K
          : T[K] extends Record<string, any>
            ? `${K}.${StringPath<T[K]>}`
            : never
        : never;
    }[keyof T];

/**
 * Helper function to get nested string value
 * Usage: getString("errors.boundary.title")
 */
export const getString = (path: string): string => {
  const keys = path.split(".");
  let value: any = STRINGS;

  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) {
      console.warn(`String not found: ${path}`);
      return path; // Fallback to path if not found
    }
  }

  return typeof value === "string" ? value : path;
};

/**
 * Helper function for formatted strings with variables
 * Usage: formatString(STRINGS.footer.copyright.base, { year: 2024 })
 */
export const formatString = (
  template: string,
  values: Record<string, string | number>
): string => {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return values[key]?.toString() || match;
  });
};
