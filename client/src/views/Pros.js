import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from "@reach/router";
import Loading from "../components/Loading";
import ReactPlayer from 'react-player';
import {date, time} from "../components/Time";

const Pros = (props) => {

const [ pro, setPro ] = useState(null);
  

// const [likeCount, setLikeCount] = useState(props.likeCount);
//                    console.log(props);
                   
            
//     function like() {
//       setLikeCount(likeCount + 1);
//       console.log(likeCount);
//           }
            
    // const numOfFireEmojis = Math.floor(likeCount / 10); 
    
    
    // const fireEmojiElements = Array.from(
    //     { length: numOfFireEmojis },
    //     (_, index) => {
    //       return <span>🔥</span>;
    //     }
    //   );

    useEffect(() => {
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
            setInterval(date, 1000);
            setInterval(time, 1000);
        }); 


      }, []);


    if(pro === null) {
        return <Loading />


    }
    return (
        <div className="main">
           <h1>My website</h1>
           {/* <Link to="/pros/new">Add a new project</Link> */}
           <h2>Sun's projects</h2>
            <table>
               <thead>
                   <tr>
                    <th>
                        Project Name
                    </th>
                    <th>
                        Language 
                    </th>
                    <th>
                        Demo
                    </th>
                    <th>
                        Description
                    </th>
                    {/* <th>
                        Like
                    </th> */}
                    </tr>
                </thead> 
                    <tbody>
                    <tr>
                        
                            <td>Faker API</td>
                            <td>React & Axios</td>
                            <td><ReactPlayer 
                                width="100%"
                                height="100%"
                                controls={false}
                                url="https://youtu.be/gy--gLgT8k0"/></td>
                            <td>Faker API generates fake person and company</td>     
                            {/* <td>
                            <button
                            onClick={(event) => {
                                like();
                            }}
                            className="text-danger pointer"
                            >
                            &hearts;
                            </button>{" "}
                            {likeCount}
                          
                            </td> */}
                            {/* <td><Link to={"/pros/" + pro._id}>Details</Link> {" | "} <Link to={`/pros/${pro._id}/edit`}>Edit</Link></td> */}
                            </tr>
                     
                    </tbody>        
            </table>  
            <table>
               <thead>
                   <tr>
                    <th>
                        Project Name
                    </th>
                    <th>
                        Language 
                    </th>
                    <th>
                        Demo
                    </th>
                    <th>
                        Description
                    </th>
                    {/* <th>
                        Like
                    </th> */}
                    </tr>
                </thead> 
                    <tbody>
                        <tr>
                        
                            <td>Pokemon API</td>
                            <td>Express & Postman</td>
                            <td><ReactPlayer 
                                width="100%"
                                height="100%"
                                controls={false}
                                url="https://youtu.be/hKt9fC2jqsk"/></td>
                            <td>Axios pull 807 pokemons from Pokemon API</td>     
                           {/* <td>
                            <button
                            onClick={(event) => {
                                like();
                            }}
                            className="text-danger pointer"
                            >
                            &hearts;
                            </button>{" "}
                            {likeCount}
                            </td> */}
                            {/* <td><Link to={"/pros/" + pro._id}>Details</Link> {" | "} <Link to={`/pros/${pro._id}/edit`}>Edit</Link></td> */}
                           </tr>
                        
                    </tbody>        
            </table>  
            {/* <table>
               <thead>
                   <tr>
                    <th>
                        Project Name
                    </th>
                    <th>
                        Language 
                    </th>
                    <th>
                        Actions
                    </th>
                    </tr>
                </thead> 
                    <tbody>

                        {pro.map((pro) => {
                            return <tr key={pro._id}>
                            <td>{pro.name}</td>
                            <td>{pro.language}</td>
                          
                            <td><Link to={"/pros/" + pro._id}>Details</Link> {" | "} <Link to={`/pros/${pro._id}/edit`}>Edit</Link></td>
                            </tr>
                        })}
                    </tbody>        
            </table>  
                           */}
                
            
        <a href="https://github.com/sunh2020" target="_blank" rel="noopener noreferrer">GitHub</a> {" | "}
        <a href="https://www.linkedin.com/in/sunhenderson/" target="_blank" rel="noopener noreferrer">LinkedIn</a>   
        <div class="container">
       <p>
        <div class="date-top">Current date:</div>
        <div id="date"></div>

        <div class="time-top">Current time (PST):</div>
        <div id="time"></div>
        </p>
        </div>       
      
        </div>
        
  
    
  );
};
           
      
        
export default Pros;

