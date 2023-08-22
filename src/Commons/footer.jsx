import React, { useContext } from "react";
import "./footer.scss";

const myContex = React.createContext();
export default function Footer() {
  const theStates = {
    Term: "Terms of use",
    Privacy: "Privacy policy",
    Instagram: "Instagram",
    Pinterest: "Pinterest",
    Jack: "JACK WATKINS",
    BRAND: "BRAND",
    STUDIO: "STUDIO",
    Copy: "Copyright © 2022 · Coded By Mateen Poursheykhi",
  };
  return (
    <myContex.Provider value={theStates}>
      <footer>
        <div className="container">
          <div>
            <Tags1 />
            <FootLogo />
            <Tags2 />
          </div>
          <CopyRight />
        </div>
      </footer>
    </myContex.Provider>
  );
}

function Tags1() {
  const txt = useContext(myContex);
  return (
    <div>
      <a id="links" href="/">{txt.Term}</a>
      <a id="links" href="/">{txt.Privacy}</a>
    </div>
  );
}

function FootLogo() {
  const txt = useContext(myContex);
  return (
    <div>
      <h2>{txt.Jack}</h2>
      <div>
        <p>{txt.BRAND}</p>
        <span></span>
        <p>{txt.STUDIO}</p>
      </div>
    </div>
  );
}

function Tags2() {
  const txt = useContext(myContex);
  return (
    <div>
      <a id="links" href="/">{txt.Instagram}</a>
      <a id="links" href="/">{txt.Pinterest}</a>
    </div>
  );
}

function CopyRight() {
    const txt = useContext(myContex)
  return (
    <div>
      <p>{txt.Copy}</p>
    </div>
  );
}
