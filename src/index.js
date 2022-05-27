import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';
import './styles/styles.css';
import PadNames from './padNames';
import DrumPad from "./drumPad";

const DrumMachine = () => {

  // Make a sound by pressing the correspondent key
  useEffect(() => {
    const onKeyDown = e => {
      const audioKey = document.getElementById(e.key.toUpperCase())
      if (audioKey) {
        audioKey.currentTime = 0;
        audioKey.play()
        audioKey.parentElement.classList.add('playing');
        setTimeout(() => audioKey.parentElement.classList.remove('playing'), 150)
        displaySound(audioKey.parentElement.id)
      } else {
        return
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    }
  }, [])

  // Make a sound by clicking on an element
  const handleClick = el => {
    const parentEl = el.target;
    parentEl.firstElementChild.play();
    parentEl.classList.add('playing');
    displaySound(el.target.id);
    setTimeout(() => {
      parentEl.classList.remove('playing');
    }, 150)
  }

  // Displaying the pressed sound
  const [display, setDisplay] = useState('Press or Click the keys below');

  const displaySound = e => {
    const displayText = document.getElementById('display');
    displayText.classList.add('playing');
    setDisplay(e);
    setTimeout(() => displayText.classList.remove('playing'), 150);
  }

  return (
    <div id="drum-machine">
      <h3 id="display">
        {display}
      </h3>
      <div className="drumPads">
        {PadNames.map((pad, index) => {
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