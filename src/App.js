import React, { Component } from 'react';
import './App.css';
import Face from './Face.js'

class App extends Component {
  render() {
  return (
    <div className="App">
      <h1>Welcome to our Startup - Meet the team!</h1>
      <p>We're here to disrupt, democratise and dominate a legacy industry. We've come together to form a superteam, an all-star lineup 
        of the internet's greatest entrepeneurs. Hover over us to reveal our identities....
      </p>
      <div className="container">
        <div className="item">
          <Face name="Elon Musk"/>
          <br></br>CEO
        </div>
        <div className="item">
          <Face name="Bill Gates"/>
          <br></br>CTO
        </div>
        <div className="item">
          <Face name="Jeff Bezos"/>
          <br></br>COO
        </div>
        <div className="item">
          <Face name="Jack Dorsey"/>
          <br></br>Back End Developer
        </div>
        <div className="item">
          <Face name="Mark Zuckerberg"/>
          <br></br>Front End Developer
        </div>
        <div className="item">
          <Face name="Larry Page"/>
          <br></br>Full Stack Developer
        </div>
      </div>
    </div>
  )};
}

export default App;
