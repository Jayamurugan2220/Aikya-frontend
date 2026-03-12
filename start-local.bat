@echo off
echo ========================================
echo   Aikya Builders - Local Development
echo ========================================
echo.

echo [1/4] Setting up Backend environment...
cd backend
if exist .env.local (
    copy /Y .env.local .env >nul 2>&1
    echo ✓ Backend .env configured
) else (
    echo ⚠ Warning: .env.local not found in backend
)

echo.
echo [2/4] Starting Backend server...
start "Aikya Backend" cmd /k "npm start"

timeout /t 3 >nul

echo.
echo [3/4] Setting up Frontend environment...
cd ..\frontend
if exist .env.local (
    copy /Y .env.local .env >nul 2>&1
    echo ✓ Frontend .env configured
) else (
    echo ⚠ Warning: .env.local not found in frontend
)

echo.
echo [4/4] Starting Frontend dev server...
start "Aikya Frontend" cmd /k "npm run dev"

echo.
echo ========================================
echo   ✅ Development servers starting...
echo ========================================
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:8080 (or port shown in terminal)
echo.
echo Press any key to exit this window...
pause >nul
