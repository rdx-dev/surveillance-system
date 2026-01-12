cat > README.md << 'EOF'

# Shell App - Module Federation Host

The main container application that hosts all micro frontends using Webpack Module Federation.

## 🏗️ Architecture

**Role:** Module Federation HOST  
**Port:** 3000  
**Purpose:** Load and orchestrate remote MFEs

## 🔌 Remote MFEs

| MFE           | Port | Remote Name | Exposed Components       |
| ------------- | ---- | ----------- | ------------------------ |
| Auth MFE      | 3001 | `auth`      | LoginPage, SignupPage    |
| Live Feed MFE | 3002 | `liveFeed`  | LiveFeed, VideoPlayer    |
| Alert MFE     | 3003 | `alert`     | AlertList, AlertCard     |
| Dashboard MFE | 3004 | `dashboard` | Dashboard                |
| Settings MFE  | 3005 | `settings`  | Settings, CameraSettings |

## 🚀 Running

```bash
# Install dependencies
npm install

# Start development server
npm start  # http://localhost:3000

# Type check
npm run type-check

# Build for production
npm run build
```

## 📦 Module Federation Configuration

### Shared Dependencies

- react (singleton)
- react-dom (singleton)
- react-router-dom (singleton)

### Remote Loading Strategy

- Lazy loading with `React.lazy()`
- Graceful fallback if remote is unavailable
- Error boundaries for remote failures

## 🔧 Technologies

- React 18.2
- TypeScript 5.3
- Webpack 5 (Module Federation)
- React Router 6
- Tailwind CSS 3

## 📖 Documentation

- [Module Federation Docs](https://webpack.js.org/concepts/module-federation/)
- [Project Documentation](../../docs/)
