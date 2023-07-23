"use client"

import React, { useEffect, useRef } from 'react'

const VideoCanvas = ({ moving }) => {

  const videoRef = useRef(null);

  useEffect(() => {
    moving ? videoRef.current.play() : videoRef.current.pause();
  }, [moving]);

  return (
    <video ref={videoRef} className="border-orange-400 border-2" height="8rem" autoPlay={false} muted={true} loop={true}>
      <source src="rubble-1-gray.mp4" type="video/mp4"></source>
      This browser is not compatible with HTML videos.
    </video>
  )
}

export default VideoCanvas