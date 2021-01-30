import React from 'react'

const StartScreen = ({ startGame, startCredits }) => {
  const componentStyle = {
    height: '480px',
    width: '854px'
  }
  return (
    <div>
      <section id="start-screen" style={componentStyle}>
        <h1>LIFE - LOST - LAUGH?</h1>
        <button id="start-game-button" onClick={startGame}>START</button>
        <br />
        <button id="credit-button" onClick={startCredits}>CREDITS</button>
      </section>
    </div>
  )
}

export default StartScreen
