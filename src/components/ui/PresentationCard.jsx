import React, {useState, useEffect} from "react";
import useWindowSize from "@/hooks/useWindowSize.jsx"; 

function PresentationCard(){
    return(
        <div className="presentation-card">
            <h1 className="presentation-card-title">Building the future, one line at a time.</h1>
            <p className="presentation-card-description">Hi, I’m <span className="highlight">Javier Luis Castillo</span> — a Computer Science student passionate about AI, web development, and solving real problems with code.</p>
        </div>
    )
}

export default PresentationCard;
