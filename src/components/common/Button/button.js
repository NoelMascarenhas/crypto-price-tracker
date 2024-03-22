import React from 'react'
import "./button.css"

function Button({ text, onClick, outlined }) {
  return (
    <div className={outlined ? 'outlined-btn': 'btn'} onClick={()=>onClick()}>{text}</div>
  )
}

export default Button