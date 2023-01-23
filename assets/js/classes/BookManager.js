import { Book } from './classes/Book.js';

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
            if(this.#book[i] === this.#book[i].id){
                return this.#book[i];
            }else{
                return 'null';
            }
        }
    }
    
    findBooksByTitle(title){
        let bookTitle = [];
        for(let i = 0; i < this.#books.length; i++){
            if(this.#book[i].title === title){
                return bookTitle.push(this.#book[i]);
            }else{
                return null;
            }
        }
    }
    
    findBooksByAuthor(author){
        let bookAuthor = [];
        for(let i = 0; i < this.#books.length; i++){
            if(this.#book[i].author === author){
                return bookAuthor.push(this.#book[i]);
            }else{
                return null;
            }
        }
    }
    
    findBooksByPublicationYear(year){
        let bookYear = [];
        for(let i = 0; i < this.#books.length; i++){
            if(this.#book[i].year === year){
                return bookYear.push(this.#book[i]);
            }else{
                return null;
            }
        }
    }
    
    createBook(book){
        let newBook = new Book(this.#books.id, this.#books.title, this.#books.author, this.#books.publicationDate, this.#books.totalPages, this.#books.excerpt, this.#books.coverImage);
        return newBook;
    }
    
    deleteBook(bookId){
        
    }
    
    editBook(book){
        
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