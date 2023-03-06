import React from "react";
import "../App.css";

export const Post = ({ item }) => {
  return (
    <div className="post" key={item.id}>
      <h2 className="post-title">
        <a className="post-link" href={item.url}>
          {item.title}
        </a>
      </h2>
      <p className="post-author">By {item.author}</p>
      <p className="post-upvotes">{item.ups} upvotes</p>
      <p className="post-comments">{item.num_comments} comments</p>
    </div>
  );
};
