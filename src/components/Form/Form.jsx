import React, { useState, useEffect } from "react";
import "./Form.css";
import "../../App.css";

function SubredditForm(props) {
  const [limit, setLimit] = useState(10);
  const [subreddit, setSubreddit] = useState("");
  const [subreddits, setSubreddits] = useState([
    "all",
    "learnprogramming",
    "cscareerquestions",
    "csMajors",
    "todayilearned",
    "pizza",
  ]);

  useEffect(() => {
    const subredditsFromStorage = localStorage.getItem("subreddits");
    if (subredditsFromStorage) {
      setSubreddits(JSON.parse(subredditsFromStorage));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subreddit) {
      props.onSubredditChange(subreddit);
      props.handleLimitChange(limit);
    }
    setSubreddit("");
  };

  const handleSubredditChange = (e) => {
    setSubreddit(e.target.value);
  };

  const handleLimitChange = (e) => {
    setLimit(e.target.value);
  };

  const handleAddSubreddit = () => {
    if (!subreddits.includes(subreddit) && subreddit !== "") {
      const newSubreddits = [...subreddits, subreddit];
      setSubreddits(newSubreddits);
      localStorage.setItem("subreddits", JSON.stringify(newSubreddits));
    }
  };

  const handleRemoveSubreddit = (index) => {
    const newSubreddits = [...subreddits];
    newSubreddits.splice(index, 1);
    setSubreddits(newSubreddits);
    localStorage.setItem("subreddits", JSON.stringify(newSubreddits));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="search-form">
          <label>
            Subreddit:{" "}
            <input
              id="subreddit-search"
              type="text"
              name="subreddit"
              placeholder="subreddit name"
              value={subreddit}
              onChange={handleSubredditChange}
            />
          </label>
          <select name="limit" id="limit" onChange={handleLimitChange}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <button id="subreddit-submit" type="submit">
            Search
          </button>
          <button onClick={handleAddSubreddit} id="subreddit-submit">
            Add
          </button>
        </div>
      </form>
      <div className="categories">
        {subreddits.map((sub, index) => (
          <div key={index} className="category">
            <button
              onClick={() => {
                props.onSubredditChange(sub);
                props.handleLimitChange(limit);
              }}
            >
              {sub}
            </button>
            <button onClick={() => handleRemoveSubreddit(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubredditForm;
