@echo off
echo ========================================
echo   Migrating Images to Cloud Bucket
echo   Aikya Builds Future
echo ========================================
echo.

cd backend

echo Step 1: Uploading 36 images to cloud bucket...
echo This may take a few minutes...
echo.
node scripts/migrateImagesToCloud.js

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Migration failed! Check the error above.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Step 2: Applying changes...
echo.
node scripts/applyCloudMigration.js

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Failed to apply changes! Check the error above.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Migration Complete!
echo ========================================
echo.
echo All 36 images are now stored in your cloud bucket!
echo.
echo What changed:
echo - Images uploaded to: https://request.storage.portal.welocalhost.com/
echo - imageAssets.ts now uses cloud URLs
echo - Original file backed up as imageAssets-local-backup.ts
echo.
echo Next steps:
echo 1. Restart your frontend:  cd frontend ^&^& npm run dev
echo 2. Test that all images load correctly
echo 3. Check migration-results.json for details
echo.
pause
