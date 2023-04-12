import React from "react";
import "../App.css";

export const Post = ({ item }) => {
  const [showText, setShowText] = React.useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div class="post-card">
      <div class="post-header">
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <h2 class="post-title">{item.title}</h2>
        </a>
        <p class="post-author">
          Posted by <br />
          <a
            href={item.author_profile}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.author}{" "}
          </a>
        </p>
      </div>
      {item.text && !showText ? (
        <button className="show-text-button" onClick={handleClick}>
          Show text
        </button>
      ) : (
        item.text && (
          <button className="show-text-button" onClick={handleClick}>
            Hide text
          </button>
        )
      )}
      <div class="post-body">{showText && <p>{item.text}</p>}</div>
      <div class="post-footer">
        <div class="post-stats">
          <p class="post-upvotes">
            <i class="fas fa-arrow-up"></i> {item.ups} upvotes
          </p>
          <p class="post-comments">
            <i class="fas fa-comment"></i> {item.num_comments} comments
          </p>
        </div>
      </div>
    </div>
  );
};
