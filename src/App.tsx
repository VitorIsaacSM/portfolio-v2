import React from 'react';
import './App.scss';
import About from './views/about/about';
import { Contact } from './views/contact/contact';
import Home from './views/home/home';
import { Projects } from './views/projects/projects';
import { Work } from './views/work/work';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
