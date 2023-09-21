import React from 'react';
import "./about.css";
import Image from "../../assets/logo1.png";
import Cv from '../../assets/CV.pdf';
const About = () =>{
    return(
        <section className="about container section" id='about'>
            <h2 className="section__title">About Me</h2>
            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">I'm a technology enthusiast on
                         a journey to become a skilled front-end developer. Although
                          I am at the beginning of my journey in the field of web
                           development, I am motivated, determined, and eager to
                         learn. My current skill set includes a strong understanding
                          of the fundamentals of web development.</p>
                        <a href={Cv} className="btn" download>Download CV</a>
                    </div>
                    <div className="about__skills grid"> 
                    <h3 className='my__skills'>skills</h3>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Html</h3>
    </div>
                            
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">CSS</h3>
                               
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">JavaScript</h3>
                                
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">React</h3>
                    
                            </div>
                     </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default About