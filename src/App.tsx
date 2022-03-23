import React, { FC, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/AppShell/Nav/Navbar";
import Home from "./components/Features/Home";
import "./App.css";
import Currency from "./components/Features/Currencies/index";
import Signup from "./components/Features/Signup/index";

const App: FC = () => {
  useEffect(() => {
    console.log("APP IS GETTING RENDERED");
  }, []);
  return (
    <Router>
      <div style={{ backgroundColor: "black" }}>
        {/* Could add nav here.. */}
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/currencies/:currencyID" element={<Currency />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
