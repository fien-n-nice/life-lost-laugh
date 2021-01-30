import React from 'react'

const MurderScreen = ({ startMenu }) => {
  const componentStyle = {
    height: '480px',
    width: '854px'
  }

  return (
    <section id="murder-screen">
      <img id="tausta" draggable="false" className="unselectable"
        src="https://codeliini.fi/wp-content/uploads/2021/01/tausta.png"
        alt="new"
      />

      <img id="taustin" draggable="false" className="unselectable"
        src="https://codeliini.fi/wp-content/uploads/2021/01/demotausta.png"
        alt="new"
      />

      <div id="roskisplacement">
        <img id="roskis-kansi" src="https://codeliini.fi/wp-content/uploads/2021/01/roskis-kansi.png"
          alt="roskiksen kansi" onClick={e => this.reply_click(e.target.id)} />
        <img id="roskis" src="https://codeliini.fi/wp-content/uploads/2021/01/roskis-main.png"
          alt="roskis" onClick={e => this.reply_click(e.target.id)} />
      </div>
      <div id="ruumisplacement">
        <img id="ruumis" src="https://codeliini.fi/wp-content/uploads/2021/01/ruumis-ref.png"
          alt="ruumis" onClick={e => this.reply_click(e.target.id)} />
      </div>

      <div id="mouseStats">
        <p id="where-we-at"></p>
        <p>x: {x} <br />y: {y}</p>
      </div>
    </section>
  )
}

export default MurderScreen