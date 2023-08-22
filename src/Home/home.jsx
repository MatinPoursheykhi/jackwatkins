import React from "react";
// sections
import HeroSec1 from "./HomeHeroSec1";
import HomeSec2 from "./HomeSec2";
import HomeSec3 from "./HomeSec3";
import HomeSec4 from "./HomeSec4";
import HomeSec5 from "./HomeSec5";
import HomeSec6 from "./HomeSec6";
import CommonSec from "../Commons/commonSec";
import HomeSec7 from "./HomeSec7";
import Form from "../Commons/form";
import Footer from '../Commons/footer'
// sections

// photos
import HomeSec3Photo from '../assets/img/Home/photo-portrait-thoughtful-design.jpg'
import HomeSec4Photo from '../assets/img/Home/photo-quote-coco.jpg'
import HomeSec6Photo1 from '../assets/img/Home/photo-hero-home-brand-design.jpg'
import HomeSec6Photo2 from '../assets/img/Home/photo-hero-home-website-design.jpg'
import HomeSec7Photo1 from '../assets/img/Home/notes-romy.jpg'
import HomeSec7Photo2 from '../assets/img/Home/notes-software.jpg'
// photos

let h2 = 'Notes from the brand studio.'
const Home = () => {
  return (
    <main className="container-fluid p-0">
      <div className="container p-0">
        <HeroSec1 />
        <HomeSec2 />
        <HomeSec3 HomeSec3Photo={HomeSec3Photo}/>
        <HomeSec4 HomeSec4Photo={HomeSec4Photo}/>
        <HomeSec5 />
        <HomeSec6 HomeSec6Photo1={HomeSec6Photo1} HomeSec6Photo2={HomeSec6Photo2}/>
        <CommonSec h2={h2}/>
        <HomeSec7 HomeSec7Photo1={HomeSec7Photo1} HomeSec7Photo2={HomeSec7Photo2}/>
        <Form fName='First Name' lName='Last Name' email='Email Address' />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
