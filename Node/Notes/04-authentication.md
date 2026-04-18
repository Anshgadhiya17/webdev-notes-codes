# 📘 Authentication in Node.js

## What is Authentication?

Process of verifying user identity.

---

## JWT Example

```js
const jwt = require("jsonwebtoken");

const token = jwt.sign({ id: user.id }, "secret");
```

---

## Verify Token

```js
jwt.verify(token, "secret");
```

---

## Flow

1. User login
2. Server sends token
3. Client sends token in headers

---
