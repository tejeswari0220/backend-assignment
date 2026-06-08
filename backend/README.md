# Backend Assignment - Task Management API

## Features
- User Register & Login
- JWT Authentication
- Role-based access (user/admin)
- CRUD operations for tasks
- MySQL database connection

## Tech Stack
- Node.js
- Express.js
- MySQL
- JWT
- bcrypt

## How to Run
npm install  
npm run dev  

## API Routes

### Auth
POST /register  
POST /login  

### Tasks
GET /tasks  
POST /tasks  
PUT /tasks/:id  
DELETE /tasks/:id  

## Auth Flow
Login → get token → use token in headers → access protected routes
