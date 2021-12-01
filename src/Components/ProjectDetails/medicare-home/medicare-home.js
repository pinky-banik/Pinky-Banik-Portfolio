import React from 'react';
import Modal from '@mui/material/Modal';
import img1 from '../../../img/mh-1.png';
import img2 from '../../../img/mh-2.png';
import img3 from '../../../img/mh-3.png';

const MedicareHome = ({ open, handleClose }) => {
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
                                <h2 style={{ textAlign: 'center', marginTop: '1.2rem' }}>Grow Fitness</h2>
                                <p>
                                    <span>Link: </span>
                                    <a href="https://github.com/pinky-banik/MediCare-Home" target="_blank" rel='noreferrer'>GitHub
                                    </a> | <a href="https://medicare-home.web.app/" target="_blank" rel='noreferrer'>Live</a>
                                </p>
                                <p>
                                    <span>Technology: </span>JavaScript, React Js, Node Js, Express Js, Mongo DB, Firebase authentication, React Router, Bootstrap Heroku.
                                </p>
                                <p>
                                    <span>Features: </span>It’s a full stack Medical service single page website
                                </p>
                                <ul>
                                    <li>An user can visit this app as well but this site contains some private page which is not available for visitors.</li>
                                    <li>Visitors can be a user through registration with email and google also.</li>
                                    <li>One have to be our user to get full features of this app through an authentication system.</li>
                                    
                                    <li>To book a service, a user must have to go through the authentication.</li>
                                    
                                    <li>Responsive UI.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default MedicareHome;