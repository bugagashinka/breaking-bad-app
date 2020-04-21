import React, { useState, useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import List from "components/List";
import EpisodeItem from "components/EpisodeItem";
import { BBService } from "services";
import Spinner from "components/Spinner";

const Episodes = () => {
  const breakingBadApi = new BBService();
  const [episodes, updateEpisodes] = useState([]);
  const [loading, changeLoadingStatus] = useState(true);

  const onLoaded = (data) => {
    changeLoadingStatus(!loading);
    updateEpisodes(data);
  };

  useEffect(() => {
    breakingBadApi.getAllEpisodes().then(onLoaded);
  }, []);

  const content = !loading ? (
    <List>
      {episodes.map(({ id, ...data }) => (
        <EpisodeItem key={id} {...data} />
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
export default Episodes;
