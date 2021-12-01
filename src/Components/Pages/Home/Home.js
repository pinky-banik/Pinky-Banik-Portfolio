import { Typography, Container, Box } from '@mui/material';
import React from 'react';
import './Home.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import About from './About/About';
import Service from './Service/Service';
// import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import DownloadIcon from '@mui/icons-material/Download';
import bannerImg from "../../../img/banner.png";
import resume from "../../../img/Pinky Banik Resume.pdf";
import Typical from 'react-typical'
import Blog from './Blog/Blog';

const Home = () => {
    return (
        <>
            <Box id='home' sx={{ width: '100%' }} className="banner">
                <Container>
                    <div className="row" style={{ alignItems: 'center' }}>
                        <div className="col-md-6 col-sm-12" style={{ margin: '4rem 0' }}>
                            <Typography sx={{ color: '#fff' }} variant="subtitle1" gutterBottom component="div" data-aos='fade-down'>
                                Hi There,
                            </Typography>
                            <Typography sx={{ color: '#fff' }} variant="h3" gutterBottom component="div" data-aos='slide-up'>
                                I Am Pinky Banik
                            </Typography>
                            <Typography sx={{ color: '#fff' }} variant="h4" gutterBottom component="div" data-aos='slide-up'>
                                {/* npm i react-typical --legacy-peer-deps */}
                                I am a <Typical
                                    steps={['Mern Stack Developer.', 2000, 'Web designer.', 2000]}
                                    loop={Infinity}
                                    wrapper="span"
                                />
                            </Typography>
                            <Typography data-aos='zoom-in' sx={{ color: '#fff', width: '100%', mb: 4 }} variant="subtitle2" gutterBottom component="div">
                                A self-motivated, hard-working individual with proficiency in web technologies with strong skills, clean and efficient code.
                            </Typography>
                            <Stack spacing={2} direction="row" data-aos='flip-down'>
                                <a href="mailto:pinky.rani.banik@gmail.com" target='_blank' rel='noreferrer'>
                                    <Button sx={{ fontWeight: 'bold' }} variant="contained">hire me<ArrowRightAltIcon /></Button>
                                </a>
                                <a href={resume} download>
                                    <Button sx={{ fontWeight: 'bold', color: '#fff' }} variant="outlined">get resume<DownloadIcon /></Button>
                                </a>
                            </Stack>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img className="img-fluid" src={bannerImg} alt="Banner" />
                        </div>
                    </div>

                </Container>
            </Box >
            <div id="about"><About></About></div>
            <div id="service"><Service></Service></div>
            {/* <div id="Projects"><Projects></Projects></div> */}
            <div id="blog"><Blog></Blog></div>
            <div id="contact"><Contact></Contact></div>

        </>
    );
};

export default Home;