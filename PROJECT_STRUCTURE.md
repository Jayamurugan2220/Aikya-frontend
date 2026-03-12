# Aikya Builds Future - Full Stack Project

This project is organized into separate frontend and backend folders.

## Project Structure

```
future-builders-studio/
├── frontend/           # React + TypeScript + Vite frontend
│   ├── src/           # React components, pages, hooks
│   ├── public/        # Static assets
│   ├── package.json   # Frontend dependencies
│   └── vite.config.ts # Vite configuration
│
├── backend/           # Node.js + Express + MongoDB backend
│   ├── models/        # MongoDB models
│   ├── routes/        # API routes
│   ├── config/        # Database configuration
│   ├── package.json   # Backend dependencies
│   └── server.js      # Express server
│
└── README.md         # This file
```

## Getting Started

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on `http://localhost:8080`

### Backend Setup

```bash
cd backend
npm install
node server.js
```

Backend will run on `http://localhost:5000`

## Environment Variables

### Frontend (.env in frontend/)
```
VITE_API_URL=http://localhost:5000/api
```

### Backend (.env in backend/)
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## Features

- User Authentication (Sign up, Login, Logout)
- Password Reset
- Dual Collection Architecture (auth & users)
- JWT Token Management
- Profile Dashboard
- Responsive Design

## Tech Stack

### Frontend
- React 18.3.1
- TypeScript
- Vite 5.4.19
- Tailwind CSS
- Framer Motion
- React Router DOM
- Radix UI Components

### Backend
- Node.js
- Express.js 4.18.2
- MongoDB with Mongoose 8.0.3
- bcryptjs (Password Hashing)
- JWT (Authentication)

## Development

Both frontend and backend need to be running simultaneously for full functionality.

1. Start backend server first
2. Start frontend development server
3. Access the application at http://localhost:8080

## Documentation

- `PASSWORD_SECURITY.md` - Information about password hashing
- `PRD-CMS-Integration.md` - CMS integration documentation
- `SETUP_GUIDE.md` - Detailed setup instructions
