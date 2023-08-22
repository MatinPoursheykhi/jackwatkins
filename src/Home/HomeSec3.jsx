import React from "react";
import "./HomeSec3.scss";

export default function HomeSec3(props) {
  return (
    <section id="HomeSec3">
      <div>
        <h2>The power of thoughtful design.</h2>
        <p>
          Intentional design is a beautiful thing. It brings clarity and impact
          to your brand and feels as good as it looks.
        </p>
        <button>WORK →</button>
      </div>
      <figure>
        <img src={props.HomeSec3Photo} alt={props.HomeSec3Photo} />
      </figure>
    </section>
  );
}
