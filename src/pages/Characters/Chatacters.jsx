import React from "react";
import CharacterItem from "components/CharacterItem";
import stl from "./Characters.module.scss";
import { BBService } from "services/";
import GeneralPage from "pages/GeneralPage";

const Characters = () => {
  return <GeneralPage getData={BBService.getAllCharacters} renderItem={CharacterItem} />;
};

export default Characters;
