# React Basics

## What is React?
- JavaScript library for building UI
- Developed by Facebook
- Component-based architecture
- Uses Virtual DOM for fast updates

---

## Why React?
- Reusable components
- Fast rendering (Virtual DOM)
- Strong community
- Easy to scale

---

## SPA (Single Page Application)
- Loads a single HTML page
- Updates content dynamically
- No full page reload

---

## Components

### Functional Component
```jsx
function App() {
  return <h1>Hello World</h1>;
}

```
### Arrow Function Component
```jsx
const App = () => {
  return <h1>Hello</h1>;
};
```
### JSX (JavaScript XML)
```jsx
HTML-like syntax inside JS
const element = <h1>Hello</h1>;
```
### Rules:
```
Must return single parent
Use className instead of class
Use {} for JS inside JSX
const name = "Ansh";
<h1>Hello {name}</h1>;
```

### Props (Basic Idea)

Used to pass data between components
```JSX
function User(props) {
  return <h1>{props.name}</h1>;
}
<User name="Ansh" />
```

### State (Basic Idea)
Used to store dynamic data
```JSX
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};
```

### Virtual DOM
```
React creates a copy of real DOM
Only updates changed parts
Improves performance
Key Points
React = Components + State + Props
JSX makes UI easy
Re-render happens on state change
```