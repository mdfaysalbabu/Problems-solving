type TBook = {
  title: string;
  author: string;
  year: number;
};

const books: TBook[] = [
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    year: 1945,
  },
  {
    title: "Sense and Sensibility",
    author: "Jane Austen",
    year: 1811,
  },
  {
    title: "The Beautiful and Damned",
    author: "F. Scott Fitzgerald",
    year: 1922,
  },
  {
    title: "Billy Budd, Sailor",
    author: "Herman Melville",
    year: 1924,
  },
  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    year: 1877,
  },
  {
    title: "Franny and Zooey",
    author: "J.D. Salinger",
    year: 1961,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
  },
  {
    title: "Island",
    author: "Aldous Huxley",
    year: 1962,
  },
];

const getBookTitlesArray = (books: TBook[]): string[] => {
  const bookTitles = books.map((book) => book.title);
  return bookTitles;
};

console.log(getBookTitlesArray(books));
