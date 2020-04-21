import React, { useState, useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import List from "components/List";
import EpisodeItem from "components/EpisodeItem";
import { BBService } from "services";
import Spinner from "components/Spinner";
import ErrorMessage from "components/ErrorMessage";

const Episodes = () => {
  const breakingBadApi = new BBService();

  const [state, setState] = useState({
    episodes: [],
    isLoading: true,
    error: null,
  });
  const { episodes, isLoading, error } = state;

  const onLoaded = (data) =>
    setState((prev) => ({
      ...prev,
      isLoading: false,
      episodes: data,
    }));

  const onError = (err) =>
    setState((prev) => ({
      ...prev,
      isLoading: false,
      error: err,
    }));

  useEffect(() => {
    breakingBadApi.getAllEpisodes().then(onLoaded).catch(onError);
  }, []);

  const errorElement = error ? <ErrorMessage /> : null;
  const loaderElement = isLoading ? <Spinner /> : null;

  const showContent = !(isLoading || error);
  const content = showContent ? (
    <List>
      {episodes.map(({ id, ...data }) => (
        <EpisodeItem key={id} {...data} />
      ))}
    </List>
  ) : null;

  return (
    <section className="wrapper">
      <Header />
      <section className="content">
        {content}
        {errorElement}
        {loaderElement}
      </section>
      <Footer />
    </section>
  );
};
export default Episodes;
