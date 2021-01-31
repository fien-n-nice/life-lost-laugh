import React from 'react'

const StartScreen = ({ startStory, startCredits }) => {
    const componentStyle = {
        height: '480px',
        width: '854px'
    }

    return (
        <div>
            <section id="start-screen" style={componentStyle}>
                <img id="start-life" draggable="false" className="unselectable"
                    src="https://raw.githubusercontent.com/fien-n-nice/life-lost-laugh/master/png-images/frame1.gif"
                    alt="victim"
                />
                <img id="start-lost" draggable="false" className="unselectable"
                    src="https://raw.githubusercontent.com/fien-n-nice/life-lost-laugh/master/png-images/frame2.gif"
                    alt="weapon"
                />
                <img id="start-laugh" draggable="false" className="unselectable"
                    src="https://raw.githubusercontent.com/fien-n-nice/life-lost-laugh/master/png-images/frame3.gif"
                    alt="killer"
                />
                <img id="start-still" draggable="false" className="unselectable"
                    src="https://raw.githubusercontent.com/fien-n-nice/life-lost-laugh/master/png-images/title-still.png"
                    alt="still"
                />
                <button id="start-story-button" onClick={startStory}>START</button>
                <br />
                <button id="credit-button" onClick={startCredits}>CREDITS</button>
            </section>
        </div>
    )
}

export default StartScreen
