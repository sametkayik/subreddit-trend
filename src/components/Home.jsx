import React, { useState } from "react";
import SubredditForm from "./SubredditForm";
import SubredditList from "./SubredditList";

function Home() {
  const [subreddit, setSubreddit] = useState("all");

  const handleSubredditChange = (value) => {
    setSubreddit(value);
  };

  return (
    <div>
      <SubredditForm
        subreddit={subreddit}
        onSubredditChange={handleSubredditChange}
      />
      <SubredditList subreddit={subreddit} />
    </div>
  );
}

export default Home;
