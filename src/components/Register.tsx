import React, { FormEvent } from "react";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState<string>("");

  const [userName, setUserName] = useState<string>("");

  const [pass, setPass] = useState<string>("");

  const registerHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form
        action=""
        onSubmit={registerHandler}
        className="mx-auto flex flex-wrap max-w-md justify-between"
      >
        <input
          className="text-dark-dark-2"
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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

export default Register;
