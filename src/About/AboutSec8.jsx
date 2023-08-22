import React, { useEffect } from "react";
import "./AboutSec8.scss";

export default function AboutSec8() {
  useEffect(() => {
    let Links = document.querySelectorAll("#link");
    Links.forEach((link) => {
      link.onclick = (e) => {
        e.preventDefault();
      };
    });
  });

  return (
    <section id="AboutSec8">
      <ul className="p-0">
        <li>
          <p>AWWWARDS</p>
          <a id="link" href="/">
            Honors and Mobile Excellence Award
          </a>
        </li>
        <li>
          <p>BEYOND THE STORIES PODCAST</p>
          <a id="link" href="/">
            Running an intentional business, with Jack Watkins
          </a>
        </li>
        <li>
          <p>THE BRAND STYLIST</p>
          <a id="link" href="/">
            Elevate · Class of 2019
          </a>
        </li>
        <li>
          <p>DESIGN SHACK</p>
          <a id="link" href="/">
            15 Typography Trends for 2020
          </a>
        </li>
        <li>
          <p>MINDSPARKLE MAGAZINE</p>
          <a id="link" href="/">
            Site of the Day
          </a>
        </li>
        <li>
          <p>PRODUCT DISRUPT</p>
          <a id="link" href="/">
            Best Portfolio Websites
          </a>
        </li>
        <li>
          <p>THE SUNDAY TIMES</p>
          <a id="link" href="/">
            Bestseller (The Finch Bakery Book)
          </a>
        </li>
        <li>
          <p>WEBDESIGNER DEPOT</p>
          <a id="link" href="/">
            Best New Portfolios
          </a>
        </li>
        <li>
          <p>WORDERY</p>
          <a id="link" href="/">
            Book of the Year (Food and Drink)
          </a>
        </li>
      </ul>
    </section>
  );
}
