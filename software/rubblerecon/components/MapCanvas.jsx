"use client";
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import Canvas from './Canvas'

const MapCanvas = ({ width, moving, x, y }) => {

    const [displayX, setDisplayX] = useState(0);
    const [displayY, setDisplayY] = useState(0);
    const [displayWidth, setDisplayWidth] = useState(width*16/2);
  
    const draw = (ctx, width, height, frameNumber) => {
      ctx.fillStyle = "gray";
      for (let x = 0; x < width; x += width/10) {
        ctx.rect(x, 0, 0.1, height);
        ctx.fill();
      }
      for (let y = 0; y < height; y += height/10) {
        ctx.rect(0, y, width, 0.5);
        ctx.fill();
      }
      ctx.fillStyle = "rgb(251, 146, 60)";
      ctx.beginPath();
      ctx.arc(width/2 + x.current, height*3/4 - y.current, 0.1, 0, 2 * Math.PI);
      ctx.fill();
      if (moving) {
        y.current += 0.01;
      }
      setDisplayX(Math.round(x.current*10)/10);
      setDisplayY(Math.round(y.current*10)/10);
    }
  
    useEffect(() => {
      window.addEventListener("keydown", (e) => {
        e.key == "d" && x.current++;
        e.key == "a" && x.current--;
        e.key == "w" && y.current++;
        e.key == "s" && y.current--;
      })
    }, []);
  
    return (
      <div>
        <Canvas draw={draw} moving={moving} className="border-orange-400 border-2" style={{height: displayWidth, width: "100%"}} />
        <div className="flex items-center justify-end">
          <p className="text-xs">{displayX}, {displayY}</p>
        </div>
      </div>
    )
};

export default MapCanvas