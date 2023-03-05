import React, { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "./Post";

const SubredditList = ({ subreddit }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/r/${subreddit}`
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [subreddit]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data.length) return <div>No results found.</div>;

  return (
    <div>
      {data.map((item) => (
        <Post key={item.id} item={item} />
      ))}
    </div>
  );
};

export default SubredditList;
