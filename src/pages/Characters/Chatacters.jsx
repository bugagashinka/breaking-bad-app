import React, { useState, useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import List from "components/List";
import CharacterItem from "components/CharacterItem";
import stl from "./Characters.module.scss";
import { BBService } from "services/";
import Spinner from "components/Spinner";
import ErrorMessage from "components/ErrorMessage";

const Characters = () => {
  const breakingBadApi = new BBService();
  const [state, setState] = useState({
    characters: [],
    isLoading: true,
    error: null,
  });
  const { characters, isLoading, error } = state;

  const onLoaded = (data) =>
    setState((prev) => ({
      ...prev,
      isLoading: false,
      characters: data,
    }));

  const onError = (err) => setState((prev) => ({ ...prev, isLoading: false, error: err }));

  useEffect(() => {
    breakingBadApi.getAllCharacters().then(onLoaded).catch(onError);
  }, []);

  const errorElement = error ? <ErrorMessage /> : null;
  const loaderElement = isLoading ? <Spinner /> : null;

  const hasContent = !(error || isLoading);
  const content = hasContent ? (
    <List>
      {characters.map(({ id, ...data }) => (
        <CharacterItem key={id} {...data} />
      ))}
    </List>
  ) : null;

  return (
    <section className="wrapper">
      <Header />
      <section className="content">
        {errorElement}
        {content}
        {loaderElement}
      </section>
      <Footer />
    </section>
  );
};
export default Characters;
