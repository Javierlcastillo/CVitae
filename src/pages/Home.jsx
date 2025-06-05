import React, { useState, useEffect } from "react";
import useWindowSize from "@/hooks/useWindowSize.jsx";
import "./Home.css";
import imagen from "@/assets/images/yo.jpg";
import CuadroAnimado from "@/components/ui/CuadroAnimado";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flecha from "@/assets/icons/flecha.svg?react";


function Home() {

//     useGSAP(() => {
//         ScrollTrigger.create({
//             trigger: '.introduction-grid',
//             start: "top top",
//             end: '+=200vh',
//             pin: true,
//             pinSpacing: true,
            
//     });
// }, []);
    const { width } = useWindowSize();
    const getScreenSize = (width) => {
        if (width > 600) return "big";
        if (width > 420) return "small";
        return "xsmall";
        };
    const [screenSize, setScreenSize] = useState(getScreenSize(width));
    useEffect(() => {
        setScreenSize(getScreenSize(width));
    }, [width]);

    const tamanoCuadro = (base, width) => {
        if (width > 1200){
            console.log("1200")
             return base * 1.3;
        }
        if (width > 900){
            console.log("900")
            return base * 1;
        }   // lg
        if (width > 600){
            console.log("600")
            return base * 0.85;
        }  
        if (width > 420){
            console.log("420")
             return base * 0.7;
        }
        console.log("<420")
        return base * 0.4;
    };


    // Utilidad para generar valores aleatorios dentro de un rango
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    // Configuración predefinida para los cuadros animados
    const cuadrosConfig = [
        { inputScrub: 1, inputRotation: 120, inputSize: tamanoCuadro(60, width), startY: 30 },
        { inputScrub: 2, inputRotation: 180, inputSize: tamanoCuadro(75, width), startY: 45 },
        { inputScrub: 3, inputRotation: 240, inputSize: tamanoCuadro(50, width), startY: 60 },
        { inputScrub: 2, inputRotation: 150, inputSize: tamanoCuadro(85, width), startY: 75 },
        { inputScrub: 1, inputRotation: 200, inputSize: tamanoCuadro(70, width), startY: 90 },
        { inputScrub: 3, inputRotation: 160, inputSize: tamanoCuadro(55, width), startY: 40 },
        { inputScrub: 2, inputRotation: 220, inputSize: tamanoCuadro(80, width), startY: 55 },
        { inputScrub: 1, inputRotation: 190, inputSize: tamanoCuadro(65, width), startY: 70 },
        { inputScrub: 3, inputRotation: 170, inputSize: tamanoCuadro(45, width), startY: 85 },
        { inputScrub: 2, inputRotation: 230, inputSize: tamanoCuadro(90, width), startY: 50 },
        { inputScrub: 1, inputRotation: 140, inputSize: tamanoCuadro(75, width), startY: 65 },
        { inputScrub: 3, inputRotation: 210, inputSize: tamanoCuadro(70, width), startY: 80 }
    ];

    const [hideFlecha, setHideFlecha] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHideFlecha(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="home-container">
            <div className="spacer">
            </div>
            <div className="introduction-grid">
                <img src={imagen} id="foto-perfil" className={`foto-perfil ${screenSize}`} />
                <h1 className={`home-punchline ${screenSize}`} >Building the <span className="highlight">future</span>, one <span className="highlight">line</span> at a time.</h1>
                <p id="line" className={`line ${screenSize}`} >──────────────</p>
                <p className={`home-description ${screenSize}`} >Hi, I'm <span className="highlight">Javier Luis Castillo</span> — a Computer Science student passionate about AI, web development, and solving real problems with code.</p>
                <Flecha className={`flecha${hideFlecha ? "-hide" : "-show"}`} />
            </div>
            {/* <div className="animation-up">
                {cuadrosConfig.map((params, idx) => (
                    <CuadroAnimado
                        key={idx}
                        inputScrub={params.inputScrub}
                        inputRotation={params.inputRotation}
                        inputSize={params.inputSize}
                        startY={params.startY}
                    />
                ))}
            </div> */}
            {/* <div id="proyectos-recientes">
                <h2>Proyectos recientes</h2>
                <div className="proyectos-grid">

                </div>
            </div> */}
        </div>
    );
}

export default Home;