import React, { useState, useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import List from "components/List";
import CharacterItem from "components/CharacterItem";
import stl from "./Characters.module.scss";
import { BBService } from "services/";
import Spinner from "components/Spinner";

const Characters = () => {
  const breakingBadApi = new BBService();
  const [characters, updateCharacters] = useState([]);
  const [loading, updateLoadingStatus] = useState(true);

  const onLoaded = (data) => {
    updateLoadingStatus(!loading);
    updateCharacters(data);
  };

  useEffect(() => {
    breakingBadApi.getAllCharacters().then(onLoaded);
  }, []);

  const content = !loading ? (
    <List>
      {characters.map(({ id, ...data }) => (
        <CharacterItem key={id} {...data} />
      ))}
    </List>
  ) : null;

  const loader = loading ? <Spinner /> : null;

  return (
    <section className="wrapper">
      <Header />
      <section className="content">
        {content}
        {loader}
      </section>
      <Footer />
    </section>
  );
};
export default Characters;
