import React from "react";
import './form.scss'


export default function Form(props){

    const Submit = (e) =>{
        e.preventDefault()
    }
    return(
        <section id="form" className="container-fluid p-0">
            <div className="container p-0">
                <div>
                    <h2>For enquiring minds.</h2>
                    <p>If you’d like relevant insights, artistic inspiration and helpful resources delivered straight to your inbox, with zero spam or pushy marketing, sign up here.</p>
                </div>
                <div>
                    <form action="reg.php" onSubmit={Submit}>
                        <h6>FOR DESIGNERS</h6>
                        <div>
                        <input type="text" placeholder={props.fName} />
                        <input type="text" placeholder={props.lName} />
                        <input type="email" placeholder={props.email} />
                        </div>
                        <button>SUBSCRIB</button>
                    </form>
                    <form action="reg.php" onSubmit={Submit}>
                        <h6>FOR DESIGNERS</h6>
                        <div>
                        <input type="text" placeholder={props.fName} />
                        <input type="text" placeholder={props.lName} />
                        <input type="email" placeholder={props.email} />
                        </div>
                        <button>SUBSCRIB</button>
                    </form>
                </div>
                <p>I respect your privacy. Unsubscribe at any time.</p>
            </div>
        </section>
    )
}