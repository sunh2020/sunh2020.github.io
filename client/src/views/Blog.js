import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Loading from "../components/Loading";

const Projects = (props) => {

    const [ contact, setContact ] = useState(null);


    useEffect(() => {
        axios.get('http://localhost:8000/contact')
        .then((res) => {
            console.log("Contact get response", res.data);
            setContact(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setContact({})
        }); 

      }, []);


    if(contact === null) {
        return <Loading />

    }
    return (
        
            <div className="contact">
               <h1>Coming soon</h1>
              
                   
                   
                   
                   

           </div>
               
        );
    };
        
      

export default Projects;                            

