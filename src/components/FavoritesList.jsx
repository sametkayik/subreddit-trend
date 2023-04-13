import React from "react";

import { Post } from "./Post";
import { testPost } from "../utils/mockdata";
import "../App.css";

export const FavoritesList = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="favorites">
      <h2 style={{ margin: "10px 0 10px 15px" }}>My Favorites</h2>
      {favorites.map((item, index) => (
        <Post key={index} item={item} />
      ))}
      {favorites.length === 0 &&
        testPost.map((item, index) => <Post key={index} item={item} />)}
    </div>
  );
};

export default FavoritesList;
