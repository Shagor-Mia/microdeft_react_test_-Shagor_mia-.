import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegForm = async (e) => {
    e.preventDefault();
    if (!name || name.length < 3) {
      toast.error("Name must be at least 3 characters long.");
      return;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!password || password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    console.log("Form Data Sent:", { name, email, password });

    try {
      const response = await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/register",
        { name, email, password }
      );
      console.log(`Registerd Successfully :${response.data}`);
      toast.success(`Registerd Successfully.`);
    } catch (error) {
      console.error(`Registerd Failed :${error}`);
      toast.error(`Registerd Failed.`);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center ">
      <form
        onSubmit={handleRegForm}
        className="w-[300px] h-[450px] bg-green-500 bg-opacity-30 backdrop-blur-md rounded-lg p-6 flex flex-col justify-center items-center shadow-lg space-y-4"
      >
        <h3 className="text-black text-xl font-bold mb-10">Registration</h3>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full border rounded p-2"
        />
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
          Register
        </button>
        <p className="text-black">
          Are you signed up?{" "}
          <span>
            <Link
              to={"/"}
              className="hover:text-red-700 hover:bg-white hover:p-1"
            >
              Login
            </Link>{" "}
            please.
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;
