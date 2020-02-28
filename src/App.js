import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes'
import Navbar from './components/Navbar/Navbar'
import logo from './logo.svg';
import './App.css';


// class ___ extends Component {

  function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
// }

export default App;
