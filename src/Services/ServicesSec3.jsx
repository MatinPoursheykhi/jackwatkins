import React from "react";
import "./ServicesSec3.scss";

export default function ServicesSec3(props) {
  return (
    <section id="ServicesSec3" className="ServicesSec3">
      <div>
        <h2>{props.h2}</h2>
        <button>{props.btn}</button>
      </div>
      <figure>
        <img src={props.ServicesSec3Photo} alt={props.ServicesSec3Photo} />
      </figure>
    </section>
  );
}
