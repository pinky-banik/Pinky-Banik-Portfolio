import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {

    return (
        <div style={{
            top: '0px',
            position: 'sticky',
            zIndex: 10,
        }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', color: '#fff' }}>
                        Pinky Banik
                    </Typography>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div style={{ justifyContent: 'flex-end' }} className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <List className='headerNavItem'>
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
                        </List>
                    </div>
                </div>
            </nav>
        </div >
    );
};

export default Header;