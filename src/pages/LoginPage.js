import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { Link, useLocation } from "react-router-dom";

function LoginPage() {
  const location = useLocation();

  const admin = {
    email: "admin@admin.com",
    password: "qqq",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (details.email === admin.email && details.password === admin.password) {
      setUser({
        name: details.name,
        email: details.email,
      });
      setError("");
    } else {
      console.log("Details do not match");
      setError("Details do not match");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };
  return (
    <div>
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div>
          <LoginForm Login={Login} error={error}></LoginForm>
          <Link
            to="/register"
            className={
              location.pathname === "/register" ? "nav-link active" : "nav-link"
            }
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
