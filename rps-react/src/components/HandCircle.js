import React from 'react'
import { Link } from 'react-router-dom'
const HandCircle = ({ gesture, setChoice, link, mod, label }) => {


  return (
    <Link to={link}>
      <button onClick={()=> setChoice(()=>gesture)} className={`hand-circle hand-circle--${gesture} ${mod}`}>
        <div className={`hand-circle__border hand-circle__border--${gesture}`}></div>
        <span className="hand-circle__label">{label}</span>
      </button>
    </Link>
  )
}

HandCircle.defaultProps={
  link: "",
  setChoice: ()=>0
}

export default HandCircle
