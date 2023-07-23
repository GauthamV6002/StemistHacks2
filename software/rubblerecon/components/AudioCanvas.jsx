"use client";
import React, { useEffect, useRef, useState } from 'react'
import Canvas from './Canvas'

const AudioCanvas = () => {

  const [buttonPressed, setButtonPressed] = useState(false);

  const audioRef = useRef(null);

  const [audioCtx, setAudioCtx] = useState(null);
  const [audioSource, setAudioSource] = useState(null);
  const [analyser, setAnalyser] = useState(null);

  // set context
  useEffect(() => {
    if (!buttonPressed || audioCtx != null) { // audio has not been set yet or this has already run
      return;
    }
    setAudioCtx(new window.AudioContext());
  }, [buttonPressed]); // trigger on start and when audio changes

  // set source
  useEffect(() => {
    if (audioCtx == null || audioSource != null) {  // context has not been set yet or this has already run
      return;
    }
    setAudioSource(audioCtx.createMediaElementSource(audioRef.current));
  }, [audioCtx]); // trigger on start and when context changes

  // set analyser
  useEffect(() => {
    if (audioSource == null || analyser != null) {
      return;
    }
    setAnalyser(audioCtx.createAnalyser());
  }, [audioSource])

  const draw = (ctx, width, height) => {
    if (analyser == null) { // source has not been set yet, wait...
      return;
    }

    audioSource.connect(analyser);
    analyser.connect(audioCtx.destination);
    analyser.fftSize = 128;
    let bufferLength = analyser.frequencyBinCount;
    let dataArray = new Uint8Array(bufferLength);

    const barWidth = width / bufferLength;
    ctx.clearRect(0, 0, width, height);
    analyser.getByteFrequencyData(dataArray);
    let x = 0;
    ctx.fillStyle = "rgb(251, 146, 60)";
    for (let i = 0; i < bufferLength; i++) {
      let barHeight = dataArray[i] * 0.6;
      if (i <= 3) {
        barHeight *= 0.2 * (i+1);
      }
      
      ctx.fillRect(x+5, 0.5 * height - 0.5 * barHeight, barWidth, barHeight);
      x += (barWidth+0.1);
    }
  }

  return (
    <div>
      <audio src={"rocks.mp3"} ref={audioRef}/>
      <Canvas draw={draw} className="border-orange-400 border-2" style={{height: "8rem", width: "100%"}} />
      <div className="flex items-center justify-end mt-2">
        <button className="text-xs text-gray-600 bg-orange-400 rounded p-1" onClick={() => {

          let a = audioRef.current;

          a.src = "rocks.mp3";
          a.volume = 0.2;
          a.loop = true;

          if (buttonPressed) {
            setButtonPressed(false);
            audioRef.current.pause();
          } else {
            setButtonPressed(true);
            audioRef.current.play();
          }
          
        }}>{buttonPressed ? "Stop Listening To Audio" : "Listen To Audio"}</button>
      </div>
    </div>
    
  )
}

export default AudioCanvas