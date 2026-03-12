# Cloud Storage Bucket Configuration Guide

## Issue: Images Upload but Don't Display

If you see "Image load error" in the console after uploading images, your bucket needs proper access permissions.

## Solution Applied ✅

### 1. Backend Configuration Updated
We've configured the upload function to set `ACL: 'public-read'` on all uploaded files, making them publicly accessible.

**File**: `backend/config/storage.js`
```javascript
ACL: 'public-read', // Make uploaded files publicly accessible
```

### 2. Bucket Permissions Required

Your bucket (`aikya`) needs these settings:

#### **Option A: Using Garage Console/CLI**

If you have access to your Garage storage console:

1. **Bucket Policy** - Set public read access:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::aikya/*"
    }
  ]
}
```

2. **CORS Configuration** - Allow browser access:
```json
[
  {
    "AllowedOrigins": ["*"],
    "AllowedMethods": ["GET", "HEAD"],
    "AllowedHeaders": ["*"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3600
  }
]
```

#### **Option B: Contact Storage Provider**

If you don't have console access, contact your storage provider (welocalhost.com) and request:

1. ✅ Enable **public read access** for bucket `aikya`
2. ✅ Configure **CORS** to allow GET requests from any origin
3. ✅ Verify bucket ACL allows public listing (optional)

## How to Test

### After Configuration:

1. **Upload a new image** in the admin panel
2. **Check the URL** in console: `https://request.storage.portal.welocalhost.com/aikya/filename.png`
3. **Open URL directly** in browser - image should load
4. **Refresh the website** - image should appear

### Test URLs:
Try opening these in your browser:
- Direct bucket URL: `https://request.storage.portal.welocalhost.com/aikya/`
- Test image URL: `https://request.storage.portal.welocalhost.com/aikya/screenshot-2026-02-25-184135.png`

## Troubleshooting

### Error: "Access Denied" or "403 Forbidden"
- Bucket policy not set correctly
- File ACL not public-read
- Contact storage provider

### Error: "CORS Error" in console
- CORS not configured on bucket
- Add CORS configuration (see above)

### Error: "Network Error"
- Check bucket endpoint URL
- Verify credentials are correct
- Check firewall/network settings

## Alternative: Local Storage (Development)

If cloud storage issues persist, you can temporarily switch to local storage:

**In `.env` file:**
```
USE_LOCAL_STORAGE=true
```

This stores images locally in `backend/uploads/` folder. Good for testing, but images won't persist in production deployments.

## Current Configuration

- **Bucket**: `aikya`
- **Endpoint**: `https://request.storage.portal.welocalhost.com`
- **Region**: `garage`
- **Access**: Public read (newly configured)

## Need Help?

Contact your storage provider: [welocalhost.com](https://welocalhost.com)

Request: "Please enable public read access and CORS for my bucket `aikya`"
