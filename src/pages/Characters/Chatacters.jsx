import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import List from "components/List";
import CharacterItem from "components/CharacterItem";
import stl from "./Characters.module.scss";

const charList = [
  {
    char_id: 1,
    name: "Walter White",
    birthday: "09-07-1958",
    occupation: ["High School Chemistry Teacher", "Meth King Pin"],
    img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
    status: "Presumed dead",
    nickname: "Heisenberg",
    appearance: [1, 2, 3, 4, 5],
    portrayed: "Bryan Cranston",
    category: "Breaking Bad",
    better_call_saul_appearance: [],
  },
  {
    char_id: 2,
    name: "Jesse Pinkman",
    birthday: "09-24-1984",
    occupation: ["Meth Dealer"],
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg",
    status: "Alive",
    nickname: "Cap n' Cook",
    appearance: [1, 2, 3, 4, 5],
    portrayed: "Aaron Paul",
    category: "Breaking Bad",
    better_call_saul_appearance: [],
  },
  {
    char_id: 3,
    name: "Skyler White",
    birthday: "08-11-1970",
    occupation: ["House wife", "Book Keeper", "Car Wash Manager", "Taxi Dispatcher"],
    img: "https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg",
    status: "Alive",
    nickname: "Sky",
    appearance: [1, 2, 3, 4, 5],
    portrayed: "Anna Gunn",
    category: "Breaking Bad",
    better_call_saul_appearance: [],
  },
  {
    char_id: 4,
    name: "Walter White Jr.",
    birthday: "07-08-1993",
    occupation: ["Teenager"],
    img:
      "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
    status: "Alive",
    nickname: "Flynn",
    appearance: [1, 2, 3, 4, 5],
    portrayed: "RJ Mitte",
    category: "Breaking Bad",
    better_call_saul_appearance: [],
  },
  {
    char_id: 5,
    name: "Henry Schrader",
    birthday: "Unknown",
    occupation: ["DEA Agent"],
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Hank_Schrader2.jpg/220px-Hank_Schrader2.jpg",
    status: "Deceased",
    nickname: "Hank",
    appearance: [1, 2, 3, 4, 5],
    portrayed: "Dean Norris",
    category: "Breaking Bad",
    better_call_saul_appearance: [],
  },
  {
    char_id: 6,
    name: "Walter White",
    birthday: "09-07-1958",
    occupation: ["High School Chemistry Teacher", "Meth King Pin"],
    img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
    status: "Presumed dead",
    nickname: "Heisenberg",
    appearance: [1, 2, 3, 4, 5],
    portrayed: "Bryan Cranston",
    category: "Breaking Bad",
    better_call_saul_appearance: [],
  },
  {
    char_id: 7,
    name: "Jesse Pinkman",
    birthday: "09-24-1984",
    occupation: ["Meth Dealer"],
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg",
    status: "Alive",
    nickname: "Cap n' Cook",
    appearance: [1, 2, 3, 4, 5],
    portrayed: "Aaron Paul",
    category: "Breaking Bad",
    better_call_saul_appearance: [],
  },
  {
    char_id: 8,
    name: "Skyler White",
    birthday: "08-11-1970",
    occupation: ["House wife", "Book Keeper", "Car Wash Manager", "Taxi Dispatcher"],
    img: "https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg",
    status: "Alive",
    nickname: "Sky",
    appearance: [1, 2, 3, 4, 5],
    portrayed: "Anna Gunn",
    category: "Breaking Bad",
    better_call_saul_appearance: [],
  },
];

const Characters = () => {
  const characters = charList.map((charData) => <CharacterItem key={charData.char_id} data={charData} />);
  return (
    <section className="wrapper">
      <Header />
      <section className="content">
        <List>{characters}</List>
      </section>
      <Footer />
    </section>
  );
};
export default Characters;
