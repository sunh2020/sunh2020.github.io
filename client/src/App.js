import React from 'react';
import { Redirect, Router } from '@reach/router';
import './App.css';

import Pros from './views/Pros';

function App() {
  return (



<div className="wrapper">
      <nav className="mt-md">
  
      </nav>
      
        <Router>
          {/* <Redirect from="/" to="/" noThrow="true" /> */}
        
          {/* <Pros path="/" /> */}
          {/* <NewPro path="/pros/new" />
          <EditPro path="pros/:id/edit" />
          <Faker path="/pros/:id" />
   */}
         
    
      </Router>
    
    </div>
  );
}

export default App;
