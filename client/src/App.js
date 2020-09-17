import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Nav from './components/Nav'
import Hero from './components/Hero'

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Hero />
      </div>

    </Router>
  );
}

export default App;
