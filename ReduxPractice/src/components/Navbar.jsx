// eslint-disable-next-line no-unused-vars
import React from "react"
import "../components/Navbar.css"

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>
                <button>Login</button>
            </nav>
        </div>
    )
};

export default Navbar;
