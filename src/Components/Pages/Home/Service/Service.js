import React from 'react';
import './Service.css';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import WebIcon from '@mui/icons-material/Web';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { NavHashLink } from 'react-router-hash-link';

const Service = () => {
    return (
        <div className='service' style={{ padding: '5rem 0' }}>
            <div className='title-section'>
                <h1 className="text-secondary">my <span>services</span></h1>
                <span className='title-bg'>services</span>
            </div>
            <Container>
                <Grid container spacing={3} sx={{ width: '100%' }}>
                    <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                        <Card
                            sx={{ minWidth: 260, py: 2, cursor: 'pointer' }}
                            data-aos='flip-up'>
                            <div className="layer">
                            </div>
                            <CardContent>
                                <div className='serviceLogoTitle'>
                                    <WebIcon className='serviceIcon' />
                                    <Typography sx={{ color: '#0779E4', fontWeight: 600, my: 3 }} variant="h6" gutterBottom component="div">Web Development
                                    </Typography>
                                </div>
                                <div className="service-content">
                                    <Typography sx={{ fontWeight: '550', color: '#fff' }} variant="body1" gutterBottom component="div">Do Full-stack web development with JavaScript, MERN (Mongo DB, Express Js, React Js, Node js).
                                    </Typography>
                                    <Button sx={{ fontWeight: 'bold', mt: 2, color: '#fff' }} size="small">Learn More<ArrowRightAltIcon /></Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                        <Card
                            sx={{ minWidth: 260, py: 2, cursor: 'pointer' }} data-aos="slide-up">
                            <div className="layer">
                            </div>
                            <CardContent>
                                <div className='serviceLogoTitle'>
                                    <DeveloperModeIcon className='serviceIcon' />
                                    <Typography sx={{ color: '#0779E4', fontWeight: 600, my: 3 }} variant="h6" gutterBottom component="div">Responsive
                                    </Typography>
                                </div>
                                <div className="service-content">
                                    <Typography sx={{ fontWeight: '550', color: '#fff' }} variant="body1" gutterBottom component="div">Develope web application which will familiar with all devices. Fully responsive with mobile, tab, laptop etc.
                                    </Typography>
                                    <Button sx={{ fontWeight: 'bold', mt: 2, color: '#fff' }} size="small">Learn More<ArrowRightAltIcon /></Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                        <Card
                            sx={{ minWidth: 260, py: 2, cursor: 'pointer' }} data-aos="slide-up">
                            <div className="layer">
                            </div>
                            <CardContent>
                                <div className='serviceLogoTitle'>
                                    <DesignServicesIcon className='serviceIcon' />
                                    <Typography sx={{ color: '#0779E4', fontWeight: 600, my: 3 }} variant="h6" gutterBottom component="div">UI & UX Design
                                    </Typography>
                                </div>
                                <div className="service-content">
                                    <Typography sx={{ fontWeight: '550', color: '#fff' }} variant="body1" gutterBottom component="div">Also develop User interface and User experience(UI/UX), based on your business or clients.
                                    </Typography>
                                    <Button sx={{ fontWeight: 'bold', mt: 2, color: '#fff' }} size="small">Learn More<ArrowRightAltIcon /></Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Box data-aos="zoom-in" sx={{ m: 8 }}>
                    <Typography
                        sx={{ fontWeight: '800', color: '#00000090', mb: 2 }}
                        variant="body1"
                        gutterBottom
                        component="div"
                        className ="text-secondary">
                        Have any works you want to done by me?<NavHashLink to="/#contact"><span style={{ color: '#0779E4' }}> Contact Me</span></NavHashLink>
                    </Typography>
                    <Typography
                        sx={{ fontWeight: '550', color: '#00000090' }}
                        variant="body1"
                        gutterBottom
                        component="div"
                        className ="text-secondary">
                        If you have any question or suggestion for me and need more information about me and my work, then <br />--please contact me.
                    </Typography>
                </Box>
            </Container>
            
        </div >
    );
};

export default Service;