import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>David's blog</h1>
            <Link to="/">Home</Link>
          </header>
          <div />
        </div>
      </Router>
    );
  }
}

export default App;
