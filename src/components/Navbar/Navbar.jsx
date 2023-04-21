import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: "12px",
      }}
    >
      <img
        src="https://avatars.githubusercontent.com/u/53970699?v=4"
        className="app-logo"
      />

      <Link
        to="/"
        style={{
          color: "#fff",
          textDecoration: "none",
        }}
      >
        <h1>Subreddit Trend</h1>
      </Link>

      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#d7dadc",
        }}
      >
        <h2>/Home</h2>
      </Link>
      <Link
        to="/favorites"
        style={{
          textDecoration: "none",
          color: "#d7dadc",
        }}
      >
        <h2>/Favorites</h2>
      </Link>
    </div>
  );
};

export default Navbar;
