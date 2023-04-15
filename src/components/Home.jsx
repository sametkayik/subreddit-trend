import React, { useState } from "react";
import SubredditForm from "./SubredditForm";
import SubredditList from "./SubredditList";

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
      <SubredditForm
        subreddit={subreddit}
        onSubredditChange={handleSubredditChange}
        handleLimitChange={handleLimitChange}
      />
      <SubredditList subreddit={subreddit} limit={limit} />
    </div>
  );
}

export default Home;
