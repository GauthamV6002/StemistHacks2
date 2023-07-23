"use client";
import React, { useEffect, useRef, useState } from 'react'
import Canvas from './Canvas'

const MapCanvas = () => {

  let x = useRef(0);
  let y = useRef(0);

  const [displayX, setDisplayX] = useState(0);
  const [displayY, setDisplayY] = useState(0);

  const draw = (ctx, width, height) => {
    ctx.fillStyle = "rgb(251, 146, 60)";
    ctx.beginPath();
    ctx.arc(width/2 + x.current, height*3/4 - y.current, 1, 0, 2 * Math.PI);
    ctx.fill();
    setDisplayX(x.current);
    setDisplayY(y.current);
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
      <Canvas draw={draw} className="border-orange-400 border-2" style={{height: "8rem", width: "100%"}} />
      <div className="flex items-center justify-end">
        <p className="text-xs">{displayX}, {displayY}</p>
      </div>
    </div>
  )
}

export default MapCanvas