import React from 'react'
import HandCircle from './HandCircle'
import SelectionBg from './SelectionBg'

const HandContainer = ({setChoice, link}) => {
  return (
<div className="hand-container">
  <SelectionBg />
  <HandCircle setChoice={setChoice} gesture='paper' link={link} />
  <HandCircle setChoice={setChoice} gesture='scissors' link={link} />
  <HandCircle setChoice={setChoice} gesture='rock' link={link} />
</div>
  )
}

export default HandContainer
