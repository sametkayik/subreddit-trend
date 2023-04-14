import React from "react";
import { Post } from "./Post";
import "../App.css";

export const FavoritesList = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const postsByDate = favorites.reduce((accumulator, current) => {
    const date = new Date(current.posted_date * 1000).toLocaleDateString();
    return { ...accumulator, [date]: [...(accumulator[date] || []), current] };
  }, {});

  return (
    <div className="favorites">
      {Object.entries(postsByDate).map(([date, posts]) => (
        <div key={date}>
          <h1 style={{ marginLeft: "10px" }}>{date}</h1>
          {posts.map((post, index) => (
            <Post key={`${date}-${index}`} item={post} />
          ))}
        </div>
      ))}
      {favorites.length === 0 && (
        <p style={{ margin: "10px 0 10px 15px" }}>
          You have no favorites. Click the "Add to favorites" on a post to add
          it to your favorites.
        </p>
      )}
    </div>
  );
};

export default FavoritesList;
