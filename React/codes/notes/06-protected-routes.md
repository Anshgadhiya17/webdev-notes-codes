# 📘 Protected Routes

## Example

```jsx
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuth = true;

  return isAuth ? children : <Navigate to="/login" />;
}
```

---

## Usage

```jsx
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```
