import React, { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "./Post";

function SubredditList(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios
      .get(`http://localhost:3000/r/${props.subreddit}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [props.subreddit]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data.length === 0) {
    return <div>No results found.</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <Post key={item.id} item={item} />
      ))}
    </div>
  );
}

export default SubredditList;
