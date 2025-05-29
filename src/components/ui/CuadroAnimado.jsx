import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CuadradoSVG from "@/assets/icons/square-solid.svg?react";
import Cubo from "@/assets/icons/cubo.svg?react";
gsap.registerPlugin(ScrollTrigger);

function CuadroAnimado({ inputScrub = 1, inputRotation = 120, inputSize = 80 , startY = "80", startOffset = "0" }) {
    const svgRef = useRef();

    useGSAP(() => {
        gsap.to(svgRef.current, {
            y: `-${startY}vh`,
            rotation: inputRotation,
            duration: 1,
            scrollTrigger: {
                trigger: ".introduction-grid",
                start: `2${+ startOffset}px top`,
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