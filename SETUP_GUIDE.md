# Aikya Builds Future - Full Stack Setup Guide

This project now includes both frontend (React + Vite) and backend (Node.js + Express + MongoDB) integration.

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account
- npm or yarn package manager

---

## 📦 Installation Steps

### 1. Install Frontend Dependencies
```bash
npm install
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

---

## ⚙️ Configuration

### Backend Configuration

1. **Update MongoDB Password**
   
   Edit `backend/.env` file and replace `<db_password>` with your actual MongoDB password:
   ```env
   MONGODB_URI=mongodb+srv://Aikya:YOUR_ACTUAL_PASSWORD@cluster0.un7nvko.mongodb.net/aikya-builds-future?retryWrites=true&w=majority&appName=Cluster0
   ```

2. **Update JWT Secret (Optional but Recommended for Production)**
   ```env
   JWT_SECRET=your_secure_random_string_here
   ```

### Frontend Configuration

The frontend is already configured to connect to `http://localhost:5000/api`. No changes needed for local development.

---

## 🏃‍♂️ Running the Application

### Option 1: Run Both Servers Separately (Recommended for Development)

**Terminal 1 - Start Backend Server:**
```bash
cd backend
npm run dev
```
Backend will run on: `http://localhost:5000`

**Terminal 2 - Start Frontend Server:**
```bash
npm run dev
```
Frontend will run on: `http://localhost:5173`

### Option 2: Quick Start Script

You can create a simple script to run both servers. Create `start-all.bat` (Windows):
```batch
@echo off
start cmd /k "cd backend && npm run dev"
start cmd /k "npm run dev"
```

---

## 🗄️ Database Structure

### User Collection Schema
```javascript
{
  fullName: String,
  email: String (unique),
  password: String (hashed),
  createdAt: Date
}
```

---

## 🔐 Authentication Flow

### Sign Up Process
1. User fills the sign-up form with: Full Name, Email, Password, Confirm Password
2. Frontend validates password match and minimum length
3. Data sent to `POST /api/auth/signup`
4. Backend hashes the password and stores user in MongoDB
5. JWT token generated and returned
6. Token stored in localStorage
7. User redirected to home page

### Login Process
1. User enters email and password
2. Data sent to `POST /api/auth/login`
3. Backend verifies credentials
4. JWT token generated and returned
5. Token stored in localStorage
6. User redirected to home page

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/users` - Get all users (for admin/testing)
- `GET /api/health` - Server health check

### Example API Call (Login)
```javascript
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### Example Response
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "_id": "65abc123...",
    "fullName": "John Doe",
    "email": "user@example.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

## 📁 Project Structure

```
future-builders-studio/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── models/
│   │   └── User.js            # User schema
│   ├── routes/
│   │   └── auth.js            # Authentication routes
│   ├── .env                   # Environment variables
│   ├── .gitignore
│   ├── package.json
│   ├── README.md
│   └── server.js              # Express server
├── src/
│   ├── components/            # React components
│   ├── pages/
│   │   ├── Login.tsx          # Login page (integrated)
│   │   ├── SignUp.tsx         # Sign up page (integrated)
│   │   └── ...
│   ├── services/
│   │   └── api.ts             # API service & axios config
│   └── ...
├── .env                       # Frontend env variables
├── package.json
└── README.md
```

---

## 🧪 Testing the Integration

### Test Backend API (using curl or Postman)

**Health Check:**
```bash
curl http://localhost:5000/api/health
```

**Sign Up:**
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test User","email":"test@example.com","password":"test123"}'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'
```

**Get All Users:**
```bash
curl http://localhost:5000/api/auth/users
```

### Test Frontend
1. Open browser to `http://localhost:5173`
2. Click "Login" button in navbar
3. Click "Sign up" link
4. Fill the form and submit
5. Check MongoDB Atlas to verify user was created
6. Try logging in with the created credentials

---

## 🔒 Security Features

- ✅ Password hashing with bcryptjs
- ✅ JWT token-based authentication
- ✅ Password complexity validation (min 6 characters)
- ✅ Email format validation
- ✅ Duplicate email prevention
- ✅ CORS enabled for frontend-backend communication
- ✅ Environment variables for sensitive data
- ✅ MongoDB connection error handling

---

## 🐛 Troubleshooting

### Backend won't start
- Check if MongoDB URI is correct in `backend/.env`
- Verify MongoDB password is properly set
- Ensure port 5000 is not in use

### Frontend can't connect to backend
- Verify backend server is running on port 5000
- Check browser console for CORS errors
- Confirm `.env` file has `VITE_API_URL=http://localhost:5000/api`

### Authentication not working
- Clear localStorage in browser DevTools
- Check Network tab for API call responses
- Verify backend logs for error messages

### MongoDB Connection Issues
- Verify MongoDB Atlas cluster is active
- Check if your IP is whitelisted in MongoDB Atlas
- Ensure database user has proper permissions

---

## 📝 Notes

- The backend uses ES modules (`type: "module"` in package.json)
- JWT tokens expire after 30 days
- User passwords are never stored in plain text
- The `/api/auth/users` endpoint should be protected in production

---

## 🚀 Production Deployment

### Backend
- Set `NODE_ENV=production` in environment
- Use a strong JWT secret
- Enable rate limiting
- Add authentication middleware for protected routes
- Deploy to Heroku, Railway, or similar

### Frontend
- Build: `npm run build`
- Update `VITE_API_URL` to production backend URL
- Deploy to Vercel, Netlify, or similar

---

## 📧 Support

For issues or questions, please check:
- Backend logs: Check terminal running `npm run dev` in backend folder
- Frontend logs: Check browser console (F12)
- MongoDB Atlas logs: Check your cluster activity

---

**Happy Coding! 🎉**
