import React from 'react';
import './App.css';

import Checkbox from '../src/components/Checkbox';


function App() {
  let styles = {
    center:{
      
      justifyContent: 'center',
    }  
  }

  return (
    <div className="App">
      <Checkbox>Instagram</Checkbox>
      <Checkbox>Facebook</Checkbox>
      <Checkbox>Linkedin</Checkbox>
    </div>
  );
}

export default App;
