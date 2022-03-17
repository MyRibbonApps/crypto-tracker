import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/AppShell/Nav";
import Home from "./components/Features/Home";
import "./App.css";
import Currency from "./components/Features/Currencies/";
import Signup from "./components/Features/Signup";

function App() {
  useEffect(() => {
    console.log("APP IS GETTING RENDERED");
  }, []);
  return (
    <Router>
      <div>
        {/* Could add nav here.. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/currencies/:currencyID" element={<Currency />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
