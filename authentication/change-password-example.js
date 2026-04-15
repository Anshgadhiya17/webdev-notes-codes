const bcrypt = require("bcrypt");

let user = {
  password: "$2b$10$examplehashedpassword"
};

async function changePassword(oldPass, newPass) {
  const isMatch = await bcrypt.compare(oldPass, user.password);

  if (!isMatch) {
    console.log("Old password incorrect");
    return;
  }

  const newHashed = await bcrypt.hash(newPass, 10);
  user.password = newHashed;

  console.log("Password updated successfully");
}

changePassword("123456", "newpassword");