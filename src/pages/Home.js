import React from "react";

function Home({ Logout, username }) {
  return (
    <div className="welcome">
      <h2>
        Welcome, <span>{username}</span>
      </h2>
      <button onClick={Logout}>Logout</button>
    </div>
  );
}

export default Home;
