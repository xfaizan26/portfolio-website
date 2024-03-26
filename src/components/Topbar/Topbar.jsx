import React from 'react';
import "./topbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faEnvelope } from "@fortawesome/free-solid-svg-icons";
 function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={'topbar '+ (menuOpen && 'active')} id='topbar'>
    <div className="wrapper">
      <div className="left">
          <a href="#intro" className='logo'>genius</a>
          <div className="itemcontainer">
                <span> <FontAwesomeIcon icon={faUser} /></span>
                 <span>5239 4141 11</span>

          </div>
          <div className="itemcontainer">
                <span><FontAwesomeIcon icon={faEnvelope} /></span>
                 <span>52</span>

          </div>

      </div>
      <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)} >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
    </div>
   
    </div>
  );
}
export default Topbar;
