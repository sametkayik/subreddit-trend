import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <img
        src="https://avatars.githubusercontent.com/u/53970699?v=4"
        className="app-logo"
      />

      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
        <h1 style={{ margin: "0 0 0 10px" }}>Subreddit Trend</h1>
      </Link>

      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#d7dadc",
          margin: "0 0 0 20px",
        }}
      >
        <h2>/Home</h2>
      </Link>
      <Link
        to="/favorites"
        style={{
          textDecoration: "none",
          color: "#d7dadc",
          margin: "0 0 0 20px",
        }}
      >
        <h2>/Favorites</h2>
      </Link>
    </div>
  );
};

export default Navbar;
