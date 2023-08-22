import React from "react";
import "./HomeSec6.scss";

export default function HomeSec6(props) {
  const txt = {
    txt1: "Brand design",
    txt2: "Own your space and your story →",
    txt3: "Website design",
    txt4: "Bring your audience onboard →",
  };
  return (
    <section id="HomeSec6">
      <div>
        <figure>
          <img src={props.HomeSec6Photo1} alt={props.HomeSec6Photo1} />
        </figure>
        <H3 txt={txt.txt1} />
        <Link txt={txt.txt2} />
      </div>
      <div>
        <figure>
          <img src={props.HomeSec6Photo2} alt={props.HomeSec6Photo2} />
        </figure>
        <H3 txt={txt.txt3} />
        <Link txt={txt.txt4} />
      </div>
    </section>
  );
}

function H3(props) {
  return <h3>{props.txt}</h3>;
}
function Link(props) {
  const prevent = (e) => {
    e.preventDefault();
  };
  return (
    <a onClick={prevent} href="/">
      {props.txt}
    </a>
  );
}
