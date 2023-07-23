'use client';
import React, { useEffect, useRef, useState } from 'react'

const Canvas = ({ draw, draw2, moving, ...rest }) => {

  const canvasRef = useRef(null);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const { width, height } = canvas.getBoundingClientRect()
    setWidth(width);
    setHeight(height);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    let frameID;
    let frameNumber = 0;
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    const ctx = canvas.getContext("2d");
    
    
    
    const render = () => {
      frameNumber++;
      
      draw(ctx, width, height, frameNumber);
      frameID = requestAnimationFrame(render);
    }
    render();

    return () => {
      window.cancelAnimationFrame(frameID)
    }
  }, [draw2, moving, height, width])

  return (
    <canvas ref={canvasRef} {...rest} />
  )
}

export default Canvas