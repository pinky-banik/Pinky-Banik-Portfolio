import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faLowVision} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Button } from '@mui/material';
import img1 from '../../../img/mh-1.png';
import img2 from '../../../img/mh-2.png';
import img3 from '../../../img/mh-3.png';








const handleClickVisti = () => {
    window.open("https://medicare-home.web.app/");
  };
  
  const handleClickGitHub = () => {
    window.open("https://github.com/pinky-banik/MediCare-Home");
  };
 

const MedicareHome = () => {
    return (
        <div className='container'>
            <h2 className='simba_title'>Medicare Home</h2>
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
                        <h2 className='mt-2'>Medicare Home</h2>
                        
                        <Button onClick={handleClickVisti}><FontAwesomeIcon icon={faLowVision} />  Visit</Button>
                        <Button onClick={handleClickGitHub}><FontAwesomeIcon icon={faGithub} /> GitHub </Button>
                        <h2 className='mt-4'>OverView Project</h2>
                        <h3> <FontAwesomeIcon icon={faForward} /> Medical and dental terminology</h3>
                        <h3><FontAwesomeIcon icon={faForward} /> Patient Confidentiality</h3>
                        <h3><FontAwesomeIcon icon={faForward} /> Sign in is required to request order for to view client dashboard with services status</h3>
                        <h3><FontAwesomeIcon icon={faForward} /> An user can visit this app as well but this site contains some private page which is not available for visitors.</h3>
                        <h3><FontAwesomeIcon icon={faForward} /> One have to be our user to get full features of this app through an authentication system.</h3>
                        <h3><FontAwesomeIcon icon={faForward} /> To book a service, a user must have to go through the authentication.</h3>
                        
                    </div>
                </div>
                
            </div>
            <Link  to ='/'><Button className='mt-5'>Back </Button></Link>
            
        </div>
    );
};

export default MedicareHome;
















// const MedicareHome = ({ open, handleClose }) => {
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
//                                 <h2 style={{ textAlign: 'center', marginTop: '1.2rem' }}>Grow Fitness</h2>
//                                 <p>
//                                     <span>Link: </span>
//                                     <a href="https://github.com/pinky-banik/MediCare-Home" target="_blank" rel='noreferrer'>GitHub
//                                     </a> | <a href="https://medicare-home.web.app/" target="_blank" rel='noreferrer'>Live</a>
//                                 </p>
//                                 <p>
//                                     <span>Technology: </span>JavaScript, React Js, Node Js, Express Js, Mongo DB, Firebase authentication, React Router, Bootstrap Heroku.
//                                 </p>
//                                 <p>
//                                     <span>Features: </span>It’s a full stack Medical service single page website
//                                 </p>
//                                 <ul>
//                                     <li>An user can visit this app as well but this site contains some private page which is not available for visitors.</li>
//                                     <li>Visitors can be a user through registration with email and google also.</li>
//                                     <li>One have to be our user to get full features of this app through an authentication system.</li>
                                    
//                                     <li>To book a service, a user must have to go through the authentication.</li>
                                    
//                                     <li>Responsive UI.</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Modal>
//         </div>
//     );
// };

// export default MedicareHome;