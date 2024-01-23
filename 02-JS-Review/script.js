const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
const book = getBook(3);
book;
// const title = book.title;
// const author = book.author;

//object destructuring
const { author, title, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// rest operator and array destructuring
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

//spread operator on arrays

//before spread operator it will simply create a new array with 2 element  (genre array) and "epic-fantasy"
// const newGenres = [genres, "epic-fantasy"];
// newGenres;

// using spread operator will just create an array and all the elements to it.
const newGenres = ["epic-fantasy", ...genres];
newGenres;

//spread operator objects

const updateBook = {
  ...book,
  //adding a new property
  moviePublicationDate: " 2-2-2023",
  //overwriting an existing property
  pages: 1120,
};
updateBook;
console.log(updateBook);

//normal function

// function getYear(str) {
//   return str.split("-")[0];
// }
//arrow functions
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

//template literals

const summary = `The book ${title}  is written by the author ${author} consists of ${pages} pages and is published on ${getYear(
  publicationDate
)}  `;
summary;

// ternary operator

const pagesRange = pages > 1000 ? "over a thousand" : "less than one thousand ";
pagesRange;

// short circuting in AND / OR operator

console.log(true && "the book");
console.log(false && "The book");

// falsy values are 0 , '' , null , undefined
console.log("jonas" && "some string");
console.log(0 && "some string");

//OR operator
console.log(true || "some string");
console.log(false || "some string");

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

//console.log(book.reviews.librarything.reviewsCount || "no data"); // if the count is 0 it will show no data and we dont want that so we will use the nullish colasing operator which works similar to OR operator but will only return second value when the first value undefined or null
console.log(null ?? "the string");
console.log(0 ?? "the string");

//optional chaining

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;
}
console.log(getTotalReviewCount(book));
*/
//map function

/*
const books = getBooks();
books;
const titles = books.map((book) => book.title);
titles;

const essData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
essData;

// filter method
const longBookWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBookWithMovie;

//chaining filter methods and map
const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

//reduce method
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

//sort method

const x = [1, 2, 7, 4, 5, 8, 6];
const sorted = x.slice().sort((a, b) => b - a);
sorted;
x;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

//we usually create a function but here just for the demonstration purpose we'll create variables

// 1) Add new book object to the array
const newBook = {
  id: 6,
  title: " Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowlings",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete book object from the array

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;
// 2) Update book object from the array

const booksAfterUpdate = booksAfterAdd.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;
*/

// fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
//   return response.json().then((data) => console.log(data));
// });
// console.log("jonas");

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
}
getTodos();

console.log("user");
