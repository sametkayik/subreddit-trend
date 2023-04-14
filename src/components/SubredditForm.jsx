import React, { useState, useEffect } from "react";

function SubredditForm(props) {
  const [subreddit, setSubreddit] = useState("");
  const [subreddits, setSubreddits] = useState([
    "all",
    "learnprogramming",
    "cscareerquestions",
    "csMajors",
    "reactjs",
    "javascript",
    "webdev",
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
    }
    setSubreddit("");
  };

  const handleSubredditChange = (e) => {
    setSubreddit(e.target.value);
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
    <>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "0 10px",
        }}
        onSubmit={handleSubmit}
      >
        <div className="search-form">
          <label style={{ marginLeft: "5px" }}>
            Subreddit:{" "}
            <input
              id="subreddit-search"
              type="text"
              name="subreddit"
              value={subreddit}
              onChange={handleSubredditChange}
            />
          </label>
          <button id="subreddit-submit" type="submit">
            Search
          </button>
          <button
            onClick={handleAddSubreddit}
            id="subreddit-submit"
            style={{ marginLeft: "10px" }}
          >
            Add
          </button>
        </div>
      </form>
      <div className="categories" style={{ margin: "10px 10px" }}>
        {subreddits.map((sub, index) => (
          <div key={index} className="category">
            <button onClick={() => props.onSubredditChange(sub)}>{sub}</button>
            <button
              style={{
                cursor: "pointer",
                backgroundColor: "#2e2e30",
                opacity: 0.5,
                color: "white",
                borderRadius: "10px",
              }}
              onClick={() => handleRemoveSubreddit(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default SubredditForm;
