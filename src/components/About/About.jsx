import React from 'react';
import './About.css'
import ME2 from "../../assets/Me/2nd.jpeg";
import { FaAward } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
    return (
        <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
  
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me__image">
              <img src={ME2} alt="about me img" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon"></FaAward>
                <h5>Experience</h5>
                <small>1 year</small>
              </article>
              <article className="about__card">
                <GiSkills className="about__icon"></GiSkills>
                <h5>Skills</h5>
                <small> 10+ technology used </small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon"></VscFolderLibrary>
                <h5>Projects</h5>
                <small>80+ projects build</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et
              nobis pariatur corrupti at laborum, voluptates quam quis. Quam totam
              quaerat cumque earum dolores itaque porro quo quasi, enim
              doloremque.
            </p>
  
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    );
};

export default About;