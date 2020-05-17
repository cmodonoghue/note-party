import React, { useState, useContext } from 'react';
import logo from './logo.svg';
import './App.scss';

import Menu from "./menu/Menu";
import Fretboard from "./fretboard/Fretboard";

const App = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [chordType, setChordType] = useState("major");
  const [activeKey, setActiveKey] = useState("");
  const [activeChord, setActiveChord] = useState("");

  const CategoryContext = React.createContext(activeCategory);
  const category = useContext(CategoryContext);

  const toggleMenu = (selection) => {
    setActiveCategory(selection);
  }

  const toggleSubMenu = (selection) => {
    setChordType(selection);
  }

  const selectKey = (selection) => {
    setActiveKey(selection);
  }

  const selectChord = (selection) => {
    setActiveChord(selection);
  }

  return (
    <CategoryContext.Provider>
      <div>
        <Menu 
          onToggleMenu={toggleMenu} 
          onToggleSubMenu={toggleSubMenu} 
          onSelectKey={selectKey}
          onSelectChord={selectChord}
          activeKey={activeKey}
          activeChord={activeChord}
          activeCategory={activeCategory}
          chordType={chordType}
        />
        <Fretboard 
          activeKey={activeKey}
          activeChord={activeChord}
          activeCategory={activeCategory}
          chordType={chordType}
        />
      </div>
    </CategoryContext.Provider>
  );
}

export default App;
