#!/bin/bash

echo "🚀 Setting up Image Upload System for Aikya Builds Future"
echo "=========================================="

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install multer axios form-data
echo "✅ Backend dependencies installed"

echo ""
echo "🎉 Setup Complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Start backend: cd backend && npm run dev"
echo "2. Start frontend: cd frontend && npm run dev"
echo "3. Login as admin and go to /admin-cms"
echo "4. Use ImageUpload component to upload images to cloud"
echo ""
echo "📚 Read IMAGE_UPLOAD_GUIDE.md for detailed usage instructions"
echo "📝 See EXAMPLE_LEADERSHIP_INTEGRATION.tsx for code example"
