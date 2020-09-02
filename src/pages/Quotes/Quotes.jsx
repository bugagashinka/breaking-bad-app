import React from "react";
import QuoteItem from "components/QuoteItem";
import { BBService } from "services";
import { compose } from "utils";
import { withData, withGeneralLayout, withLoadMore } from "hoc";

class Quotes extends React.Component {
  render() {
    const quotes = this.props.data;
    return (
      <>
        {quotes.map(({ id, ...data }) => (
          <QuoteItem key={id} {...data} />
        ))}
      </>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    debugger;
    if (this.props.data.length > prevProps.data.length) {
      const htmlElement = document.documentElement;
      return htmlElement.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      const htmlElement = document.documentElement;
      htmlElement.scrollTop = snapshot;
    }
  }
}

export default compose(withData(BBService.getAllQuotes), withGeneralLayout({ isGrid: false }), withLoadMore)(Quotes);
