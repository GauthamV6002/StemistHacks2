import React from 'react'

const CardShell = ({children, ...rest}) => {
  return (
    <div className="p-2" {...rest}>
      <div className="flex flex-row w-64 border border-dashed border-gray-600 group hover:bg-gray-900 rounded">
        {children}
      </div>
    </div>
  )
}

export default CardShell