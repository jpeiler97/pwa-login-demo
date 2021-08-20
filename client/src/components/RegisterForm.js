import React, { useState } from "react";

function RegisterForm({ Register, error }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    Register(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Register</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password1"
            id="password1"
            onChange={(e) =>
              setDetails({ ...details, password1: e.target.value })
            }
            value={details.password1}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm password:</label>
          <input
            type="password"
            name="password2"
            id="password2"
            onChange={(e) =>
              setDetails({ ...details, password2: e.target.value })
            }
            value={details.password2}
          ></input>
        </div>
        <input type="submit" value="SIGN UP"></input>
      </div>
    </form>
  );
}

export default RegisterForm;
