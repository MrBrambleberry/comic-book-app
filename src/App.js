import React from "react";
import * as copy from './copy/home.json'
import { CharacterList } from './pages/CharacterList';

function App() {


  return (
    <div>
      <h1>{copy.heading}</h1>
      <CharacterList />
      <span>Data provided by Marvel. © 2014 Marvel</span>
    </div>
  );
}

export default App;
