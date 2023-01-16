const addBookBtn = document.querySelector(".add-book");
const submitBookBtn = document.querySelector("#submit-book");
const modal = document.querySelector(".modal");
let myLibrary = [];
let LatestBook;

let title;
let author;
let pages;
let readStatus;

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

  LatestBook = new Book(title, author, pages, readStatus);
  return LatestBook;
}

function addBookToLibrary() {
  getBookInfo();
  myLibrary.push(LatestBook);
  console.log(LatestBook);
}

addBookBtn.addEventListener("click", () => {
  modal.classList.toggle("active");
  // addBookToLibrary();
});

submitBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("active");
  getBookInfo();
  myLibrary.push(LatestBook);
  console.log(myLibrary);
});
