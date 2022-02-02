import React from 'react'
import DefaultButton from './DefaultButton'

function showRules() {
  document.querySelector(".rules__container").classList.toggle("hidden");
}

const Footer = () => {
  return (
    <footer>
            <DefaultButton onClick={showRules} text="rules" extraClass="rules-btn" />

    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      <br/>
      Coded by <a href="https://bucholski.github.io">Misha Bucholski</a>.
    </div>
  </footer>
  )
}

export default Footer
