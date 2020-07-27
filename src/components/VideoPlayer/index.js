import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';

const VideoPlayer = (props) => {
  const componentWrapperStyles = {
    position: 'relative',
    paddingTop: '56.25%'
  }
  const playerStyles = {
    position: 'absolute',
    top: 0,
    left: 0
  }
  return (
    <section className="video-player" style={componentWrapperStyles}>
      <ReactPlayer url='https://youtu.be/vpTuSpUboxY' width='100%' height='100%' style={playerStyles} />
    </section>
  )
}

export { VideoPlayer };
