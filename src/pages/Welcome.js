import React from "react";
import { Link, useLocation } from "react-router-dom";

function Welcome() {
  const location = useLocation;
  return (
    <div className="welcome">
      <h2>Welcome to the website.</h2>
      <Link
        to="/login"
        className={
          location.pathname === "/login" ? "nav-link active" : "nav-link"
        }
      >
        Login
      </Link>
      <br></br>
      <Link
        to="/register"
        className={
          location.pathname === "/register" ? "nav-link active" : "nav-link"
        }
      >
        Register
      </Link>
    </div>
  );
}

export default Welcome;
