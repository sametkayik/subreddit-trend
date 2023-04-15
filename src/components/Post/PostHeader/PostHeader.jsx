import React from "react";
import "./PostHeader.css";
import "../../../App.css";

const PostHeader = ({ item }) => {
  return (
    <div className="post-header">
      <a
        className="post-link"
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="post-title">{item.title}</h2>
      </a>
    </div>
  );
};

export default PostHeader;
