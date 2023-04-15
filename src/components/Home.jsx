import React, { useState } from "react";
import Form from "./Form/Form";
import Posts from "./Posts";
import "../App.css";

function Home() {
  const [subreddit, setSubreddit] = useState("all");
  const [limit, setLimit] = useState(10);

  const handleSubredditChange = (value) => {
    setSubreddit(value);
  };

  const handleLimitChange = (value) => {
    setLimit(value);
  };

  return (
    <div>
      <Form
        subreddit={subreddit}
        onSubredditChange={handleSubredditChange}
        handleLimitChange={handleLimitChange}
      />
      <Posts subreddit={subreddit} limit={limit} />
    </div>
  );
}

export default Home;
