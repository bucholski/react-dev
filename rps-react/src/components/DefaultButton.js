  import React from 'react'
  
  const DefaultButton = ({text, extraClass, onClick}) => {
    return (
      <button onClick={onClick} className={`default-btn ${extraClass}`}>{text}</button>
    )
  }
  
  export default DefaultButton
  