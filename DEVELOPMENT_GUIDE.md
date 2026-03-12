# Development Guide - Aikya Builders

## 🚀 Quick Start - Local Development

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas connection)
- Git

---

## 📁 Environment Setup

### Backend Setup

1. **Navigate to backend folder:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Use local environment:**
   - The project already has `.env.local` configured
   - Copy it to `.env` for local development:
   
   **Windows:**
   ```powershell
   Copy-Item .env.local .env
   ```
   
   **Mac/Linux:**
   ```bash
   cp .env.local .env
   ```

4. **Start backend server:**
   ```bash
   npm start
   ```
   
   Backend will run at: **http://localhost:5000**

---

### Frontend Setup

1. **Navigate to frontend folder:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Use local environment:**
   - The project already has `.env.local` configured
   - Copy it to `.env` for local development:
   
   **Windows:**
   ```powershell
   Copy-Item .env.local .env
   ```
   
   **Mac/Linux:**
   ```bash
   cp .env.local .env
   ```

4. **Start frontend dev server:**
   ```bash
   npm run dev
   ```
   
   Frontend will run at: **http://localhost:8080** (or the port shown in terminal)

---

## 🔄 Switching Between Environments

### For Local Development:
```bash
# Backend
cd backend
Copy-Item .env.local .env    # Windows
# or
cp .env.local .env           # Mac/Linux

# Frontend
cd frontend
Copy-Item .env.local .env    # Windows
# or
cp .env.local .env           # Mac/Linux
```

### For Production Deployment:
```bash
# Backend
cd backend
Copy-Item .env.production .env    # Windows
# or
cp .env.production .env           # Mac/Linux

# Frontend
cd frontend
Copy-Item .env.production .env    # Windows
# or
cp .env.production .env           # Mac/Linux
```

**⚠️ IMPORTANT:** Never commit `.env` files to Git!

---

## 📝 Environment Files Overview

### Backend

| File | Purpose | Committed to Git? |
|------|---------|------------------|
| `.env.local` | Local development | ✅ Yes (for team) |
| `.env.production` | Production config | ✅ Yes (for team) |
| `.env` | Active config | ❌ No (in .gitignore) |

**Local Backend (.env.local):**
- `PORT=5000`
- `MONGODB_URI=` (shared MongoDB Atlas)
- `FRONTEND_URL=http://localhost:8080`
- `USE_LOCAL_STORAGE=true`

**Production Backend (.env.production):**
- `PORT=5000`
- `MONGODB_URI=` (same MongoDB Atlas)
- `FRONTEND_URL=https://aikiyabuilders.welocalhost.com`
- `USE_LOCAL_STORAGE=false` (uses cloud storage)

### Frontend

| File | Purpose | Committed to Git? |
|------|---------|------------------|
| `.env.local` | Local development | ✅ Yes (for team) |
| `.env.production` | Production build | ✅ Yes (for team) |
| `.env` | Active config | ❌ No (in .gitignore) |

**Local Frontend (.env.local):**
- `VITE_API_URL=http://localhost:5000/api`

**Production Frontend (.env.production):**
- `VITE_API_URL=https://api.aikiyabuilders.welocalhost.com/api`

---

## 🎯 Complete Local Development Workflow

### Step 1: Start Backend
```bash
cd backend
Copy-Item .env.local .env     # Copy local config
npm install                    # Install dependencies (first time)
npm start                      # Start server
```
✅ Backend running at http://localhost:5000

### Step 2: Start Frontend (New Terminal)
```bash
cd frontend
Copy-Item .env.local .env     # Copy local config
npm install                    # Install dependencies (first time)
npm run dev                    # Start dev server
```
✅ Frontend running at http://localhost:8080

### Step 3: Develop!
- Make changes to code
- Hot reload will update automatically
- Test locally before pushing

---

## 🚢 Deploying to Production

### Step 1: Test Locally
```bash
# Make sure everything works locally first
npm start    # in backend
npm run dev  # in frontend
```

### Step 2: Commit Your Changes
```bash
git add .
git commit -m "Your commit message"
```

### Step 3: Push to Repositories
```bash
# For Backend
cd backend
git push origin main
git push tharun main

# For Frontend
cd frontend
git push origin main
git push tharun main
```

### Step 4: Dokploy Auto-Deploy
- Dokploy will automatically detect the push
- It will use `.env.production` settings (from Dokploy dashboard)
- Wait 2-5 minutes for deployment to complete

### Step 5: Verify Production
- Visit: https://aikiyabuilders.welocalhost.com
- Check all functionality works

---

## 🛠️ Helper Scripts

Create these files in the root directory for easy switching:

### `start-local.bat` (Windows)
```batch
@echo off
echo Starting Aikya Builders - Local Development
echo.

echo Setting up Backend...
cd backend
copy /Y .env.local .env
start cmd /k "npm start"

timeout /t 3

echo Setting up Frontend...
cd ..\frontend
copy /Y .env.local .env
start cmd /k "npm run dev"

echo.
echo ✅ Local development servers starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:8080
```

### `start-local.sh` (Mac/Linux)
```bash
#!/bin/bash
echo "Starting Aikya Builders - Local Development"
echo ""

echo "Setting up Backend..."
cd backend
cp .env.local .env
gnome-terminal -- bash -c "npm start; exec bash" &

sleep 3

echo "Setting up Frontend..."
cd ../frontend
cp .env.local .env
gnome-terminal -- bash -c "npm run dev; exec bash" &

echo ""
echo "✅ Local development servers starting..."
echo "Backend: http://localhost:5000"
echo "Frontend: http://localhost:8080"
```

---

## 📚 Common Commands

### Backend
```bash
npm start          # Start server
npm run dev        # Start with nodemon (auto-restart)
node scripts/xxx   # Run utility scripts
```

### Frontend
```bash
npm run dev        # Start dev server with hot reload
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Check code quality
```

---

## 🐛 Troubleshooting

### Backend won't start
```bash
# Check if port 5000 is already in use
netstat -ano | findstr :5000    # Windows
lsof -i :5000                   # Mac/Linux

# Kill the process if needed
taskkill /PID <PID> /F          # Windows
kill -9 <PID>                   # Mac/Linux
```

### Frontend can't connect to backend
1. Check backend is running at http://localhost:5000
2. Verify `.env` has `VITE_API_URL=http://localhost:5000/api`
3. Restart frontend dev server after changing .env

### MongoDB connection error
1. Check MongoDB Atlas is accessible
2. Verify `MONGODB_URI` in `.env`
3. Check your IP is whitelisted in MongoDB Atlas

### CORS errors
1. Backend `.env` should have `FRONTEND_URL=http://localhost:8080`
2. Restart backend after changing `.env`

---

## ✅ Checklist Before Pushing to Production

- [ ] Code works perfectly locally
- [ ] All console errors fixed
- [ ] Tested on mobile responsive view
- [ ] Environment variables verified
- [ ] Committed to both repos (origin & tharun)
- [ ] Verified Dokploy environment variables are set
- [ ] Tested production site after deployment

---

## 📞 Need Help?

- Check backend logs: Look at terminal running `npm start`
- Check frontend logs: Open browser DevTools (F12) → Console
- Check Dokploy logs: Dokploy dashboard → Your project → Logs

---

**Happy Coding! 🚀**
