import React from "react";
import "./HomeSec4.scss";

export default function HomeSec4(props) {
  return (
    <section id="HomeSec4">
      <figure>
        <img src={props.HomeSec4Photo} alt={props.HomeSec4Photo} />
      </figure>
      <div>
        <p>
          “Mateen, you've blown us away. Literally every single detail is
          perfection. Thank you a million times over.”
        </p>
        <h4>
          LUCIE + KIM <br /> FLORAL DESIGNERS
        </h4>
      </div>
    </section>
  );
}
