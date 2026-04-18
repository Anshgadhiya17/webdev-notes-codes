# 📘 Express.js

## What is Express?

Express is a minimal web framework for Node.js used to build APIs.

---

## Basic Server

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000);
```

---

## Middleware

```js
app.use(express.json());
```

---

## Routing

```js
app.get("/users", (req, res) => {});
app.post("/users", (req, res) => {});
```

---
