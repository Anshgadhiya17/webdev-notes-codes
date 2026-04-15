import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook for fetching data
export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [url]);

  return { data, loading };
};