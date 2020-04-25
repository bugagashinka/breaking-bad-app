import React from "react";
import EpisodeItem from "components/EpisodeItem";
import { BBService } from "services";
import GeneralPage from "pages/GeneralPage";

const Episodes = () => {
  return <GeneralPage getData={BBService.getAllEpisodes} renderItem={EpisodeItem} />;
};

export default Episodes;
