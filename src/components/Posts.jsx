import React, { useState, useEffect } from "react";
import getSubreddit from "../utils/getSubreddit";
import { PostCard } from "./Post/PostCard/PostCard";
import "../App.css";
import "./Posts.css";

const Posts = ({ subreddit, limit }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSubreddit(subreddit, limit);
        setData(response);
        setError(null); // reset error state when data is fetched successfully
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (subreddit) {
      fetchData();
    } else {
      setData([]);
    }
  }, [subreddit]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Subreddit not found!</div>;
  if (!data.length) return <div>No data found.</div>;

  return (
    <div className="post-container">
      {data.map((item) => (
        <PostCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Posts;
