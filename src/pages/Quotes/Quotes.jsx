import React, { useState, useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import QuoteItem from "components/QuoteItem";
import stl from "./Quotes.module.scss";
import classNames from "classnames";
import { BBService } from "services";
import Spinner from "components/Spinner";

const Quotes = () => {
  const breakingBadApi = new BBService();
  const contentSectionStyles = classNames("content", stl.content_indent);
  const [quotes, updateQuotes] = useState([]);
  const [loading, updateLoadingStatus] = useState(true);

  const onLoaded = (data) => {
    updateLoadingStatus(!loading);
    updateQuotes(data);
  };

  useEffect(() => {
    breakingBadApi.getAllQuotes().then(onLoaded);
  }, []);

  const content = !loading ? quotes.map(({ id, ...data }) => <QuoteItem key={id} id={id} {...data} />) : null;
  const loader = loading ? <Spinner /> : null;

  return (
    <section className="wrapper">
      <Header />
      <section className={contentSectionStyles}>
        <div className="container">
          {content}
          {loader}
        </div>
      </section>
      <Footer />
    </section>
  );
};
export default Quotes;
