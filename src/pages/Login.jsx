import React from "react";
import Login from "../components/Login";
function LoginPage({ token, setToken }) {
  return <div>{!token && <Login onLogin={setToken} />}</div>;
}

export default LoginPage;
