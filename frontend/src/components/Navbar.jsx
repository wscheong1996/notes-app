import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return <nav className="navbar bg-dark container">
        <h4><Link className="link" to="/">HOME</Link></h4>
        <h4><Link className="link" to="/notes">FACES</Link></h4>
        <h4><Link className="link" to="/create">CREATE FACES</Link></h4>
    </nav>
}

export default Navbar;