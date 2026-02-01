import express from "express";
import "dotenv/config";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";



// Create Express app and HTTP server
const app = express();
const server = http.createServer(app);


// Middleware setup
app.use(express.json({ limit: "4mb" }));
app.use(cors());

//connect to MongoDB
connectDB();

// Routes setup
app.get("/", (req, res) => {
  res.send("Welcome to Quick Chat API");
});
app.use("/api/status", (req, res) => res.send("Server is live"));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("server is running on port : " + PORT));

//app.use("/api/auth", userRouter);
//app.use("/api/messages", messageRouter);