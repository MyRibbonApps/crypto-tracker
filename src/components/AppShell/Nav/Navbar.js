import { useEffect, useState } from "react";

import Button from "../../Common/Button";
import SearchBarWrapper from "./Searchbar/SearchBarWrapper";
import "./Navbar.scss";

import logo from "../../../logo.png";
import cross from "../../../x.png";
import menu from "../../../menu.png";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [blackBg, setBgBlack] = useState(false);

  const setBgFunc = () => {
    console.log(window.scrollY);
    if (window.scrollY > 45) {
      setBgBlack(true);
      return;
    }
    setBgBlack(false);
  };
  useEffect(() => {
    setBgFunc();
    console.log(window.scrollY);
    document.addEventListener("scroll", setBgFunc);
  }, []);
  return (
    <nav className={blackBg ? "nav nav--blackbg" : "nav"}>
      <ul className="nav-ul">
        <img className="nav__logo" src={logo}></img>
        <img
          onClick={() => setOpen(true)}
          className="nav__menu"
          src={menu}
        ></img>
        <SearchBarWrapper />
        <div className={`nav-ul__items ${open ? "nav-ul__items--active" : ""}`}>
          <div className="nav-ul-links">
            <li className="nav-ul__items__li">
              <a className="nav-ul__items__li__item">Home</a>
            </li>
            <li className="nav-ul__items__li">
              <a className="nav-ul__items__li__item">Track crypto</a>
            </li>
            <li className="nav-ul__items__li">
              <a className="nav-ul__items__li__item nav-ul__items__li--hideatsmaller">
                Learn more
              </a>
            </li>
          </div>

          <div className="nav-ul-buttons">
            <li className="nav-ul__items__li__cross">
              <img
                onClick={() => setOpen(false)}
                className=" nav-ul__items__li__cross--img"
                src={cross}
              ></img>
            </li>
            <li className="nav-ul__items__li nav-ul__items__li--btn">
              <Button text={"Sign up"} primary={true} />
            </li>
            <li className="nav-ul__items__li nav-ul__items__li--btn nav-ul__items__li--btn--lastonmobile">
              <Button text={"Sign in"} primary={false} />
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
