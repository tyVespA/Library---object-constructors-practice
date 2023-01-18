const addBookBtn = document.querySelector(".add-book-btn");
const submitBookBtn = document.querySelector("#submit-book");
const modal = document.querySelector(".modal");
const booksGrid = document.querySelector(".books-grid");

let myLibrary = [];
let LatestBook;
let darkOverlay;

// let title;
// let author;
// let pages;
// let readStatus;

addBookBtn.addEventListener("click", () => {
  modal.classList.toggle("active");
  darkOverlay = document.createElement("div");
  darkOverlay.classList.add("darkened");
  document.body.appendChild(darkOverlay);
});

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = readStatus;
}

Book.prototype.toggleReadStatus = function () {
  if (this.read == "Yes") {
    this.read = "No";
  } else {
    this.read = "Yes";
  }
};

function getBookInfo() {
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  readSelected = document.getElementById("read-status");
  readStatus = readSelected.options[readSelected.selectedIndex].text;

  return (LatestBook = new Book(title, author, pages, readStatus));
}

function addBookToLibrary() {
  getBookInfo();
  myLibrary.push(LatestBook);
  return myLibrary;
}

function displayLatestBook(myLibrary) {
  for (let book of myLibrary) {
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

    const printedReadStatus = document.createElement("button");
    bookDiv.appendChild(printedReadStatus);
    printedReadStatus.style.cssText = "margin-top: 10px";
    changeReadStatusColor(book.read);
    printedReadStatus.textContent = "Read: " + book.read;
    printedReadStatus.addEventListener("click", () => {
      book.toggleReadStatus();
      changeReadStatusColor(book.read);
      printedReadStatus.textContent = "Read: " + book.read;
    });

    const deleteBookBtn = document.createElement("button");
    bookDiv.appendChild(deleteBookBtn);
    deleteBookBtn.textContent = "Delete";
    deleteBookBtn.addEventListener("click", () => {
      const currentArrayIndex = myLibrary.indexOf(book);
      myLibrary.splice(currentArrayIndex, 1);
      booksGrid.replaceChildren();
      displayLatestBook(myLibrary);
    });
    function changeReadStatusColor(read) {
      if (read == "Yes") {
        printedReadStatus.style.backgroundColor = "#1ed41e";
      } else {
        printedReadStatus.style.backgroundColor = "#ec3d3d";
      }
    }
  }
}

submitBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("active");
  booksGrid.replaceChildren();
  addBookToLibrary();
  displayLatestBook(myLibrary);
  document.body.removeChild(darkOverlay);
});
