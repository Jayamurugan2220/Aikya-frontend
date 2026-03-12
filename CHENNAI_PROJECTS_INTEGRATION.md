# Chennai Projects Cloud Integration Guide

## Overview
This guide covers the complete integration of Chennai area project images with cloud bucket storage and CMS system, matching the existing architecture used for other content in the application.

---

## 📁 Project Structure

### Frontend Structure
```
frontend/src/
├── assets/
│   ├── chennaiImages.ts              # Local images (default)
│   ├── chennaiImages-cloud.ts        # Cloud bucket URLs (generated)
│   └── images/
│       ├── tambaram/                  # 6 images (t1-t6)
│       ├── perugalathur/              # 2 images (p1-p2)
│       ├── hastinapuram/              # 1 image (h1)
│       ├── gudavancherry/             # 3 images (g1-g3)
│       └── chithlapakam/              # 5 images (c1-c5)
├── pages/
│   └── ChennaiProjects.tsx            # Chennai projects display page
└── components/
    └── ProjectsLocationSection.tsx    # Homepage location cards

### Backend Structure
```
backend/
├── config/
│   └── storage.js                     # Cloud bucket configuration
├── routes/
│   ├── upload.js                      # Image upload endpoint
│   └── images.js                      # Image proxy endpoint
└── scripts/
    ├── migrateChennaiImagesToCloud.js # Migration script
    ├── seedChennaiAreaProjects.js     # Local DB seed
    └── seedChennaiAreaProjects-cloud.js # Cloud DB seed (generated)
```

---

## 🚀 Quick Start

### Option 1: Using Local Images (Development)
No setup needed! The system works out of the box with local images.

1. Start the application:
   ```bash
   npm run dev
   ```

2. Visit: `http://localhost:5173/projects/chennai`

### Option 2: Migrating to Cloud (Production)

#### Windows
```bash
migrate-chennai-images.bat
```

#### Linux/Mac
```bash
chmod +x migrate-chennai-images.sh
./migrate-chennai-images.sh
```

#### Manual Steps
```bash
# 1. Upload images to cloud bucket
cd backend
node scripts/migrateChennaiImagesToCloud.js

# 2. Seed database with cloud URLs
node scripts/seedChennaiAreaProjects-cloud.js

# 3. Update frontend imports (if needed)
# Replace chennaiImages.ts imports with chennaiImages-cloud.ts

# 4. Restart servers
```

---

## 🏗️ System Architecture

### Image Storage Flow

```
Local Images (Development)
└─> frontend/src/assets/images/{area}/*.jpeg
    └─> Direct import in React components

Cloud Storage (Production)
└─> Cloud Bucket (S3-compatible Garage storage)
    └─> Backend Proxy API (/api/images/{filename})
        └─> Frontend components
```

### Data Flow

```
User clicks "View Project" on Chennai card
    ↓
Navigate to /projects/chennai
    ↓
ChennaiProjects.tsx loads
    ↓
Try fetching from CMS API
    ↓
    ├─> Success: Display CMS data (with cloud URLs)
    └─> Fallback: Generate from local images
```

---

## 🗄️ Database Integration

### Collection Structure
```javascript
CMSItems Collection
{
  collectionName: "projects",
  items: [
    {
      _id: ObjectId,
      name: "Aikya Tambaram Heights",
      location: "Tambaram, Chennai",
      area: "tambaram",               // Key for filtering
      category: "residential",
      type: "apartment",
      status: "ongoing",              // completed | ongoing | upcoming
      image: "http://localhost:5000/api/images/chennai-tambaram-t1.jpeg",
      images: [...],                  // Multiple images
      amenities: ["24/7 Security", ...],
      description: "...",
      createdAt: Date,
      updatedAt: Date
    }
  ]
}
```

### Chennai Areas
- **tambaram** → Tambaram
- **perugalathur** → Perugalathur
- **hastinapuram** → Hastinapuram
- **gudavancherry** → Gudavancherry
- **chithlapakam** → Chithlapakam

---

## 📡 API Endpoints

### Get Chennai Projects
```http
GET /api/cms-items/projects/items
Response: { success: true, data: [...projects] }
```

Filter Chennai projects by checking `area` field:
```javascript
const chennaiAreas = ['tambaram', 'perugalathur', 'hastinapuram', 'gudavancherry', 'chithlapakam'];
const chennaiProjects = allProjects.filter(p => 
  p.area && chennaiAreas.includes(p.area)
);
```

### Upload Image
```http
POST /api/upload/single
Headers: Authorization: Bearer {token}
Body: FormData { image: File }
Response: { success: true, url: "http://..." }
```

### Get Image (Proxy)
```http
GET /api/images/{filename}
Response: Image binary data
```

---

## 🔧 Configuration

### Environment Variables
```env
# Backend (.env)
MONGODB_URI=mongodb://127.0.0.1:27017/future-builders-studio
JWT_SECRET=your-secret-key

# Cloud Storage
STORAGE_ENDPOINT=https://request.storage.portal.welocalhost.com
STORAGE_BUCKET_NAME=aikya
STORAGE_REGION=garage
STORAGE_KEY_ID=GK067c7c4ab99be317db32f2f9
STORAGE_SECRET_KEY=7927bbfca0480d7fc2b51ad47eaf64a812d698a55e1b27e836ad64cf910ce10c

# Server
BASE_URL=http://localhost:5000
USE_LOCAL_STORAGE=false  # Set to true for local storage
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000
```

---

## 💻 Component Usage

### ChennaiProjects.tsx Features

1. **Dynamic Data Loading**
   - Fetches from CMS API first
   - Falls back to local images if CMS unavailable
   
2. **Area Filtering**
   - "All Areas" shows all Chennai projects
   - Individual area tabs filter by specific location
   
3. **Image Preview**
   - Click any project card to view fullscreen image
   - ESC or click outside to close

4. **Responsive Design**
   - Mobile: 1 column
   - Tablet: 2 columns
   - Desktop: 3 columns

### ProjectsLocationSection.tsx Integration

```typescript
const handleViewProject = (locationName: string) => {
  if (locationName.toLowerCase().includes('chennai')) {
    navigate('/projects/chennai');
  } else {
    navigate('/projects');
  }
};
```

---

## 🛠️ CMS Management

### Adding New Chennai Projects via Admin Panel

1. Login to admin panel: `/admin-cms`
2. Navigate to "Projects Management"
3. Click "Add New Project"
4. Fill in details:
   - **Name**: Project name
   - **Location**: "{Area}, Chennai"
   - **Area**: Select from dropdown (tambaram, perugalathur, etc.)
   - **Category**: residential/commercial
   - **Status**: completed/ongoing/upcoming
   - **Image**: Upload file
5. Save

### Bulk Upload via Script

For adding multiple projects at once:
```bash
node backend/scripts/seedChennaiAreaProjects-cloud.js
```

---

## 📊 Migration Script Details

### What It Does

1. **Scans Folders**: Finds all images in Chennai area subfolders
2. **Uploads to Cloud**: Sends each image to cloud bucket
3. **Generates URLs**: Creates proxy URLs for each image
4. **Creates Files**:
   - `chennaiImages-cloud.ts` - Frontend imports
   - `seedChennaiAreaProjects-cloud.js` - Database seed script
   - `chennai-migration-results.json` - Migration log

### Migration Output

```
📊 CHENNAI AREAS MIGRATION SUMMARY
Total Images: 17
✅ Uploaded: 17
❌ Failed: 0

By Area:
  tambaram       : 6/6 uploaded
  perugalathur   : 2/2 uploaded
  hastinapuram   : 1/1 uploaded
  gudavancherry  : 3/3 uploaded
  chithlapakam   : 5/5 uploaded
```

---

## 🔍 Troubleshooting

### Images Not Loading

**Problem**: Images show broken links

**Solutions**:
1. Check if backend server is running
2. Verify cloud bucket credentials in `.env`
3. Check if images are uploaded: `node backend/scripts/migrateChennaiImagesToCloud.js`
4. Test proxy endpoint: `curl http://localhost:5000/api/images/{filename}`

### CMS Not Showing Chennai Projects

**Problem**: No projects appear on Chennai page

**Solutions**:
1. Check if MongoDB is running
2. Run seed script: `node backend/scripts/seedChennaiAreaProjects-cloud.js`
3. Verify data in MongoDB:
   ```javascript
   db.cmsitems.findOne({ collectionName: "projects" })
   ```
4. Check browser console for API errors

### Migration Script Fails

**Problem**: Migration script throws errors

**Solutions**:
1. Ensure images exist in folders
2. Check cloud bucket credentials
3. Verify network connectivity
4. Check disk space for uploads directory

---

## 📝 Adding New Chennai Areas

To add a new area (e.g., "Velachery"):

1. **Create folder**: `frontend/src/assets/images/velachery/`
2. **Add images**: Place images in folder (v1.jpeg, v2.jpeg, etc.)
3. **Update arrays**:
   ```typescript
   // chennaiImages.ts
   const chennaiAreas = [..., 'velachery'];
   
   // Import images
   import v1 from './images/velachery/v1.jpeg';
   
   // Add to exports
   export const chennaiAreaImages = {
     ...existing,
     velachery: [v1, v2, ...]
   };
   
   export const areaDisplayNames = {
     ...existing,
     velachery: 'Velachery'
   };
   ```
4. **Run migration**: `migrate-chennai-images.bat`

---

## 🔒 Security Notes

- Images are served through backend proxy (not direct cloud access)
- Upload endpoint requires authentication
- Cloud credentials stored in backend only
- All uploads validated for image types only

---

## 📈 Performance Optimization

### Caching
- Images cached for 1 year (`Cache-Control: max-age=31536000`)
- Browser automatically caches repeated requests

### Lazy Loading
- Images use `loading="lazy"` attribute
- Only loads visible images first

### Image Optimization
- Consider compressing images before upload
- Recommended: JPG quality 85%, max width 1920px

---

## 🎯 Future Enhancements

- [ ] Add image upload via CMS admin panel
- [ ] Support for multiple images per project (gallery)
- [ ] Image optimization on upload
- [ ] Video support for projects
- [ ] Project details page with full information
- [ ] Search and filter functionality
- [ ] Export/Import project data

---

## 📞 Support

For issues or questions:
1. Check this documentation
2. Review error logs in `backend/scripts/chennai-migration-results.json`
3. Check browser console for frontend errors
4. Verify backend logs for API errors

---

## ✅ Checklist

### Before Deployment
- [ ] All images uploaded to cloud bucket
- [ ] Database seeded with cloud URLs
- [ ] Environment variables configured
- [ ] Backend server tested with image proxy
- [ ] Frontend tested with cloud images
- [ ] Navigation working from homepage
- [ ] CMS updates reflected on page

### Production Ready
- [ ] `USE_LOCAL_STORAGE=false` in backend .env
- [ ] Frontend using cloud URLs
- [ ] All images loading correctly
- [ ] Performance tested
- [ ] Security verified

---

**Last Updated**: March 5, 2026
**Version**: 1.0.0
