import React, { FormEvent } from "react";
import { useState } from "react";
import axios from "../api/axios";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState<string>("");

  const [pass, setPass] = useState<string>("");
  const navigate = useNavigate();

  const loginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.get(`user?userName=${userName}`).then((res: any) => {
      if (!res.data.length) {
        console.log("invalid information");
      } else if (res.data[0].password !== pass) {
        console.log("invalid information");
      } else {
        // log in
        console.log("Success!");
        sessionStorage.setItem("username", userName);

        navigate("/");
      }
    });
  };

  return (
    <div>
      <form
        action=""
        onSubmit={loginHandler}
        className="mx-auto flex flex-wrap max-w-md justify-between"
      >
        <input
          className="text-dark-dark-2"
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="text-dark-dark-2"
          type="password"
          placeholder="pass"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
