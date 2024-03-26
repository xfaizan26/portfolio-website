import React from 'react';
import "./menu.css";
export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"menu "+ (menuOpen && "active")} id='menu'>
    <ul>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#works">Works</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#contact">contact</a>
        </li>
       
    </ul>
      
    </div>
  )
}