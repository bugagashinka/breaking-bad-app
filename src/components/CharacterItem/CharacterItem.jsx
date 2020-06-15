import React from "react";
import stl from "./CharacterItem.module.scss";
import { item as list__item } from "../List/List.module.scss";
import classNames from "classnames";

const CharacterItem = React.forwardRef(({ name, img, isActive }, ref) => {
  const cardStyles = classNames(`${stl.card}`, `${list__item}`, { [`${stl.active}`]: isActive });

  return (
    <div ref={ref} className={cardStyles}>
      <div className={stl.card__image} style={{ backgroundImage: `url(${img})` }}></div>
      <h3>{name}</h3>
    </div>
  );
});

export default CharacterItem;
