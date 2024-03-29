import React, { useState } from "react";
import "./PostBody.css";
import "../../../App.css";
const PostBody = ({ item, showText }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div
      className="post-body"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {showText && !item.gallery_urls && item.text && (
        <p style={{ alignSelf: "flex-start" }}>{item.text}</p>
      )}

      {showText && item.image_url && !item.video && (
        <a
          href={item.image_url}
          target="_blank"
          rel="noopener noreferrer"
          className="image-url"
        >
          <img className="content-image" src={item.image_url} alt="" />
        </a>
      )}

      {showText && item.video && (
        <video
          style={{ marginBottom: "8px", alignSelf: "center" }}
          controls
          src={item.video}
        />
      )}

      {showText &&
        item.post_external_url &&
        !item.text &&
        !item.gallery_urls && (
          <a
            className="external-link"
            href={item.post_external_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.post_external_url}
          </a>
        )}

      {showText && item.gallery_urls && (
        <>
          {item.text && <p>{item.text}</p>}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              className="gallery-button"
              onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
              disabled={currentImageIndex + 1 === 1}
            >
              {"<"}
            </button>

            <a
              href={item.gallery_urls[currentImageIndex]}
              target="_blank"
              rel="noopener noreferrer"
              className="image-url"
            >
              <img
                className="content-image"
                src={item.gallery_urls[currentImageIndex]}
                alt=""
              />
            </a>

            <button
              className="gallery-button"
              onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
              disabled={currentImageIndex + 1 === item.gallery_urls.length}
            >
              {">"}
            </button>
          </div>
          <p>
            {currentImageIndex + 1} / {item.gallery_urls.length}
          </p>
        </>
      )}
    </div>
  );
};

export default PostBody;
