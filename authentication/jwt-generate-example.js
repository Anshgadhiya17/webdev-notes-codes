const jwt = require("jsonwebtoken");

const user = {
  id: "123",
  email: "test@example.com"
};

const token = jwt.sign(user, "secretkey", { expiresIn: "1h" });

console.log("Generated Token:");
console.log(token);