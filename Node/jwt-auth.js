const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = "mysecretkey";

// Login route
app.post("/login", (req, res) => {
  const { username } = req.body;

  // Generate token
  const token = jwt.sign({ username }, SECRET_KEY, {
    expiresIn: "1h",
  });

  res.json({ token });
});

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.sendStatus(403);

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.sendStatus(401);
    req.user = decoded;
    next();
  });
};

// Protected route
app.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "Protected data", user: req.user });
});

app.listen(5000, () => console.log("Auth server running"));