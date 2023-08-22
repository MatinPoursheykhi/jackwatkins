import React from "react";
import './commonSec.scss'

export default function CommonSec(props){
    return(
        <section id="commonSec">
                <h2>{props.h2}</h2>
                <div></div>
                <p>{props.p}</p>
        </section>
    )
}