# 📘 Middleware in Node.js

## What is Middleware?

Functions that run between request and response.

---

## Example

```js
app.use((req, res, next) => {
  console.log("Middleware");
  next();
});
```

---

## Types

- Application middleware
- Router middleware
- Error middleware

---
