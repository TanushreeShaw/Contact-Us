import React from 'react';
import logo from './logo.svg';
import './App.css';
import FixedContainer from './info';
import ContainedButtons from './button';

function App() {
  return (
    <div className="App">
      <br/>
      <h1 className="color">Contact Us</h1><h2> Developer Student Clubs BPPIMT</h2>
      <FixedContainer/>
      <br/>
      <ContainedButtons/>
      <br/>
    </div>

  );
}

export default App;
