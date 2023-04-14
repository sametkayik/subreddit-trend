import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src="https://avatars.githubusercontent.com/u/53970699?v=4"
        className="app-logo"
      />
      <h1 style={{ margin: "0 0 0 10px" }}>Subreddit Trend</h1>

      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#d7dadc",
          margin: "0 0 0 20px",
        }}
      >
        <h2>Home Page</h2>
      </Link>
      <Link
        to="/favorites"
        style={{
          textDecoration: "none",
          color: "#d7dadc",
          margin: "0 0 0 20px",
        }}
      >
        <h2>Favorites</h2>
      </Link>
    </div>
  );
};

export default Navbar;
