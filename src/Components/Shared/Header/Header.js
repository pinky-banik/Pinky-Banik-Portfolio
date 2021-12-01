import React from 'react';
import Button from '@mui/material/Button';
import { NavHashLink } from 'react-router-hash-link';
import logo from "../../../img/logo.png"

const Header = () => {

    return (
        <div style={{
            top: '0px',
            position: 'sticky',
            zIndex: 10,
        }}>
            <nav class="navbar navbar-expand-lg navbar-dark bg-light">
                <div class="container">
                    
                    
                    <NavHashLink to ="/#home">
                    <a className="navbar-brand" href="/home"><img src={logo} alt="logo" />PINKY BANIK</a>
                    </NavHashLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav text-center">
                        <NavHashLink
                                to='#home'>
                                <Button color="inherit">Home</Button>
                            </NavHashLink>
                            <NavHashLink
                                to='/#about'>
                                <Button color="inherit">About</Button>
                            </NavHashLink>
                            <NavHashLink
                                to='/#service'>
                                <Button color="inherit">Service</Button>
                            </NavHashLink>
                            <NavHashLink
                                to='/#Projects'>
                                <Button color="inherit">Projects</Button>
                            </NavHashLink>
                            <NavHashLink
                                to='/#blog'>
                                <Button color="inherit">Blog</Button>
                            </NavHashLink>
                            <NavHashLink
                                to='/#contact'>
                                <Button color="inherit">Content</Button>
                            </NavHashLink>
                        
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    );
};

export default Header;