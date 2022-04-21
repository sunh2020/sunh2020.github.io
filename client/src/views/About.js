import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import Loading from "../components/Loading";

const About = (props) => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/about")
      .then((res) => {
        console.log("About get response", res.data);
        setAbout(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setAbout({});
      });
  }, []);

  if (about === null) {
    return <Loading />;
  }
  return (
    <div className="about">
      <h1>New beginning</h1>
      <p>
        I've graudated from 14 weeks immersive Coding Dojo coding bootcamp on
        April 2nd.
      </p>
      <p>I maybe a beginner, however, my passion in coding is an expert.</p>
      <p>I spent 1000 hours to learn full-stack of Python, Java and MERN.</p>
      <p>
        My favoriate stack is MERN and I'd like to explore and learn more and
        build better applications.
      </p>
      <p>Currently, I'm working on develop my skills and keep learning.</p>
      <p>I'm looking for a Frontend developer positon.</p>
    </div>
  );
};

export default About;
