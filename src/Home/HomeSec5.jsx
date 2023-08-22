import React from "react";
import "./HomeSec5.scss";

export default function HomeSec5() {
  const arr = [
    "Some call it a project, but I make it more of an experience; acarefully guided process that you'll find eye-opening, energising andgenuinely rewarding.",
    "Working on your brand.",
  ];
  return (
    <section id="HomeSec5">
        <H2 h2={arr[1]} />
        <P p={arr[0]} />
    </section>
  );
}
function H2(props) {
  return <h2>{props.h2}</h2>;
}
function P(props) {
  return <p>{props.p}</p>;
}
