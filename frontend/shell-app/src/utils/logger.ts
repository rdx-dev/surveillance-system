type LogLevel = "info" | "warn" | "error" | "debug";

class Logger {
  private prefix: string;

  constructor(prefix: string = "Shell App") {
    this.prefix = prefix;
  }

  private log(level: LogLevel, ...args: any[]) {
    const timestamp = new Date().toISOString();
    const message = `[${timestamp}] [${this.prefix}] [${level.toUpperCase()}]`;

    switch (level) {
      case "error":
        console.error(message, ...args);
        break;
      case "warn":
        console.warn(message, ...args);
        break;
      case "debug":
        if (process.env.NODE_ENV === "development") {
          console.debug(message, ...args);
        }
        break;
      default:
        console.log(message, ...args);
    }
  }

  info(...args: any[]) {
    this.log("info", ...args);
  }

  warn(...args: any[]) {
    this.log("warn", ...args);
  }

  error(...args: any[]) {
    this.log("error", ...args);
  }

  debug(...args: any[]) {
    this.log("debug", ...args);
  }
}

export const logger = new Logger();
export default Logger;
