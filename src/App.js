import React, { Component } from "react"
// import Murder from "./Murder"
// import Mouse from "./Mouse"
// import apic from "https://codeliini.fi/wp-content/themes/codeliini/images/drawn_face.png";

// import { DndProvider } from "react-dnd"
// import { HTML5Backend } from "react-dnd-html5-backend"

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

        console.log(clicked_id)
        // if we click something that is clicked, remove border
        if (this.state.clicked === clicked_id) {
            this.setState({
                clicked: "none"
            })
            document.getElementById(clicked_id).style.border = "none"
            return
            
        // if nothing is in clicked state
        } else if (this.state.clicked === "none") {

            this.setState({
                clicked: clicked_id
            })
            document.getElementById(clicked_id).style.border = "2px solid red"
            return
        }

        if (this.state.clicked === "ruumis") {
            if (clicked_id === "roskis") {
                document.getElementById("ruumis").style.display = "none"
            }

            // this.setState({
            //     clicked: "none"
            // })
            // document.getElementById(clicked_id).style.border = "none"

        }

    }

    // addBody = (bodyId, binId) => {
    //     let bin = this.state.bin
    //     this.setState({ bin: bin })
    // }



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

        const x = this.state.mouse[0].x
        const y = this.state.mouse[0].y

        return (
            <div id="mouseScreen" onMouseOver={whereWeHover} onMouseMove={this._onMouseMove.bind(this)}>
                <section id="start-screen">
                    <h1>LIFE - LOST - LAUGH?</h1>
                    <button id="start-game-button" onClick={startGame}>START</button>
                    <br />
                    <button id="credit-button" onClick={startCredits}>CREDITS</button>
                </section>

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

                {/* <div style={layoutStyle}>
                        <DndProvider backend={HTML5Backend}>
                            <Murder
                                bin={this.state.bin}
                                removeBody={this.removeBody}
                                addTile={this.addBody}
                            />
                        </DndProvider>
                    </div> */}
                {/* <img id="taustin" draggable="false" className="unselectable"
                    src="https://codeliini.fi/wp-content/uploads/2021/01/taustin.png"
                    alt="new"
                />
                <img id="taustempi" draggable="false" className="unselectable"
                    src="https://codeliini.fi/wp-content/uploads/2021/01/taustempi.png"
                    alt="new"
                /> */}

            </div>
        )
    }
}


// const layoutStyle = {
//     display: "grid",
//     gridTemplateRows: `
//     200px
//   `
// }

export default App
