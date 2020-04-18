import React from "react";
import { NavLink } from "react-router-dom";
import stl from "./Header.module.scss";
import classNames from "classnames";
import SearchPanel from "components/SearchPanel";

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
              <li>
                <NavLink to="/">Episodes</NavLink>
              </li>
              <li>
                <NavLink to="/characters">Characters</NavLink>
              </li>
              <li>
                <NavLink to="/quotes">Quotes</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <SearchPanel />
      </section>
    </header>
  );
};

export default Header;
