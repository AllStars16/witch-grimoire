import React from "react";
import { Link } from "react-router-dom";

const PublicHomepage = () => (
    <div>
        <p>
            <Link to="book-of-shadows">Book of Shadows</Link>
        </p>
        <p>
            <Link to="crystals">Crystals</Link>
        </p>
        <p>
            <Link to="herbs">Herbs</Link>
        </p>
        <p>
            <Link to="tarot">Tarot</Link>
        </p>




    </div>
);

export default PublicHomepage;