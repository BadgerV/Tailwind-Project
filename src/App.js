import React from "react";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import Activites from "./components/Activites";
import Booking from "./components/Booking";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="App">
      <TopBar />
      <NavBar />
      <Hero />
      <Activites />
      <Booking />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
