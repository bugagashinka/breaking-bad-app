import React, { useState, useEffect } from "react";
import stl from "./GeneralPage.module.scss";
import ErrorMessage from "components/ErrorMessage";
import Spinner from "components/Spinner";
import List from "components/List";
import Header from "components/Header";
import Footer from "components/Footer";
import classNames from "classnames";

const GeneralPages = (props) => {
  const [state, setState] = useState({
    itemList: [],
    isLoading: true,
    error: null,
  });
  const { getData, renderItem, grid = true } = props;
  const { itemList, isLoading, error } = state;
  const contentSectionStyles = classNames("content", { [stl.content_indent]: !grid });

  const onLoaded = (itemList) => setState((prevState) => ({ ...prevState, isLoading: false, itemList }));

  const onError = (error) => setState((prevState) => ({ ...prevState, isLoading: false, error }));

  useEffect(() => {
    getData().then(onLoaded).catch(onError);
  }, []);

  const errorElement = error ? <ErrorMessage /> : null;
  const loaderElement = isLoading ? <Spinner /> : null;

  const renderList = () => {
    const listContent = itemList.map(({ id, ...data }) => React.createElement(renderItem, { key: id, ...data }));
    return grid ? <List>{listContent}</List> : listContent;
  };

  const hasContent = !(error || isLoading);
  const content = hasContent ? renderList() : null;

  return (
    <section className="wrapper">
      <Header />
      <section className={contentSectionStyles}>
        <section className="container">
          {errorElement}
          {content}
          {loaderElement}
        </section>
      </section>
      <Footer />
    </section>
  );
};

export default GeneralPages;
