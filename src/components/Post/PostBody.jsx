import React, { useState } from "react";

const PostBody = ({ item, showText }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div
      className="post-body"
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px",
      }}
    >
      {showText && <p>{item.text}</p>}

      {showText && item.image_url && !item.video && (
        <a href={item.image_url} target="_blank" rel="noopener noreferrer">
          <img
            className="content-image"
            src={item.image_url}
            alt=""
            style={{ margin: "10px" }}
          />
        </a>
      )}

      {showText && item.video && <video controls src={item.video} />}

      {showText &&
        item.post_external_url &&
        !item.text &&
        !item.gallery_urls && (
          <a
            href={item.post_external_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontStyle: "italic",
              margin: "10px",
            }}
          >
            {item.post_external_url}
          </a>
        )}

      {showText && item.gallery_urls && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                cursor: "pointer",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "2rem",
              }}
              onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
              disabled={currentImageIndex + 1 === 1}
            >
              {"<"}
            </button>

            <img
              className="content-image"
              src={item.gallery_urls[currentImageIndex]}
              alt=""
              style={{ margin: "10px" }}
            />

            <button
              style={{
                cursor: "pointer",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "2rem",
              }}
              onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
              disabled={currentImageIndex + 1 === item.gallery_urls.length}
            >
              {">"}
            </button>
          </div>
          <p>
            {currentImageIndex + 1} / {item.gallery_urls.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default PostBody;
