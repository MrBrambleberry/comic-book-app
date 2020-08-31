import React from "react";
import { CharacterThumbnail } from './components/CharacterThumbnail'

function App() {
  return (
    <div>
      <h1>Comic book app</h1>
      <CharacterThumbnail />
      <span>Data provided by Marvel. © 2014 Marvel</span>
    </div>
  );
}

export default App;
