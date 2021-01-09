import React from "react";
import {NavLink} from "react-router-dom";
import cauldronStatic from '/Witch Grimoire/witch-grimoire/witch-grimoire/src/img/asdf.png'; 
import cauldronActive from '/Witch Grimoire/witch-grimoire/witch-grimoire/src/img/cauldron.gif'; 


const Header = () => {
    
    const activeStyle = {color: "#F15B2A"}
    const imageLink = "/src/img/cauldron.png";
    return (
        <header className="header">
            <div className="text-and-image">
            <h1 className="text-header">A witch's grimoire</h1>
            <a href="https://www.google.com" title="ACU Project link">
            <div class="img-acu"></div>
            </a> 

{/* 
            <img src={cauldronStatic} alt="cauldron-static" className="cauldron-static"/>
            <img src={cauldronActive} alt="cauldron-active" className="cauldron-active"/> */}

            </div>

            <nav className="navbar navbar-dark bg-dark">
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{" | "}
            <NavLink to="/book-of-shadows" activeStyle={activeStyle} exact>Book of Shadows</NavLink>{" | "}
            <NavLink to="/crystals" activeStyle={activeStyle} exact>Crystals</NavLink>{" | "}
            <NavLink to="/herbs" activeStyle={activeStyle} exact>Herbs</NavLink>{" | "}
            <NavLink to="/tarot" activeStyle={activeStyle} exact>Tarot</NavLink>
            </nav>
        </header>

    );
}

export default Header;