import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Loading from "../components/Loading";
import ReactPlayer from 'react-player';

const Projects = (props) => {

    const [ projects, setProjects ] = useState(null);


    useEffect(() => {
        axios.get('http://localhost:8000/projects')
        .then((res) => {
            console.log("Projects get response", res.data);
            setProjects(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setProjects({})
        }); 

      }, []);


    if(projects === null) {
        return <Loading />

    }
    return (
        
            <div className="projects">
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
                   
                    </tr>
                </thead> 
                    <tbody>
                    <tr>
                        
                            <td>Faker API</td>
                            <td>Express & Postman</td>
                            <td><ReactPlayer 
                                width="100%"
                                height="100%"
                                controls={false}
                                url="https://youtu.be/gy--gLgT8k0"/></td>
                            <td>Faker API generates fake person and company</td>     
                          
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
                            <td>React & Axios</td>
                            <td><ReactPlayer 
                                width="100%"
                                height="100%"
                                controls={false}
                                url="https://youtu.be/hKt9fC2jqsk"/></td>
                            <td>Axios pull 807 pokemons from Pokemon API</td>     
                          
                           </tr>
                        
                    </tbody>        
            </table>  
                   
                   
                   

           </div>
               
        );
    };
        
      

export default Projects;                            

