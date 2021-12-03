import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import AboutMe from './Components/Pages/Home/About/AboutMe/AboutMe.';
import Skill from './Components/Pages/Home/About/Skill/Skill';
import Experience from './Components/Pages/Home/About/Experience/Experience';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SparklingGlitters from './Components/ProjectDetails/Sparkling-glitters/sparkling-glitters';
import InfiniteTourism from './Components/ProjectDetails/infinite-tourism/infinite-tourism';
import MedicareHome from './Components/ProjectDetails/medicare-home/medicare-home';


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path="/" element={<AboutMe />} />
            <Route path="/home/about/about_me" element={<AboutMe />} />
            <Route path="/home/about/skill" element={<Skill />} />
            <Route path="/home/about/experience" element={<Experience />} />
          </Route>
          <Route path='/sparklingGlitters'element={<SparklingGlitters />} >
          </Route>
          <Route path='/infiniteTourism'element={<InfiniteTourism />}>
          </Route>
          <Route path='/medicareHome'element={<MedicareHome />}>
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
