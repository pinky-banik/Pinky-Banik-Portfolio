import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='container blog'>
            <div className='title-section'>
                <h1>my <span>blogs</span></h1>
                <span className='title-bg'>blogs</span>
            </div>
            <div className="row" data-aos="slide-up">
                <div className="col-sm-12 col-md-6 col-lg-4 blogCards">
                    <div className="card transition">
                        <h2 className="transition">Blog Coming <span style={{ color: 'black' }}>Soon</span></h2>
                        <p>My portfolio have no blog yet, sorry for that. You can mail me a topic to write blog..:)<br />--Happy Codding</p>
                        <div className="cta-container transition"><span href="#" className="cta">COMING SOON</span></div>
                        <div className="card_circle transition"></div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 blogCards">
                    <div className="card transition">
                        <h2 className="transition">Blog Coming <span style={{ color: 'black' }}>Soon</span></h2>
                        <p>My portfolio have no blog yet, sorry for that. You can mail me a topic to write blog..:)<br />--Happy Codding</p>
                        <div className="cta-container transition"><span href="#" className="cta">COMING SOON</span></div>
                        <div className="card_circle transition"></div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 blogCards">
                    <div className="card transition">
                        <h2 className="transition">Blog Coming <span style={{ color: 'black' }}>Soon</span></h2>
                        <p>My portfolio have no blog yet, sorry for that. You can mail me a topic to write blog..:)<br />--Happy Codding</p>
                        <div className="cta-container transition"><span href="#" className="cta">COMING SOON</span></div>
                        <div className="card_circle transition"></div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Blog;