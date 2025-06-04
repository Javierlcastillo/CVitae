import React, {useState,useEffect} from "react";
import "./Menu.css";
import { FaLinkedin, FaSquareInstagram  } from "react-icons/fa6";
import { IoMdClose, IoIosArrowForward as Flecha } from "react-icons/io";
import menuItems from "./menuItems";
import { useNavigate } from "react-router-dom";


function Menu({bigScreen, menuOpen, setMenuOpen}) {
    const navigate = useNavigate();
    useEffect(() => {
        console.log("BigScreen value: ", bigScreen);
    }, [bigScreen]);
    return (
        <div className={`menu-container ${menuOpen ? "show" : ""}`}>
            <div className={`socials full`}>
                <p className="text"> Follow Me ────── </p>
                <div className="socials-icons">
                    <a href="https://www.linkedin.com/in/javierluiscastillosolorzano" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={bigScreen? 45 : 30} color="#2cc295"/>
                    </a>
                    <a href="https://www.instagram.com/javier_lcastillo/" target="_blank" rel="noopener noreferrer"> 
                    <FaSquareInstagram size={bigScreen? 45 : 30} color="#2cc295"/>
                    </a>
                </div>
            </div>
            <div className={`side-menu ${menuOpen ? "show" : ""}`}>
                <button className="close" onClick={() => setMenuOpen(false)}>
                    <IoMdClose id="close" size={30} />
                </button>
                <div className="redirect">
                {menuItems.map((item) => (
                    <button type="button" className="menu-item" key={item.id} onClick={() => {setMenuOpen(false); navigate(item.path);}}>
                        <div part="content">
                            <span>
                                {item.label}   
                            </span>
                        </div>
                        <div part="icon" className="flecha">
                            <span>
                                <Flecha size={20} opacity={0.4}/>
                            </span>
                        </div>
                    </button>
                ))}
                </div>
            </div> 
        </div>
    );
}

export default Menu;