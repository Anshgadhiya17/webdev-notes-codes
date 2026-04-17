# 📘 React Routing

## Install

```bash
npm install react-router-dom
```

---

## Basic Routing

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</BrowserRouter>
```

---

## useNavigate

```jsx
const navigate = useNavigate();
navigate("/home");
```
