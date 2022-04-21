import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from "@reach/router";
import Loading from "../components/Loading";
import ReactPlayer from 'react-player';
import {date, time} from "../components/Time";

const Pros = (props) => {

const [ pro, setPro ] = useState(null);
  

useEffect(() => {
        var dateCounter;
        var timeCounter;
        axios.get('http://localhost:8000/')
        .then((res) => {
                console.log("Pro get response", res.data);
                setPro(res.data)
        })
        .catch((err) => {
            console.log(err);
         })
        .finally(() => {
            setPro({})
            dateCounter = setInterval(date, 1000);
            timeCounter = setInterval(time, 1000);
         });
        return () => {
           clearInterval(dateCounter);
           clearInterval(timeCounter);
        } 

      }, []);


    if(pro === null) {
        return <Loading />


    }
    return (
        
        <div className="main">
           <h1>Sun's world</h1>
           {/* <Link to="/pros/new">Add a new project</Link> */}
           <h2>Hello everyone! welcome to my site!</h2>
        
                       
        <p>    
        <a href="https://github.com/sunh2020" target="_blank" rel="noopener noreferrer">GitHub</a> {" | "}
        <a href="https://www.linkedin.com/in/sunhenderson/" target="_blank" rel="noopener noreferrer">LinkedIn</a>   
       </p>
        <div class="container">
            
       <p>
        <div class="date-top">Current date:</div>
        <div id="date"></div>

        <div class="time-top">Current time:</div>
        <div id="time"></div>
        </p>
        </div>
           
        <p><a href="https://www.hitwebcounter.com" target="_blank">
        <img src="https://hitwebcounter.com/counter/counter.php?page=7796745&style=0036&nbdigits=5&type=page&initCount=0" 
        title="Free Counter" Alt="web counter"   border="0" /></a>      
        </p>
        </div>
  
  );
};
           
      
        
export default Pros;

