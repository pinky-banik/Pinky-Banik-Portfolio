import React from 'react';
import { Typography } from '@mui/material';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const Experience = () => {
    return (
        <div style={{ width: '80%', margin: 'auto' }}>
            <div data-aos='flip-up'>
                <Typography sx={{ fontWeight: 'bold' }} variant="h6" gutterBottom component="div">
                    Full-stack web developer
                </Typography>
                <p style={{ color: '#1976D2', marginBottom: 0 }}><span>2014-2015</span><AddLocationAltIcon sx={{ fontSize: '18px', mx: 1 }} /><span>XYZ Inc.</span></p>
                <Typography sx={{ fontWeight: '550', color: '#000000a6' }} variant="body1" gutterBottom component="div">A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </Typography>
            </div>
            <div data-aos='zoom-in' className='my-3'>
                <Typography sx={{ fontWeight: 'bold' }} variant="h6" gutterBottom component="div">
                    MERN-stack Developer
                </Typography>
                <p style={{ color: '#1976D2', marginBottom: 0 }}><span>2014-2015</span><AddLocationAltIcon sx={{ fontSize: '18px', mx: 1 }} /><span>XYZ Inc.</span></p>
                <Typography sx={{ fontWeight: '550', color: '#000000a6' }} variant="body1" gutterBottom component="div">A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </Typography>
            </div>
            <div data-aos='flip-down'>
                <Typography sx={{ fontWeight: 'bold' }} variant="h6" gutterBottom component="div">
                    UI/UX Designer
                </Typography>
                <p style={{ color: '#1976D2', marginBottom: 0 }}><span>2014-2015</span><AddLocationAltIcon sx={{ fontSize: '18px', mx: 1 }} /><span>XYZ Inc.</span></p>
                <Typography sx={{ fontWeight: '550', color: '#000000a6' }} variant="body1" gutterBottom component="div">A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </Typography>
            </div>
        </div>
    );
};

export default Experience;