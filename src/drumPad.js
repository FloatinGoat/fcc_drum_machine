import React from "react";

export const DrumPad = props => {


  return (
    <div
      className="drum-pad"
      id={props.sound}
      onClick={props.handleClick}
    >
      {props.letter}
      <audio
        id={props.letter}
        src={"./sounds/" + props.sound + ".wav"}
        className="clip"
        type="audio/wav"
      >
      </audio>
    </div>
  )
}

export default DrumPad;