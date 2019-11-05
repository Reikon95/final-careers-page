import React, { Component } from 'react';
import './App.css';
import Face from './Face.js'
import bill from './bill.jpg'

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
          <Face name="Elon Musk" pic="elon"/>
          <br></br>CEO
        </div>
        <div className="item">
          <Face name="Bill Gates" pic='bill'/>
          <br></br>CTO
        </div>
        <div className="item">
          <Face name="Jeff Bezos" pic="jeff"/>
          <br></br>COO
        </div>
        <div className="item">
          <Face name="Jack Dorsey" pic="jack"/>
          <br></br>Back End Developer
        </div>
        <div className="item">
          <Face name="Mark Zuckerberg" pic="mark"/>
          <br></br>Front End Developer
        </div>
        <div className="item">
          <Face name="Larry Page" pic="larry"/>
          <br></br>Full Stack Developer
        </div>
      </div>
    </div>
  )};
}

export default App;
