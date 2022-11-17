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

function showBookArray(myLibrary) {

}

testButton.addEventListener("click", () => {
    // const newBook = document.createElement("div");
    // const newTitle = document.createElement("div");
    // const newAuthor = document.createElement("div");
    // const newPages = document.createElement("div");
    // const newIsRead = document.createElement("div");
    let i = 0
    myLibrary.forEach(book => {
        console.log(book)
        createBook(book)
    })
    // newBook.appendChild(newTitle)
    // newBook.appendChild(newAuthor)
    // newBook.appendChild(newPages)
    // newBook.appendChild(newIsRead)
    // displayBook.appendChild(newBook)
})

function createBook(book) {
    const newBook = document.createElement("div");
    newBook.classList.add("added-book");
    const newTitle = document.createElement("div");
    const newAuthor = document.createElement("div");
    const newPages = document.createElement("div");
    const newIsRead = document.createElement("div");
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