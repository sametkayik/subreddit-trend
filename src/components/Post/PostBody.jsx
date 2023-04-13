import React from "react";

const PostBody = ({ item, showText }) => {
  return (
    <div
      className="post-body"
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        marginBottom: "20px",
      }}
    >
      {showText && <p>{item.text}</p>}

      {showText && item.image_url && !item.video && (
        <img
          className="content-image"
          src={item.image_url}
          alt=""
          style={{ margin: "10px" }}
        />
      )}

      {showText && item.video && <video controls src={item.video} />}
    </div>
  );
};

export default PostBody;
