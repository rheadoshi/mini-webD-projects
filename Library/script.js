const myLib = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLib.push(book);
    displayBooks();
}

function displayBooks() {
    const libraryDiv = document.querySelector('.content');
    libraryDiv.innerHTML = ''; // Clear previous content
    myLib.forEach((book, index) => createCard(book, index));
}

function createCard(book, index) {
    const libraryDiv = document.querySelector('.content');
    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.innerHTML = `
        <h4>${book.title}</h4>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Read:</strong> ${book.read ? 'Yes' : 'No'}</p>
    `;
    libraryDiv.appendChild(newCard);
}

function toggleRead(index) {
    myLib[index].read = !myLib[index].read;
    displayBooks();
}

// Dialog functionality
const newBookBtn = document.querySelector('#NewBookBtn');
const bookDialog = document.querySelector('#bookDialog');
const cancelBtn = document.querySelector('#cancelBtn');
const bookForm = document.querySelector('#bookForm');

newBookBtn.addEventListener('click', () => {
    bookDialog.showModal();
});

cancelBtn.addEventListener('click', () => {
    bookDialog.close();
});

bookForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page refresh
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;
    addBookToLibrary(title, author, pages, read);
    bookForm.reset();
    bookDialog.close();
});

// Example books
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, true);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, false);
