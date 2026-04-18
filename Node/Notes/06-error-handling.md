# 📘 Error Handling

## Example

```js
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});
```

---

## Types

- Synchronous errors
- Asynchronous errors

---

## Best Practices

- Use try-catch
- Centralized error handler

---
