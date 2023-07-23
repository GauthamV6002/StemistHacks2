"use client"

import React, { useRef, useState } from 'react'
import CardShell from './CardShell'

const AddTile = ({ addFunc, counter }) => {

  const inputRef = useRef(null);

  return (
    <CardShell>
      <div className="flex flex-col">
        <div className="flex items-center w-48 bg-gray-600 text-orange-400 p-2 m-2 rounded">
          <input ref={inputRef} className="text-xs font-bold bg-gray-600" defaultValue={"Connection " + counter}></input>
        </div>
        <div onClick={() => {

          // DO CONNECTION STUFF HERE
          addFunc(inputRef.current.value, "CONNECTION_GOES_HERE")
        }} className="h-64 m-2 flex flex-row items-center w-60 justify-center">
          <svg className="h-24 w-24" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path style={{fill: "rgb(251, 146, 60)"}} d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
        </div>
      </div>
    </CardShell>
  )
}

export default AddTile