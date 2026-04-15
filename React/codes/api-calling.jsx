import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiCalling = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch API data
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>Posts</h2>
      {data.slice(0, 5).map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default ApiCalling;