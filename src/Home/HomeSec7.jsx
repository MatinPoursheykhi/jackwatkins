import React from "react";
import "./HomeSec7.scss";

export default function HomeSec7(props) {
  const txt = {
    h3Left: "Behind the brand-ROMY",
    h3Right:
      "All of the apps I use to run .",
    pLeft:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repudiandae nostrum suscipit magni, sint error dolores excepturi maxime dolorum magnam id adipisci, autem, praesentium ipsam!",
    pRight:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repudiandae nostrum suscipit magni, sint error dolores excepturi maxime dolorum magnam id adipisci, autem, praesentium ipsam!",
  };
  return (
    <section id="HomeSec7">
      <div>
        <div>
          <figure>
            <img
              className="w-100 h-100"
              src={props.HomeSec7Photo1}
              alt={props.HomeSec7Photo1}
            />
          </figure>
          <H3 h3={txt.h3Left} />
          <P p={txt.pLeft} />
        </div>
        <div>
          <figure>
            <img
              className="w-100 h-100"
              src={props.HomeSec7Photo2}
              alt={props.HomeSec7Photo2}
            />
          </figure>
          <H3 h3={txt.h3Right} />
          <P p={txt.pRight} />
        </div>
      </div>
      <button>NOTES →</button>
    </section>
  );
}

function H3(props) {
  return <h3>{props.h3}</h3>;
}
function P(props) {
  return <p>{props.p}</p>;
}
