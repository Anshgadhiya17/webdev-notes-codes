# 📘 Performance Optimization

## React.memo

```jsx
export default React.memo(Component);
```

➡ Prevents unnecessary re-render.

---

## useMemo

```jsx
const value = useMemo(() => compute(), []);
```

➡ Memoizes values.

---

## useCallback

```jsx
const fn = useCallback(() => {}, []);
```

➡ Memoizes functions.
