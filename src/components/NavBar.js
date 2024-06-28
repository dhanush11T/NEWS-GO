import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'; // Assuming you have a CSS file for styling
<style>
@import url('https://fonts.googleapis.com/css2?family=Fascinate+Inline&display=swap');
</style>
const NavBar = () => {
    const menuItems = [
        { label: "Business", link: "/business" },
        { label: "Entertainment", link: "/entertainment" },
        { label: "General", link: "/general" },
        { label: "Health", link: "/health" },
        { label: "Science", link: "/science" },
        { label: "Sports", link: "/sports" },
        { label: "Technology", link: "/technology" },
    ];

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-white">
            <div className="container-fluid">
                <Link className="navbar-brand custom-font text-black" to="/"><span className="caponi">NEWSGO</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-black" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               <span id="new1" >Categories</span> 
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link className="dropdown-item" to={item.link}>{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
