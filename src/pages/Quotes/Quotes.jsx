import React, { useState, useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import QuoteItem from "components/QuoteItem";
import stl from "./Quotes.module.scss";
import classNames from "classnames";
import { BBService } from "services";
import Spinner from "components/Spinner";
import ErrorMessage from "components/ErrorMessage";

const Quotes = () => {
  const breakingBadApi = new BBService();
  const contentSectionStyles = classNames("content", stl.content_indent);
  const [state, setState] = useState({
    quotes: [],
    isLoading: true,
    error: null,
  });
  const { isLoading, error, quotes } = state;

  const onLoaded = (data) => setState((prev) => ({ ...prev, isLoading: false, quotes: data }));

  const onError = (err) => setState((prev) => ({ ...prev, isLoading: false, error: err }));

  useEffect(() => {
    breakingBadApi.getAllQuotes().then(onLoaded).catch(onError);
  }, []);

  const errorElement = error ? <ErrorMessage /> : null;
  const loaderElement = isLoading ? <Spinner /> : null;

  const hasContent = !(isLoading || error);
  const content = hasContent ? quotes.map(({ id, ...data }) => <QuoteItem key={id} id={id} {...data} />) : null;

  return (
    <section className="wrapper">
      <Header />
      <section className={contentSectionStyles}>
        <div className="container">
          {errorElement}
          {content}
          {loaderElement}
        </div>
      </section>
      <Footer />
    </section>
  );
};
export default Quotes;
