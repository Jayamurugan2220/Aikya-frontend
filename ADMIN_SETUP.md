# Admin Setup Guide

## How to Make a User an Admin

Since the CMS is now restricted to admin users only, you need to manually set admin privileges for specific users in your MongoDB database.

### Steps to Make a User Admin:

#### Option 1: Using MongoDB Atlas Web Interface

1. **Login to MongoDB Atlas**
   - Go to https://cloud.mongodb.com
   - Login with your credentials

2. **Navigate to Your Database**
   - Click on "Browse Collections"
   - Select database: `AikyaBuilders`

3. **Update User in `users` Collection**
   - Open the `users` collection
   - Find the user you want to make admin
   - Click on the document to edit it
   - Add a new field: `"isAdmin": true`
   - Click "Update"

4. **Update Same User in `auth` Collection**
   - Open the `auth` collection
   - Find the same user by email
   - Add the field: `"isAdmin": true`
   - Click "Update"

#### Option 2: Using MongoDB Shell/Compass

```javascript
// Update in users collection
db.users.updateOne(
  { email: "admin@aikyabuilders.com" },
  { $set: { isAdmin: true } }
)

// Update in auth collection
db.auth.updateOne(
  { email: "admin@aikyabuilders.com" },
  { $set: { isAdmin: true } }
)
```

#### Option 3: Create Admin User Directly (Backend Script)

You can create a script in your backend to create an admin user:

```javascript
// backend/scripts/createAdmin.js
import mongoose from 'mongoose';
import User from '../models/User.js';
import Auth from '../models/Auth.js';
import dotenv from 'dotenv';

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    const adminEmail = "admin@aikyabuilders.com";
    const adminPassword = "Admin@123"; // Change this!
    
    // Create in users collection
    const user = await User.create({
      fullName: "Admin User",
      email: adminEmail,
      password: adminPassword,
      isAdmin: true
    });
    
    // Create in auth collection
    await Auth.create({
      email: adminEmail,
      password: adminPassword,
      isAdmin: true
    });
    
    console.log("Admin user created successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error creating admin:", error);
    process.exit(1);
  }
};

createAdmin();
```

Run with: `node backend/scripts/createAdmin.js`

---

## What Changed

### Backend Changes:
- ✅ Added `isAdmin` field to User and Auth models
- ✅ Updated verifyAdmin middleware to check admin privileges
- ✅ Login/Signup routes now return `isAdmin` status

### Frontend Changes:
- ✅ AuthContext now tracks `isAdmin` status
- ✅ "Manage Content" link only shows for admin users
- ✅ AdminCMS page redirects non-admin users to dashboard
- ✅ Protection both in navbar UI and page route

---

## Testing Admin Access

1. **Create an admin user** using one of the methods above
2. **Logout** if currently logged in
3. **Login** with the admin credentials
4. You should now see **"Manage Content"** option in the profile dropdown
5. Click it to access the CMS dashboard

## Security Notes

- Regular users CANNOT access `/admin-cms` even if they know the URL
- Backend API validates admin status on every CMS request
- Admin status is stored in JWT token and verified server-side
- Never commit admin credentials to your repository
