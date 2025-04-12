import React, {useState,useEffect} from "react";
import "./Menu.css";
import { FaLinkedin, FaSquareInstagram  } from "react-icons/fa6";

function Menu({bigScreen, menuOpen, setMenuOpen}) {
    useEffect(() => {
        console.log("BigScreen value: ", bigScreen);
    }, [bigScreen]);
    return (
        <div className="container">
            <div className={`socials ${bigScreen ? "full" : "hidden"}`}>
                <p className="text"> Follow Me ────── </p>
                <a href="https://www.linkedin.com/in/javierluiscastillosolorzano" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={45} color="#2cc295"/>
                </a>
                <a href="https://www.instagram.com/javier_lcastillo/" target="_blank" rel="noopener noreferrer"> 
                <FaSquareInstagram size={45} color="#2cc295"/>
                </a>
            </div>
            <div className="side-menu">
                
            </div> 
        </div>
    );
}

export default Menu;