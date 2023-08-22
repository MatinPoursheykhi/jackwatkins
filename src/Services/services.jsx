import React from "react";

// sections
import ServicesHero from "./ServicesHero";
import ServicesSec2 from "./ServicesSec2";
import ServicesSec3 from "./ServicesSec3";
import ServicesSec4 from "./ServicesSec4";
import ServicesSec6 from "./ServicesSec6";
import CommonSec from "../Commons/commonSec";
import Form from "../Commons/form";
import Footer from "../Commons/footer";
// sections

// photos
import ServicesSec3Photo from "../assets/img/Home/photo-portrait-thoughtful-design.jpg";
import ServicesSec4Photo from "../assets/img/Home/photo-portrait-website-design.jpg";
import ServicesSec6Photo from '../assets/img/Home/photo-quote-jessica-rose-williams.jpg'
// photos

const Services = () => {
  const text = {
    ServicesSec3h2: "Own your space and your story.",
    ServicesSec3btn: "BRAND DESIGN →",
    ServicesSec4h2: "Bring your audience onboard.",
    ServicesSec4btn: "WEBSITE DESIGN →",
    ServicesSec5h2: "You and me. Dream team.",
    ServicesSec5p:"We're in this together, so I believe in a collaborative, supportive approach to the process. I'll listen carefully, think deeply and communicate clearly to get you where you want to be. ",
  };
  return (
    <main className="container-fluid p-0">
      <div className="container p-0">
        <ServicesHero />
        <ServicesSec2 />
        <ServicesSec3
          h2={text.ServicesSec3h2}
          btn={text.ServicesSec3btn}
          ServicesSec3Photo={ServicesSec3Photo}
        />
        <ServicesSec4
          h2={text.ServicesSec4h2}
          btn={text.ServicesSec4btn}
          ServicesSec4Photo={ServicesSec4Photo}
        />
        <CommonSec h2={text.ServicesSec5h2} p={text.ServicesSec5p} />
        <ServicesSec6 ServicesSec6Photo={ServicesSec6Photo}/>
        <Form fName='First Name' lName='Last Name' email='Email Address' />
        <Footer />
      </div>
    </main>
  );
};

export default Services;
