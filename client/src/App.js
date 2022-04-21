import React from 'react';
import { Redirect, Router, Link } from '@reach/router';
import './App.css';

import Pros from './views/Pros';
import About from './views/About';
import Projects from './views/Projects';
import Blog from './views/Blog';

function App() {
  return (



<div className="wrapper">
      <nav className="mt-md">
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/projects">Projects</Link> | <Link to="/blog">Blog</Link>
      
        <Router>
          {/* <Redirect from="/" to="/" noThrow="true" /> */}
        
          <Pros path="/" />
          <About path="/about" />
          <Projects path="/projects" />
          <Blog path="/blog" />
           
    
      </Router>
      </nav>
          
      <span className="footer">
        © 2022  Sunjuyuhwa Henderson
      </span>                                  
    </div>
  );
}

export default App;
