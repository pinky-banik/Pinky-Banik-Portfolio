import React from 'react';
import './WorldClassCar.css';
import Modal from '@mui/material/Modal';
import img1 from '../../../img/worldclasscar9999.jpg';
import img2 from '../../../img/worldclasscar00.png';
import img3 from '../../../img/worldclasscar01.png';

const WorldClassCar = ({ open, handleClose }) => {
    return (
        <div className='container'>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="projectDetails">
                    <div className="container">
                        <div className="row imgRow gy-3">
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <img src={img1} alt="img" />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <img src={img2} alt="img" />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <img src={img3} alt="img" />
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-12 text-white details">
                                <h2 style={{ textAlign: 'center', marginTop: '1.2rem' }}>world class car</h2>
                                <p>
                                    <span>Link: </span>
                                    <a href="https://github.com/Yasin440/World-Class-Car-Client-Side" target="_blank" rel='noreferrer'>ClientCode
                                    </a> | <a href="https://github.com/Yasin440/World-Class-Car-Server-Side" target="_blank" rel='noreferrer'>ServerCode
                                    </a> | <a href="https://world-class-car.web.app/" target="_blank" rel='noreferrer'>Live</a>
                                </p>
                                <p>
                                    <span>Technology: </span>JavaScript, React Js, Node Js, Express Js, Mongo DB, Firebase authentication, React Router, Material UI, Heroku.
                                </p>
                                <p>
                                    <span>Features: </span>It’s a full stack car selling web app were
                                </p>
                                <ul>
                                    <li>An user can visit this app as well but this site contains some private page which is not available for visitors.</li>
                                    <li>Visitors can be a user through registration with email and google also.</li>
                                    <li>One have to be our user to get full features of this app through an authentication system.</li>
                                    <li>Users can also review and watch others users' opinions about our site in-home review section.</li>
                                    <li>User can make payment after approving any order.</li>
                                    <li>Only an admin can approve orders and manage all orders. An admin can make a user to an admin role.</li>
                                    <li>User can order any car products and manage his or her order from the dashboard.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default WorldClassCar;