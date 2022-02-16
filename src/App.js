import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/AppShell/Nav";
import Home from "./components/Features/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* Could add nav here.. */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
