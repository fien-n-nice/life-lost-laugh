import React from 'react'

const StoryScreen = ({ startGame }) => {
  const componentStyle = {
    height: '480px',
    width: '854px'
  }
  return (
    <div>
      <section id="story-screen" style={componentStyle}>
        <h2>YoU mUrdEred A pErsOn ?!?!?!?!?!?</h2>
        <h1>Well, now you niid to hide them. Quickly. And hide them good so they wont get FOUND</h1>
        <h3>You're asking how to hide a body? Well don't ask me. I'm just a text inside an html-tag... Although... I know it can help if you click things... maybe (:</h3>
        <h3>Are you ready? Well you better be, time is running.</h3>
        <button id="start-game-button" onClick={startGame}>START</button>
      </section>
    </div>
  )
}

export default StoryScreen