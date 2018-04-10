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
          <ul className="social-container">
            <li className="social-buttons"><a href="https://www.facebook.com/Joobla-1857027544620593/?ref=br_rs"><i className="fab fa-facebook"></i></a></li>
            <li className="social-buttons"><a href="https://www.linkedin.com/in/team-joobla-06b494161/"><i className="fab fa-linkedin-in"></i></a></li>
            <li className="social-buttons"><a href="https://twitter.com/joobla_fr"><i className="fab fa-twitter"></i></a></li>
            <li className="social-buttons"><a href="mailto:contact@joobla.fr"><i className="fas fa-envelope"></i></a></li>
          </ul>
        </div>
        <div id="footer">
          <p >Made with <i className="fas fa-heart animated bounce"></i> by <strong>Joobla</strong></p>
        </div>
      </div >
    );
  }
}

export default App;
