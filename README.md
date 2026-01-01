# surveillance-system
An intelligent CCTV monitoring system that automates surveillance by detecting specific activities and sending real-time alerts, eliminating the need for constant manual monitoring.

## Architecture

- **Frontend:** Micro Frontends with Module Federation
- **Backend:** Microservices with Spring Boot
- **ML/AI:** YOLOv8 for object detection
- **Infrastructure:** Docker & Docker Compose

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js v18+** - [Download](https://nodejs.org)
- **npm v9+** - Comes with Node.js
- **Git** - [Download](https://git-scm.com)
- **Docker Desktop** - [Download](https://www.docker.com/products/docker-desktop) *(Required from Milestone 2)*

### Quick Verification
```bash
node --version    # Should show v18.x.x or higher
npm --version     # Should show 9.x.x or higher
git --version     # Should show 2.x.x or higher
```

### Using Node Version Manager (Optional)

If you use `nvm`:
```bash
nvm use  # Automatically uses version from .nvmrc
```

## Quick Start (Milestone 1)

```bash
# Clone repository
git clone https://github.com/singhcoderX/surveillance-system.git
cd surveillance-system

# Install and start Shell App (Task 5-8)
cd frontend/shell-app
npm install
npm start  # http://localhost:3000

# Install and start Auth MFE (Task 9-12)
# In new terminal
cd frontend/auth-mfe
npm install
npm start  # http://localhost:3001
```

## 📝 Documentation

- [Port Configuration](docs/setup/port-configuration.md)
- [Quick Start Guide](docs/setup/quick-start.md)
