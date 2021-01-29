import React, { Component } from "react"
import { DragSource } from "react-dnd"

import { BODY } from "./Types"

const body = {
  beginDrag({ position }) {
    return { position }
  }
}

const collect = (connect, monitor) => ({
  dragSource: connect.dragSource(),
  dragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
})

class Body extends Component {
  render() {
      const { position, dragSource, isDragging } = this.props
      const display = isDragging ? "none" : "block"
      const opacity = isDragging ? 0.5 : 1
      const width = `30px`
      const offset = `${(position * 40) / 2} vw`

      const tileStyle = {
          display: display,
          opacity: opacity,
          height: "10px",
          width: `calc(${width})`,
          transform: `translateX(calc(${offset} * -1))`,
          border: "4px solid white",
          borderRadius: "10px",
          background: "#764abc"
      }
      
      return dragSource(<div style={tileStyle} position={position} />)
  }
}

export default DragSource(BODY, body, collect)(Body)