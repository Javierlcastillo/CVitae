import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CuadradoSVG from "@/assets/icons/square-solid.svg?react";
gsap.registerPlugin(ScrollTrigger);

function CuadroAnimado({ inputDuration = 2, inputRotation = 360 }) {
    const svgRef = useRef();

    useGSAP(() => {
        gsap.to(svgRef.current, {
            y: "-80vh",
            rotation: inputRotation,
            duration: inputDuration,
            scrollTrigger: {
                trigger: ".introduction-grid",
                start: "2% top",
                endTrigger: svgRef.current,
                end: "top 40%",
                pin: ".introduction-grid",
                toggleActions: "play complete reverse reverse",
                scrub: 3, // Si quieres animación reversible con scroll
            }
        });
    }, [inputDuration, inputRotation]);

    return (
        <CuadradoSVG className='cuadro-animado' ref={svgRef} />
    );
}

export default CuadroAnimado;