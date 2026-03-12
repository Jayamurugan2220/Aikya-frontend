# Image Upload System - Complete Integration Guide

## Overview
Your project now has a complete cloud storage integration system that allows uploading images to your "aikya" bucket and managing them through the CMS.

## 🔧 Backend Setup

### 1. Install Dependencies
```bash
cd backend
npm install multer axios form-data
```

### 2. Files Created

#### `backend/config/storage.js`
- Cloud storage service with your bucket credentials
- Functions: `uploadToStorage()`, `deleteFromStorage()`, `generateUniqueFileName()`

#### `backend/routes/upload.js`
- **POST** `/api/upload/single` - Upload single image
- **POST** `/api/upload/multiple` - Upload multiple images (max 10)
- **DELETE** `/api/upload/delete` - Delete image from bucket
- **GET** `/api/upload/test` - Test endpoint

#### `backend/middleware/auth.js`
- `authenticateAdmin()` - Protects upload routes (admin only)

### 3. API Integration
Upload routes are automatically included in `server.js` at `/api/upload`

---

## 🎨 Frontend Setup

### 1. Files Created

#### `frontend/src/components/ImageUpload.tsx`
Reusable image upload component with:
- Drag & drop preview
- Progress indicator
- 10MB file size limit
- Image validation
- Cloud upload with loading states

#### Updated `frontend/src/services/api.ts`
Added `uploadAPI` with methods:
- `uploadSingle(file)` - Upload one image
- `uploadMultiple(files)` - Upload multiple
- `deleteImage(url)` - Delete from cloud

---

## 📝 How to Use in CMS

### Example: Adding Image Upload to Leadership Section

```tsx
import ImageUpload from '@/components/ImageUpload';

// In your AdminCMS.tsx or any form:

const [leadershipData, setLeadershipData] = useState({
  heading: '',
  leaders: [
    { name: '', role: '', bio: '', image: '' }
  ],
});

// In your JSX form:
<div>
  <h3>Leader Image</h3>
  <ImageUpload
    currentImage={leadershipData.leaders[0].image}
    label="Upload Leader Photo"
    onUploadComplete={(imageUrl) => {
      // Update your state with the cloud URL
      setLeadershipData(prev => ({
        ...prev,
        leaders: [
          { ...prev.leaders[0], image: imageUrl }
        ]
      }));
    }}
  />
</div>
```

### Multiple Images Example (Projects/Services):

```tsx
{servicesData.services.map((service, index) => (
  <div key={index}>
    <h3>{service.title}</h3>
    
    {/* Upload multiple images for this service */}
    {service.images.map((img, imgIndex) => (
      <ImageUpload
        key={imgIndex}
        currentImage={img}
        label={`Service Image ${imgIndex + 1}`}
        onUploadComplete={(imageUrl) => {
          const updatedServices = [...servicesData.services];
          updatedServices[index].images[imgIndex] = imageUrl;
          setServicesData({ ...servicesData, services: updatedServices });
        }}
      />
    ))}
  </div>
))}
```

---

## 🔄 Complete Integration Steps

### Step 1: Start Backend with New Dependencies
```bash
cd backend
npm install
npm run dev
```

### Step 2: Test Upload Endpoint
```bash
curl http://localhost:5000/api/upload/test
```

### Step 3: Add ImageUpload Component to AdminCMS

Open `frontend/src/pages/AdminCMS.tsx` and import:

```tsx
import ImageUpload from '@/components/ImageUpload';
```

### Step 4: Replace Text Input with ImageUpload

**Before:**
```tsx
<Input
  placeholder="Image URL"
  value={leaderData.image}
  onChange={(e) => setLeaderData({...leaderData, image: e.target.value})}
/>
```

**After:**
```tsx
<ImageUpload
  currentImage={leaderData.image}
  label="Leader Photo"
  onUploadComplete={(url) => setLeaderData({...leaderData, image: url})}
/>
```

---

## 📤 Example API Usage

### Upload from Frontend:
```javascript
import { uploadAPI } from '@/services/api';

const handleFileUpload = async (file) => {
  try {
    const result = await uploadAPI.uploadSingle(file);
    console.log('Uploaded URL:', result.data.url);
    // Use result.data.url in your forms
  } catch (error) {
    console.error('Upload failed:', error);
  }
};
```

### Direct API Call (Alternative):
```javascript
const formData = new FormData();
formData.append('image', file);

const response = await fetch('http://localhost:5000/api/upload/single', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`
  },
  body: formData
});

const data = await response.json();
console.log('Cloud URL:', data.data.url);
```

---

## 🗄️ Database Integration

Your MongoDB models already support image URLs. When you save content through CMS:

```javascript
// Before saving to database:
const leaderData = {
  name: "John Doe",
  role: "CEO",
  image: "https://request.storage.portal.welocalhost.com/aikya/leader-123.jpg" // Cloud URL
};

await cmsAPI.updateLeadership({ leaders: [leaderData] });
```

The image URL is automatically saved and will be served from cloud storage!

---

## 🎯 Sections That Need Image Upload

Add `ImageUpload` component to these sections in AdminCMS:

1. **Leadership** - Leader photos
2. **Testimonials** - Customer photos  
3. **Special Offers** - Project images
4. **Services** - Service gallery (4 images each)
5. **News Articles** - Article cover images
6. **CSR Initiatives** - Initiative images
7. **Events** - Event banners
8. **Group Companies** - Company logos
9. **Partnership** - Category images

---

## 🔐 Security Features

- ✅ Admin-only upload (protected by JWT)
- ✅ File type validation (images only)
- ✅ File size limit (10MB max)
- ✅ Unique filenames (prevents collisions)
- ✅ Secure bucket credentials

---

## 🚀 Quick Start Commands

```bash
# Install backend dependencies
cd backend
npm install

# Start backend
npm run dev

# In another terminal - start frontend
cd frontend
npm run dev
```

## Testing the Upload

1. Login as admin
2. Go to `/admin-cms`
3. Find any image field
4. Click "Upload Image" button
5. Select an image file
6. Image uploads to cloud automatically
7. Cloud URL is saved in database
8. Image displays from cloud storage

---

## 📋 Environment Variables

Make sure your `.env` has:

```env
JWT_SECRET=your_secret_key
MONGODB_URI=your_mongodb_connection
PORT=5000
```

No need to add bucket credentials to .env - they're already configured in `backend/config/storage.js`

---

## ✨ Features

- 📤 Direct upload to cloud bucket
- 🖼️ Image preview before upload
- ⚡ Progress indicators
- ❌ Delete unused images
- 🔄 Replace existing images
- 📱 Responsive UI
- 🎨 Drag & drop support (via click)
- ✅ Type & size validation

Your images are now stored in the cloud and can be edited anytime through the CMS!
