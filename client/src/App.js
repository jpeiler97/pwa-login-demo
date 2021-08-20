import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";

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
          <LoginPage></LoginPage>
        </div>
      )}
    </div>
  );
}

export default App;
