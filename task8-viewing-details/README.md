# Task 8 - Viewing Details of Buyers, Products, and Transactions

This repository includes a MERN stack skeleton implementing the Task 8 specification:
- Backend: Node.js + Express + MongoDB (Mongoose)
- Frontend: React (Bootstrap) simple SPA

## Quick start

### Backend
1. cd backend
2. copy `.env.example` to `.env` and set MONGO_URI
3. npm install
4. npm run seed   # optional - adds sample data
5. npm run dev    # requires nodemon, or use npm start

API base: http://localhost:5000/api

### Frontend
1. cd frontend
2. npm install
3. npm start

Then open http://localhost:3000

Notes:
- Adjust API base in `frontend/src/config.js` or via REACT_APP_API_BASE env variable.
- This is a skeleton — you can expand the UI (detailed views, sorting, filtering, pagination).
