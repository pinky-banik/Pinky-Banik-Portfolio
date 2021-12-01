import React from 'react';
import { Typography } from '@mui/material';

const Skill = () => {
    return (
        <div style={{ width: '80%', margin: 'auto' }}>
            <Typography
                data-aos='slide-down'
                sx={{ fontWeight: 700, mb: 4 }}
                variant="h4" gutterBottom component="div">
                Skill
            </Typography>
            <Typography
                data-aos='zoom-out'
                sx={{ fontWeight: '550', color: '#000000a6' }}
                variant="body1" gutterBottom component="div">
                A self-motivated, hard-working individual with proficiency in<br /> <span style={{ color: '#0779E4' }}>Front End:</span> Html5, CSS3, JavaScript, React Js, ES6, React-Router, Bootstrap, Netlify, Heroku, Stripe.<br /> <span style={{ color: '#0779E4' }}>Back End:</span> Node Js, Express Js, Mongo DB, Firebase, Rest API.<br /><span style={{ color: '#0779E4' }}> Tools:</span> VS Code, Git, Git Hub, NPM, Chrome Dev Tools.<br /><span style={{ color: '#0779E4' }}> Familiar:</span> Material Ui, Tailwind, React Native, SASS, Redux. and mobile responsive web development with strong skills, clean and efficient code.
            </Typography>
            {/* <div className='mt-4'>
                <div className="row gx-5">
                    <div data-aos='flip-right' className="col">
                        <div>
                            <div>
                                <Typography sx={{ fontWeight: 'bold' }} variant="button" display="block" gutterBottom>
                                    javascript
                                </Typography>
                                <div style={{ backgroundColor: '#c3c3c3' }} className="progress mb-4">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}>85%</div>
                                </div>
                            </div>

                            <div>
                                <Typography sx={{ fontWeight: 'bold' }} variant="button" display="block" gutterBottom>
                                    react js
                                </Typography>
                                <div style={{ backgroundColor: '#c3c3c3' }} className="progress mb-4">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>80%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos='slide-up' className="col">
                        <div>
                            <div>
                                <Typography sx={{ fontWeight: 'bold' }} variant="button" display="block" gutterBottom>
                                    HTML | CSS | css frameWork
                                </Typography>
                                <div style={{ backgroundColor: '#c3c3c3' }} className="progress mb-4">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>90%</div>
                                </div>
                            </div>
                            <div>
                                <Typography sx={{ fontWeight: 'bold' }} variant="button" display="block" gutterBottom>
                                    node js | express js | mongo BD
                                </Typography>
                                <div style={{ backgroundColor: '#c3c3c3' }} className="progress mb-4">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}>75%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Skill;