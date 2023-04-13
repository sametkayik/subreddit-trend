import React from "react";
import "../App.css";

export const Post = ({ item }) => {
  const [showText, setShowText] = React.useState(false);
  const [isFavorited, setIsFavorited] = React.useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites")).some(
          (favorite) => favorite.id === item.id
        )
      : false
  );

  const handleClick = () => {
    setShowText(!showText);
  };

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorited) {
      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites.filter((favorite) => favorite.id !== item.id))
      );
      setIsFavorited(false);
    } else {
      favorites.push(item);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorited(true);
    }
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <h2 className="post-title">{item.title}</h2>
        </a>

        <div
          className="post-author"
          style={{
            marginTop: "10px",
          }}
        >
          {"r/" + item.subreddit} <br />
          Posted by <br />
          <a
            href={item.author_profile}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.author}
          </a>
        </div>
      </div>
      {item.text && !showText ? (
        <button className="show-text-button" onClick={handleClick}>
          Show text
        </button>
      ) : (
        item.text && (
          <button className="show-text-button" onClick={handleClick}>
            Hide text
          </button>
        )
      )}
      <div className="post-body">{showText && <p>{item.text}</p>}</div>
      <div className="post-footer">
        <div className="post-stats">
          <p className="post-upvotes">
            <i className="fas fa-arrow-up"></i> {item.ups} upvotes
          </p>
          <p className="post-comments">
            <i className="fas fa-comment"></i> {item.num_comments} comments
          </p>
          <button
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
    </div>
  );
};
