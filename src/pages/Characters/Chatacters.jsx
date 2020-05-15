import React, { useState, useEffect } from "react";
import CharacterItem from "components/CharacterItem";
import stl from "./Characters.module.scss";
import { BBService } from "services/";
import GeneralPage from "pages/GeneralPage";
import { withRouter } from "react-router-dom";

const Characters = (props) => {
  const [activeChar, setActiveChar] = useState(null);
  useEffect(() => {
    const charName = props.match.params.charName;
    if (charName && !activeChar) {
      BBService.getCharacter(charName).then((char) => {
        setActiveChar(char.id);
      });
    }
  }, [activeChar]);
  return <GeneralPage getData={BBService.getAllCharacters} renderItem={CharacterItem} selected={activeChar} />;
};

export default withRouter(Characters);
