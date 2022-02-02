import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import DefaultButton from './DefaultButton';
import DuelContainer from './DuelContainer'

const Step2 = ({ gesture, score, setScore }) => {

  const [reveal, setReveal] = useState (0);
  const [enemyChoice, setEnemyChoice] = useState ('');
  const [outcome, setOutcome] = useState ('');
  const [playerMod, setPlayerMod] = useState ('');
  const [enemyMod, setEnemyMod] = useState ('concealed');

  function showAgainBtn() {
    console.log("this is happening too quickly")
    document.querySelector('.again-btn').classList.remove('hidden-btn');
    document.querySelector('.outcome-text').classList.remove('outcome-text--hidden');
  }

  function rollEnemy() {
    const gestures = ['paper', 'scissors', 'rock'];
    let i = Math.floor(Math.random() * 3);
    return gestures[i];
  }

  function unveilEnemy() {
    if(enemyMod === 'concealed' && outcome === "") {
      setTimeout(() => {
      setEnemyMod(('')); 
      setReveal(1);
      // setPlayAgainBtn('');
      showAgainBtn();
      }, 1000 )
    }
  }

  function selectWinner() {
    if (gesture == enemyChoice)  { 
      return('tie');
    } else if (gesture == 'rock' && enemyChoice == 'scissors' || gesture == 'paper' && enemyChoice == 'rock' || gesture == 'scissors' && enemyChoice == 'paper') {
      return('victory');
    } else if (gesture == 'paper' && enemyChoice == 'scissors' || gesture == 'scissors' && enemyChoice == 'rock' || gesture == 'rock' && enemyChoice == 'paper') {
      return('defeat');
    }
  }
 
  useEffect(() => {
    setEnemyChoice(rollEnemy);
  },[])

  useEffect(()=>{ 
    unveilEnemy()
  },[enemyChoice])

  useEffect(() => {
    setOutcome(selectWinner)
  },[reveal])

  useEffect(() => {
    if (outcome === 'victory') { 
    setScore(()=>score + 1);
    setPlayerMod(()=>"highlight");
    }
    else if (outcome === 'defeat') { 
    setScore((score)=>score - 1);
    setEnemyMod(()=>"highlight");
    }
  },[outcome])


return (
    <>
      {/* <h1>{outcome}</h1> */}
      <DuelContainer gesture={gesture} enemyChoice={enemyChoice} playerMod={playerMod} enemyMod={enemyMod} outcome={outcome} />
    </>
  )
}

export default Step2