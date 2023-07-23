'use client';
import React, { useEffect, useRef, useState } from 'react'

const Canvas = ({ draw, ...rest }) => {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const { width, height } = canvas.getBoundingClientRect();
    let frameID;
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    const ctx = canvas.getContext("2d");
    const render = () => {
      draw(ctx, width, height);
      frameID = requestAnimationFrame(render);
    }
    render();

    return () => {
      window.cancelAnimationFrame(frameID)
    }
  }, [draw])

  return (
    <canvas ref={canvasRef} {...rest} />
  )
}

export default Canvas