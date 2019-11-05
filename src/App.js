import React from 'react';
import './App.css';
import face from './face.png';

function App() {
  return (
    <div className="App">
      <h1>Welcome to our Startup - Meet the team.</h1>
      <div class="container">
        <div class="item">
          <img src={face} alt="a face"/>
        </div>
        <div class="item">
          <img src={face} alt="a face"/>
        </div>
        <div class="item">
          <img src={face} alt="a face"/>
        </div>
        <div class="item">
          <img src={face} alt="a face"/>
        </div>
        <div class="item">
          <img src={face} alt="a face"/>
        </div>
        <div class="item">
          <img src={face} alt="a face"/>
        </div>
      </div>
    </div>
  );
}

export default App;
