import React, {use, useState, useEffect} from "react";
import codeLogo from "../assets/code-logo.svg";
import "./Header.css";
import useWindowSize from "../hooks/useWindowSize";

function Header() {
    // utilizacion del hook para la responsividad
    const { width } = useWindowSize();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log("Menu toggled", !isMenuOpen);
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMenuOpen(false);
            } else {
                setIsMenuOpen(true);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
        
    },[]);
    return (
        <div className="nav-container" height={50}>
            <nav className="navbar navbar-light sticky-top">
                <div className="nombre">
                <a href="/" id="logo">
                    <img src={codeLogo} alt=""/>
                </a>
                <a  id="Javier" href="/">Javier</a>
                <a  id="LuisCastillo" href="/">Luis Castillo</a>
                </div>
                <div className={`menu ${isMenuOpen ? "show" : ""} `}>
                    <a className="navbar-text navbar-link" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="navbar-text navbar-link" href="#">Features</a>
                    <a className="navbar-text navbar-link" href="#">Pricing</a>
                    <a className="navbar-text navbar-link" href="#">Disabled</a>
                </div>
                {window.innerWidth <= 768 && (
                <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                )}
            </nav>
        </div>
    );
}

export default Header;