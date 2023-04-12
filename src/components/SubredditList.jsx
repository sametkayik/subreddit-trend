import React, { useState, useEffect } from "react";
import getSubreddit from "../utils/getSubreddit";
import { Post } from "./Post";
import "../App.css";

const SubredditList = ({ subreddit }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSubreddit(subreddit);
        setData(response);
        setError(null); // reset error state when data is fetched successfully
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [subreddit]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Subreddit didn't found!</div>;
  if (!data.length) return <div>No data found.</div>;

  return (
    <div className="container">
      {data.map((item) => (
        <Post key={item.id} item={item} />
      ))}
    </div>
  );
};

export default SubredditList;
