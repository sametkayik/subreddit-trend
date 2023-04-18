import React from "react";
import { PostCard } from "./Post/PostCard/PostCard";
import "../App.css";
import { AiFillHeart } from "react-icons/ai";

export const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const postsByDate = Object.entries(
    favorites.reduce((accumulator, current) => {
      const date = new Date(current.posted_date * 1000).toLocaleDateString();
      return {
        ...accumulator,
        [date]: [...(accumulator[date] || []), current],
      };
    }, {})
  ).sort((a, b) => new Date(b[0]) - new Date(a[0]));

  return (
    <div className="favorites">
      {postsByDate.map(([date, posts]) => (
        <div key={date}>
          <h1 style={{ marginLeft: "10px" }}>{date}</h1>
          {posts.map((post, index) => (
            <PostCard key={`${date}-${index}`} item={post} />
          ))}
        </div>
      ))}
      {favorites.length === 0 && (
        <p style={{ margin: "10px 0 10px 15px" }}>
          You have no favorites. Click the heart icon {"("}
          <AiFillHeart />
          {")"} on a post to add it to your favorites.
        </p>
      )}
    </div>
  );
};

export default Favorites;
