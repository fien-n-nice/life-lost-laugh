import React, { Component } from "react"
import Murder from "./Murder"

import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bin: [
                { id: 1, bodies: [] }
            ]
        }
    }

    componentDidMount = () => {
        const bodies = []
        for (let id = 1; id <= 1; id++) {
            bodies.push({ id: id })
        }

        this.setState({
            bin: [
                { id: 1, bodies: bodies }
            ]
        })
    }

    removeBody = bodyId => {
        var binId = null
        this.setState(prevState => {
            prevState.bin.forEach(bin => {
                bin.bodies = bin.bodies.filter(body => {
                    if (body.id === bodyId) {
                        binId = bin.id
                        return false
                    } else {
                        return true
                    }
                })
            })

            return {
                bin: prevState.bin
            }
        })
        return binId
    };

    addBody = (bodyId, binId) => {
      let bin = this.state.bin
      this.setState({ bin: bin })
    }


    render() {
        return (
            
            <div style={layoutStyle}>
                <DndProvider backend={HTML5Backend}>
                    <Murder
                        bin={this.state.bin}
                        removeBody={this.removeBody}
                        addTile={this.addBody}
                    />
                </DndProvider>
            </div>
        )
    }
}

const layoutStyle = {
    display: "grid",
    gridTemplateRows: `
    200px
  `
}

export default App
