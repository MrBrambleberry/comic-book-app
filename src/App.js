import React from "react";
import { CharacterList } from './pages/CharacterList';

function App() {
  return (
    <div>
      <h1>Comic book application</h1>
      <CharacterList />
      <span>Data provided by Marvel. © 2014 Marvel</span>
    </div>
  );
}

export default App;
