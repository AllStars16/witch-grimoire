import React from "react";
import {NavLink} from "react-router-dom";


const Header = () => {
    
    const activeStyle = {color: "#F15B2A"}
    const imageLink = "/src/img/cauldron.png";
    return (
        <header className="header">
            <div className="text-and-image">
            <h1 className="text-header">A witch's grimoire</h1>
            <a href="" title="Cauldron">
            <div class="img-acu"></div>
            </a> 

            </div>

            <nav className="navbar navbar-dark bg-dark">
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{" | "}
            <NavLink to="/book-of-shadows" activeStyle={activeStyle} exact>Book of Shadows</NavLink>{" | "}
            <NavLink to="/crystals" activeStyle={activeStyle} exact>Crystals</NavLink>{" | "}
            <NavLink to="/herbs" activeStyle={activeStyle} exact>Herbs</NavLink>{" | "}
            <NavLink to="/tarot" activeStyle={activeStyle} exact>Tarot</NavLink>
            </nav>
            {/* <button type="button" className="btn btn-dark login"><NavLink to="/login" activeStyle={activeStyle} exact>LOGIN/Register</NavLink></button> */}
            <div class="section one">
   <div id="button">
   <NavLink to="/login" activeStyle={activeStyle} exact>Login</NavLink>
      <div class="ring one"></div>
      <div class="ring two"></div>
      <div class="ring three"></div>
      <div class="ring four"></div>
   </div>
   
</div>
            
        </header>

    );
}

export default Header;