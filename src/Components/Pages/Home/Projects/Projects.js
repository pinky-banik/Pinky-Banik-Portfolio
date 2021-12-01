import React from 'react';
import './Projects.css';
import worldClassCar from '../../../../img/WorldClassCar.jpg';
import foodota from '../../../../img/Foodota.jpg';
import growFitness from '../../../../img/GrowFitness.jpg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import WorldClassCar from '../../../ProjectDetails/WorldClassCar/WorldClassCar';
import GrowFitnessDetails from '../../../ProjectDetails/GrowFitnessDetails/GrowFitnessDetails';
import FoodotaDetails from '../../../ProjectDetails/FoodotaDetails/FoodotaDetails';
import { Button } from '@mui/material';



const Projects = () => {
    const [openWorldClassCar, setOpenWorldClassCar] = React.useState(false);
    const handleOpenWorldClassCar = () => setOpenWorldClassCar(true);
    const handleCloseWorldClassCar = () => setOpenWorldClassCar(false);

    const [openGrowFitnessDetails, setOpenGrowFitnessDetails] = React.useState(false);
    const handleOpenGrowFitnessDetails = () => setOpenGrowFitnessDetails(true);
    const handleCloseGrowFitnessDetails = () => setOpenGrowFitnessDetails(false);

    const [openFoodotaDetails, setOpenFoodotaDetails] = React.useState(false);
    const handleOpenFoodotaDetails = () => setOpenFoodotaDetails(true);
    const handleCloseFoodotaDetails = () => setOpenFoodotaDetails(false);

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
                                <img src={worldClassCar} alt="img" />
                            </div>
                            <div className="details">
                                <div className="center">
                                    <h1>World Class Car<br /><span>Buy Cars</span></h1>
                                    <p>It's a Full-stack web application with MERN. Dream Cars selling site. Preview live site, front end and back end code from below</p>
                                    <ul>
                                        <li>
                                            <Button
                                                onClick={handleOpenWorldClassCar}>Learn More<ArrowRightAltIcon />
                                            </Button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 p-0">
                        <div className="card" data-aos="flip-left">
                            <div className="image">
                                <img src={foodota} alt="img" />
                            </div>
                            <div className="details">
                                <div className="center">
                                    <h1>Food Ota<br /><span>Food At Home</span></h1>
                                    <p>It's a Full-stack web application with MERN. Dream Cars selling site. Preview live site, front end and back end code from below</p>
                                    <ul>
                                        <li>
                                            <Button
                                                onClick={handleOpenFoodotaDetails}>Learn More<ArrowRightAltIcon />
                                            </Button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 p-0">
                        <div className="card" data-aos="flip-right">
                            <div className="image">
                                <img src={growFitness} alt="img" />
                            </div>
                            <div className="details">
                                <div className="center">
                                    <h1>Grow Fitness<br /><span>a gum's web site</span></h1>
                                    <p>It's UI & UX design based web app with Authentication System. Selling Gum services. Preview live site, front end and back end code from below</p>
                                    <ul>
                                        <li>
                                            <Button
                                                onClick={handleOpenGrowFitnessDetails}>Learn More<ArrowRightAltIcon />
                                            </Button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <WorldClassCar
                    open={openWorldClassCar}
                    handleClose={handleCloseWorldClassCar}
                ></WorldClassCar>
                <GrowFitnessDetails
                    open={openGrowFitnessDetails}
                    handleClose={handleCloseGrowFitnessDetails}
                ></GrowFitnessDetails>
                <FoodotaDetails
                    open={openFoodotaDetails}
                    handleClose={handleCloseFoodotaDetails}
                ></FoodotaDetails>
            </div>
        </div >
    );
};

export default Projects;