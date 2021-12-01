import { Typography } from '@mui/material';
import React from 'react';

const AboutMe = () => {
    return (
        <div style={{ width: '80%', margin: 'auto' }}>
            <Typography data-aos='slide-down' sx={{ fontWeight: 700, mb: 0}} variant="h4" gutterBottom component="div" style={{color: "white"}}>
                Pinky Banik
            </Typography>
            <p data-aos='zoom-in' style={{ fontWeight: 'bold', color: '#0779E4' }}>
                Junior Full-stack Web Developer.
            </p>
            <Typography data-aos='flip-up' sx={{ fontWeight: '550', color: '#000000d4', textAlign: 'justify' }} variant="body1" gutterBottom component="div" style={{color : "white"}}>I am <span style={{ color: '#0779E4' }}>Pinky Banik,</span> I am a hardworking and ambitious individual with a great passion for the IT industry. I am currently in my third year of studying B.SC in Computer Science and Engineering. I am looking for an opportunity to utilize my technical skills in a challenging working environment and become a valuable asset to the organization that I work for. <br /><br /><span style={{ color: '#0779E4' }}>---HAPPY CODDING</span>
            </Typography>
        </div>
    );
};

export default AboutMe;