import React, { Component } from "react"
// import apic from "https://codeliini.fi/wp-content/themes/codeliini/images/drawn_face.png";
import StartScreen from './components/StartScreen'
import CreditScreen from './components/CreditScreen'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mouse: [
        { x: 0, y: 0 }
      ],
      clicked: "none"
    }

  }

  _onMouseMove(e) {
    this.setState({
      mouse: [
        { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }
      ]
    });
  }

  reply_click(clicked_id) {
    // if we click something that is clicked, remove border
    if (this.state.clicked === clicked_id) {
      this.setState({
        clicked: "none"
      })
      document.getElementById(clicked_id).style.border = "none"
      console.log('Clicked state: ', this.state.clicked)
      return

      // if nothing is in clicked state
    } else if (this.state.clicked === "none") {

      this.setState({
        clicked: clicked_id
      })
      document.getElementById(clicked_id).style.border = "2px solid red"
      console.log('Clicked state: ', this.state.clicked)
      return
    }

    if (this.state.clicked === "ruumis") {
      if (clicked_id === "roskis") {
        document.getElementById("ruumis").style.display = "none"
        return
      }

    }

  }

  render() {

    function whereWeHover(e) {
      // e.target.style.background = 'red';
      document.getElementById("where-we-at").innerHTML = e.target.id
    }

    function startMenu() {
      document.getElementById("credit-screen").style.display = "none"
      document.getElementById("start-screen").style.display = "block"
    }

    function startGame() {
      document.getElementById("start-screen").style.display = "none"
      document.getElementById("murder-screen").style.display = "block"
    }

    function startCredits() {
      document.getElementById("start-screen").style.display = "none"
      document.getElementById("credit-screen").style.display = "block"
    }

    function moveBody(xc, yc, clickState) {
      //console.log(clickState)
      console.log('HEI OLEn ')
      // calc((100vh - 480px)/2)
      // window.innerWidth
      // console.log(xc.toString().concat("px"))
      if (clickState === "ruumis") {
        document.getElementById("ruumisplacement").style.top = (yc + (window.innerHeight - 480) / 2).toString().concat("px")
        document.getElementById("ruumisplacement").style.left = (xc + (window.innerWidth - 854) / 2).toString().concat("px")
      }
    }

    const x = this.state.mouse[0].x
    const y = this.state.mouse[0].y

    return (
      <div>
        <div id="mouseScreen" onMouseOver={whereWeHover} onMouseMove={this._onMouseMove.bind(this)}>
          <StartScreen
            startGame={startGame}
            startCredits={startCredits} />

          <section id="murder-screen">
            <img id="tausta" draggable="false" className="unselectable"
              src="https://codeliini.fi/wp-content/uploads/2021/01/tausta.png"
              alt="new"
            />

            <img id="taustin" draggable="false" //className="unselectable"
              src="https://codeliini.fi/wp-content/uploads/2021/01/demotausta.png"
              alt="new" onClick={() => moveBody(x, y, this.state.clicked)}
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
            <div id="lammikkoplacement">
              <img id="lammikko" src="https://github.com/fien-n-nice/life-lost-laugh/blob/master/png-images/jatelammikko.png?raw=true"
                alt="lammikko" onClick={e => this.reply_click(e.target.id)} />
            </div>
            <div id="mouseStats">
              <p id="where-we-at"></p>
              <p>x: {x} <br />y: {y}</p>
            </div>
          </section>
          <CreditScreen
            startMenu={startMenu} />
        </div>
      </div>
    )
  }
}

export default App
