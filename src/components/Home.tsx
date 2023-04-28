import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  useEffect(() => {
    const username = sessionStorage.getItem("username");
    console.log(username);
    if (username === "" || username === null) {
      logout();
    }
  }, []);
  return (
    <div>
      Home <br />
      hi {sessionStorage.getItem("username")}
      <br />
      <button
        onClick={() => {
          console.log("clear");
          logout();
        }}
      >
        {" "}
        logout
      </button>
    </div>
  );
};

export default Home;
