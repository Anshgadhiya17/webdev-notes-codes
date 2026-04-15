const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({
  secret: "secretkey",
  resave: false,
  saveUninitialized: true
}));

app.get("/login", (req, res) => {
  req.session.user = "Ansh";
  res.send("User logged in");
});

app.get("/profile", (req, res) => {
  if (req.session.user) {
    res.send(`Welcome ${req.session.user}`);
  } else {
    res.send("Please login");
  }
});

app.listen(3000, () => console.log("Server running"));