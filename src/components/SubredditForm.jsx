import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "0 10px",
        }}
      >
        <div>
          <label>
            Subreddit:{" "}
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
        </div>

        <div>
          <Link
            to="/favorites"
            style={{ textDecoration: "none", color: "#d7dadc" }}
          >
            <h2>Favorites</h2>
          </Link>
        </div>
      </form>
      <div className="categories" style={{ margin: "0 10px" }}>
        <button onClick={() => props.onSubredditChange("learnprogramming")}>
          LearnProgramming
        </button>
        <button onClick={() => props.onSubredditChange("cscareerquestions")}>
          CSCareerQuestions
        </button>
        <button onClick={() => props.onSubredditChange("csMajors")}>
          CSMajors
        </button>
        <button onClick={() => props.onSubredditChange("reactjs")}>
          ReactJS
        </button>
        <button onClick={() => props.onSubredditChange("javascript")}>
          JavaScript
        </button>
        <button onClick={() => props.onSubredditChange("webdev")}>
          WebDev
        </button>
      </div>
    </>
  );
}

export default SubredditForm;
