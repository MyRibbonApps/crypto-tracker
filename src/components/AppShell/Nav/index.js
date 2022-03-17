import Button from "../../Common/Button";
import "./Nav.scss";
import logo from "../../../logo.png";
import cross from "../../../x.png";
import menu from "../../../menu.png";
import { useEffect, useState } from "react";
import searchIcon from "../../../../src/search.png";
import SearchBar from "./SearchBar";

const Nav = ({ propFunc }) => {
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
        <SearchBar />
        {/* <span className="nav-ul-inputwrapper">
          <span className="nav-ul-inputwrapper-inputcontainer">
            <img
              src={searchIcon}
              className="nav-ul-inputwrapper-inputcontainer__icon"
            ></img>
            <input
              className="nav-ul-inputwrapper__input"
              placeholder="Search for crypto asset..."
            ></input>
          </span>
          <div className="nav-ul-inputwrapper-searchresults"></div>
        </span> */}
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
            {/* <li className="nav-ul__items__li nav-ul__items__li--searchicon">
              d
              <img
                src={searchIcon}
                className="nav-ul__items__li nav-ul__items__li--searchicon__icon"
              ></img>
            </li> */}
            <li className="nav-ul__items__li nav-ul__items__li--btn">
              <Button text={"Sign up"} primary={true} />
            </li>
            <li className="nav-ul__items__li nav-ul__items__li--btn nav-ul__items__li--btn--lastonmobile">
              <Button text={"Sign in"} primary={false} />
            </li>
          </div>
        </div>
        {/* MOBIILE SEARCH NAV */}
        {/* <div className={`nav-ul__items ${open ? "nav-ul__items--active" : ""}`}>

                </div> */}
      </ul>
    </nav>
  );
};

export default Nav;
