const inputBook = document.querySelectorAll(".input-book input");
const formButton = document.getElementById("submit");
const testButton = document.getElementById("test");
const showInput = document.querySelectorAll(".book-card");
const displayBook = document.querySelector(".display-library");
const array = [];

let title;
let author;
let pages; 
let isread;

    formButton.addEventListener("click", () => console.log(inputBook))

    formButton.addEventListener("click", () => {
        inputBook.forEach(input => {
            if (input.id === "title") {
                title = input.value
            }
            else if (input.id === "author") {
                author = input.value
            }
            else if (input.id === "pages") {
                pages = input.value
            }
            else if (input.id === "readit") {
                isread = input.value
            }
            console.log(input.value)
            })
            addBookToLibrary(title, author, pages, isread);
    })


const myLibrary = [];

function Book(title, author, pages, isread) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isread = isread
  // the constructor...
}

function addBookToLibrary(title, author, pages, isread) {
    myLibrary.push( new Book(title, author, pages, isread))
    console.log(myLibrary)
  // do stuff here
}

formButton.addEventListener("click", () => {
    let i = 0
    myLibrary.forEach(book => {
        console.log(book)
        createBook(book)
    })
})

function createBook(book) {
    const newBook = document.createElement("div");
    const newTitle = document.createElement("div");
    const newAuthor = document.createElement("div");
    const newPages = document.createElement("div");
    const newIsRead = document.createElement("div");
    newBook.classList.add("added-book");
    
    newTitle.textContent = book.title;
    newAuthor.textContent = book.author;
    newPages.textContent = book.pages;
    newIsRead.textContent = book.isread;

    newBook.appendChild(newTitle)
    newBook.appendChild(newAuthor)
    newBook.appendChild(newPages)
    newBook.appendChild(newIsRead)
    displayBook.appendChild(newBook)
}


// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("open-modal");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.classList.add("modal-flex");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.classList.remove("modal-flex");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove("modal-flex");
  }
}