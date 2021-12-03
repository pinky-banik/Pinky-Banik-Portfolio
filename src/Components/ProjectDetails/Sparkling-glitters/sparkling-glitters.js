import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faLowVision} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Button } from '@mui/material';
import './sparkling-glitters.css';
import img1 from '../../../img/sg-3.png';
import img2 from '../../../img/sg-1.png';
import img3 from '../../../img/sg-2.png';


const handleClickVisti = () => {
    window.open("https://sparkling-glitters.web.app/");
  };
  
  const handleClickGitHub = () => {
    window.open("https://github.com/pinky-banik/Sparkling-Glitters");
  };
  const SparklingGlitters = () => {
      return (
          <div className='container'>
              <h2 className='simba_title'>Sparkling Glitters</h2>
              <div className = 'row gx-5 mt-5'>
                  <div className= 'col-12 col-lg-6'>
                  <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
    </Carousel.Item>
  
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />
  
      
    </Carousel.Item>
  
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />
  
    </Carousel.Item>
  
    {/* <Carousel.Item>
      <img
        className="d-block w-100"
        src={img5}
        alt="Third slide"
      />
  
    </Carousel.Item> */}
  
  </Carousel>
                  </div>
                  <div className= 'col-12 col-lg-6'>
                      <div className='project-details'>
                          <h2 className='mt-2'>  Sparkling Glitters</h2>
                          
                          <Button onClick={handleClickVisti}><FontAwesomeIcon icon={faLowVision} />  Visit</Button>
                          <Button onClick={handleClickGitHub}><FontAwesomeIcon icon={faGithub} /> GitHub </Button>
                          <h2 className='mt-4'>OverView Project</h2>
                          <h3> <FontAwesomeIcon icon={faForward} />A full stack service selling single page web application with responsive UI.</h3>
                          <h3><FontAwesomeIcon icon={faForward} /> Different dashboard for user and admin.</h3>
                          <h3><FontAwesomeIcon icon={faForward} /> User can order his/her desire service and also user can give a review of his/her order.</h3>
                          <h3><FontAwesomeIcon icon={faForward} /> Fully functional admin panel where admin can add new services, manage users order and also  can add new admin. </h3>
                          <h3><FontAwesomeIcon icon={faForward} /> Only an admin can approve orders and manage all orders. An admin can make a user to an admin role.</h3>
                          <h3><FontAwesomeIcon icon={faForward} /> User can order any  products and manage his or her order from the dashboard.</h3>
                         
                      </div>
                  </div>
                  
              </div>
              <Link  to ='/'><Button className='mt-5'>Back </Button></Link>
              
          </div>
      );
  };
  
  export default SparklingGlitters;
// const SparklingGlitters = ({ open, handleClose }) => {
//     return (
//         <div className='container'>
//                 <div className="projectDetails">
//                     <div className="container">
//                         <div className="row imgRow gy-3">
//                             <div className="col-sm-12 col-md-6 col-lg-4">
//                                 <img src={img1} alt="img" />
//                             </div>
//                             <div className="col-sm-12 col-md-6 col-lg-4">
//                                 <img src={img2} alt="img" />
//                             </div>
//                             <div className="col-sm-12 col-md-6 col-lg-4">
//                                 <img src={img3} alt="img" />
//                             </div>
//                         </div>
//                         <div className="row container">
//                             <div className="col-12 text-white details">
//                                 <h2 style={{ textAlign: 'center', marginTop: '1.2rem' }}>Sparkling Glitters</h2>
//                                 <p>
//                                     <span>Link: </span>
//                                     <a href="https://github.com/pinky-banik/Sparkling-Glitters" target="_blank" rel='noreferrer'>GitHub
//                                     </a> | <a href="https://sparkling-glitters.web.app/" target="_blank" rel='noreferrer'>Live</a>
//                                 </p>
//                                 <p>
//                                     <span>Technology: </span>JavaScript, React Js, Node Js, Express Js, Mongo DB, Firebase authentication, React Router, Bootstrap, Heroku.
//                                 </p>
//                                 <p>
//                                     <span>Features: </span>It’s a full stack decorative lights selling web app were
//                                 </p>
//                                 <ul>
//                                     <li>AA full stack service selling single page web application with responsive UI.</li>
//                                     <li>Different dashboard for user and admin</li>
//                                     <li>User can order his/her desire service and also user can give a review of his/her order.</li>
//                                     <li>Fully functional admin panel where admin can add new services, manage users order and also  can add new admin. </li>
//                                     <li>Only an admin can approve orders and manage all orders. An admin can make a user to an admin role.</li>
//                                     <li>User can order any  products and manage his or her order from the dashboard.</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//         </div>
//     );
// };

// export default SparklingGlitters;