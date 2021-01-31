import React, { Component } from 'react'
import Sound from 'react-sound'

class Music extends Component {
  render() {
    return (
      <Sound
      url="https://raw.githubusercontent.com/fien-n-nice/life-lost-laugh/nooran-sekoilut/src/components/whole-song.mp3"
      playStatus={Sound.status.PLAYING}
      playFromPosition={1 /* in milliseconds */}
      onLoading={({ bytesLoaded, bytesTotal }) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
      // onPlaying={({ position }) => this.setState({ position })}
      // onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      />
    )
  }
}

export default Music