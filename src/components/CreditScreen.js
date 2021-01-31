import React from 'react'

const CreditScreen = ({ startMenu }) => {
  const componentStyle = {
    height: '480px',
    width: '854px'
  }

  return (
    <section id="credit-screen">
      <h1>LIFE - LOST - LAUGH?</h1>
        <h2>Mady by</h2>
          <ul>
            <li><b>em</b> - artsy, music, sound effects</li>
            <li><b>iid</b> - code</li>
            <li><b>noora</b> - code</li>
            <li><b>ots</b> - artsy, sound effects</li>
          </ul>
          <button id="start-game-button" onClick={startMenu}>BACK TO MENU</button>
    </section>
  )
}

export default CreditScreen