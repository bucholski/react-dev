import React from 'react';
import { Link } from 'react-router-dom';
import DefaultButton from './DefaultButton';


const PlayAgainButton = ({ outcome }) => {
   
  function setOutcomeText() {
    if (outcome === 'victory') {
      return 'You win'
    } else if (outcome === 'defeat') {
      return 'You lose'
    } else if (outcome === 'tie') {
      return 'TIE'
    }
  }
 
  

  return (
  <div className="again-container">
        <div className="outcome-text outcome-text--hidden">{setOutcomeText()}</div>
        <Link  to="./..">  
         <DefaultButton text="Play again" extraClass={`again-btn hidden-btn`} />
        </Link>
  </div>
  )
};

export default PlayAgainButton;
