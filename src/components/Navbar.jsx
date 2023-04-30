// import React from "react";
import reactLogo from '../assets/react-icon-small.png';

export default function Navbar() {
    return (
        <nav>
            <img src={reactLogo} alt="React Logo" className="nav--icon"/>
            <h3 className="nav--logo_text">React Facts</h3>
            <h4 className="nav--title">React Course - Project</h4>
        </nav>
    )
}