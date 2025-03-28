import React from "react";
import codeLogo from "./assets/code-logo.svg";
import "./Header.css";

function Header() {
    return (
        <div className="nav-container" height={50}>
            <nav className="navbar navbar-light sticky-top">
                <div className="nombre">
                <a className="navbar-brand" id="Javier" href="/">Javier</a>
                <a className="navbar-brand" id="LuisCastillo" href="/">Luis Castillo</a>
                </div>
                <div className="container">
                    <a class="navbar-text navbar-link" href="#">Home <span class="sr-only">(current)</span></a>
                    <a class="navbar-text navbar-link" href="#">Features</a>
                    <a class="navbar-text navbar-link" href="#">Pricing</a>
                    <a class="navbar-text navbar-link" href="#">Disabled</a>
                </div>
                <a class="navbar-brand" href="#" id="logo">
                    <img src={codeLogo} width="30" height="30" classNeme="d-inline-block align-top" alt=""/>
                </a>
                {/* <ul>
                    <li><a href="/">
                    <img src={code} alt="Code Schools" width={50} height={50}/>
                </a> </li> 
                <li><a href="/">Inicio</a></li>
                <li><a href="/proyectos">Proyectos</a></li>
                <li><a href="/contacto">Contacto</a></li>
                </ul>  */}
            </nav>
        </div>
    );
}

export default Header;