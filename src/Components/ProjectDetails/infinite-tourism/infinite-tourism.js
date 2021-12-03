import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faLowVision} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Button } from '@mui/material';
import img1 from '../../../img/it-1.png';
import img2 from '../../../img/it-2.png';
import img3 from '../../../img/it-3.png';





const handleClickVisti = () => {
    window.open("https://infinite-tourism.web.app/");
  };
  
  const handleClickGitHub = () => {
    window.open("https://github.com/pinky-banik/Infinite-Tourism");
  };
const InfiniteTourism = () => {
    return (
        <div className='container'>
            <h2 className='simba_title'>  Infinite Tourism</h2>
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

</Carousel>
                </div>
                <div className= 'col-12 col-lg-6'>
                    <div className='project-details'>
                        <h2 className='mt-2'>  Infinite Tourism</h2>
                        
                        <Button onClick={handleClickVisti}><FontAwesomeIcon icon={faLowVision} />  Visit</Button>
                        <Button onClick={handleClickGitHub}><FontAwesomeIcon icon={faGithub} /> GitHub Client</Button>
                        <h2 className='mt-4'>OverView Project</h2>
                        <h3> <FontAwesomeIcon icon={faForward} /> A responsive Travel booking service web application tourists</h3>
                        <h3><FontAwesomeIcon icon={faForward} /> A User can be able to booking a service and remove his booking.</h3>
                        <h3><FontAwesomeIcon icon={faForward} />User can check all of his/her registered event list in user’s dashboard also user can cancel
                                  his/her registered event.</h3>
                        <h3><FontAwesomeIcon icon={faForward} />Option for adding more service to the home page</h3>
                        <h3><FontAwesomeIcon icon={faForward} />OOnly an admin can approve orders and manage all orders.</h3>
                        <h3><FontAwesomeIcon icon={faForward} />User can book any travel spot and manage his or her booking from the dashboard.</h3>
                    </div>
                </div>
                
            </div>
            <Link  to ='/'><Button className='mt-5'>Back </Button></Link>
            
        </div>
    );
};

export default InfiniteTourism;










// const InfiniteTourism = ({ open, handleClose }) => {
//     return (
//         <div className='container'>
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
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
//                                 <h2 style={{ textAlign: 'center', marginTop: '1.2rem' }}>Food Ota Food at Home</h2>
//                                 <p>
//                                     <span>Link: </span>
//                                     <a href="https://github.com/pinky-banik/Infinite-Tourism" target="_blank" rel='noreferrer'>GitHub
//                                     </a> |<a href="https://infinite-tourism.web.app/" target="_blank" rel='noreferrer'>Live</a>
//                                 </p>
//                                 <p>
//                                     <span>Technology: </span>JavaScript, React Js, Node Js, Express Js, Mongo DB, Firebase authentication, React Router, Material UI, Heroku.
//                                 </p>
//                                 <p>
//                                     <span>Features: </span>It’s a full stack Travel Booking single page application
//                                 </p>
//                                 <ul>
//                                     <li>A full stack travel booking SPA with responsive UI.</li>
//                                     <li>User can register for varieties of tourist spots.</li>
//                                     <li>User can check all of his/her registered event list in user’s dashboard also user can cancel
//                                     his/her registered event.</li>
//                                     <li>Admin can add or remove events also admin can control users’ activity</li>
//                                     <li>Only an admin can approve orders and manage all orders.</li>
//                                     <li>User can book any travel spot and manage his or her booking from the dashboard.</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Modal>
//         </div>
//     );
// };

// export default InfiniteTourism;