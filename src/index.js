import React, { useEffect } from "react";
import { createRoot } from 'react-dom/client';
import './styles/styles.css';
import drumPads from './drumPads';
import DrumPad from "./drumPad";

const DrumMachine = () => {

  // Make a sound by pressing the correspondent key
  useEffect(() => {
    const onKeyDown = e => {
      const audioKey = document.getElementById(e.key.toUpperCase())
      if (audioKey) {
        audioKey.currentTime = 0;
        audioKey.play()
      } else {
        return
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    }
  }, [])

  // Make a sound by clicking on an element
  const handleClick = el => {
    const parentEl = el.target;
    parentEl.firstElementChild.play()
  }

  return (
    <div id="drum-machine">
      <div id="display">

      </div>
      <div className="drumPads">
        {drumPads.map((pad, index) => {
          return (
            <DrumPad
              letter={pad.letter}
              sound={pad.soundDescription}
              key={index}
              handleClick={handleClick}
            />
          )
        }
        )}
      </div>
    </div >
  )

}

const root = createRoot(document.getElementById('root'));
root.render(<DrumMachine />)