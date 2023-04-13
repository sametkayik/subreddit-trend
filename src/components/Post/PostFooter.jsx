import React from "react";

const PostFooter = ({ item, isFavorited, handleFavoriteClick }) => {
  return (
    <div className="post-footer">
      <div className="post-stats">
        <p className="post-upvotes">
          <i className="fas fa-arrow-up"></i> {item.ups} upvotes
        </p>
        <p className="post-comments">
          <i className="fas fa-comment"></i> {item.num_comments} comments
        </p>
        <button
          className="post-favorite"
          onClick={handleFavoriteClick}
          style={{
            background: "transparent",
            border: "none",
            color: "#d7dadc",
            cursor: "pointer",
          }}
        >
          {isFavorited ? "Remove from favorites" : "Add to favorites"}
        </button>
      </div>
    </div>
  );
};

export default PostFooter;
