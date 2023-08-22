import React, { useContext } from "react";
import "./HomeHeroSec1.scss";

const myContext = React.createContext();
export default function Hero() {
  const Txts = {
    txt1: "METICULOUSC +",
    txt2: "AMBITIOUS BRAND + WEB",
    txt3: "DESIGN",
    txt4: "Design that makes the difference.",
    txt5: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repudiandae nostrum suscipit magni, sint error dolores excepturi maxime dolorum magnam id adipisci, autem, praesentium ipsam!",
  };
  return (
    <myContext.Provider value={Txts}>
      <section id="HeroSec1">
        <H4 />
        <H1 />
        <P />
      </section>
    </myContext.Provider>
  );
}
function H4() {
  const h4 = useContext(myContext)
  return (
    <h4>
      {h4.txt1}
      <br />
      {h4.txt2}
      <br />
      {h4.txt3}
    </h4>
  );
}
function H1() {
  const h1 = useContext(myContext)
  return (
    <h1>{h1.txt4}</h1>
  );
}
function P() {
  const p = useContext(myContext)
  return (
    <p>{p.txt5}</p>
  );
}
