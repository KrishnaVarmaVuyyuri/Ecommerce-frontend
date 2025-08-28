import React, { useState } from "react";
import { AUTH } from "../api";

export default function Register({ openLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AUTH.post("register/", { username, email, password });
      setMessage("Account created! Please login.");
    } catch (err) {
      setMessage("Error creating account");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
            className="w-full px-3 py-2 border"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="w-full px-3 py-2 border"
            type="email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="w-full px-3 py-2 border"
            type="password"
          />
        </div>
        <div className="mb-4">
          <button type="submit" className="w-full bg-red-600 text-white py-2">
            Sign Up
          </button>
        </div>
      </form>
      {message && <p>{message}</p>}
      <div className="mb-4">
        <span className="text-gray-700">Already have an Account?</span>
        <button className="text-red-800" onClick={openLogin}>
          Log in
        </button>
      </div>
    </div>
  );
}
