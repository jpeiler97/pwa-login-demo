import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import { Link, useLocation } from "react-router-dom";

function RegisterPage() {
  const location = useLocation();

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Register = (details) => {
    console.log(details);

    if (details.password1 === details.password2) {
      setUser({
        name: details.name,
        email: details.email,
      });
      setError("");
    } else {
      console.log("Passwords do not match");
      setError("Passwords do not match");
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
          <RegisterForm Register={Register} error={error}></RegisterForm>
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}

export default RegisterPage;
