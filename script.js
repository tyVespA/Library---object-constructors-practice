const addBookBtn = document.querySelector(".add-book");
let myLibrary = [];
let LatestBook;

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = readStatus;
}

// Book.prototype.info = function () {
//   console.log(
//     `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`
//   );
// };

function getBookInfo() {
  let title = prompt("Book title:");
  let author = prompt("Author name:");
  let pages = prompt("Number of pages:");
  let readStatus = prompt("Have you finished the book?");

  LatestBook = new Book(title, author, pages, readStatus);
  return LatestBook;
}

function addBookToLibrary() {
  getBookInfo();
  myLibrary.push(LatestBook);
  console.log(LatestBook);
}

addBookBtn.addEventListener("click", addBookToLibrary);
