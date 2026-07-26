export type BookStatus =
  "currently-reading" | "finished" | "want-to-read" | "abandoned";

export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  coverUrl: string;
  status: BookStatus;
  thoughts: string;
  takeaways: string[];
  isbn: string;
  language: string;
}

export const books: Book[] = [
  {
    id: "9",
    title: "No Longer Human",
    author: "Osamu Dazai",
    year: 1948,
    coverUrl:
      "https://img.wook.pt/images/no-longer-human-osamu-dazai/MXwxNTIyNTk2OXwxMDcxMzczMXwxNzc3MDMyNDkwMDAwfHdlYnA=/550x",
    status: "want-to-read",
    thoughts: "",
    takeaways: [],
    isbn: "9780811204811",
    language: "English",
  },
  {
    id: "8",
    title: "The Figure in the Carpet",
    author: "Henry James",
    year: 1896,
    coverUrl:
      "https://img.wook.pt/images/the-figure-in-the-carpet-henry-james/MXwxNjAxNzg2N3wxMTU2MDg0OXwxNzc4MjI0Mjc1MDAwfHdlYnA=/550x",
    status: "currently-reading",
    thoughts: "",
    takeaways: [],
    isbn: "9780141397580",
    language: "English",
  },
  {
    id: "7",
    title: "Botchan",
    author: "Natsume Soseki",
    year: 1926,
    coverUrl:
      "https://img.wook.pt/images/botchan-natsume-soseki/MXwzMTkzNTcwOHwyODQwMDcwOHwxNzc4MjI3MDMzMDAwfHdlYnA=/550x",
    status: "finished",
    thoughts: "",
    takeaways: [],
    isbn: "9780451205360",
    language: "Portuguese",
  },
  {
    id: "1",
    title: "Zero to One. Notes on Start Ups, or How to Build the Future",
    author: "Peter Thiel",
    year: 2015,
    coverUrl: "https://m.media-amazon.com/images/I/71uAI28kJuL._SY342_.jpg",
    status: "finished",
    thoughts: "",
    takeaways: [],
    isbn: "9780753555200",
    language: "English",
  },
  {
    id: "2",
    title: "The Richest Man in Babylon",
    author: "George S. Clason",
    year: 1926,
    coverUrl:
      "https://www.vrbeautyconsulting.com/wp-content/uploads/2022/11/richest_man_in_babylon.jpg",
    status: "finished",
    thoughts: "",
    takeaways: [],
    isbn: "9780451205360",
    language: "English",
  },
  {
    id: "3",
    title:
      "O Livro dos Fazedores: Toda a experiência dos maiores empreendedores de Portugal",
    author: "Mariana Barbosa",
    year: 2018,
    coverUrl:
      "https://img.wook.pt/images/o-livro-dos-fazedores-mariana-barbosa/MXwyMjI4MzE1MnwxODE3ODgwMXwxNzc3MDM2MTE3MDAwfHdlYnA=/550x",
    status: "finished",
    thoughts: "",
    takeaways: [],
    isbn: "9789898853424",
    language: "Portuguese",
  },
  {
    id: "4",
    title: "My Letter to My Father",
    author: "Franz Kafka",
    year: 1919,
    coverUrl:
      "https://img.wook.pt/images/carta-ao-pai-franz-kafka/MXwzMDc5NjI5MHwyNzMwMTc1MHwxNzc4MjI3MzI2MDAwfHdlYnA=/550x",
    status: "finished",
    thoughts: "",
    takeaways: [],
    isbn: "9789895832071",
    language: "Portuguese",
  },
  {
    id: "5",
    title: "White Nights",
    author: "Fiódor Dostoiévski",
    year: 1848,
    coverUrl:
      "https://img.wook.pt/images/white-nights-fiodor-dostoievski/MXwxNjk0MTk0N3wxMjU2MjYxMnwxNzc4MjI0MDAyMDAwfHdlYnA=/550x",
    status: "finished",
    thoughts: "",
    takeaways: [],
    isbn: "9780241252086",
    language: "English",
  },
  {
    id: "6",
    title: "Warren Buffett And The Interpretation Of Financial Statements",
    author: "David Clark & Mary Buffett",
    year: 2011,
    coverUrl:
      "https://img.wook.pt/images/warren-buffett-and-the-interpretation-of-financial-statements-david-clark/MXw5OTQ4Mjg5fDU1MzY2NTZ8MTc3NzAyODIxNzAwMHx3ZWJw/550x",
    status: "abandoned",
    thoughts: "",
    takeaways: [],
    isbn: "9781849833196",
    language: "English",
  },
];
