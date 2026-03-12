# Chennai Images Migration - Quick Start

## 🚀 Quick Migration (Recommended)

### Windows
```bash
migrate-chennai-images.bat
```

### Linux/Mac
```bash
chmod +x migrate-chennai-images.sh
./migrate-chennai-images.sh
```

This will:
1. ✅ Upload all Chennai area images to cloud bucket
2. ✅ Generate cloud URLs
3. ✅ Seed database with projects
4. ✅ Create necessary configuration files

---

## 📋 Manual Steps (If needed)

### Step 1: Upload Images to Cloud
```bash
cd backend
node scripts/migrateChennaiImagesToCloud.js
```

**Output**: 
- `chennai-migration-results.json` - Migration log
- `frontend/src/assets/chennaiImages-cloud.ts` - Cloud URLs

### Step 2: Seed Database
```bash
node scripts/seedChennaiAreaProjects-cloud.js
```

**Output**: Chennai projects added to database with cloud image URLs

### Step 3: Verify
1. Start servers:
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev
   
   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

2. Visit: `http://localhost:5173/projects/chennai`

3. Check if images load from cloud bucket

---

## 📁 Image Organization

Your Chennai images should be in these folders:
```
frontend/src/assets/images/
├── tambaram/       (6 images: t1-t6.jpeg)
├── perugalathur/   (2 images: p1-p2.jpeg)
├── hastinapuram/   (1 image: h1.jpeg)
├── gudavancherry/  (3 images: g1-g3.jpeg)
└── chithlapakam/   (5 images: c1-c5.jpeg)
```

**Total**: 17 images

---

## 🔧 Configuration Check

### Backend .env
```env
# MongoDB
MONGODB_URI=mongodb://127.0.0.1:27017/future-builders-studio

# Cloud Storage
STORAGE_ENDPOINT=https://request.storage.portal.welocalhost.com
STORAGE_BUCKET_NAME=aikya
STORAGE_REGION=garage
STORAGE_KEY_ID=GK067c7c4ab99be317db32f2f9
STORAGE_SECRET_KEY=7927bbfca0480d7fc2b51ad47eaf64a812d698a55e1b27e836ad64cf910ce10c
BASE_URL=http://localhost:5000
USE_LOCAL_STORAGE=false
```

### Frontend .env
```env
VITE_API_URL=http://localhost:5000
```

---

## ✅ Verification Checklist

After migration:

- [ ] All 17 images uploaded successfully
- [ ] `chennai-migration-results.json` shows 0 failures
- [ ] `chennaiImages-cloud.ts` file created
- [ ] `seedChennaiAreaProjects-cloud.js` file created
- [ ] Database contains Chennai projects
- [ ] `/projects/chennai` page loads
- [ ] Images display correctly
- [ ] Area filters work
- [ ] Click on image opens fullscreen preview

---

## 🐛 Troubleshooting

### "Image not found" errors
```bash
# Re-run migration
cd backend
node scripts/migrateChennaiImagesToCloud.js
```

### No projects showing
```bash
# Re-seed database
cd backend
node scripts/seedChennaiAreaProjects-cloud.js
```

### Cloud bucket connection issues
1. Check internet connection
2. Verify bucket credentials in `.env`
3. Test bucket access:
   ```bash
   curl https://request.storage.portal.welocalhost.com/aikya/
   ```

---

## 📚 Full Documentation

For complete details, see: **CHENNAI_PROJECTS_INTEGRATION.md**

---

## 🎯 What You Get

After successful migration:

✅ **17 Chennai project images** in cloud bucket  
✅ **Organized by 5 areas** (Tambaram, Perugalathur, etc.)  
✅ **Categorized display** on Chennai projects page  
✅ **Area filters** (All, Tambaram, Perugalathur, etc.)  
✅ **CMS integration** - Manageable through admin panel  
✅ **Fullscreen preview** - Click any image to view  
✅ **Production ready** - Served through CDN-like bucket  

---

**Need Help?** Check the full documentation in `CHENNAI_PROJECTS_INTEGRATION.md`
