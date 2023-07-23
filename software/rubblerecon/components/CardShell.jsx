import React from 'react'

const CardShell = ({children, shellWidth, ...rest}) => {
  return (
    <div className="p-2" {...rest}>
      <div style={{maxWidth: shellWidth + "rem"}} className="flex flex-row border border-dashed border-gray-600 group hover:bg-gray-900 rounded">
        {children}
      </div>
    </div>
  )
}

export default CardShell