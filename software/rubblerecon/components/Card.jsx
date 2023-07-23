"use client"

import React, { useRef, useState } from 'react'
import HorizontalLine from './HorizontalLine'
import VideoCanvas from './VideoCanvas'
import MapCanvas from './MapCanvas'
import AudioCanvas from './AudioCanvas'
import CardShell from './CardShell'

const Card = ({ maxFunc, minFunc, deleteFunc, maximized, index, name, connection }) => {

  const [moving, setMoving] = useState(false);

  return (
    <CardShell>
      <div className="bg-gray-600 text-orange-400 m-2 rounded w-48">

        <div className="flex items-center m-2">
        <input className="text-xs font-bold bg-gray-600" defaultValue={name}></input>
        </div>

        <HorizontalLine />

        <div className="p-2">
          <MapCanvas />
        </div>

        <HorizontalLine />

        <div className="p-2">
          <VideoCanvas moving={moving} />
        </div>

        <HorizontalLine />

        <div className="p-2">
          <AudioCanvas />
        </div>

      </div>
      <div className="flex flex-col items-center grow">
        <div onClick={() => {
          maximized && minFunc();
          setTimeout(deleteFunc(index), 3000); // need to wait until its in the right ui layout to do this
        }} className="rounded-xl hover:bg-red-100 bg-gray-600 w-8 h-8 mt-2 pl-0.5 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path style={{fill: "red"}} d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
        </div>
        <div onClick={() => {
          setMoving(!moving);
        }} className="rounded-xl hover:bg-orange-100 bg-gray-600 w-8 h-8 mt-2 pl-0.5 flex items-center justify-center">
          {moving ?
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path style={{fill: "rgb(251, 146, 60)"}} d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path style={{fill: "rgb(251, 146, 60)"}} d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          }        
        </div>
        {maximized ? 
          <div onClick={() => {
            minFunc();
          }} className="rounded-xl hover:bg-orange-100 bg-gray-600 w-8 h-8 mt-2 pl-0.5 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path style={{fill: "rgb(251, 146, 60)"}} d="M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H296c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272H216c13.3 0 24 10.7 24 24V440c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z"/></svg>
          </div>
        :
          <div onClick={() => {
            maxFunc(index);
          }} className="rounded-xl hover:bg-orange-100 bg-gray-600 w-8 h-8 mt-2 pl-0.5 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path style={{fill: "rgb(251, 146, 60)"}} d="M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z"/></svg>
          </div>
        } 
      </div>
    </CardShell>
  )
}

export default Card