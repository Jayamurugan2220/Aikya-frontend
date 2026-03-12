# 🚀 Quick Reference - Image Upload System

## Setup (One-Time)
```bash
cd backend
npm install multer axios form-data
npm run dev
```

## Using ImageUpload Component

### Import
```tsx
import ImageUpload from '@/components/ImageUpload';
```

### Basic Usage
```tsx
<ImageUpload
  currentImage={yourImageUrl}
  label="Upload Image"
  onUploadComplete={(url) => {
    // url is the cloud CDN link
    setYourImage(url);
  }}
/>
```

### Full Example
```tsx
const [leader, setLeader] = useState({
  name: 'John Doe',
  image: ''
});

<ImageUpload
  currentImage={leader.image}
  label="Leader Photo"
  onUploadComplete={(cloudUrl) => {
    setLeader({ ...leader, image: cloudUrl });
    console.log('Uploaded to:', cloudUrl);
  }}
/>
```

## API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/upload/single` | POST | Upload 1 image |
| `/api/upload/multiple` | POST | Upload up to 10 images |
| `/api/upload/delete` | DELETE | Remove image from bucket |
| `/api/upload/test` | GET | Test if service is running |

## Bucket Credentials
```javascript
Bucket Name: aikya
Endpoint: https://request.storage.portal.welocalhost.com/
Max Size: 10MB per image
Allowed: JPG, PNG, WEBP, GIF
```

## Common Patterns

### Multiple Images (Array)
```tsx
{images.map((img, index) => (
  <ImageUpload
    key={index}
    currentImage={img}
    label={`Image ${index + 1}`}
    onUploadComplete={(url) => {
      const updated = [...images];
      updated[index] = url;
      setImages(updated);
    }}
  />
))}
```

### With Loading State
```tsx
const [uploading, setUploading] = useState(false);

<ImageUpload
  currentImage={image}
  onUploadComplete={(url) => {
    setImage(url);
    setUploading(false);
  }}
/>
```

## Troubleshooting

**Upload fails with 401?**
- Make sure you're logged in as admin
- Check JWT token in localStorage

**Image doesn't display?**
- Verify the URL returned from upload
- Check browser console for CORS errors

**File too large error?**
- Max 10MB per file
- Compress images before upload

## Test Upload
```bash
# Check if service is running
curl http://localhost:5000/api/upload/test

# Expected response:
{
  "success": true,
  "message": "Upload service is running",
  "maxFileSize": "10MB"
}
```

## Component Props

```typescript
interface ImageUploadProps {
  onUploadComplete: (imageUrl: string) => void;  // Required
  currentImage?: string;                          // Optional
  label?: string;                                 // Optional
  className?: string;                             // Optional
}
```

## Features
✅ Auto-upload to cloud  
✅ Image preview  
✅ Progress indicator  
✅ File validation  
✅ Unique filenames  
✅ Delete old images  
✅ Mobile responsive  

---

**Need help?** Check `IMAGE_UPLOAD_GUIDE.md` for full documentation.
