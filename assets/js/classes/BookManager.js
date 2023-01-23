import { Book } from './Book.js';

class BookManager {
    #books;
    
    contructor(books){
        this.#books = [];
    }
    
    get books (){
        return this.#books;
    }
    
    set books (books){
        this.#books = books;
    }
    
    findAllBooks(){
        return this.#books;
    }
    
    findBookById(id){
        for(let i = 0; i < this.#books.length; i++){
            if(this.#books[i].id === id){
                return this.#books[i];
            }else{
                return 'null';
            }
        }
    }
    
    findBooksByTitle(title){
        let bookTitle = [];
        for(let i = 0; i < this.#books.length; i++){
            if(this.#books[i].title === title){
                return bookTitle.push(this.#books[i]);
            }else{
                return null;
            }
        }
    }
    
    findBooksByAuthor(author){
        let bookAuthor = [];
        for(let i = 0; i < this.#books.length; i++){
            if(this.#books[i].author === author){
                return bookAuthor.push(this.#books[i]);
            }else{
                return null;
            }
        }
    }
    
    findBooksByPublicationYear(year){
        let bookYear = [];
        for(let i = 0; i < this.#books.length; i++){
            if(this.#books[i].year === year){
                return bookYear.push(this.#books[i]);
            }else{
                return null;
            }
        }
    }
    
    createBook(book){
        this.#books.push(book);
    }
    
    deleteBook(bookId) {
        newBooksTab =[];
        for(let i = 0; i< this.#books.length; i++) {
            if(this.#books[i].id !== bookId) {
                newBooksTab.push(this.#books[i]);
            }

            this.#books = newBooksTab;
        }
    }


    editBook(book) {
        for(let i = 0; i< this.#books; i++) {
            if(this.#books[i].id === book.id) {
                this.#books[i] = book;
            }
        }
    }
    
    save(){
        let booksJSON = JSON.stringify(this.#books);
        sessionStorage.setItem("booksStorage", booksJSON);
    }
    
    load(){
        let booksParse = JSON.parse(sessionStorage.getItem("booksStorage"));
        
        for(let j = 0; j < booksParse.length; j++){
            let newBookParse = JSON.parse(booksParse[j]);
            let newBook = new Book(newBookParse.id, newBookParse.title, newBookParse.author, newBookParse.publicationDate, newBookParse.totalPages, newBookParse.excerpt, newBookParse.coverImage);
            booksParseSession.push(this.#books);
        }
    }
}

export { BookManager };