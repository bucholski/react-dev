import PropTypes from 'prop-types'
import logo from '../images/logo.svg'

const Header = ({score}) => {
  return (
    <header className="title-box">
      <img className="title-box__logo" src={logo}/>
      <div className="title-box__scoreboard">
        <span className="title-box__score-text">score</span>
        <div className="title-box__score-value">{score}</div>
      </div>
    </header>
  )
}

Header.defaultProps={
  score: 0,
}

Header.propTypes={
  score: PropTypes.number,
}

export default Header
