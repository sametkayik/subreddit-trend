import React, { useState } from "react";
import SubredditForm from "./SubredditForm";
import SubredditList from "./SubredditList";

function Home() {
  const [search, setSearch] = useState(false);
  const [subreddit, setSubreddit] = useState("");

  const handleSubredditChange = (value) => {
    setSubreddit(value);
    setSearch(true);
  };

  return (
    <div>
      <span style={{ marginLeft: "10px" }}>Styling... unique!! :)</span>
      {search ? (
        <div style={{ display: "flex" }}>
          <h1>Subreddit Trend </h1>
          <h1 className="subreddit-name">r/{subreddit}</h1>
        </div>
      ) : (
        <h1>Subreddit Trend</h1>
      )}
      <SubredditForm
        subreddit={subreddit}
        onSubredditChange={handleSubredditChange}
      />
      {search && <SubredditList subreddit={subreddit} />}
    </div>
  );
}

export default Home;
