import React from 'react';
import { Redirect, Router } from '@reach/router';
import './App.css';

import Pros from './views/Pros';
import About from './views/About';
import Projects from './views/Projects';
import Blog from './views/Blog';

function App() {
  return (



<div className="wrapper">
      <nav className="mt-md">
      <nav><a href="/">Home</a> | <a href="/about">About</a> | <a href="/projects">Projects</a> | <a href="/blog">Blog</a>
      
        <Router>
          {/* <Redirect from="/" to="/" noThrow="true" /> */}
        
          <Pros path="/" />
          <About path="/about" />
          <Projects path="/projects" />
          <Blog path="/blog" />
           
    
      </Router>
      </nav>
      </nav> 
      <span className="footer">
        © 2021  Sunjuyuhwa Henderson
      </span>                                  
    </div>
  );
}

export default App;
