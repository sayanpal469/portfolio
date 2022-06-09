import React from 'react';
import './Portfolio.css'
import project1 from '../../assets/projects/Healthy-Piorr.png'
import project2 from '../../assets/projects/doctors-portal.png'
import project3 from '../../assets/projects/Jantrick.png'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item__image">
                        <img src={project1} alt="" />
                    </div>
                    <h3>Healthy Piorr</h3>
                    <div className="portfolio__item__cta">
                        <a href="https://github.com/sayanpal469/grocery-warehouse-management-client-side" className="btn">
                            Source
                        </a>
                        <a
                            href="https://grocery-warehouse-7968d.web.app/"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Server Site
                        </a> 
                        
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item__image">
                        <img src={project2} alt="" />
                    </div>
                    <h3>Doctors Portal</h3>
                    <div className="portfolio__item__cta">
                        <a href="https://github.com/sayanpal469/doctors-portal-client-side" className="btn">
                            Source
                        </a>
                        <a
                            href="https://doctors-portal-8801a.web.app/"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item__image">
                        <img src={project3} alt="" />
                    </div>
                    <h3>Jantrick</h3>
                    <div className="portfolio__item__cta">
                        <a href="https://github.com/sayanpal469/tools-manufacturer-client-side" className="btn">
                            Source
                        </a>
                        <a
                            href="https://toolsmanufacturer-6b2c7.web.app/"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Portfolio;