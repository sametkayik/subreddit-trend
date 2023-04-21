import React from "react";
import {
  AiFillHeart,
  AiOutlineComment,
  AiOutlineArrowUp,
} from "react-icons/ai";
import "./PostFooter.css";
import "../../../App.css";

const PostFooter = ({ item, isFavorited, handleFavoriteClick }) => {
  return (
    <div className="post-footer">
      <div className="post-stats">
        <p
          className="post-upvotes"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <AiOutlineArrowUp className="AiOutlineArrowUp" size={20} /> {item.ups}
        </p>
        <p
          className="post-comments"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <AiOutlineComment
            className="AiOutlineArrowUp"
            size={20}
            style={{ marginRight: "4px" }}
          />
          {item.num_comments}
        </p>
        <button
          className="post-favorite"
          onClick={handleFavoriteClick}
          style={{
            background: "transparent",
            border: "none",
            color: "#d7dadc",
            cursor: "pointer",
            padding: "0",
          }}
        >
          {isFavorited ? (
            <AiFillHeart
              className="AiFillHeart"
              style={{ color: "#ff0000" }}
              size={30}
            />
          ) : (
            <AiFillHeart
              className="AiFillHeart"
              style={{ color: "#dbdbdb" }}
              size={30}
            />
          )}
        </button>
      </div>
      <div className="post-author">
        <div>
          <a
            href={item.subreddit_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {"r/" + item.subreddit}
          </a>
          <hr style={{ margin: "2px" }} />
        </div>
        <a href={item.author_profile} target="_blank" rel="noopener noreferrer">
          u/{item.author}
        </a>
      </div>
    </div>
  );
};

export default PostFooter;
