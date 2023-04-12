import React from "react";
import "../App.css";

export const Post = ({ item }) => {
  const [showText, setShowText] = React.useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div className="post" key={item.id}>
      <div className="post-header">
        <a
          className="post-link"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.title}
        </a>
        {item.text && <button onClick={handleClick}>Show text</button>}
      </div>
      <div className="post-details">
        <span className="post-upvotes">{item.ups} upvotes</span>
        <span className="post-comments">{item.num_comments} comments</span>
        <span className="post-author">u/{item.author}</span>
      </div>
      {showText && <p className="post-text">{item.text}</p>}
    </div>
  );
};
