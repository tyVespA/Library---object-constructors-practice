const addBookBtn = document.querySelector(".add-book");
const submitBookBtn = document.querySelector("#submit-book");
const modal = document.querySelector(".modal");
const booksGrid = document.querySelector(".books-grid");
let myLibrary = [];
let LatestBook;

let title;
let author;
let pages;
let readStatus;

addBookBtn.addEventListener("click", () => {
  modal.classList.toggle("active");
  // addBookToLibrary();
});

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
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  readStatus = document.getElementById("read-status").value;

  return (LatestBook = new Book(title, author, pages, readStatus));
}

function addBookToLibrary() {
  getBookInfo();
  myLibrary.push(LatestBook);
  return myLibrary;
}

function displayLatestBook(myLibrary) {
  for (let book of myLibrary) {
    // booksGrid.removeChild(bookDiv);
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    booksGrid.appendChild(bookDiv);
    const printedTitle = document.createElement("p");
    bookDiv.appendChild(printedTitle);
    printedTitle.textContent = "Title: " + book.title;

    const printedAuthor = document.createElement("p");
    bookDiv.appendChild(printedAuthor);
    printedAuthor.textContent = "Author: " + book.author;

    const printedPages = document.createElement("p");
    bookDiv.appendChild(printedPages);
    printedPages.textContent = "Pages: " + book.pages;
  }
}

submitBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("active");
  booksGrid.replaceChildren();
  addBookToLibrary();
  displayLatestBook(myLibrary);
  console.log(myLibrary);
});
