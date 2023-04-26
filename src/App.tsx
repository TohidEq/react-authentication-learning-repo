import React from "react";

import "./css/index.css";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="p-2 border-2 border-light-light-1">
          links: -=
          <NavLink to={"/"} end>
            Home
          </NavLink>
          -=
          <NavLink to={"/login"}>login</NavLink> -=
          <NavLink to={"/register"}>register</NavLink> -=
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* <Route path="/testparams" element={<TestParams />} /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
