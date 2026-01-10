/// <reference types="react" />

// Type definitions for Module Federation remotes

declare module 'auth/LoginPage' {
  const LoginPage: React.ComponentType;
  export default LoginPage;
}

declare module 'auth/SignupPage' {
  const SignupPage: React.ComponentType;
  export default SignupPage;
}

declare module 'liveFeed/LiveFeed' {
  const LiveFeed: React.ComponentType;
  export default LiveFeed;
}

declare module 'liveFeed/VideoPlayer' {
  const VideoPlayer: React.ComponentType;
  export default VideoPlayer;
}

declare module 'alert/AlertList' {
  const AlertList: React.ComponentType;
  export default AlertList;
}

declare module 'alert/AlertCard' {
  const AlertCard: React.ComponentType;
  export default AlertCard;
}

declare module 'dashboard/Dashboard' {
  const Dashboard: React.ComponentType;
  export default Dashboard;
}

declare module 'settings/Settings' {
  const Settings: React.ComponentType;
  export default Settings;
}

declare module 'settings/CameraSettings' {
  const CameraSettings: React.ComponentType;
  export default CameraSettings;
}
