'use client';

import React, {useState, useEffect} from 'react';

export const hover3d=(ref, {x=0, y=0, z=0})=>{
    const [coords, setCoords] = useState({x:0,y:0});
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove =(e)=>{

        const {offsetWidth: width, offsetHeight: height} = ref.current;
        const {clientX, clientY} =e;
        const x = (clientX - width/2)/width;
        const y = (clientY - height/2)/height;
        
        setCoords({x, y});
    }


    const handleMauseEnter=()=>{
        setIsHovering(true);
    }
    const handleMauseLeave=()=>{
        setIsHovering(false);
    }

    useEffect(()=>{
        const {current} = ref;
        current.addEventListener("mousemove", handleMouseMove);
        current.addEventListener("mouseenter", handleMauseEnter);
        current.addEventListener("mouseleave", handleMauseLeave);
    
        return ()=>{
            current.removeEventListener("mousemove",  handleMouseMove);
            current.removeEventListener("mouseenter", handleMauseEnter);
            current.removeEventListener("mouseleave", handleMauseLeave);
        }

    },[ref]);

    const {x: xCoord, y: yCoord} = coords;

    const xTransform = isHovering ? xCoord*x :0;
    const yTransform = isHovering ? yCoord*y :0;
    const zTransform = isHovering ? z:0;
    
    const transform = `perspective(1000px) rotateY(${xTransform}deg) rotateX(${yTransform}deg) translateZ(${zTransform}px)`;
    const transition = isHovering ?"all 0.3S ease-in-out":"";


    return {
    transform, transition
    }
}

