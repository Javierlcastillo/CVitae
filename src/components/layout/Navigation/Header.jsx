import React, { useState, useEffect } from "react";
import codeLogo from "@/assets/icons/code-logo.svg";
import "./Header.css";
import useWindowSize from "@/hooks/useWindowSize.jsx";
import Menu from "@/components/layout/Navigation/Menu.jsx";
import { IoReorderThreeOutline as Options } from "react-icons/io5";
import menuItems from "./menuItems.js";
import { useLocation, Link} from "react-router-dom";
import Breadcrumbs from "@/components/layout/Breadcrumbs/BreadCrumbs.jsx";


function Header() {
    // utilizacion del hook para la responsividad
    const { width } = useWindowSize();
    const [bigScreen, setBigScreen] = useState(width > 768);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        console.log("Menu toggled", !menuOpen);
        setMenuOpen(!menuOpen);
    };
    useEffect(() => {
        setBigScreen(width > 768);
    }, [width]);
    return (
        <div className="nav-container" height={50}>
            <nav className="navbar navbar-light sticky-top">
                <div className="nombre">
                <Link to="/" id="logo">
                    <img src={codeLogo} alt=""/>
                </Link>
                <Link  id="Javier" to="/">Javier</Link>
                <Link  id="LuisCastillo" to="/">Luis Castillo</Link>
                </div>
                <div className={`menu ${bigScreen ? "show" : ""} `}>
                    {menuItems.map((item) => (
                        <Link key={item.id} to={item.path} className={`navbar-text navbar-link ${location.pathname === item.path ? "active" : ""}`}>
                            {item.label}
                        </Link>
                    ))}
                </div>
                {window.innerWidth <= 768 && (
                <button className="options" type="button" onClick={toggleMenu}>
                    <Options size={30} color="#f1f7f6"/>
                </button>
                )}
                <div className="breadcrumbs-container">
                <Breadcrumbs/>
                </div>
            </nav>
            <Menu bigScreen={bigScreen} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </div>
    );
} 

export default Header;