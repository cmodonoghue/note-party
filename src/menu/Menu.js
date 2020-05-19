import React, { useState } from "react";

const Menu = ({ 
  onToggleMenu, 
  onToggleSubMenu, 
  onSelectKey,
  onSelectChord,
  activeKey,
  activeChord,
  activeCategory, 
  type}) => {

  let activeLetter = '';
  let activeCategoryDisplay = '';
  let activeNotes = [];

  // get correct data to display beneath title

  if (activeCategory === 'key') {
    activeLetter = activeKey;
  } else if (activeCategory === 'chord') {
    activeLetter = activeChord;
  } else {
    activeLetter = '';
  }

  if (activeCategory === 'key') {
    activeCategoryDisplay = 'SCALE';
  } else {
    activeCategoryDisplay = 'CHORD';
  }

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

  // get correct notes to display beneath title

  if (activeCategory === 'key') {
    if (type === 'major') {
      activeNotes = keyNotesMajor[activeKey];
    } else if (type === 'minor') {
      activeNotes = keyNotesMinor[activeKey];
    }
  } else if (activeCategory === 'chord') {
    if (type === 'major') {
      activeNotes = chordNotesMajor[activeChord];
    } else if (type === 'minor') {
      activeNotes = chordNotesMinor[activeChord];
    }
  } else {
    activeNotes = [];
  }
  
  return (
    <div className="header">

      <div className="title-section">
          <h1 className="title"><span>note</span> party</h1>

          {activeLetter !== '' &&
            <div>
              <h2 className="display">
                {activeLetter} <span>{type}</span> {activeCategoryDisplay}
              </h2>

              <h3 className="notes-display">({activeNotes.join(', ')})</h3>
            </div>
          }

      </div>

      <div className="menu">

        {/* main menu */}
        <ul className="menu-list">
          <li onClick={() => onToggleMenu('key')}>
            <h2 className={activeCategory === 'key' ? "menu-list__item" : "menu-list__item inactive"}>toggle key</h2>
          </li>
          <li onClick={() => onToggleMenu('chord')}>
            <h2 className={activeCategory === 'chord' ? "menu-list__item" : "menu-list__item inactive"}>toggle chord</h2>
          </li>
          <li onClick={() => onToggleMenu('all')}>
            <h2 className={activeCategory === 'all' ? "menu-list__item" : "menu-list__item inactive"}>show all</h2>
          </li>
        </ul>

        <h2 className={activeCategory === 'all' ? "mobile-msg" : "mobile-msg inactive"}>
          showing all notes
        </h2>

        {/* key submenu */}
        <div className={activeCategory === 'key' ? "submenu" : "submenu inactive"}>
          <h2 
            className={type === 'major' ? "submenu__item" : "submenu__item inactive"}
            onClick={() => onToggleSubMenu('major')}
          >major</h2>
          <h2 
            className={type === 'minor' ? "submenu__item" : "submenu__item inactive"}
            onClick={() => onToggleSubMenu('minor')}
          >minor</h2>
        </div>

        {/* key list */}
        <div className={activeCategory === 'key' ? "letter-list" : "letter-list inactive"}>
          <h3 
            className={activeKey === 'Ab' ? "letter" : "letter inactive"} 
            onClick={() => onSelectKey('Ab')}
          >Ab</h3>
          <h3 
            className={activeKey === 'A' ? "letter" : "letter inactive"} 
            onClick={() => onSelectKey('A')}
          >A</h3>
          <h3 
            className={activeKey === 'Bb' ? "letter" : "letter inactive"} 
            onClick={() => onSelectKey('Bb')}
          >Bb</h3>
          <h3 
            className={activeKey === 'B' ? "letter" : "letter inactive"} 
            onClick={() => onSelectKey('B')}
          >B</h3>
          <h3 
            className={activeKey === 'C' ? "letter" : "letter inactive"} 
            onClick={() => onSelectKey('C')}
          >C</h3>
          <h3 
            className={activeKey === 'Db' ? "letter" : "letter inactive"} 
            onClick={() => onSelectKey('Db')}
          >Db</h3>
          <h3 
            className={activeKey === 'D' ? "letter" : "letter inactive"} 
            onClick={() => onSelectKey('D')}
          >D</h3>
          <h3 
            className={activeKey === 'Eb' ? "letter" : "letter inactive"} 
            onClick={() => onSelectKey('Eb')}
          >Eb</h3>
          <h3 
            className={activeKey === 'E' ? "letter" : "letter inactive"} 
            onClick={() => onSelectKey('E')}
          >E</h3>
          <h3 
            className={activeKey === 'F' ? "letter" : "letter inactive"} 
            onClick={() => onSelectKey('F')}
          >F</h3>
          <h3 
            className={activeKey === 'Gb' ? "letter" : "letter inactive"} 
            onClick={() => onSelectKey('Gb')}
          >Gb</h3>
          <h3 
            className={activeKey === 'G' ? "letter" : "letter inactive"} 
            onClick={() => onSelectKey('G')}
          >G</h3>
        </div>

        {/* chord submenu */}
        <div className={activeCategory === 'chord' ? "submenu" : "submenu inactive"}>
          <h2 
            className={type === 'major' ? "submenu__item" : "submenu__item inactive"}
            onClick={() => onToggleSubMenu('major')}
          >major</h2>
          <h2 
            className={type === 'minor' ? "submenu__item" : "submenu__item inactive"}
            onClick={() => onToggleSubMenu('minor')}
          >minor</h2>
        </div>

        {/* chord list */}
        <div className={activeCategory === 'chord' ? "letter-list" : "letter-list inactive"}>
          <h3 
            className={activeChord === 'Ab' ? "letter" : "letter inactive"} 
            onClick={() => onSelectChord('Ab')}
          >Ab</h3>
          <h3 
            className={activeChord === 'A' ? "letter" : "letter inactive"} 
            onClick={() => onSelectChord('A')}
          >A</h3>
          <h3 
            className={activeChord === 'Bb' ? "letter" : "letter inactive"} 
            onClick={() => onSelectChord('Bb')}
          >Bb</h3>
          <h3 
            className={activeChord === 'B' ? "letter" : "letter inactive"} 
            onClick={() => onSelectChord('B')}
          >B</h3>
          <h3 
            className={activeChord === 'C' ? "letter" : "letter inactive"} 
            onClick={() => onSelectChord('C')}
          >C</h3>
          <h3 
            className={activeChord === 'Db' ? "letter" : "letter inactive"} 
            onClick={() => onSelectChord('Db')}
          >Db</h3>
          <h3 
            className={activeChord === 'D' ? "letter" : "letter inactive"} 
            onClick={() => onSelectChord('D')}
          >D</h3>
          <h3 
            className={activeChord === 'Eb' ? "letter" : "letter inactive"} 
            onClick={() => onSelectChord('Eb')}
          >Eb</h3>
          <h3 
            className={activeChord === 'E' ? "letter" : "letter inactive"} 
            onClick={() => onSelectChord('E')}
          >E</h3>
          <h3 
            className={activeChord === 'F' ? "letter" : "letter inactive"} 
            onClick={() => onSelectChord('F')}
          >F</h3>
          <h3 
            className={activeChord === 'Gb' ? "letter" : "letter inactive"} 
            onClick={() => onSelectChord('Gb')}
          >Gb</h3>
          <h3 
            className={activeChord === 'G' ? "letter" : "letter inactive"} 
            onClick={() => onSelectChord('G')}
          >G</h3>
        </div>

      </div>
    </div>
  )
}

export default Menu;