import React from 'react'

function Button({children
    ,type,bgColor,textColor,className='',...props
}) {

  return (
    <button className={`px-4 py-2 rounded-lg ${className} ${bgColor},${textColor}`}{...props}>{children}</button>
  )
}

export default Button
