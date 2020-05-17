import React from "react";

import Note from "./Note";

const Fret = (props) => {
  let currentFret = props.position;

  const fretNotes = {
    1: ['F', 'C', 'Ab', 'Eb', 'Bb', 'F'],
    2: ['Gb', 'Db', 'A', 'E', 'B', 'Gb'],
    3: ['G', 'D', 'Bb', 'F', 'C', 'G'],
    4: ['Ab', 'Eb', 'B', 'Gb', 'Db', 'Ab'],
    5: ['A', 'E', 'C', 'G', 'D', 'A'],
    6: ['Bb', 'F', 'Db', 'Ab', 'Eb', 'Bb'],
    7: ['B', 'Gb', 'D', 'A', 'E', 'B'],
    8: ['C', 'G', 'Eb', 'Bb', 'F', 'C'],
    9: ['Db', 'Ab', 'E', 'B', 'Gb', 'Db'],
    10: ['D', 'A', 'F', 'C', 'G', 'D'],
    11: ['Eb', 'Bb', 'Gb', 'Db', 'Ab', 'Eb'],
    12: ['E', 'B', 'G', 'D', 'A', 'E'],
  }

  console.log(fretNotes);
  console.log(currentFret);
  let currentFretNotes = fretNotes[currentFret];

  return (
    <div className="fret">
      {currentFretNotes.map(note => {
        console.log(note);
        return (
          <Note letter={note} />
        )
      })}
    </div>
  )
}

export default Fret;