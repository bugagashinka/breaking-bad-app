const episodes = [
  {
    episode_id: 1,
    title: "Pilot",
    season: "1",
    air_date: "01-20-2008",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Krazy-8",
      "Bogdan Wolynetz",
    ],
    episode: "1",
    series: "Breaking Bad",
  },
  {
    episode_id: 2,
    title: "Cat's in the Bag...",
    season: "1",
    air_date: "01-27-2008",
    characters: ["Walter White", "Jesse Pinkman", "Skyler White", "Walter White Jr.", "Krazy-8"],
    episode: "2",
    series: "Breaking Bad",
  },
  {
    episode_id: 3,
    title: "...And the Bag's in the River",
    season: "1",
    air_date: "02-10-2008",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Krazy-8",
      "Gretchen Schwartz",
    ],
    episode: "3",
    series: "Breaking Bad",
  },
  {
    episode_id: 4,
    title: "Cancer Man",
    season: "1",
    air_date: "02-17-2008",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Ken Wins",
    ],
    episode: "4",
    series: "Breaking Bad",
  },
  {
    episode_id: 5,
    title: "Gray Matter",
    season: "1",
    air_date: "02-24-2008",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Elliott Schwarts",
      "Gretchen Swartz",
      "Badger",
    ],
    episode: "5",
    series: "Breaking Bad",
  },
  {
    episode_id: 6,
    title: "Crazy Handful of Nothin",
    season: "1",
    air_date: "03-02-2008",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Tuco Salamanca",
    ],
    episode: "6",
    series: "Breaking Bad",
  },
  {
    episode_id: 7,
    title: "A No-Rough-Stuff-Type Deal",
    season: " 1",
    air_date: "03-09-2008",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Tuco Salamanca",
    ],
    episode: "7",
    series: "Breaking Bad",
  },
  {
    episode_id: 8,
    title: "Seven-Thirty-Seven",
    season: "2",
    air_date: "03-08-2009",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Tuco Salamanca",
    ],
    episode: "1",
    series: "Breaking Bad",
  },
  {
    episode_id: 9,
    title: "Grilled",
    season: "2",
    air_date: "03-15-2009",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Tuco Salamanca",
      "Hector Salamanca",
    ],
    episode: "2",
    series: "Breaking Bad",
  },
  {
    episode_id: 10,
    title: "Bit by a Dead Bee",
    season: "2",
    air_date: "03-22-2009",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Hector Salamanca",
    ],
    episode: "3",
    series: "Breaking Bad",
  },
  {
    episode_id: 11,
    title: "Down",
    season: "2",
    air_date: "03-29-2009",
    characters: ["Walter White", "Jesse Pinkman", "Skyler White", "Walter White Jr."],
    episode: "4",
    series: "Breaking Bad",
  },
  {
    episode_id: 12,
    title: "Breakage",
    season: "2",
    air_date: "04-05-2009",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Jane Margolis",
      "Badger",
    ],
    episode: "5",
    series: "Breaking Bad",
  },
  {
    episode_id: 13,
    title: "Peekaboo",
    season: "2",
    air_date: "04-12-2009",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Marie Schrader",
      "Walter White Jr.",
      "Gretchen Schwartz",
    ],
    episode: "6",
    series: "Breaking Bad",
  },
  {
    episode_id: 14,
    title: "Negro y Azul",
    season: "2",
    air_date: "04-19-2009",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Tortuga",
      "Jane Margolis",
      "Ted Beneke",
    ],
    episode: "7",
    series: "Breaking Bad",
  },
  {
    episode_id: 15,
    title: "Better Call Saul",
    season: "2",
    air_date: "04-26-2009",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Saul Goodman",
      "Jane Margolis",
      "Badger",
    ],
    episode: "8",
    series: "Breaking Bad",
  },
  {
    episode_id: 16,
    title: "4 Days Out",
    season: "2",
    air_date: "05-03-2009",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Saul Goodman",
      "Jane Margolis",
    ],
    episode: "9",
    series: "Breaking Bad",
  },
  {
    episode_id: 17,
    title: "Over",
    season: "2",
    air_date: "05-10-2009",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Jane Margolis",
      "Ted Beneke",
    ],
    episode: "10",
    series: "Breaking Bad",
  },
  {
    episode_id: 18,
    title: "Mandala",
    season: "2",
    air_date: "05-17-2009",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Saul Goodman",
      "Gustavo Fring",
      "Jane Margolis",
      "Ted Beneke",
      "Donald Margolis",
      "Combo",
    ],
    episode: "11",
    series: "Breaking Bad",
  },
  {
    episode_id: 19,
    title: "Phoenix",
    season: "2",
    air_date: "05-24-2009",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Saul Goodman",
      "Jane Margolis",
      "Ted Beneke",
      "Donald Margolis",
    ],
    episode: "12",
    series: "Breaking Bad",
  },
  {
    episode_id: 20,
    title: "ABQ",
    season: "2",
    air_date: "05-31-2009",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Mike Erhmantraut",
      "Gustavo Fring",
      "Jane Margolis",
      "Donald Margolis",
    ],
    episode: "13",
    series: "Breaking Bad",
  },
  {
    episode_id: 21,
    title: "No Más",
    season: "3",
    air_date: "03-21-2010",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Gustavo Fring",
      "The cousins",
    ],
    episode: "1",
    series: "Breaking Bad",
  },
  {
    episode_id: 22,
    title: "Caballo sin Nombre",
    season: "3",
    air_date: "03-28-2010",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Gustavo Fring",
      "Saul Goodman",
      "Mike Ehrmantraut",
      "Hector Salamanca",
    ],
    episode: "2",
    series: "Breaking Bad",
  },
  {
    episode_id: 23,
    title: "IFT",
    season: "3",
    air_date: "04-04-2010",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Walter White Jr.",
      "Gustavo Fring",
      "Saul Goodman",
      "Hector Salamanca",
      "Ted Beneke",
    ],
    episode: "3",
    series: "Breaking Bad",
  },
  {
    episode_id: 24,
    title: "Green Light",
    season: "3",
    air_date: "04-11-2010",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Gustavo Fring",
      "Saul Goodman",
      "Mike Ehrmantraut",
      "Ted Beneke",
    ],
    episode: "4",
    series: "Breaking Bad",
  },
  {
    episode_id: 25,
    title: "Más",
    season: "3",
    air_date: "04-18-2010",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Gustavo Fring",
      "Saul Goodman",
      "Ted Beneke",
    ],
    episode: "5",
    series: "Breaking Bad",
  },
  {
    episode_id: 26,
    title: "Sunset",
    season: "3",
    air_date: "04-25-2010",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Gustavo Fring",
      "Saul Goodman",
      "Gale Boetticher",
      "The cousins",
    ],
    episode: "6",
    series: "Breaking Bad",
  },
  {
    episode_id: 27,
    title: "One Minute",
    season: "3",
    air_date: "05-02-2010",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Saul Goodman",
      "Hector Salamanca",
      "The cousins",
      "Gale Boetticher",
    ],
    episode: "7",
    series: "Breaking Bad",
  },
  {
    episode_id: 28,
    title: "I See You",
    season: "3",
    air_date: "05-09-2010",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Gustavo Fring",
      "Mike Ehrmantraut",
    ],
    episode: "8",
    series: "Breaking Bad",
  },
  {
    episode_id: 29,
    title: "Kafkaesque",
    season: "3",
    air_date: "05-16-2010",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Gustavo Fring",
      "Saul Goodman",
      "Ted Beneke",
    ],
    episode: "9",
    series: "Breaking Bad",
  },
  {
    episode_id: 30,
    title: "Fly",
    season: "3",
    air_date: "05-23-2010",
    characters: ["Walter White", "Jesse Pinkman", "a fly"],
    episode: "10",
    series: "Breaking Bad",
  },
  {
    episode_id: 31,
    title: "Abiquiu",
    season: "3",
    air_date: "05-30-2010",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Gustavo Fring",
      "Saul Goodman",
      "Jane Margolis",
    ],
    episode: "11",
    series: "Breaking Bad",
  },
  {
    episode_id: 32,
    title: "Half measures",
    season: "3",
    air_date: "06-06-2010",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Gustavo Fring",
      "Saul Goodman",
      "Mike Ehrmantraut",
      "Andrea Cantillo",
      "Victor",
    ],
    episode: "12",
    series: "Breaking Bad",
  },
  {
    episode_id: 33,
    title: "Full Measure",
    season: "3",
    air_date: "06-13-2010",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Walter White Jr.",
      "Gustavo Fring",
      "Saul Goodman",
      "Mike Ehrmantraut",
      "Gale Boetticher",
      "Victor",
    ],
    episode: "13",
    series: "Breaking Bad",
  },
  {
    episode_id: 34,
    title: "Box Cutter",
    season: "4",
    air_date: "07-17-2011",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Gustavo Fring",
      "Saul Goodman",
      "Mike Ehrmantraut",
      "Gale Boetticher",
      "Victor",
    ],
    episode: "1",
    series: "Breaking Bad",
  },
  {
    episode_id: 35,
    title: "Thirty-Eight Snub",
    season: "4",
    air_date: "07-24-2011",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Gustavo Fring",
      "Saul Goodman",
      "Mike Ehrmantraut",
      "Andrea Cantillo",
    ],
    episode: "2",
    series: "Breaking Bad",
  },
  {
    episode_id: 36,
    title: "Open House",
    season: "4",
    air_date: "07-31-2011",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Saul Goodman",
      "Bogdan Wolynetz",
    ],
    episode: "3",
    series: "Breaking Bad",
  },
  {
    episode_id: 37,
    title: "Bullet Points",
    season: "4",
    air_date: "08-07-2011",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "White White Jr.",
      "Gustavo Fring",
      "Saul Goodman",
      "Mike Ehrmantraut",
      "Gale Boetticher",
    ],
    episode: "4",
    series: "Breaking Bad",
  },
  {
    episode_id: 38,
    title: "Shotgun",
    season: "4",
    air_date: "08-14-2011",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Gustavo Fring",
      "Mike Ehrmantraut",
      "",
    ],
    episode: "5",
    series: "Breaking Bad",
  },
  {
    episode_id: 39,
    title: "Cornered",
    season: "4",
    air_date: "08-21-2011",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Walter White Jr.",
      "Gustavo Fring",
      "Mike Ehrmantraut",
      "Bogdan Wolynetz",
    ],
    episode: "6",
    series: "Breaking Bad",
  },
  {
    episode_id: 40,
    title: "Problem Dog",
    season: "4",
    air_date: "08-28-2011",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Gustavo Fring",
      "Saul Goodman",
      "Mike Ehrmantraut",
      "Gale Boetticher",
    ],
    episode: "7",
    series: "Breaking Bad",
  },
  {
    episode_id: 41,
    title: "Hermanos",
    season: "4",
    air_date: "09-04-2011",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Gustavo Fring",
      "Saul Goodman",
      "Mike Ehrmantraut",
      "Hector Salamanca",
      "Andrea Cantillo",
    ],
    episode: "8",
    series: "Breaking Bad",
  },
  {
    episode_id: 42,
    title: "Bug",
    season: "4",
    air_date: "09-11-2011",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Gustavo Fring",
      "Mike Ehrmantraut",
      "Ted Beneke",
    ],
    episode: "9",
    series: "Breaking Bad",
  },
  {
    episode_id: 43,
    title: "Salud",
    season: "4",
    air_date: "09-18-2011",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Walter White Jr.",
      "Gustavo Fring",
      "Saul Goodman",
      "Mike Ehrmantraut",
      "Ted Beneke",
      "Don Eladio",
    ],
    episode: "10",
    series: "Breaking Bad",
  },
  {
    episode_id: 44,
    title: "Crawl Space",
    season: "4",
    air_date: "09-25-2011",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Gustavo Fring",
      "Saul Goodman",
      "Mike Ehrmantraut",
      "Hector Salamanca",
      "Ted Beneke",
      "Andrea Cantillo",
    ],
    episode: "11",
    series: "Breaking Bad",
  },
  {
    episode_id: 45,
    title: "End Times",
    season: "4",
    air_date: "10-02-2011",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Gustavo Fring",
      "Saul Goodman",
      "Andrea Cantillo",
    ],
    episode: "12",
    series: "Breaking Bad",
  },
  {
    episode_id: 46,
    title: "Face Off",
    season: "4",
    air_date: "10-09-2011",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Gustavo Fring",
      "Saul Goodman",
      "",
    ],
    episode: "13",
    series: "Breaking Bad",
  },
  {
    episode_id: 47,
    title: "Live Free of Die",
    season: "5",
    air_date: "07-15-2012",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Walter White Jr.",
      "Saul Goodman",
      "Mike Ehrmantraut",
      "Ted Beneke",
    ],
    episode: "1",
    series: "Breaking Bad",
  },
  {
    episode_id: 48,
    title: "Madrigal",
    season: "5",
    air_date: "07-22-2012",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Walter White Jr.",
      "Saul Goodman",
      "Mike Ehrmantraut",
      "Lydia Rodarte-Quayle",
    ],
    episode: "2",
    series: "Breaking Bad",
  },
  {
    episode_id: 49,
    title: "Hazard Pay",
    season: "5",
    air_date: "07-29-2012",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Marie Schrader",
      "Walter White Jr.",
      "Saul Goodman",
      "Mike Ehrmantraut",
      "Badger",
      "Andrea Cantillo",
      "Todd Alquist",
    ],
    episode: "3",
    series: "Breaking Bad",
  },
  {
    episode_id: 50,
    title: "Fifty-One",
    season: "5",
    air_date: "08-05-2012",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Mike Ehrmantraut",
      "Lydia Rodarte-Quayle",
    ],
    episode: "4",
    series: "Breaking Bad",
  },
  {
    episode_id: 51,
    title: "Dead Freight",
    season: "5",
    air_date: "08-12-2012",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Mike Ehrmantraut",
      "Lydia Rodarte-Quayle",
      "Todd Alquist",
    ],
    episode: "5",
    series: "Breaking Bad",
  },
  {
    episode_id: 52,
    title: "Buyout",
    season: "5",
    air_date: "08-19-2012",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Saul Goodman",
      "Mike Ehrmantraut",
      "Todd Alquist",
    ],
    episode: "6",
    series: "Breaking Bad",
  },
  {
    episode_id: 53,
    title: "Say My Name",
    season: "5",
    air_date: "08-26-2012",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Saul Goodman",
      "Mike Ehrmantraut",
      "Todd Alquist",
    ],
    episode: "7",
    series: "Breaking Bad",
  },
  {
    episode_id: 54,
    title: "Gliding Over All",
    season: "5",
    air_date: "09-02-2012",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Saul Goodman",
      "Mike Ehrmantraut",
      "Lydia Rodarte-Quayle",
      "Todd Alquist",
    ],
    episode: "8",
    series: "Breaking Bad",
  },
  {
    episode_id: 55,
    title: "Blood Money",
    season: "5",
    air_date: "08-11-2013",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Saul Goodman",
      "Lydia Rodarte-Quayle",
      "Badger",
      "Skinny Pete",
    ],
    episode: "9",
    series: "Breaking Bad",
  },
  {
    episode_id: 56,
    title: "Buried",
    season: "5",
    air_date: "08-18-2013",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Saul Goodman",
      "Lydia Rodarte-Quayle",
      "Todd Alquist",
      "Jack Welker",
    ],
    episode: "10",
    series: "Breaking Bad",
  },
  {
    episode_id: 57,
    title: "Confessions",
    season: "5",
    air_date: "08-25-2013",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Saul Goodman",
      "Todd Alquist",
      "Jack Welker",
    ],
    episode: "11",
    series: "Breaking Bad",
  },
  {
    episode_id: 58,
    title: "Rabid Dog",
    season: "5",
    air_date: "09-01-2013",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Saul Goodman",
    ],
    episode: "12",
    series: "Breaking Bad",
  },
  {
    episode_id: 59,
    title: "To'hajilee",
    season: "5",
    air_date: "09-08-2013",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Saul Goodman",
      "Lydia Rodarte-Quayle",
      "Todd Alquist",
      "Andrea Cantillo",
      "Jack Welker",
    ],
    episode: "13",
    series: "Breaking Bad",
  },
  {
    episode_id: 60,
    title: "Ozymandias",
    season: "5",
    air_date: "09-15-2013",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Hank Schrader",
      "Marie Schrader",
      "Walter White Jr.",
      "Todd Alquist",
      "Jack Welker",
      "Steve Gomez",
    ],
    episode: "14",
    series: "Breaking Bad",
  },
  {
    episode_id: 61,
    title: "Granite State",
    season: "5",
    air_date: "09-22-2013",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Marie Schrader",
      "Saul Goodman",
      "Lydia Rodarte-Quayle",
      "Todd Alquist",
      "Jack Welker",
      "Andrea Cantillo",
      "Eliott Schwartz",
      "Gretchen Schwartz",
    ],
    episode: "15",
    series: "Breaking Bad",
  },
  {
    episode_id: 62,
    title: "Felina",
    season: "5",
    air_date: "09-29-2013",
    characters: [
      "Walter White",
      "Jesse Pinkman",
      "Skyler White",
      "Marie Schrader",
      "Walter White Jr.",
      "Lydia Rodarte-Quayle",
      "Todd Alquist",
      "Jack Welker",
      "Badger",
      "Skinny Pete",
      "Eliott Schwartz",
      "Gretchen Schwartz",
    ],
    episode: "16",
    series: "Breaking Bad",
  },
];

const characters = [
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

const quotes = [
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

export { quotes, episodes, characters };