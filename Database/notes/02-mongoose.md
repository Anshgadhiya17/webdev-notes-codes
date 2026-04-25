# 📘 Mongoose

## What is Mongoose?

ODM (Object Data Modeling) library for MongoDB in Node.js.

---

## Schema Example

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
});
```

---

## Model

```js
const User = mongoose.model("User", userSchema);
```

---
