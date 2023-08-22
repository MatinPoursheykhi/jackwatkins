import React, { useContext, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "./header.scss";
import logo from "../assets/img/Logo/jw-logo.png";

const myContext = React.createContext();
const Header = () => {
  const menu = {
    Home: "Home",
    About: "About",
    Services: "Services",
    Contact: "Contact",
    Logo: logo,
  };
  
  useEffect(() => {
    let Links = document.querySelectorAll("header li");

    for (let i = 0; i < Links.length; i++) {
      Links[i].addEventListener("click", () => {
        for (let j = 0; j < Links.length; j++) {
          Links[j].removeAttribute("class", "line");
        }
        Links[i].setAttribute("class", "line");
      }); 
    }
  });

 
 let x = 1
  const ShowHide = (e) =>{
    let mobMenu = document.getElementsByClassName('mobmenu')[0]
    let rotate = document.getElementById('mobMenu')
    if(x % 2){
      mobMenu.classList.add('show')
      rotate.classList.add('rotate')
    }else{
      mobMenu.classList.remove('show')
      rotate.classList.remove('rotate')
    }
    x++
  }

  return (
    <myContext.Provider value={menu}>
      <header className="container-fluid">
        <div className="container">
          <Logo />
          <nav>
            <Menu />
            <div id="mobMenu" onClick={ShowHide}>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </header>
      <ul className="d-lg-none mobmenu">
        <li className="line">
          <Link to="">{menu.Home}</Link>
        </li>
        <li>
          <Link to="About">{menu.About}</Link>
        </li>
        <li>
          <Link to="Services">{menu.Services}</Link>
        </li>
        <li>
          <Link to="Contact">{menu.Contact}</Link>
        </li>
      </ul>
      <Outlet />
    </myContext.Provider>
  );
};

export default Header;

function Menu() {
  const List = useContext(myContext);
  return (
    <ul>
      <li className="line">
        <Link to="">{List.Home}</Link>
      </li>
      <li>
        <Link to="About">{List.About}</Link>
      </li>
      <li>
        <Link to="Services">{List.Services}</Link>
      </li>
      <li>
        <Link to="Contact">{List.Contact}</Link>
      </li>
    </ul>
  );
}

function Logo() {
  const Figure = useContext(myContext);
  return (
    <figure>
      <a href="HOME">
        <img src={Figure.Logo} alt="Logo" />
      </a>
    </figure>
  );
}

