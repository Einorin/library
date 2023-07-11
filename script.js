let library = [];

function Book(title,authors,pages,read){
    this.title = title;
    this.authors = authors;
    this.pages = pages;
    this.read = read;
}

let addBookBtn = document.querySelector('.btn');
addBookBtn.addEventListener('click',function(){
    let bookForm = document.querySelector('#bookForm');
    bookForm.style.display = 'block'
    console.log(bookForm)
})
function addBookToLibrary(){
    let title = document.querySelector("#title").value;
    let authors = document.querySelector("#authors").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;

    const newBook = new Book(title,authors,pages,read);
    library.push(newBook)
    console.log(library)
}
document.querySelector('#bookForm').addEventListener('submit',function(event){
    event.preventDefault();
    addBookToLibrary()
    showLibrary()
})

function showLibrary() {
    const tableBody = document.querySelector('.tableBody');
    const lastItem = library[library.length - 1]; // Retrieve the last element
  
    const row = document.createElement('tr');
    for (let key in lastItem) {
      if (lastItem.hasOwnProperty(key)) {
        const cell = document.createElement('td');
        cell.textContent = lastItem[key];
        row.appendChild(cell);
      }
    }
    tableBody.appendChild(row);
  }
  