import React from "react";
import { NavLink } from "react-router-dom";
import stl from "./Header.module.scss";
import classNames from "classnames";

const Header = () => {
  return (
    <header className={classNames("header", `${stl.header}`)}>
      <section className="container">
        <div className={stl.inner}>
          <h1 className={stl.title}>
            <span className={stl.title__part1}>Breaking</span>
            <span className={stl.title__part2}>Bad</span>
          </h1>
          <nav className={stl.menu}>
            <ul>
              <li className={stl.menu__item}>
                <NavLink to="/" exact activeClassName={stl.menu__item_active}>
                  Episodes
                </NavLink>
              </li>
              <li className={stl.menu__item}>
                <NavLink to="/characters" activeClassName={stl.menu__item_active}>
                  Characters
                </NavLink>
              </li>
              <li className={stl.menu__item}>
                <NavLink to="/quotes" activeClassName={stl.menu__item_active}>
                  Quotes
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
