import React from "react";
import './navbar.css';

const Navbar = () => {
    return (
        <div>
            <div>
                <ul className="navbar">
                    <li><span> <a href="">Foodle</a> </span></li>
                    <li><a href="">Home</a></li>
                    <li ><a className="navli"href="">Offer</a></li>
                    <li ><a  className="navli" href="">Services</a></li>
                    <li ><a className="navli" href="">Menu</a></li>                    
                    <li ><a className="navli" href="">About Us</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href=""><button>Sign Up</button></a></li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar;