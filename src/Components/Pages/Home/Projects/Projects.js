import React from 'react';
import './Projects.css';
import sparklingGlitters from '../../../../img/sparkling-glitters-cover.png';
import inftour from '../../../../img/infinite-tourism-cover.png';
import medihom from '../../../../img/medicare-home-cover.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';




const Projects = () => {


    return (
        <div className="container projects" style={{ padding: '5rem 0' }}>
            <div className='title-section'>
                <h1 className="text-secondary">my <span>projects</span></h1>
                <span className='title-bg'>experience</span>
            </div>
            <div>
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card container-fluid px-3" data-aos="flip-right">
                            <div className="image">
                                <img src={sparklingGlitters} alt="img" />
                            </div>
                            <div className="details">
                                <div className="center">
                                    <h1>Sparkling Glitters<br /><span>Buy Decorative Lights</span></h1>
                                    <p>It's a Full-stack web application with MERN stack. Decorative Lights selling website. Preview live site, front end and back end code from below</p>
                                    <ul>
                                        <li>
                                        <Link to ='/sparklingGlitters'><Button>DETAILS<ArrowRightAltIcon /></Button></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 p-0">
                        <div className="card" data-aos="flip-left">
                            <div className="image">
                                <img src={inftour} alt="img" />
                            </div>
                            <div className="details">
                                <div className="center">
                                    <h1>Infinite Tourism<br /><span>Travel Bookin</span></h1>
                                    <p>It's a Full-stack web application with MERN stack travel booking website. Preview live site, front end and back end code from below</p>
                                    <ul>
                                        <li>
                                        <Link to ='/infiniteTourism'><Button>DETAILS<ArrowRightAltIcon /></Button></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 p-0">
                        <div className="card" data-aos="flip-right">
                            <div className="image">
                                <img src={medihom} alt="img" />
                            </div>
                            <div className="details">
                                <div className="center">
                                    <h1>MediCare Home<br /><span>a medical service website.</span></h1>
                                    <p>It's UI & UX design based web app with Authentication System. Selling Gum services. Preview live site, front end and back end code from below</p>
                                    <ul>
                                        <li>
                                        <Link to ='/medicareHome'><Button>DETAILS<ArrowRightAltIcon /></Button></Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Projects;