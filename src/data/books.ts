export type BookStatus = "currently-reading" | "finished" | "want-to-read";

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
}

export const books: Book[] = [
    {
        id: "1",
        title: "Zero to One. Notes on Start Ups, or How to Build the Future",
        author: "Peter Thiel",
        year: 2015,
        coverUrl: "https://m.media-amazon.com/images/I/71uAI28kJuL._SY342_.jpg",
        status: "finished",
        thoughts: "",
        takeaways: [
            "Teste"
        ],
        isbn: "9780753555200"
    }/* ,
    {
        id: "2",
        title: "The Richest Man in Babylon"
    },
    {
        id: "3",
        title: "O Livro dos Fazedores"
    },
    {
        id: "4",
        title: "My Letter to My Father"
    },
    {
        id: "5",
        title: "White Nights"
    },
    {
        id: "6",
        title: "Warren Buffett And The Interpretation Of Financial Statements"
    },
    {
        id: 7,
        title: "Botchan"
    } */
]