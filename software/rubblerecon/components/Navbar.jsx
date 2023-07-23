import React from 'react'

const Navbar = () => {
  return (
    <div className=" bg-gray-700 h-12 flex flex-row items-center p-4">
      <img src="mag.png" alt="magnifying glass" className="h-8 mr-2"/>
      <h1 className="text-orange-400 font-bold text-2xl">RubbleRecon</h1>
    </div>
  )
}

export default Navbar