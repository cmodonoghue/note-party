import React, { useState, useContext } from 'react';
import logo from './logo.svg';
import './App.scss';

import Menu from "./menu/Menu";
import Fretboard from "./fretboard/Fretboard";

export const CategoryContext = React.createContext();
export const LetterContext = React.createContext();
export const TypeContext = React.createContext();

const App = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [type, setType] = useState("major");
  const [activeKey, setActiveKey] = useState("");
  const [activeChord, setActiveChord] = useState("");

  let currentLetter;

  if (activeCategory === 'key') {
    currentLetter = activeKey; 
  } else if (activeCategory === 'chord') {
    currentLetter = activeChord;
  } else {
    currentLetter = '';
  }

  const toggleMenu = (selection) => {
    setActiveCategory(selection);
  }

  const toggleSubMenu = (selection) => {
    setType(selection);
  }

  const selectKey = (selection) => {
    setActiveKey(selection);
  }

  const selectChord = (selection) => {
    setActiveChord(selection);
  }

  return (
    <CategoryContext.Provider value={activeCategory}>
      <LetterContext.Provider value={currentLetter}>
        <TypeContext.Provider value={type}> 
          <div>
            <Menu 
              onToggleMenu={toggleMenu} 
              onToggleSubMenu={toggleSubMenu} 
              onSelectKey={selectKey}
              onSelectChord={selectChord}
              activeKey={activeKey}
              activeChord={activeChord}
              activeCategory={activeCategory}
              type={type}
            />
            <Fretboard />
          </div>
        </TypeContext.Provider>  
      </LetterContext.Provider>  
    </CategoryContext.Provider>
  );
}

export default App;
