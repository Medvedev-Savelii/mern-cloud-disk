import React, { useEffect } from "react";

import Navbar from "./navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";

import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  console.log(isAuth);
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="wrap">
          {!isAuth && (
            <Routes>
              <Route path="/">
                <Route path="registration" element={<Registration />} />
                <Route path="login" element={<Login />} />
              </Route>
            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
