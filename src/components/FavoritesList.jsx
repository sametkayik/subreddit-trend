import React from "react";
import { Link } from "react-router-dom";
import { Post } from "./Post";
import "../App.css";

export const FavoritesList = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const testPost = {
    id: "123",
    title:
      "This is a test post title :) Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Samet",
    author_profile: "https://www.reddit.com/",
    url: "https://www.reddit.com/",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ups: 100,
    num_comments: 10,
  };

  return (
    <div className="favorites">
      <div style={{ margin: "0 10px" }}>
        <span>Styling... unique!! :)</span>
        <h1 className="title" style={{ marginLeft: "0" }}>
          {" "}
          Subreddit Trend
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>My Favorites</h2>
          <Link to="/" style={{ textDecoration: "none", color: "#d7dadc" }}>
            <h2>Home Page</h2>
          </Link>
        </div>
      </div>
      {favorites.map((item, index) => (
        <Post key={index} item={item} />
      ))}
      {favorites.length === 0 && <Post item={testPost} isFavorited={true} />}
    </div>
  );
};

export default FavoritesList;
