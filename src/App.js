import React, { Component } from 'react';
import logo from './joobla.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content-container">
          <img src={logo} className="App-logo animated rubberBand" alt="logo" />
          <h2 className="App-title">Notre site est actuellement en<br /> construction.</h2>
          <p>Patience on arrive...</p>
          <div className="social-container">
            <div className="social-buttons"><i className="fab fa-facebook"></i></div>
            <div className="social-buttons"><i className="fab fa-linkedin-in"></i></div>
            <div className="social-buttons"><i className="fab fa-twitter"></i></div>
            <div className="social-buttons"><i className="fas fa-envelope"></i></div>
          </div>
        </div>
        <div id="footer">
          <p >Made with <i className="fas fa-heart animated bounce"></i> by <strong>Joobla</strong></p>
        </div>
      </div >
    );
  }
}

export default App;
