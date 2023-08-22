import React from "react";
// sectoins
import ContactHero from "./ContactHero";
import ContactSec2 from "./ContactSec2";
import ContactSec3 from "./ContactSec3";
import Form from "../Commons/form";
import Footer from '../Commons/footer'
// sectoins

const Contact = () => {
  return (
    <main className="container-fluid p-0">
        <div className="container">
        <ContactHero />
        <ContactSec2 />
        <ContactSec3 />
        <Form fName='First Name' lName='Last Name' email='Email Address' />
        <Footer />
        </div>
    </main>
  );
}

export default Contact;