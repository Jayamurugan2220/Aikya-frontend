#!/bin/bash

echo "========================================"
echo "Chennai Images Cloud Migration Script"
echo "========================================"
echo ""

cd backend

echo "Step 1: Migrating Chennai area images to cloud bucket..."
node scripts/migrateChennaiImagesToCloud.js

if [ $? -ne 0 ]; then
    echo ""
    echo "ERROR: Image migration failed!"
    echo "Please check the error messages above."
    exit 1
fi

echo ""
echo "========================================"
echo "Step 2: Seeding Chennai projects to database..."
node scripts/seedChennaiAreaProjects-cloud.js

if [ $? -ne 0 ]; then
    echo ""
    echo "ERROR: Database seeding failed!"
    echo "Please check the error messages above."
    exit 1
fi

echo ""
echo "========================================"
echo "SUCCESS! Chennai images are now in the cloud!"
echo "========================================"
echo ""
echo "Next steps:"
echo "1. Restart your frontend server"
echo "2. Visit http://localhost:5173/projects/chennai"
echo "3. Verify images load from cloud bucket"
echo ""
