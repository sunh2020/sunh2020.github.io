import React from 'react';
import ReactDOM from 'react-dom';


function date() {
    const element = (
        <span>{new Date().toLocaleDateString()}</span>
      
        );
    ReactDOM.render(element, document.getElementById('date'));
  }
  
  function time() {
    const element = (
        <span>{new Date().toLocaleTimeString()}</span>
    );
    ReactDOM.render(element, document.getElementById('time'));
  }
  
  setInterval(date, 1000);
  setInterval(time, 1000);