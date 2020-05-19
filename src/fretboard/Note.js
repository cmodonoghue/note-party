import React, { useContext } from "react";
import { CategoryContext, LetterContext, TypeContext } from "../App";

const Note = (props) => {
  const category = useContext(CategoryContext);
  // the active key or chord
  const currentLetter = useContext(LetterContext);
  // whether the active key or chord is major/minor
  const type = useContext(TypeContext);

  let accidental = false;
  if (props.letter.length > 1) {
    accidental = true;
  }

  // the note that gets displayed in the circle
  let noteLetter = props.letter;
  let display = true;

  // notes in each key or chord

  const keyNotesMajor = {
    Ab: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
    A: ["A", "B", "C#", "D", "E", "F#", "G#"],
    Bb: ["Bb", "C", "D", "Eb", "F", "G", "A"],
    B: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
    C: ["C", "D", "E", "F", "G", "A", "B"],
    Db: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
    D: ["D", "E", "F#", "G", "A", "B", "C#"],
    Eb: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
    E: ["E", "F#", "G#", "A", "B", "C#", "D#"],
    F: ["F", "G", "A", "Bb", "C", "D", "E"],
    Gb: ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
    G: ["G", "A", "B", "C", "D", "E", "F#"],
  };

  const keyNotesMinor = {
    Ab: ["G#", "A#", "B", "C#", "D#", "E", "F#"],
    A: ["A", "B", "C", "D", "E", "F", "G"],
    Bb: ["A#", "C", "C#", "D#", "F", "F#", "G#"],
    B: ["B", "C#", "D", "E", "F#", "G", "A"],
    C: ["C", "D", "Eb", "F", "G", "Ab", "Bb"],
    Db: ["C#", "D#", "E", "F#", "G#", "A", "B"],
    D: ["D", "E", "F", "G", "A", "Bb", "C"],
    Eb: ["D#", "F", "F#", "G#", "A#", "B", "C#"],
    E: ["E", "F#", "G", "A", "B", "C", "D"],
    F: ["F", "G", "Ab", "Bb", "C", "Db", "Eb"],
    Gb: ["F#", "G#", "A", "B", "C#", "D", "E"],
    G: ["G", "A", "Bb", "C", "D", "Eb", "F"],
  };

  const chordNotesMajor = {
    Ab: ["Ab", "C", "Eb"],
    A: ["A", "C#", "E"],
    Bb: ["Bb", "D", "F"],
    B: ["B", "D#", "F#"],
    C: ["C", "E", "G"],
    Db: ["Db", "F", "Ab"],
    D: ["D", "F#", "A"],
    Eb: ["Eb", "G", "Bb"],
    E: ["E", "G#", "B"],
    F: ["F", "A", "C"],
    Gb: ["Gb", "Bb", "Db"],
    G: ["G", "B", "D"],
  };

  const chordNotesMinor = {
    Ab: ["Ab", "B", "Eb"],
    A: ["A", "C", "E"],
    Bb: ["Bb", "Db", "F"],
    B: ["B", "D", "F#"],
    C: ["C", "Eb", "G"],
    Db: ["C#", "E", "G#"],
    D: ["D", "F", "A"],
    Eb: ["Eb", "Gb", "Bb"],
    E: ["E", "G", "B"],
    F: ["F", "Ab", "C"],
    Gb: ["F#", "A", "C#"],
    G: ["G", "Bb", "D"],
  };

  let keyNotes = keyNotesMajor;
  if (type === 'minor') {
    keyNotes = keyNotesMinor;
  }

  let chordNotes = chordNotesMajor;
  if (type === 'minor') {
    chordNotes = chordNotesMinor;
  }

  // all keys and chords that use sharps

  const sharpKeysMajor = ["A", "B", "D", "E", "Gb", "G"];
  const sharpKeysMinor = ["Ab", "Bb", "B", "Db", "Eb", "E", "Gb"];

  const sharpChordsMajor = ["A", "B", "D", "E"];
  const sharpChordsMinor = ["B", "Db", "Gb"];

  const convertAccidental = (note) => {
    switch (note) {
      case "Ab":
        return "G#";
      case "Bb":
        return "A#";
      case "Db":
        return "C#";
      case "Eb":
        return "D#";
      case "Gb":
        return "F#";
      default:
        break;
    }
  };

  // display note if it is in active key

  if (category === "key") {
    if (currentLetter) {
      if (accidental) {
        // if the active key is one that uses sharps instead of flats, then convert the current flat note
        if (type === 'major') {
          if (sharpKeysMajor.includes(currentLetter)) {
            noteLetter = convertAccidental(noteLetter);
          }
        } else if (type === 'minor') {
          if (sharpKeysMinor.includes(currentLetter)) {
            noteLetter = convertAccidental(noteLetter);
          }
        }
      }
      let currentKey = currentLetter;
      if (keyNotes[currentKey].includes(noteLetter)) {
        display = true;
      } else {
        display = false;
      }
    }
  }

  if (category === "chord") {
    if (currentLetter) {
      if (accidental) {
        // if the active chord is one that uses sharps instead of flats, then convert the current flat note
        if (type === 'major') {
          if (sharpChordsMajor.includes(currentLetter)) {
            noteLetter = convertAccidental(noteLetter);
          }
        } else if (type === 'minor') {
          if (sharpChordsMinor.includes(currentLetter)) {
            noteLetter = convertAccidental(noteLetter);
          }
        }
      }
      let currentChord = currentLetter;
      if (chordNotes[currentChord].includes(noteLetter)) {
        display = true;
      } else {
        display = false;
      }
    }
  }

  return (
    <div className={props.open === true ? "string string--open" : "string"}>
      <div
        className={
          display === true
            ? "note note--" + props.letter
            : "note note--" + props.letter + " inactive"
        }
      >
        {noteLetter}
      </div>
    </div>
  );
};

export default Note;
