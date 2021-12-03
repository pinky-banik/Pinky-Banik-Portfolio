import React, { useState } from 'react';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import RoomIcon from '@mui/icons-material/Room';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm(
            'service_jhtlp4u',
            'template_581pvcn',
            e.target,
            'user_NOwAg7kk5Iq7kF9T0W7G3')
            .then((result) => {
                if (result.text === 'OK') {
                    setSuccess(true);
                    e.target.reset();
                }
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div style={{ paddingTop: '5rem' }} className='contactPage container'>
            <div className='title-section'>
                <h1 className="text-secondary">contact <span>me</span></h1>
                <span className='title-bg'>connect</span>
            </div>
            <div className='row m-auto mt-5'>
                <div className='contact col-lg-6 col-md-12'>
                    <h2 data-aos='slide-down'>Leave Me A Message...</h2>
                    <p data-aos='zoom-in' className='fw-bold text-secondary'>Learn any programming that you want to and loved to code. We have our best qualified programmers to make you success on your goal... </p>
                    <div style={{ width: 'fit-content' }}>
                        <a href="mailto:pinky.rani.banik@gmail.com" target='_blank' rel='noreferrer'>
                            <div data-aos='flip-left' className='row py-2'>
                                <div className='col-3'>
                                    <i><MailIcon /></i>
                                </div>
                                <div className='col-9'>
                                    <h5>Email Address :</h5>
                                    <p>pinky.rani.banik@gmail.com</p>
                                </div>
                            </div>
                        </a>
                        <a href="tel:+8801521445334" target='_blank' rel='noreferrer'>
                            <div data-aos='flip-left' className='row py-2'>
                                <div className='col-3'>
                                    <i><PhoneInTalkIcon /></i>
                                </div>
                                <div className='col-9'>
                                    <h5>Phone Number :</h5>
                                    <p>+8801521445334</p>
                                </div>
                            </div>
                        </a>
                        <a href="//" target='_blank' rel='noreferrer'>
                            <div data-aos='flip-right' className='row py-2'>
                                <div className='col-3'>
                                    <i><RoomIcon /></i>
                                </div>
                                <div className='col-9'>
                                    <h5>My Location :</h5>
                                    <p>Bhatikashore, Mymensingh</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <ui className='socialIcon'>
                            <li data-aos='slide-up' >
                                <a href="https://www.facebook.com/Pinky.Rani.Banik/" target="_blank" rel='noreferrer'><FacebookIcon sx={{ fontSize: '1.9rem' }} /></a>
                            </li>
                            <li data-aos='slide-up' >
                                <a href="https://www.facebook.com/Pinky.Rani.Banik/" target="_blank" rel='noreferrer'><LinkedInIcon sx={{ fontSize: '1.9rem' }} /></a>
                            </li>
                            <li data-aos='slide-left' >
                                <a href="https://github.com/pinky-banik" target="_blank" rel='noreferrer'><GitHubIcon sx={{ fontSize: '1.9rem' }} /></a>
                            </li>
                            <li data-aos='slide-left' >
                                <a href="https://www.instagram.com/pinky__banik/" target="_blank" rel='noreferrer'><InstagramIcon sx={{ fontSize: '1.9rem' }} /></a>
                            </li>
                        </ui>
                    </div>
                </div>
                <div className='message col-lg-6 col-md-12'>
                    <form onSubmit={sendEmail}>
                        <input data-aos="zoom-in" required placeholder='Your Name*' type="text" name="userName" />
                        <input data-aos="zoom-in" required placeholder='Email Address*' type="email" name="userEmail" />
                        <input data-aos="zoom-in" name='subject' placeholder='Subject' type="text" />
                        <textarea data-aos="zoom-in" name="message" required placeholder='Write Your Message*' ></textarea>
                        <Button type='submit' data-aos='zoom-out' sx={{ fontWeight: 'bold' }} variant="contained"><SendIcon /> Send Message</Button>
                    </form>
                    {
                        success &&
                        <Alert sx={{ mt: 2 }} severity="success">Your Message Send Successfully</Alert>
                    }
                </div>
            </div >
        </div >
    );
};

export default Contact;