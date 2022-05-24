import React from "react";

export const Pad = props => {
  return (
    <audio
      src={"./sounds/" + props.sound + ".wav"}
      id={props.id}
      className="clip"
      type="audio/wav"
    >
    </audio>
  )
}

export default Pad;