import Navbar from "./components/Navbar";
import {Login} from "./components/Login";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Register from "./components/Register";
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <Intro/>
          }></Route>

          <Route
            path="/login"
            element={
              <div className="col-xs-1" align="center">
                <Login />
              </div>
            }
          ></Route>

          <Route
            path="/register"
            element={
              <div className="col-xs-1" align="center">
                <Register />
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
