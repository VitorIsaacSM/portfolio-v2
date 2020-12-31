import React from 'react';
import './App.scss';
import About from './views/about/about';
import Home from './views/home/home';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
    </div>
  );
}

export default App;
