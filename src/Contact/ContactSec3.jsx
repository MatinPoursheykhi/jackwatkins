import React from "react";
import './ContactSec3.scss'



export default function ContactSec3(){
    const sub = (e)=>{
        e.preventDefault()
    }
    return(
        <section id="ContactSec3">
            <form action="reg.php" onSubmit={sub}>
                <div>
                    <p>Your name *</p>
                    <div>
                        <div>
                        <input type="text" name="firstName" id="firstName" />
                        <label htmlFor="firstName">FIRST NAME</label>
                        </div>
                        <div className="ms-3">
                        <input type="text" name="lastName" id="lastName" />
                        <label htmlFor="lastName">LAST NAME</label>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Your email *</p>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <p>Your business name *</p>
                    <input type="text" name="businessName" id="businessName" />
                </div>
                <div>
                    <p>What does your business do? *</p>
                    <textarea name="business" className="w-100" rows="4"></textarea>
                </div>
                <div>
                    <p>How long have you been in business? *</p>
                    <input type="text" name="businessName" id="businessName" />
                </div>
                <div>
                    <p>Your website (if you have one)</p>
                    <input type="text" name="businessName" id="businessName" />
                </div>
                <div>
                    <p>Your business Instagram (if you have one)</p>
                    <input type="text" name="businessName" id="businessName" />
                </div>
                <div>
                    <p>How can I help? *</p>
                    <div className="checkboxs">
                        <input type="checkbox" id="check1" className="check"/>
                        <label htmlFor="check1"> Brand design</label>
                    </div>
                    <div className="checkboxs">
                        <input type="checkbox" id="check2" className="check"/>
                        <label htmlFor="check2"> Brand and website design</label>
                    </div>
                    <div className="checkboxs">
                        <input type="checkbox" id="check3" className="check"/>
                        <label htmlFor="check3"> Brand and website design (with online store)</label>
                    </div>
                    <div className="checkboxs">
                        <input type="checkbox" id="check4" className="check"/>
                        <label htmlFor="check4"> Consultancy</label>
                    </div>
                    <div className="checkboxs">
                        <input type="checkbox" id="check5" className="check"/>
                        <label htmlFor="check5"> Just a question</label>
                    </div>
                    <div className="checkboxs">
                        <input type="checkbox" id="check6" className="check"/>
                        <label htmlFor="check6"> Something else</label>
                    </div>
                </div>
                <div>
                    <p>Is there a specific date you're looking to launch by?</p>
                    <input type="text" name="businessName" className="w-100"/>
                </div>
                <div>
                    <p>What attracts you to working with me? *</p>
                    <textarea name="business1" className="w-100" rows="4"></textarea>
                </div>
                <div>
                    <p>Where did you hear about me? *</p>
                    <span className="text-muted mb-3">e.g. Instagram, Pinterest, Referral, Recommendation, Other</span>
                    <input type="text" name="businessName" className="w-100"/>
                </div>
                <div>
                    <p>Anything else you'd like me to know?</p>
                    <textarea name="business2" className="w-100" rows="4"></textarea>
                </div>
                <div>
                    <div className="checkboxs">
                        <input type="checkbox" id="check7" className="check" />
                        <label htmlFor="check7">I'd like to join your email community.</label>
                    </div>
                </div>
                <p>I respect your privacy. By submitting this form, you accept that your information will be forwarded to Jack Watkins Limited and stored for future communication in line with the privacy policy.</p>
                <button>SEND →</button>
            </form>
        </section>
    )
}