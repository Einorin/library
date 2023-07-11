let library = [];

function Book(title,authors,pages,readInfo){
    this.title = title;
    this.authors = authors;
    this.pages = pages;
    this.readInfo = readInfo;
}

Book.prototype.info = function(){
    return `${this.title} by ${this.authors}, ${this.pages} pages, ${this.readInfo}`
}


function addBook(){
    const book1 = new Book("DD1", "Abel", 999, "Read");
    library.push(book1)
}

const addBookBtn = document.querySelector('.btn');
addBookBtn.addEventListener('click',() =>{
    addBook();
})
function showLibrary(){
    const tableBody = document.querySelector('.tableBody')
    for(let item of library){
        const row = document.createElement('tr')
        for(let key in item){
            if(item.hasOwnProperty(key)){
                const cell = document.createElement('td');
                cell.textContent = item[key];
                row.appendChild(cell);
            }
        }
        tableBody.appendChild(row);
    }
}