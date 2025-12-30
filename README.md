# surveillance-system
An intelligent CCTV monitoring system that automates surveillance by detecting specific activities and sending real-time alerts, eliminating the need for constant manual monitoring.

## 🏗️ Architecture

- **Frontend:** Micro Frontends with Module Federation
- **Backend:** Microservices with Spring Boot
- **ML/AI:** YOLOv8 for object detection
- **Infrastructure:** Docker & Docker Compose

## 🚀 Quick Start (Milestone 1)

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
