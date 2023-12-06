import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, password);
  }
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-secondary">
      <div className="bg-white p-3 rounded w-25">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center">Sign In</h2>
          <div className="mb-2">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="password">
              {" "}
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button className="btn btn-warning rounded-0 w-100 mb-2">
            Sign In
          </button>
          <p>
            By Signing here you are agree to the eShop terms and conditions all.
          </p>
          <button className="btn btn-default border rounded-0 w-100 mb-2">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
