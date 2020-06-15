import React from "react";
import CharacterItem from "components/CharacterItem";
import { BBService } from "services/";
import { withRouter } from "react-router-dom";
import { compose } from "utils";
import List from "components/List";
import { withData, withGeneralLayout } from "hoc";

const Characters = ({ data: characters, match: { params } }) => {
  return (
    <List>
      {characters.map(({ id, name, ...data }) => {
        return <CharacterItem key={id} {...data} />;
      })}
    </List>
  );
};

export default compose(withRouter, withData(BBService.getAllCharacters), withGeneralLayout())(Characters);
