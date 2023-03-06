import React, { useState } from "react";

function SubredditForm(props) {
  const [subreddit, setSubreddit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subreddit) {
      props.onSubredditChange(subreddit);
    }
  };

  const handleSubredditChange = (e) => {
    setSubreddit(e.target.value);
  };

  return (
    <form>
      <label>
        Subreddit:
        <input
          id="subreddit-search"
          type="text"
          name="subreddit"
          value={subreddit}
          onChange={handleSubredditChange}
        />
      </label>
      <button id="subreddit-submit" type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
}

export default SubredditForm;
