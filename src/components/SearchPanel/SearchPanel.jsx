import React from "react";
import stl from "./SearchPanel.module.scss";
const SearchPanel = ({ placeholder }) => {
  return (
    <form className={stl.form}>
      <input className={stl.field} type="text" placeholder={"Input character name"} />
      <input className={stl.button} type="submit" value="Submit" />
    </form>
  );
};
export default SearchPanel;
