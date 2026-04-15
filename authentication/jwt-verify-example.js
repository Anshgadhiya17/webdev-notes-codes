const jwt = require("jsonwebtoken");

const token = "PASTE_YOUR_TOKEN_HERE";

try {
  const decoded = jwt.verify(token, "secretkey");
  console.log("Decoded Data:", decoded);
} catch (err) {
  console.log("Invalid Token");
}