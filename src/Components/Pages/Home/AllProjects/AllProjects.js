import React from 'react';
import { Link } from 'react-router-dom';
import img_1 from '../../../../img/website screenshot/spark.png'
import img_2 from '../../../../img/website screenshot/infinit.png'
import img_3 from '../../../../img/website screenshot/medicare.png'
import img_4 from '../../../../img/website screenshot/web-3.png'
import img_5 from '../../../../img/website screenshot/web-2.png'
import img_6 from '../../../../img/website screenshot/web-1.png'
import "./AllProjects.css";
const AllProjects = () => {
    return (
        <div>
            <h1 className='Latest_Projects'>My Latest Projects</h1>
            <p className='prargraph'></p>

            <div className='container'>
                    <div className='row gx-5'>
                    <div className="col-12  col-lg-6">
                        <div className="p-5">
                            <h1 className="text-warning">Sparkling Glitters</h1>   
                            <img style={{width:'100%', border:"1px solid yellow", marginBottom:"3%" }} src={img_1} alt="" /><br/>
                            <Link to ='/sparklingGlitters'><button className="btn btn-primary">DETAILS</button></Link><br/>
                        </div>
                    </div>
                    <div className="col-12  col-lg-6">
                        <div className="p-5">
                            <h1 className="text-warning">Infinite Tourism</h1>   
                            <img style={{width:'100%', border:"1px solid yellow", marginBottom:"3%" }} src={img_2} alt="" /><br/>
                            <Link to ='/infiniteTourism'><button className="btn btn-primary">DETAILS</button></Link><br/>
                        </div>
                    </div>
                    <div className="col-12  col-lg-6">
                        <div className="p-5">
                            <h1 className="text-warning">MediCare Home</h1>   
                            <img style={{width:'100%', border:"1px solid yellow", marginBottom:"3%" }} src={img_3} alt="" /><br/>
                            <Link to ='/medicareHome'><button className="btn btn-primary">DETAILS</button></Link><br/>
                        </div>
                    </div>
                    <div className="col-12  col-lg-6">
                        <div className="p-5">
                            <h1 className="text-warning">Honda CBR</h1>   
                            <img style={{width:'100%', border:"1px solid yellow", marginBottom:"3%" }} src={img_4} alt="" /><br/>
                            <Link to ='/'><button className="btn btn-primary">DETAILS</button></Link><br/>
                        </div>
                    </div>
                    <div className="col-12  col-lg-6">
                        <div className="p-5">
                            <h1 className="text-warning">Copa America</h1>   
                            <img style={{width:'100%', border:"1px solid yellow", marginBottom:"3%" }} src={img_5} alt="" /><br/>
                            <Link to ='/'><button className="btn btn-primary">DETAILS</button></Link><br/>
                        </div>
                    </div>
                    <div className="col-12  col-lg-6">
                        <div className="p-5">
                            <h1 className="text-warning">Healthy Food</h1>   
                            <img style={{width:'100%', border:"1px solid yellow", marginBottom:"3%" }} src={img_6} alt="" /><br/>
                            <Link to ='/'><button className="btn btn-primary">DETAILS</button></Link><br/>
                        </div>
                    </div> 
                    </div>
            </div>
        </div>
    );
};

export default AllProjects;