import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    
    const activeStyle = {color: "#F15B2A"}
    return (
        <header className="header">
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{" | "}
            <NavLink to="/book-of-shadows" activeStyle={activeStyle} exact>Book of Shadows</NavLink>{" | "}
            <NavLink to="/crystals" activeStyle={activeStyle} exact>Crystals</NavLink>{" | "}
            <NavLink to="/herbs" activeStyle={activeStyle} exact>Herbs</NavLink>{" | "}
            <NavLink to="/tarot" activeStyle={activeStyle} exact>Tarot</NavLink>
        </header>
    );
}

export default Header;