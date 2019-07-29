import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <div />
        </div>
      </Router>
    );
  }
}

export default App;
