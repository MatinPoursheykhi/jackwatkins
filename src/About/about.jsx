import React from "react";
import AboutHero from "./AboutHero";
import AboutSec2 from "./AboutSec2";
import AboutSec4 from "./AboutSec4";
import AboutSec6 from "./AboutSec6";
import AboutSec8 from "./AboutSec8";
import AboutSec9 from "./AboutSec9";
import AboutSec11 from "./AboutSec11";
import Form from "../Commons/form";
import Footer from '../Commons/footer'
import CommonSec from "../Commons/commonSec";

const txt = {
  h2Sec3:'Things that matter to me.',
  pSec3:'I’m fascinated by the science of art — how design works and why it affects us the way it does. I channel this obsession into creating work that has beauty and purpose. I’m an advocate for individuality and celebrate uniqueness wherever I find it. Great energy flows from out-of-the-ordinary. People matter to me, a lot. I love building new connections and making new friends. Kindness, consideration and trust are non-negotiables for me.',
  h2Sec5:'My signature style.',
  pSec5:'A Jack Watkins brand is fully bespoke and celebrates difference, never sameness. Every brand I design will look different, but will share a refined, confident aesthetic and a positive energy that’s a pleasure to experience. I have an architectural approach which makes intelligent use of space, flow and form. Typography will play a big part and colour palettes will be infused with meaning. Only the things we need go into the design — clutter doesn’t make the cut.',
  h2Sec7:'Recognition.',
  h2Sec10:'The back story.',
  pSec10:'Although I look baby-faced, I’ve been around for longer than you might think. I’ve worked as an in-house designer for an international sportswear company, and as a senior designer for an award-winning digital agency working on brands and websites for household names. When I’m not working, I’m at peace walking my dog through the nearby forest, playing the piano, and writing my own music.',
}
const About = () => {
  return (
    <main className="container-fluid p-0">
        <div className="container p-0">
          <AboutHero />
          <AboutSec2 />
          <CommonSec h2={txt.h2Sec3} p={txt.pSec3}/>
          <AboutSec4 />
          <CommonSec h2={txt.h2Sec5} p={txt.pSec3}/>
          <AboutSec6 />
          <CommonSec h2={txt.h2Sec7}/>
          <AboutSec8 />
          <AboutSec9 />
          <CommonSec h2={txt.h2Sec10} p={txt.pSec10}/>
          <AboutSec11 />
          <Form fName='First Name' lName='Last Name' email='Email Address'/>
          <Footer />
        </div>
    </main>
  );
}

export default About;