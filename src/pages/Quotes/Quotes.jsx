import React from "react";
import QuoteItem from "components/QuoteItem";
import stl from "./Quotes.module.scss";
import { BBService } from "services";
import GeneralPage from "pages/GeneralPage";

const Quotes = () => {
  return <GeneralPage getData={BBService.getAllQuotes} renderItem={QuoteItem} grid={false} />;
};

export default Quotes;
