# 🚀 Quick Start

## For Local Development (just double-click!):

### Windows:
```
start-local.bat
```

### Mac/Linux:
```bash
chmod +x start-local.sh
./start-local.sh
```

This will:
- ✅ Configure local environment automatically
- ✅ Start backend at http://localhost:5000
- ✅ Start frontend at http://localhost:8080

---

## For Production Deployment:

1. **Make changes locally and test**
2. **Commit changes:**
   ```bash
   git add .
   git commit -m "Your message"
   ```
3. **Push to both repos:**
   ```bash
   # Backend
   cd backend
   git push origin main
   git push tharun main
   
   # Frontend
   cd frontend
   git push origin main
   git push tharun main
   ```
4. **Dokploy auto-deploys** (wait 2-5 minutes)

---

## 📖 Full Documentation

See [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) for complete documentation.

---

## Environment Files

| File | Purpose | Git Tracked? |
|------|---------|--------------|
| `.env.local` | Local dev config | ✅ Yes |
| `.env.production` | Production config | ✅ Yes |
| `.env` | Active config (auto-generated) | ❌ No |

**Never commit `.env` directly!**
