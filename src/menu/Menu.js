import React, { useState } from "react";

const Menu = ({ 
  onToggleMenu, 
  onToggleSubMenu, 
  onSelectKey,
  onSelectChord,
  activeKey,
  activeChord,
  activeCategory, 
  chordType}) => {
  
  return (
    <div className="header">

      <div className="title">
        <h1 className="title__text"><span>note</span> party</h1>
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

        {/* key list */}
        <div className={activeCategory === 'key' ? "key-list" : "key-list inactive"}>
          <h3 
            className={activeKey === 'Ab' ? "key-letter" : "key-letter inactive"} 
            onClick={() => onSelectKey('Ab')}
          >Ab</h3>
          <h3 
            className={activeKey === 'A' ? "key-letter" : "key-letter inactive"} 
            onClick={() => onSelectKey('A')}
          >A</h3>
          <h3 
            className={activeKey === 'Bb' ? "key-letter" : "key-letter inactive"} 
            onClick={() => onSelectKey('Bb')}
          >Bb</h3>
          <h3 
            className={activeKey === 'B' ? "key-letter" : "key-letter inactive"} 
            onClick={() => onSelectKey('B')}
          >B</h3>
          <h3 
            className={activeKey === 'C' ? "key-letter" : "key-letter inactive"} 
            onClick={() => onSelectKey('C')}
          >C</h3>
          <h3 
            className={activeKey === 'Db' ? "key-letter" : "key-letter inactive"} 
            onClick={() => onSelectKey('Db')}
          >Db</h3>
          <h3 
            className={activeKey === 'D' ? "key-letter" : "key-letter inactive"} 
            onClick={() => onSelectKey('D')}
          >D</h3>
          <h3 
            className={activeKey === 'Eb' ? "key-letter" : "key-letter inactive"} 
            onClick={() => onSelectKey('Eb')}
          >Eb</h3>
          <h3 
            className={activeKey === 'E' ? "key-letter" : "key-letter inactive"} 
            onClick={() => onSelectKey('E')}
          >E</h3>
          <h3 
            className={activeKey === 'F' ? "key-letter" : "key-letter inactive"} 
            onClick={() => onSelectKey('F')}
          >F</h3>
          <h3 
            className={activeKey === 'Gb' ? "key-letter" : "key-letter inactive"} 
            onClick={() => onSelectKey('Gb')}
          >Gb</h3>
          <h3 
            className={activeKey === 'G' ? "key-letter" : "key-letter inactive"} 
            onClick={() => onSelectKey('G')}
          >G</h3>
        </div>

        {/* chord submenu */}
        <div className={activeCategory === 'chord' ? "chord-submenu" : "chord-submenu inactive"}>
          <h2 
            className={chordType === 'major' ? "chord-submenu__item" : "chord-submenu__item inactive"}
            onClick={() => onToggleSubMenu('major')}
          >major</h2>
          <h2 
            className={chordType === 'minor' ? "chord-submenu__item" : "chord-submenu__item inactive"}
            onClick={() => onToggleSubMenu('minor')}
          >minor</h2>
        </div>

        {/* chord list */}
        <div className={activeCategory === 'chord' ? "chord-list" : "chord-list inactive"}>
          <h3 
            className={activeChord === 'Ab' ? "chord-letter" : "chord-letter inactive"} 
            onClick={() => onSelectChord('Ab')}
          >Ab</h3>
          <h3 
            className={activeChord === 'A' ? "chord-letter" : "chord-letter inactive"} 
            onClick={() => onSelectChord('A')}
          >A</h3>
          <h3 
            className={activeChord === 'Bb' ? "chord-letter" : "chord-letter inactive"} 
            onClick={() => onSelectChord('Bb')}
          >Bb</h3>
          <h3 
            className={activeChord === 'B' ? "chord-letter" : "chord-letter inactive"} 
            onClick={() => onSelectChord('B')}
          >B</h3>
          <h3 
            className={activeChord === 'C' ? "chord-letter" : "chord-letter inactive"} 
            onClick={() => onSelectChord('C')}
          >C</h3>
          <h3 
            className={activeChord === 'Db' ? "chord-letter" : "chord-letter inactive"} 
            onClick={() => onSelectChord('Db')}
          >Db</h3>
          <h3 
            className={activeChord === 'D' ? "chord-letter" : "chord-letter inactive"} 
            onClick={() => onSelectChord('D')}
          >D</h3>
          <h3 
            className={activeChord === 'Eb' ? "chord-letter" : "chord-letter inactive"} 
            onClick={() => onSelectChord('Eb')}
          >Eb</h3>
          <h3 
            className={activeChord === 'E' ? "chord-letter" : "chord-letter inactive"} 
            onClick={() => onSelectChord('E')}
          >E</h3>
          <h3 
            className={activeChord === 'F' ? "chord-letter" : "chord-letter inactive"} 
            onClick={() => onSelectChord('F')}
          >F</h3>
          <h3 
            className={activeChord === 'Gb' ? "chord-letter" : "chord-letter inactive"} 
            onClick={() => onSelectChord('Gb')}
          >Gb</h3>
          <h3 
            className={activeChord === 'G' ? "chord-letter" : "chord-letter inactive"} 
            onClick={() => onSelectChord('G')}
          >G</h3>
        </div>

      </div>
    </div>
  )
}

export default Menu;