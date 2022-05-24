import React from "react";
import { createRoot } from 'react-dom/client';
import './styles/styles.css';
import drumPads from './drumPads';
import Pad from "./pad";

const DrumMachine = () => {

  return (
    <div id="drum-machine">
      <div id="display">

      </div>
      <div className="drumPads">
        {drumPads.map(pad => {
          return (
            <div
              className="drum-pad"
              key={pad.sound}
            >
              {pad.letter}
              <Pad
                id={pad.letter}
                sound={pad.sound}
              />
            </div>
          )
        }
        )}
      </div>
    </div>
  )

}

const root = createRoot(document.getElementById('root'));
root.render(<DrumMachine />)