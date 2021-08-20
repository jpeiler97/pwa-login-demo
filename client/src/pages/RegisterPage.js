import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import Home from "./Home";
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
      setError("Passwords do not match");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };
  return (
    <div>
      {user.email !== "" ? (
        <Home Logout={Logout} username={user.name}></Home>
      ) : (
        <div>
          <RegisterForm Register={Register} error={error}></RegisterForm>
        </div>
      )}
    </div>
  );
}

export default RegisterPage;
