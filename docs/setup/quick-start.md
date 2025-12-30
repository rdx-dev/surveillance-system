# Quick Start Guide - Milestone 1

## Goal
Get Shell App and Auth MFE running with Module Federation.

## Prerequisites
- Node.js v18+
- VS Code (recommended)

## Steps

### 1. Clone Repository
```bash
git clone https://github.com/singhcoderX/surveillance-system.git
cd surveillance-system
```

### 2. Setup Shell App (Coming in Task 5)
```bash
cd frontend/shell-app
npm install
npm start  # Will run on http://localhost:3000
```

### 3. Setup Auth MFE (Coming in Task 9)
```bash
# In a new terminal
cd frontend/auth-mfe
npm install
npm start  # Will run on http://localhost:3001
```

### 4. Verify Module Federation
Open http://localhost:3000 and navigate to `/login`  
The login page should load from Auth MFE (port 3001) into Shell App (port 3000)
