import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cubo from "@/assets/icons/cubo.svg?react";
gsap.registerPlugin(ScrollTrigger);

// url de paleta de colores: https://coolors.co/080b0c-182225-29383d

function CuadroAnimado({ inputScrub = 1, inputRotation = 120, inputSize = 80 , startY = "80" }) {
    const svgRef = useRef();

    useGSAP(() => {
        gsap.to(svgRef.current, {
            y: `-${startY}vh`,
            rotation: inputRotation,
            duration: 1,
            scrollTrigger: {
                trigger: ".introduction-grid",
                start: `2px top`,
                endTrigger: ".animation-up",
                end: "top 40%",
                toggleActions: "play complete reverse reverse",
                scrub: inputScrub,
            }
        });
    }, [inputScrub, inputRotation, inputSize, startY]);

    return (
        <Cubo className='cuadro-animado' ref={svgRef} style={{width: inputSize, height: inputSize}} />
    );
}

export default CuadroAnimado;