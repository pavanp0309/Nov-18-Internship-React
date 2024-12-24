import { useState } from "react";
import Header from './Header'
import Albums from './Albums'
import Player from './Player'

const MusicApp = ({onHandleDark,mode}) => {
  

  return (
    <div>
        {/* Header-section start */}
        <Header onHandleDark={onHandleDark} mode={mode}/>
        {/* Header-section end */}
        {/* Albums start */}
        <Albums/>
        {/* Albums end */}
        {/* Player start */}
        <Player/>
        {/* Player end */}
      
    </div>
  )
}

export default MusicApp
