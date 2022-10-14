const inputBook = document.querySelectorAll(".input-book input")
const formButton = document.getElementById("submit");
const showBook = document.getElementsByClassName("show-book")
const array = [];

let title;
let author;
let pages; 
let isread;

    formButton.addEventListener("click", () => console.log(inputBook))

    formButton.addEventListener("click", () => {
        inputBook.forEach(input => {
            if (!title) {
                title = input.value
            }
            else if (!author) {
                author = input.value
            }
            else if (!pages) {
                pages = input.value
            }
            else if (!isread) {
                isread = input.value
            }
            console.log(input.value)
            })
            addBookToLibrary(title, author, pages, isread);
    })


let myLibrary = [];

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
    showBook.textContent = myLibrary[0];
  // do stuff here
}