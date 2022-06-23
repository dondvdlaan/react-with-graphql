import { useEffect, useState } from 'react';
import axios from 'axios';
import { CreateCity } from './CreateCity';
import { DisplayUpdateDeleteCity } from './DisplayUpdateDeleteCity';




function App() {

  
  return (
    <div className="bg-light">
      <CreateCity />
      <DisplayUpdateDeleteCity />
    </div>
  );
}

export default App;
