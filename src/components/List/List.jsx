import React from "react";
import stl from "./List.module.scss";

const List = ({ children }) => {
  return (
    <section className="container">
      <div className={stl.list}>{children}</div>
    </section>
  );
};

export default List;
