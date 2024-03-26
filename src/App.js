
import Topbar from "./components/Topbar/Topbar";

import Intro from "./components/intro/intro";
import Contact from "./components/contact/contact";
import Portfolio from "./components/portfolio/portfolio";
import Testimonial from "./components/testimonials/testimonials";
import Works from "./components/works/works";
import Menu from "./components/menu/menu";
import "./App.css";
import { useState } from "react";
function App() {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <div className="sections">
    <Intro/>
      <Contact/>
      <Portfolio/>
      <Testimonial/>
      <Works/>
    </div>
   
    </div>
  );
}

export default App;
