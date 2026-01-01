# Prerequisites

Complete guide for setting up your development environment.

## Required Tools

### 1. Node.js (v18 or higher)

**Check if installed:**
```bash
node --version
```

**Expected output:** `v18.17.0` or higher

**Installation:**
- **macOS:** 
```bash
  brew install node@18
  # OR use nvm (recommended)
  brew install nvm
  nvm install 18
  nvm use 18
```
  
- **Windows:** 
  - Download installer from https://nodejs.org
  - OR use nvm-windows: https://github.com/coreybutler/nvm-windows
  
- **Linux:**
```bash
  # Using nvm (recommended)
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
  nvm install 18
  nvm use 18
  
  # OR using NodeSource
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
  sudo apt-get install -y nodejs
```

---

### 2. npm (v9 or higher)

npm is included with Node.js.

**Check if installed:**
```bash
npm --version
```

**Expected output:** `9.6.7` or higher

---

### 3. Git

**Check if installed:**
```bash
git --version
```

**Expected output:** `git version 2.39.0` or higher

**Installation:**
- **macOS:** `brew install git` (or comes with Xcode Command Line Tools)
- **Windows:** https://git-scm.com/download/win
- **Linux:** `sudo apt-get install git`

---

### 4. Docker Desktop (Required from Milestone 2)

**Check if installed:**
```bash
docker --version
docker ps
```

**Expected output:** 
```
Docker version 24.0.6
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

**Installation:**
- **macOS/Windows:** https://www.docker.com/products/docker-desktop
- **Linux:**
```bash
  curl -fsSL https://get.docker.com -o get-docker.sh
  sudo sh get-docker.sh
  sudo usermod -aG docker $USER
```

**Note:** Docker is not needed for Milestone 1 (frontend only), but will be required starting Milestone 2.

---

### 5. VS Code (Recommended)

**Check if installed:**
```bash
code --version
```

**Installation:** https://code.visualstudio.com

#### Recommended Extensions

Install these for better development experience:

**Essential:**
1. **ES7+ React/Redux/React-Native snippets** (`dsznajder.es7-react-js-snippets`)
2. **ESLint** (`dbaeumer.vscode-eslint`)
3. **Prettier - Code formatter** (`esbenp.prettier-vscode`)
4. **Auto Rename Tag** (`formulahendry.auto-rename-tag`)

**Helpful:**
5. **Docker** (`ms-azuretools.vscode-docker`)
6. **GitLens** (`eamodio.gitlens`)
7. **Path Intellisense** (`christian-kohler.path-intellisense`)
8. **npm Intellisense** (`christian-kohler.npm-intellisense`)

---

## Node Version Management

This project uses Node.js v18. We include a `.nvmrc` file to specify this.

### Using nvm (Node Version Manager)

**Install nvm:**
- **macOS/Linux:** https://github.com/nvm-sh/nvm
- **Windows:** https://github.com/coreybutler/nvm-windows

**Usage:**
```bash
# Navigate to project directory
cd surveillance-system

# Install and use the correct Node version
nvm install  # Reads from .nvmrc
nvm use      # Uses version from .nvmrc

# Verify
node --version  # Should show v18.17.0
```

