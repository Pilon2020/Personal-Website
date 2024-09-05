import React from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
    return (
        <nav>
            <Link to="/" className="App-link">Home</Link>
            <Link to="/projects" style={{ marginLeft: '10px' }} className="App-link">Projects</Link>
        </nav>
    );
}

export default MenuBar;