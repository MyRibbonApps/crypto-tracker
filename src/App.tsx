import React, { FC, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./containers/Nav/";
import Home from "./pages/Home";

const App: FC = () => {
  useEffect(() => {
    console.log("APP IS GETTING RENDERED");
  }, []);
  return (
    <Router>
      <div style={{ backgroundColor: "black" }}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/currencies/:currencyID" element={<Currency />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
