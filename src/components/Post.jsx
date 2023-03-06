import React from "react";
import "../App.css";

export const Post = ({ item }) => {
  return (
    <div className="post" key={item.id}>
      <a className="post-link" href={item.url}>
        🚀 {item.title}
      </a>
      <div className="post-details">
        <p className="post-upvotes">{item.ups} upvotes</p>
        <p className="post-comments">{item.num_comments} comments</p>
        <p className="post-author">u/{item.author}</p>
      </div>
    </div>
  );
};
