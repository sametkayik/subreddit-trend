import React from "react";
import { PostCard } from "./Post/PostCard/PostCard";
import { AiFillHeart } from "react-icons/ai";
import "../App.css";
import "./Favorites.css";

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
          <h1>{date}</h1>
          {posts.map((post, index) => (
            <PostCard key={`${date}-${index}`} item={post} />
          ))}
        </div>
      ))}
      {favorites.length === 0 && (
        <p>
          You have no favorites. Click the heart icon {"("}
          <AiFillHeart />
          {")"} on a post to add it to your favorites.
        </p>
      )}
    </div>
  );
};

export default Favorites;
