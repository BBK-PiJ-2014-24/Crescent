import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashPage from "./pages/SplashPage";
import Page from "./pages/Page";
import "./App.css";

function App() {
  const [showNav, setShowNav] = useState(true);

  const toggleNav = (boolean) => {
    console.log("bool", boolean);
    setShowNav(boolean);
  };

  return (
    <div className="App" id="app">
      {showNav && <Navbar showNav={showNav} />}
      <Page />
      <Footer />
    </div>
  );
}

export default App;
