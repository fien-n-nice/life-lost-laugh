import React, { Component, Fragment } from "react"
import Bin from "./Bin"
import Body from "./Body"

class Murder extends Component {
    render() {
        return (
            <div style={style}>
                {this.props.bin.map(curr => {
                    return (
                        <Fragment key={curr.id}>
                            <div />
                            <Bin
                                body={curr.body}
                                removeBody={bodyId => this.props.removeBody(bodyId)}
                                addBody={(bodyId, binId) =>
                                    this.props.addTile(bodyId, binId)
                                }
                            />
                            <Body 
    
                            />
                        </Fragment>
                    );
                })}
            </div>
        );
    }
}

const style = {
    height: "100px",
    display: "grid",
    alignItems: "flex-end"
};

export default Murder;