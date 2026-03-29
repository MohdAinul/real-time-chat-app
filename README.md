# 🚀 Real-Time Chat Application (MERN + Socket.io)

A full-stack real-time chat application built using the MERN stack that enables users to communicate instantly, track online presence, and manage profiles. The application combines REST APIs for data persistence with WebSockets for real-time communication.

---

## 🌐 Live Demo

https://chat-app-mohd-ainuls-projects.vercel.app

## 📦 GitHub Repository

https://github.com/MohdAinul/real-time-chat-app

---

## ✨ Features

- JWT-based User Authentication (Signup/Login)
- Real-Time Messaging using Socket.io
- Online / Offline User Presence Tracking
- Profile Image Upload (Cloudinary)
- RESTful APIs for Users and Messages
- Instant message delivery using WebSockets
- Fully deployed (Frontend + Backend)

---

## 🧠 Tech Stack

Frontend:

- React
- Tailwind CSS

Backend:

- Node.js
- Express.js

Database:

- MongoDB (MongoDB Atlas)

Real-Time Communication:

- Socket.io

Authentication:

- JSON Web Token (JWT)

Cloud Services:

- Cloudinary

Deployment:

- Vercel (Frontend)
- Render (Backend)

---

## ⚙️ System Architecture

The application uses a hybrid architecture:

- REST APIs → Handle data storage (messages, users)
- WebSockets → Handle real-time communication

Client (React)
↓
REST API (Express)
↓
MongoDB (Storage)

AND

Client (React)
↔ WebSocket (Socket.io Server)

---

## 🔄 Application Flow

1. Authentication

- User signs up or logs in
- Backend validates credentials and returns JWT token
- Token is stored on client and used for protected API access

2. Real-Time Messaging

- After login, client establishes a WebSocket connection:
  const socket = io(backendUrl, { query: { userId } });

- Server maps userId to socketId:
  userSocketMap[userId] = socket.id;

- When a message is sent:
  - Stored in MongoDB (via REST API)
  - Delivered instantly using:
    io.to(receiverSocketId).emit("newMessage", message);

3. Online Users

- Active users are tracked using socket connections
- Server broadcasts online users:
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

4. Profile Image Upload

- Images are uploaded to Cloudinary
- Only image URLs are stored in MongoDB

---

## 📁 Folder Structure

client/
│── src/
│ ├── components/
│ ├── pages/
│ ├── context/
│ └── assets/

server/
│── controllers/
│── models/
│── routes/
│── middleware/
│── lib/
│── server.js

---

## 🔧 Installation & Setup

1. Clone Repository
   git clone https://github.com/MohdAinul/real-time-chat-app.git
   cd real-time-chat-app

2. Backend Setup
   cd server
   npm install

Create .env file:
PORT=5000
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=your_cloud
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret

Run backend:
npm run server

3. Frontend Setup
   cd client
   npm install

Create .env file:
VITE_BACKEND_URL=http://localhost:5000

Run frontend:
npm run dev

---

## 🚧 Challenges Faced

- Handling CORS between frontend and backend
- Managing real-time socket connections
- Synchronizing REST APIs with WebSocket events
- Deployment issues (port binding & environment variables)
- Debugging production errors across services

---

## 📈 Future Improvements

- Group chat support
- Typing indicators
- Message read receipts
- Push notifications
- Scalable WebSocket architecture (Redis)

---

## 👨‍💻 Author

Mohd Ainul

GitHub: https://github.com/MohdAinul  
LinkedIn: https://www.linkedin.com/in/mohd-ainul-27492b27a/

---

## ⭐ Support

If you like this project, consider giving it a star on GitHub!
