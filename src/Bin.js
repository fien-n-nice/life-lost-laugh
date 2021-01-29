import React, { Component } from "react"
import { DropTarget } from "react-dnd"

import Body from "./Body";
import { BODY } from "./Types"

const binTarget = {
    canDrop({ isMoveValid, isTheLatter }, monitor) {
        const isOver = monitor.isOver();
        const position = monitor.getItem().position;
    
        return isOver
    },

    drop({ removeBody, addBody }, monitor) {
        const position = monitor.getItem().position;
        const target = parseInt(monitor.targetId.substr(1)) + 1;
        removeBody(position);
        addBody(position, target);
    }
}

const collect = (connect, monitor) => ({
    dropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    isOver: monitor.isOver()
})

class Bin extends Component {
    render() {
        const background = this.props.isOver ? `#800` : `#764abc`;
        const style = {
      height: `20px`,
      border: "4px solid white",
            borderRadius: "20px 20px 0 0",
            display: "grid",
            alignContent: "flex-end",
            background: background
        }

        return this.props.dropTarget(
            <div style={style}>
                {this.props.body && this.props.body.map(body => <Body key={body.id} position={body.id} />)}
            </div>
        )
    }
}

export default DropTarget(BODY, binTarget, collect)(Bin)