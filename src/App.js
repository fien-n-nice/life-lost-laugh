import React, { Component } from "react"
// import apic from "https://codeliini.fi/wp-content/themes/codeliini/images/drawn_face.png";
import StartScreen from './components/StartScreen'
import CreditScreen from './components/CreditScreen'
import StoryScreen from './components/StoryScreen'
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
        this.setState({
          clicked: clicked_id
        })
        document.getElementById("thinking-aloud").style.display = "block"
        document.getElementById("think-bubble1").innerText = "SÄÄ kUUlUT ROskIIN!!!!"
        document.getElementById("ruumis").style.display = "none"
        document.getElementById("ruumis").style.border = "none"
        return
      }
      if (clicked_id === "lammikko") {
        this.setState({
          clicked: clicked_id
        })
        document.getElementById("thinking-aloud").style.display = "block"
        document.getElementById("think-bubble1").innerText = "SYÖVY JO!!!!"
        document.getElementById("ruumis").style.display = "none"
        document.getElementById("ruumis").style.border = "none"
        return
      }

    }

  }

  toEnd() {
    if (this.state.clicked === "roskis") {
      document.getElementById("think-bubble1").innerText = "the body was very badly hid, so police found it and you go to jail :("

    } else if (this.state.clicked === "lammikko") {
      document.getElementById("think-bubble1").innerText = "EPIC!!!! the body is gone!! *insert laugh* "
    }

    document.getElementById("end-button").style.display = "none"
    document.getElementById("start-again-button").style.display = "block"
  }

  toBeginning() {
    this.setState({
      clicked: "none"
    })
    document.getElementById("thinking-aloud").style.display = "none"
    document.getElementById("think-bubble1").innerText = ""
    document.getElementById("murder-screen").style.display = "none"
    document.getElementById("start-screen").style.display = "block"
    document.getElementById("ruumis").style.display = "block"
    document.getElementById("ruumisplacement").style.top = ((window.innerHeight - 480) / 2 + 200).toString().concat("px")
    document.getElementById("ruumisplacement").style.left = ((window.innerWidth - 854) / 2 + 254).toString().concat("px")

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

    function startStory() {
      document.getElementById("start-screen").style.display = "none"
      document.getElementById("story-screen").style.display = "block"
    }

    function moveBody(xc, yc, clickState) {
      if (clickState === "ruumis") {
        if (xc > 800) {
          xc = 800
        }
        if (yc > 450) {
          yc = 450
        }

        if (yc > 300) {
          document.getElementById("ruumis").style.height = "230px"
        } else if (yc > 200) {
          document.getElementById("ruumis").style.height = "180px"
        } else if (yc > 100) {
          document.getElementById("ruumis").style.height = "125px"
        } else if (yc > 50) {
          document.getElementById("ruumis").style.height = "100px"
        }

        document.getElementById("ruumisplacement").style.top = (yc + (window.innerHeight - 480) / 2).toString().concat("px")
        document.getElementById("ruumisplacement").style.left = (xc + (window.innerWidth - 854) / 2).toString().concat("px")
      }
    }

    const x = this.state.mouse[0].x
    const y = this.state.mouse[0].y

    return (
      <div>
        <audio
          controls
          src="https://raw.githubusercontent.com/fien-n-nice/life-lost-laugh/nooran-sekoilut/src/components/whole-song.mp3"
          autoPlay={true}
          loop={true} />
        <div id="mouseScreen" onMouseOver={whereWeHover} onMouseMove={this._onMouseMove.bind(this)}>
          <StartScreen
            startStory={startStory}
            startCredits={startCredits} />

          <StoryScreen
            startGame={startGame} />

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
            {/* <img id="jalkaetu" alt="jalka etu" src="https://raw.githubusercontent.com/fien-n-nice/life-lost-laugh/master/png-images/ruumis-jalka-etu.PNG"
              onClick={e => this.reply_click(e.target.id)} />

            <img id="jalkataka" alt="jalka taka" src="https://raw.githubusercontent.com/fien-n-nice/life-lost-laugh/master/png-images/ruumis-jalka-taka.PNG"
              onClick={e => this.reply_click(e.target.id)} />

            <img id="paa" alt="paa" src="https://raw.githubusercontent.com/fien-n-nice/life-lost-laugh/master/png-images/ruumis-paa.png"
              onClick={e => this.reply_click(e.target.id)} />

            <img id="kasivarsiala" alt="kasivarsi ala" src="https://raw.githubusercontent.com/fien-n-nice/life-lost-laugh/master/png-images/ruumis-kasivarsi-ala.PNG"
              onClick={e => this.reply_click(e.target.id)} />

            <img id="kasivarsiyla" alt="kasivarsi yla" src="https://raw.githubusercontent.com/fien-n-nice/life-lost-laugh/master/png-images/ruumis-kasivarsi-yla.PNG"
              onClick={e => this.reply_click(e.target.id)} /> */}

            <div id="lammikkoplacement">
              <img id="lammikko" src="https://github.com/fien-n-nice/life-lost-laugh/blob/nooran-sekoilut/png-images/jatelammikko.png?raw=true"
                alt="lammikko" onClick={e => this.reply_click(e.target.id)} />
            </div>
            <div id="mouseStats">
              <p id="where-we-at"></p>
              <p>x: {x} <br />y: {y}</p>
            </div>
            <div id="thinking-aloud">
              <p id="think-bubble1"></p>
              <br />
              <button id="end-button" onClick={() => this.toEnd()}>Ok</button>
              <p id="think-bubble2"></p>
              <button id="start-again-button" onClick={() => this.toBeginning()}>back to beginning</button>
            </div>
          </section>
          <CreditScreen
            startMenu={startMenu} />
        </div>
      </div >
    )
  }
}

export default App
