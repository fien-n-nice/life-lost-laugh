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
            <li>em</li>
            <li>iid</li>
            <li>noora</li>
            <li>ots</li>
          </ul>
          <button id="start-game-button" onClick={startMenu}>BACK TO MENU</button>
    </section>
  )
}

export default CreditScreen