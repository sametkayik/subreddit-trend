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
    <>
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
      <div className="categories">
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
        <button onClick={() => props.onSubredditChange("web_design")}>
          WebDesign
        </button>
      </div>
    </>
  );
}

export default SubredditForm;
