import React from 'react';
import './About.css'
import { NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Outlet } from "react-router-dom";
import aboutImg from '../../../../img/pinky.jpg';

const About = () => {
    return (
        <div style={{ padding: '5rem 0' }}>
            <div className='title-section'>
                <h1 className="text-secondary">about <span>me</span></h1>
                <span className='title-bg'>resume</span>
            </div>
            <div className="container aboutContent" style={{ width: '100%' }}>
                <div className="row">
                    <div
                        style={{ zIndex: 1, padding: '2rem' }} className="col-sm-12  col-md-5">
                        <div className="aboutImgContainer">
                            <img className='img-fluid' width='100%' src={aboutImg} alt='img' data-aos='zoom-in' />
                        </div>
                    </div>
                    <div className="col-sm-12, col-md-7">
                        <div data-aos='slide-right'>
                            <Stack
                                sx={{ justifyContent: 'center', mb: 4, }}
                                spacing={3}
                                direction="row">
                                <NavLink
                                    to='/home/about/about_me'
                                    style={({ isActive }) => {
                                        return {
                                            backgroundColor: isActive ? "#1976d247" : ""
                                        };
                                    }}>
                                    <Button
                                        sx={{
                                            fontWeight: 'bold',
                                        }}
                                        variant="outlined">about</Button>
                                </NavLink>
                                <NavLink
                                    to='/home/about/skill'
                                    style={({ isActive }) => {
                                        return {
                                            backgroundColor: isActive ? "#1976d247" : ""
                                        };
                                    }}>
                                    <Button
                                        sx={{
                                            fontWeight: 'bold',
                                        }}
                                        variant="outlined">skill</Button>
                                </NavLink>
                                {/* <NavLink
                                    to='/home/about/experience'
                                    style={({ isActive }) => {
                                        return {
                                            backgroundColor: isActive ? "#1976d247" : ""
                                        };
                                    }}>
                                    <Button
                                        sx={{
                                            fontWeight: 'bold',
                                        }}
                                        variant="outlined">experience</Button>
                                </NavLink> */}
                            </Stack>
                        </div>
                        <div data-aos='slide-up'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;