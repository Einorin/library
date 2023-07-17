let library = [];
let addBookBtn = document.querySelector('.btn');
addBookBtn.addEventListener('click',function(){
    let bookForm = document.querySelector('#bookForm');
    bookForm.style.display = 'block'
})

document.querySelector('#bookForm').addEventListener('submit',function(event){
    event.preventDefault();
    Book.addBookToLibrary()
    Book.showLibrary()
})



class Book{
  constructor(title,authors,pages,read){
    this.title = title;
    this.authors = authors;
    this.pages = pages;
    this.read = read;
  }
  
  static addBookToLibrary(){
    let title = document.querySelector("#title").value;
    let authors = document.querySelector("#authors").value;
    let pages = document.querySelector("#pages").value;
    let readCheckbox = document.querySelector("#read");
    let read = readCheckbox.checked ? 'Yes' : 'No';

    const newBook = new Book(title,authors,pages,read);
    library.push(newBook)
  }

  

  static showLibrary() {
    const tableBody = document.querySelector('.tableBody');
    const lastItem = library[library.length - 1]; 

    const row = document.createElement('tr');
    for (let key in lastItem) {
      if (lastItem.hasOwnProperty(key)) {
        const cell = document.createElement('td');
        cell.textContent = lastItem[key];
        row.appendChild(cell);
      }
    }

    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Del'
    deleteButton.addEventListener('click', ()=>{
      const rowIndex = Array.from(tableBody.children).indexOf(row);
      library.splice(rowIndex, 1)
      tableBody.removeChild(row);
    });

    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell)

    tableBody.appendChild(row);
  }
}








  