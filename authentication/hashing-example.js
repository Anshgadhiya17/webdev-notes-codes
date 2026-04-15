const bcrypt = require("bcrypt");

const password = "123456";

async function hashPassword() {
  const hashed = await bcrypt.hash(password, 10);
  console.log("Hashed Password:", hashed);
}

hashPassword();