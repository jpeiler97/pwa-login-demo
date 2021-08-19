import React, { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Welcome from "./pages/Welcome";

function App() {
  const [user, setUser] = useState({ name: "", email: "" });

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div>
          <Router>
            <main>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
            </main>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
