// Display
let close = document.getElementById("close");
let addScreen = document.getElementById("add-screen");
let add = document.getElementById("add");
const deleteButtons = document.querySelectorAll(".delete");
let container = document.querySelector(".cards");

//Form Inputs
let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let pagesInput = document.getElementById("pages");
let addBookButton = document.getElementById("add-book");

//Functions
deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.remove();
    })
});

close.addEventListener('click', () => {
    addScreen.style.display = "none";
});
add.addEventListener('click', () => {
    addScreen.style.display = "flex";
});

addBookButton.addEventListener('click', function() {
    // Get values of inputs
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    if (title == "" || author == "" || pages == "" ) {
        alert("Please fill out all fields");
        return;     // Doesn't Continute the rest of function
    }
    let newBook = document.createElement("div");
    newBook.classList.add("card");
    newBook.innerHTML = `<div class="delete">X</div>
                <p class="title"><b>Title:</b> ${title}</p>
                <p class="author"><b>Author:</b> ${author}</p>
                <p class="pages"><b>Pages:</b> ${pages}</p>
                <div class="check">
                    <p class="read">Not Read</p>
                    <input class="checkbox" type="checkbox">
                </div>`;
    container.appendChild(newBook);
    // Remove display and refresh inputs
    addScreen.style.display = "none";
    title.value = "";
    author.value = "";
    pages.value = "";
    // Delete button is made after DOM, so it needs to be expressed again
    let deleteButton = newBook.querySelector(".delete");
    deleteButton.addEventListener('click', function() {
        this.parentElement.remove();
    })
})