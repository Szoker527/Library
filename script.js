const inputBook = document.querySelectorAll(".input-book input");
const formButton = document.getElementById("submit");
const testButton = document.getElementById("test");
const showBook = document.querySelector(".title");
const showInput = document.querySelectorAll(".book-card");
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
    showBook.textContent = "WOW";
  // do stuff here
}

function showBookArray(myLibrary) {

}

testButton.addEventListener("click", () => {
    myLibrary.forEach(book => {
        console.log(book)
    })
})