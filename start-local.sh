#!/bin/bash

echo "========================================"
echo "  Aikya Builders - Local Development"
echo "========================================"
echo ""

echo "[1/4] Setting up Backend environment..."
cd backend
if [ -f .env.local ]; then
    cp .env.local .env
    echo "✓ Backend .env configured"
else
    echo "⚠ Warning: .env.local not found in backend"
fi

echo ""
echo "[2/4] Starting Backend server..."
if command -v gnome-terminal &> /dev/null; then
    gnome-terminal -- bash -c "npm start; exec bash" &
elif command -v xterm &> /dev/null; then
    xterm -e "npm start" &
else
    npm start &
fi

sleep 3

echo ""
echo "[3/4] Setting up Frontend environment..."
cd ../frontend
if [ -f .env.local ]; then
    cp .env.local .env
    echo "✓ Frontend .env configured"
else
    echo "⚠ Warning: .env.local not found in frontend"
fi

echo ""
echo "[4/4] Starting Frontend dev server..."
if command -v gnome-terminal &> /dev/null; then
    gnome-terminal -- bash -c "npm run dev; exec bash" &
elif command -v xterm &> /dev/null; then
    xterm -e "npm run dev" &
else
    npm run dev &
fi

echo ""
echo "========================================"
echo "  ✅ Development servers starting..."
echo "========================================"
echo ""
echo "Backend:  http://localhost:5000"
echo "Frontend: http://localhost:8080 (or port shown in terminal)"
echo ""
