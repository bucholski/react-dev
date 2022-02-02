import React from 'react'
import DefaultButton from './DefaultButton'
import HandCircle from './HandCircle'
import { Link } from 'react-router-dom'
import PlayAgainButton from './PlayAgainButton'

const DuelContainer = ({ gesture, enemyChoice, playerMod, enemyMod, outcome }) => {



  // setOutcomeText();

  return (
    <>
    <div className="duel-container">
      <HandCircle gesture={gesture} mod={playerMod} label={'You picked'} />
        <PlayAgainButton outcome={outcome}/>
      <HandCircle gesture={enemyChoice} mod={enemyMod} label={'The house picked'} />
    </div>
    </>
  )
}
export default DuelContainer
