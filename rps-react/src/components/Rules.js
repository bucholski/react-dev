import React from 'react';
import { ReactComponent as RulesGraph } from '../images/image-rules.svg'


const Rules = () => {
  function hideRules() {
    document.querySelector(".rules__container").classList.toggle("hidden");
  }

  return (
    <div className="rules__container hidden">
      <div className="rules__background" onClick={hideRules}></div>
      <div className="rules"> 
        <h1 className="rules__header">rules</h1>
        <RulesGraph className="rules__graph" />
        <button className="rules__exit" onClick={hideRules}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#3B4262" fillRule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" opacity=".25"/></svg>
        </button>
      </div>
    </div>
  )
}

export default Rules;
