import Author from "../models/Author.js";
import Category from "../models/Category.js";
import Book from "../models/Book.js";

//title, resume, summary, numberPages, isbn, author, category,  price

try {
  const author = new Author("Ana", "ana@gmail.com");
  const category = new Category("Design");
  const newBook = new Book(
    "Design UX/UI",
    "Esse livro é sobre Design UX/UI",
    "Sumário",
    50,
    "978-85-08-13196-9",
    author,
    category,
    50
  );
  console.log(`saved ${newBook.title}, ${newBook.resume}, ${newBook.summary}, ${newBook.numberPages}, ${newBook.isbn}, 
     ${newBook.author.name}, ${newBook.author.email}, ${newBook.category.name}, ${newBook.price}`);
} catch (err) {
  console.log(`${err}`);
}
