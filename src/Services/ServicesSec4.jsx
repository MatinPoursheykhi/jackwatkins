import React from "react";
import "./ServicesSec4.scss";

export default function ServicesSec4(props) {
  return (
    <section id="ServicesSec4" className="ServicesSec4">
      <div>
        <h2>{props.h2}</h2>
        <button>{props.btn}</button>
      </div>
      <figure>
        <img src={props.ServicesSec4Photo} alt={props.ServicesSec4Photo} />
      </figure>
    </section>
  );
}
