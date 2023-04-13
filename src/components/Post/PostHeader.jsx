import React from "react";

const PostHeader = ({ item }) => {
  return (
    <div className="post-header">
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        <h2 className="post-title">{item.title}</h2>
      </a>

      <div
        className="post-author"
        style={{
          marginTop: "10px",
        }}
      >
        <a href={item.subreddit_url} target="_blank" rel="noopener noreferrer">
          {"r/" + item.subreddit}
        </a>{" "}
        <br />
        Posted by <br />
        <a href={item.author_profile} target="_blank" rel="noopener noreferrer">
          {item.author}
        </a>
      </div>
    </div>
  );
};

export default PostHeader;
