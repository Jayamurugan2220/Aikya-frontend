@echo off
echo ========================================
echo   Setting up Image Upload System
echo   for Aikya Builds Future
echo ========================================
echo.

echo Installing backend dependencies...
cd backend
call npm install multer axios form-data
echo.
echo Backend dependencies installed successfully!
echo.

echo ========================================
echo   Setup Complete!
echo ========================================
echo.
echo Next Steps:
echo 1. Start backend:  cd backend ^&^& npm run dev
echo 2. Start frontend: cd frontend ^&^& npm run dev  
echo 3. Login as admin and go to /admin-cms
echo 4. Use ImageUpload component to upload images
echo.
echo Read IMAGE_UPLOAD_GUIDE.md for detailed instructions
echo See EXAMPLE_LEADERSHIP_INTEGRATION.tsx for code example
echo.
pause
