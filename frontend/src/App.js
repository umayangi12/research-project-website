import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
// import Offer from "./components/offers/Offer";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Blog from "./components/blog/Blog";
import Header from "./components/Header";
// import { useState, useEffect } from "react";
import Objectives from "./components/objective/Objectives";
import Methodology from "./components/methodology/Methodology";
// import Technology from "./components/technology/Technology";
import Downloads from "./components/downloads/Downloads";
import Team from "./components/team/Team";

function App() {
  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  // const OpenSidebar = () => {
  //   setOpenSidebarToggle(!openSidebarToggle);
  // };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Home />
              <Blog />
              <About />
              <Objectives />
              <Methodology />
              {/* <Technology/> */}
              <Downloads />
              <Team />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
