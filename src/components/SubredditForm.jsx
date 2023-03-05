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
          type="text"
          name="subreddit"
          value={subreddit}
          onChange={handleSubredditChange}
        />
      </label>
      <button type="button" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
}

export default SubredditForm;
