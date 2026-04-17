# React Hooks

## What are Hooks?
- Functions that let you use state and lifecycle in functional components

---

## useState

```jsx
import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};
```

## useEffect
```JSX
import { useEffect } from "react";

useEffect(() => {
  console.log("Component Mounted");
}, []);
```
```
Cases:
[] → run once
[value] → run on change
no dependency → runs every render
```
## useRef
```JSX
import { useRef } from "react";

const inputRef = useRef();

<input ref={inputRef} />
```

## useMemo
```JSX
import { useMemo } from "react";

const result = useMemo(() => {
  return expensiveFunction();
}, []);
```
## useCallback
```JSX
const memoFunc = useCallback(() => {
  doSomething();
}, []);
```

## Custom Hook
```JSX
function useFetch() {
  // custom logic
}
```

## Key Points
```
Hooks start with "use"
Only used inside components
Helps reuse logic
```