import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import QuoteItem from "components/QuoteItem";
import stl from "./Quotes.module.scss";
import classNames from "classnames";

const data = [
  {
    quote_id: 1,
    quote: "I am not in danger, Skyler. I am the danger!",
    author: "Walter White",
    series: "Breaking Bad",
  },
  { quote_id: 2, quote: "Stay out of my territory.", author: "Walter White", series: "Breaking Bad" },
  { quote_id: 3, quote: "IFT", author: "Skyler White", series: "Breaking Bad" },
  {
    quote_id: 4,
    quote:
      "I watched Jane die. I was there. And I watched her die. I watched her overdose and choke to death. I could have saved her. But I didn’t.",
    author: "Walter White",
    series: "Breaking Bad",
  },
  { quote_id: 5, quote: "Say my name.", author: "Walter White", series: "Breaking Bad" },
  {
    quote_id: 6,
    quote: "Congratulations, you’ve just left your family a second-hand Subaru.",
    author: "Saul Goodman",
    series: "Breaking Bad",
  },
  {
    quote_id: 7,
    quote: "Yeah, you do seem to have a little s*** creek action going... You know, FYI, you can buy a paddle.",
    author: "Saul Goodman",
    series: "Breaking Bad",
  },
  { quote_id: 8, quote: "Tread lightly.", author: "Walter White", series: "Breaking Bad" },
  { quote_id: 9, quote: "Funyuns are awesome.", author: "Jesse Pinkman", series: "Breaking Bad" },
  { quote_id: 10, quote: "Ooooooh, wire.", author: "Jesse Pinkman", series: "Breaking Bad" },
  { quote_id: 11, quote: "A robot?!", author: "Jesse Pinkman", series: "Breaking Bad" },
  {
    quote_id: 12,
    quote: "What good is being an outlaw when you have responsibilities.",
    author: "Jesse Pinkman",
    series: "Breaking Bad",
  },
  {
    quote_id: 13,
    quote: "You forgot your ice trays! YOU'RE GONNA NEED THE ICE TRAYS!",
    author: "Jesse Pinkman",
    series: "Breaking Bad",
  },
  {
    quote_id: 14,
    quote:
      "Yeah, and thanks, Daddy Warbucks, but that was before my housing situation went completely testicular on me, okay?",
    author: "Jesse Pinkman",
    series: "Breaking Bad",
  },
  {
    quote_id: 15,
    quote: "How am I supposed to live here now, huh? My whole house smells like toe cheese and dry cleaning.",
    author: "Jesse Pinkman",
    series: "Breaking Bad",
  },
  {
    quote_id: 16,
    quote: "I'm a blow fish! Yeah, Blow fishin' this up!",
    author: "Jesse Pinkman",
    series: "Breaking Bad",
  },
  { quote_id: 17, quote: "Yeah, totally Kafkaesque", author: "Jesse Pinkman", series: "Breaking Bad" },
  {
    quote_id: 18,
    quote: "We make poison for people who don’t care. We probably have the most unpicky customers in the world.",
    author: "Jesse Pinkman",
    series: "Breaking Bad",
  },
  {
    quote_id: 19,
    quote: "You don’t need a criminal lawyer. You need a criminal lawyer",
    author: "Jesse Pinkman",
    series: "Breaking Bad",
  },
  { quote_id: 20, quote: "Oh well, heil Hitler, b****!", author: "Jesse Pinkman", series: "Breaking Bad" },
  { quote_id: 21, quote: "Yeah, science!", author: "Jesse Pinkman", series: "Breaking Bad" },
  { quote_id: 22, quote: "Yeah, b****! Magnets!", author: "Jesse Pinkman", series: "Breaking Bad" },
  {
    quote_id: 23,
    quote: "Yo 148, 3-to-the-3-to-the-6-to-the-9. Representin’ the ABQ. What up, biatch? Leave it at the tone!",
    author: "Jesse Pinkman",
    series: "Breaking Bad",
  },
];

const Quotes = () => {
  const contentSectionStyles = classNames("content", stl.content_indent);
  const quotes = data.map(({ quote_id, ...data }) => <QuoteItem key={quote_id} id={quote_id} {...data} />);
  return (
    <section className="wrapper">
      <Header />
      <section className={contentSectionStyles}>
        <div className="container">{quotes}</div>
      </section>
      <Footer />
    </section>
  );
};
export default Quotes;
