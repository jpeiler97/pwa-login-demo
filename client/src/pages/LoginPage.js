import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import Home from "./Home";

function LoginPage() {
  const admin = {
    email: "admin@admin.com",
    password: "qqq",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (details.email === admin.email && details.password === admin.password) {
      setUser({ name: details.name, email: details.email });
    } else {
      setError("Details do not match");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div>
      <div>
        {user.email !== "" ? (
          <Home username={user.name} Logout={Logout} />
        ) : (
          <div>
            <LoginForm Login={Login} error={error}></LoginForm>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
