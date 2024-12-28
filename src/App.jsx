import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import { useState } from "react";
import CourseListPage from "./pages/List";

function App() {
  const [token, setToken] = useState("");
  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-purple-400 to-blue-400">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router>
        <Routes>
          <Route path="/home" element={<Home token={token} />} />
          <Route path="/list" element={<CourseListPage token={token} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/"
            element={<LoginPage token={token} setToken={setToken} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
