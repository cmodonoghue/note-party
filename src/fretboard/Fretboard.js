import React from "react";

import Fret from "./Fret";

const Fretboard = () => {
  return (
    <div className="fretboard">
      <ul className="frets">
        <Fret position={'open'} />
        <Fret position={1} />
        <Fret position={2} />
        <Fret position={3} />
        <Fret position={4} />
        <Fret position={5} />
        <Fret position={6} />
        <Fret position={7} />
        <Fret position={8} />
        <Fret position={9} />
        <Fret position={10} />
        <Fret position={11} />
        <Fret position={12} />
      </ul>
      <ul className="fret-labels">
        <li className="stealth-fret"></li>
        <li className="stealth-fret"></li>
        <li className="stealth-fret"></li>
        <li className="stealth-fret">3</li>
        <li className="stealth-fret"></li>
        <li className="stealth-fret">5</li>
        <li className="stealth-fret"></li>
        <li className="stealth-fret">7</li>
        <li className="stealth-fret"></li>
        <li className="stealth-fret">9</li>
        <li className="stealth-fret"></li>
        <li className="stealth-fret"></li>
        <li className="stealth-fret">12</li>
      </ul>
    </div>
  )
}

export default Fretboard;