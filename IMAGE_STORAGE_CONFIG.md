# Image Upload Configuration

This project supports **both local and cloud storage** for images.

## Development (Local Storage)

By default, images are saved to `backend/uploads/` folder:

```env
USE_LOCAL_STORAGE=true
BASE_URL=http://localhost:5000
```

**Benefits:**
- Fast uploads (no network latency)
- No cloud storage costs
- Works offline
- Easy debugging

## Production (Cloud Storage)

Switch to cloud storage (Garage S3) for production:

```env
USE_LOCAL_STORAGE=false
BASE_URL=https://your-domain.com
```

**Setup:**
1. Copy `.env.production` to `.env`
2. Update `BASE_URL` with your domain
3. Ensure cloud storage credentials are correct
4. Deploy with cloud storage enabled

## How It Works

The system automatically detects the `USE_LOCAL_STORAGE` environment variable:

- **`true`**: Saves images to `backend/uploads/` folder
- **`false`**: Uploads images to cloud bucket

## Switching Between Modes

### Local → Cloud:
1. Set `USE_LOCAL_STORAGE=false` in `.env`
2. Restart backend server
3. New uploads go to cloud storage

### Cloud → Local:
1. Set `USE_LOCAL_STORAGE=true` in `.env`
2. Restart backend server
3. New uploads go to local storage

## Image URLs

- **Local**: `http://localhost:5000/uploads/filename.jpg`
- **Cloud**: `https://storage.domain.com/aikya/filename.jpg`

## Notes

- Old images are automatically deleted when replaced
- MongoDB stores the image URL (works with both modes)
- Frontend displays images from the URL in database
