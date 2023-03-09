let myLibrary = [];
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const page = document.querySelector("#page");
const read = document.querySelector("#read");
const library = document.querySelector(".library");

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages + " pages"
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

// Book.prototype.sayInfo = function () {
//     return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`  
// }

function addBook(){
    let book = new Book(title.value, author.value, page.value, read.checked)
    const bookCard = document.createElement("div")
    bookCard.setAttribute("class","book")
    library.appendChild(bookCard)
    // addBookToLibrary(bookCard)
    for(let b in book){
        if(typeof book[b] == "boolean")
            continue;
        const text = document.createElement("h2")
        text.textContent = `${b}: ${book[b]}`
        bookCard.appendChild(text)
    }
    //add buttons div
    const btns = document.createElement("div")
    btns.setAttribute("class","btns")
    bookCard.appendChild(btns)
    //add 2 new button
    const readBtn = document.createElement("button")
    const removeBtn= document.createElement("button");
    //set attribute 
    readBtn.setAttribute("class", `changeRead ${read.checked ? "read" : "notread"}`)
    readBtn.setAttribute("onclick", "changeRead(event)")
    removeBtn.setAttribute("onclick", `removeCard(event)`)
    removeBtn.setAttribute("class", "remove")
    removeBtn.setAttribute("onclick", `removeCard(event)`)
    readBtn.textContent = read.checked ? "read" : "Not Read"
    removeBtn.textContent = "Remove"
    btns.appendChild(readBtn)
    btns.appendChild(removeBtn)
}

function changeRead(e){
    const classes = Object.values(e.target.classList)
    if(classes.includes("read")){
        e.target.textContent = "Not Read"
    } else {
        e.target.textContent = "Read" 
    }
    e.target.classList.toggle("read")
    e.target.classList.toggle("notread")
}

function removeCard(e){
    e.target.parentElement.parentElement.remove();
}
