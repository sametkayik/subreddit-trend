import React from "react";
import PostHeader from "../PostHeader/PostHeader";
import PostBody from "../PostBody/PostBody";
import PostFooter from "../PostFooter/PostFooter";
import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs";
import "../../../App.css";
import "./PostCard.css";

export const PostCard = ({ item }) => {
  const [showText, setShowText] = React.useState(false);
  const [showThumbnail, setShowThumbnail] = React.useState(true);
  const [isFavorited, setIsFavorited] = React.useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites")).some(
          (favorite) => favorite.id === item.id
        )
      : false
  );

  const handleClick = () => {
    setShowText(!showText);
    setShowThumbnail(!showThumbnail);
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
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "8px",
        }}
      >
        {item.thumbnail && (
          <a
            className="post-link"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="thumbnail" src={item.thumbnail} alt="" />
          </a>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            gap: "4px",
          }}
        >
          <PostHeader item={item} />

          {showText ? (
            <button className="show-text-button" onClick={handleClick}>
              <BsArrowsAngleContract
                className="BsArrowsAngleContract"
                size={20}
              />
              <span style={{ marginLeft: "8px" }}>Hide content</span>
            </button>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <button
                className="show-text-button"
                onClick={handleClick}
                style={{ gap: "8px" }}
              >
                <BsArrowsAngleExpand
                  className="BsArrowsAngleExpand"
                  size={15}
                />
                <span>Show content</span>
              </button>

              {item.category && (
                <span
                  style={{
                    background: "#575757",
                    color: "#fff",
                    padding: "4px 8px",
                    borderRadius: "4px",
                  }}
                >
                  {item.category}
                </span>
              )}
            </div>
          )}

          <PostBody item={item} showText={showText} />

          <PostFooter
            item={item}
            isFavorited={isFavorited}
            handleFavoriteClick={handleFavoriteClick}
          />
        </div>
      </div>
    </div>
  );
};
