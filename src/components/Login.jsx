import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  const handleLogForm = async (e) => {
    e.preventDefault();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!password || password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    console.log("Form Data Sent:", { email, password });

    try {
      // Correct API endpoint
      const response = await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/login",
        { email, password }
      );

      // Success handling
      const { token } = response.data.data;
      console.log("Login Successful:", token);
      toast.success("Login Successfully.");
      onLogin(token); // Pass token to App
      localStorage.setItem("token", token);

      navigateTo("/home");
    } catch (error) {
      // Error handling
      console.error("Login Failed:", error.response?.data || error.message);
      toast.error("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center ">
      <form
        onSubmit={handleLogForm}
        className="w-[300px] h-[350px] bg-green-500 bg-opacity-30 backdrop-blur-md rounded-lg p-6 flex flex-col justify-center items-center shadow-lg space-y-4"
      >
        <h2 className="text-black text-xl font-bold mb-10">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full border rounded p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full border rounded p-2"
        />
        <button
          type="submit"
          className="bg-red-400 text-white p-2 rounded hover:bg-red-600 transition-all"
        >
          Login
        </button>
        <p className="text-black">
          Are you not signed up?{" "}
          <span>
            <Link
              to={"/register"}
              className="hover:text-red-700 hover:bg-white hover:p-1"
            >
              Register
            </Link>{" "}
            please.
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
