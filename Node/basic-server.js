const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// API route
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from API" });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});