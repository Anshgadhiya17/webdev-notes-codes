# API Calling in React

## Using fetch()

```jsx
useEffect(() => {
  fetch("https://api.example.com/data")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
```

## Using async/await

```JSX
useEffect(() => {
  const getData = async () => {
    const res = await fetch("url");
    const data = await res.json();
    console.log(data);
  };

  getData();
}, []);
```

## Using axios
```JSX 
import axios from "axios";

useEffect(() => {
  axios.get("url").then(res => console.log(res.data));
}, []);
```

## Error handling
```JSX
try {
  const res = await fetch("url");
} catch (err) {
  console.log(err);
}
```

## Loading state
```JSX
const [loading, setLoading] = useState(true);
```

## Key Points
```JSX
Use useEffect for API calls
Handle loading + error
Prefer axios for real projects
```