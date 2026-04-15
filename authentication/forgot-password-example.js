const crypto = require("crypto");

function generateResetToken() {
  const token = crypto.randomBytes(32).toString("hex");
  console.log("Reset Token:", token);
}

generateResetToken();