import Button from "../../Common/Button";
import "./Nav.scss";
import logo from "../../../logo.png";
import cross from "../../../x.png";
import menu from "../../../menu.png";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <img className="nav__logo" src={logo}></img>
        <img
          onClick={() => setOpen(true)}
          className="nav__menu"
          src={menu}
        ></img>
        <div className={`nav-ul__items ${open ? "nav-ul__items--active" : ""}`}>
          <li className="nav-ul__items__li">
            <a className="nav-ul__items__li__item">Home</a>
          </li>
          <li className="nav-ul__items__li">
            <a className="nav-ul__items__li__item">Track crypto</a>
          </li>
          <li className="nav-ul__items__li__cross">
            <img
              onClick={() => setOpen(false)}
              className=" nav-ul__items__li__cross--img"
              src={cross}
            ></img>
          </li>
          <li className="nav-ul__items__li nav-ul__items__li--btn">
            <Button text={"Track now!"} primary={true} />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
