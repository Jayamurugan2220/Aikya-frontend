# Backend API Deployment Guide

## Issue
Your frontend is deployed successfully, but the backend API is not running on `api.aikyabuilders.welocalhost.com`.

## Solution: Deploy Backend to Vercel

### Step 1: Update Environment Variables in .env
Ensure your `.env` file has the correct production settings:
```env
NODE_ENV=production
FRONTEND_URL=https://aikyabuilders.welocalhost.com
BASE_URL=https://api.aikyabuilders.welocalhost.com
USE_LOCAL_STORAGE=false
```

### Step 2: Deploy Backend as Separate Vercel Project

#### Option A: Using Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Navigate to backend folder**:
   ```bash
   cd backend
   ```

3. **Login to Vercel**:
   ```bash
   vercel login
   ```

4. **Deploy the backend**:
   ```bash
   vercel --prod
   ```

5. **Set Environment Variables** on Vercel Dashboard:
   - Go to: https://vercel.com/your-project/settings/environment-variables
   - Add all variables from your `.env` file:
     - `NODE_ENV=production`
     - `MONGODB_URI=your_mongodb_connection_string`
     - `JWT_SECRET=your_jwt_secret`
     - `STORAGE_BUCKET_NAME=aikya`
     - `STORAGE_KEY_ID=your_storage_key`
     - `STORAGE_SECRET_KEY=your_storage_secret`
     - `STORAGE_ENDPOINT=https://request.storage.portal.welocalhost.com`
     - `STORAGE_REGION=garage`
     - `FRONTEND_URL=https://aikyabuilders.welocalhost.com`

6. **Configure Custom Domain**:
   - Go to Project Settings > Domains
   - Add: `api.aikyabuilders.welocalhost.com`

#### Option B: Using Vercel Dashboard

1. Go to https://vercel.com/new
2. Import your repository
3. Set **Root Directory** to: `backend`
4. Click **Deploy**
5. Add environment variables (same as above)
6. Configure custom domain

### Step 3: Update Frontend API Base URL

Update your frontend to point to the deployed backend:

In `frontend/.env` or `frontend/vite.config.ts`:
```env
VITE_API_BASE_URL=https://api.aikyabuilders.welocalhost.com
```

### Step 4: Verify Deployment

Test these endpoints:
- Root: `https://api.aikyabuilders.welocalhost.com/`
- Health: `https://api.aikyabuilders.welocalhost.com/api/health`
- CMS: `https://api.aikyabuilders.welocalhost.com/api/cms/...`

## Alternative: Deploy Backend to Railway/Render

If you prefer a traditional server deployment (not serverless):

### Using Railway:
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize project
cd backend
railway init

# Add environment variables
railway variables set NODE_ENV=production
railway variables set MONGODB_URI=your_mongodb_uri
# ... add all other variables

# Deploy
railway up
```

### Using Render:
1. Go to https://render.com
2. Create New > Web Service
3. Connect your GitHub repository
4. Set:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
5. Add environment variables
6. Deploy

## CORS Configuration

After deploying, update `backend/server.js` CORS to include your frontend:

```javascript
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://aikyabuilders.welocalhost.com', 'https://api.aikyabuilders.welocalhost.com']
    : ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true,
}));
```

## Quick Deployment Commands

```bash
# From project root
cd backend
vercel --prod

# Or deploy both
vercel --prod  # Frontend (from root)
cd backend && vercel --prod  # Backend
```

## Troubleshooting

### "Cannot GET /" Error
- ✅ **Fixed**: Added root route handler
- **Solution**: Deploy backend with proper configuration

### CORS Errors
- Update `FRONTEND_URL` environment variable on Vercel
- Check CORS origin settings include your frontend domain

### MongoDB Connection Issues
- Verify `MONGODB_URI` is set in Vercel environment variables
- Check MongoDB Atlas allows connections from anywhere (0.0.0.0/0)

### 500 Internal Server Error
- Check Vercel logs: `vercel logs <deployment-url>`
- Verify all environment variables are set correctly

## Post-Deployment Checklist

- [ ] Backend deployed to `api.aikyabuilders.welocalhost.com`
- [ ] Environment variables configured on Vercel
- [ ] Root endpoint returns API info
- [ ] Health check endpoint returns OK status
- [ ] Frontend can make API requests
- [ ] Images load correctly from cloud storage
- [ ] CORS allows frontend domain
- [ ] MongoDB connection working

## Current Status

✅ **Root route added** - Server will now respond to "/" with API information
✅ **Backend vercel.json created** - Ready for serverless deployment
⏳ **Deploy backend** - Follow steps above to deploy

## Support

If you continue to experience issues:
1. Check Vercel deployment logs
2. Verify environment variables match your `.env` file
3. Test MongoDB connection string separately
4. Check network/firewall settings for API domain
