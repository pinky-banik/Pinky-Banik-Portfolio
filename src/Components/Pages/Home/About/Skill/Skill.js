import React from 'react';
import { Typography } from '@mui/material';

const Skill = () => {
    return (
        <div style={{ width: '80%', margin: 'auto' }}>
            <Typography
                data-aos='slide-down'
                sx={{ fontWeight: 700, mb: 4 }}
                variant="h4" gutterBottom component="div" style={{color : "white"}}>
                Skill
            </Typography>
            <Typography
                data-aos='zoom-out'
                sx={{ fontWeight: '550', color: '#000000a6' }}
                variant="body1" gutterBottom component="div" className ="text-secondary">
                A self-motivated, hard-working individual with proficiency in<br /> <span style={{ color: '#0779E4' }}>Front End:</span> Html5, CSS3, JavaScript, React Js, ES6, React-Router, Bootstrap, Netlify, Heroku, Stripe.<br /> <span style={{ color: '#0779E4' }}>Back End:</span> Node Js, Express Js, Mongo DB, Firebase, Rest API.<br /><span style={{ color: '#0779E4' }}> Tools:</span> VS Code, Git, Git Hub, NPM, Chrome Dev Tools.<br /><span style={{ color: '#0779E4' }}> Familiar:</span> Material Ui, Tailwind, React Native, SASS, Redux. and mobile responsive web development with strong skills, clean and efficient code.
            </Typography>
            
        </div>
    );
};

export default Skill;