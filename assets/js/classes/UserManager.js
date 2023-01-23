import { User } from './classes/Book.js';

class BookManager {
    #users;
    
    contructor(users){
        this.#users = [];
    }
    
    get users (){
        return this.#users;
    }
    
    set users (users){
        this.#users = users;
    }
    
    findAllUsers(){
        return this.#users;
    }
    
    findUserById(id){
        for(let i = 0; i < this.#users.length; i++){
            if(this.#user[i] === this.#user[i].id){
                return this.#user[i];
            }else{
                return 'null';
            }
        }
    }
    
    findUserByUsername(username){
        let usersNames = [];
        for(let i = 0; i < this.#users.length; i++){
            if(this.#user[i].title === title){
                return usersNames.push(this.#user[i]);
            }else{
                return null;
            }
        }
    }
    
    findUserByEmail(email){
        let usersEmail = [];
        for(let i = 0; i < this.#users.length; i++){
            if(this.#user[i].email === email){
                return usersEmail.push(this.#user[i]);
            }else{
                return null;
            }
        }
    }
    
    createUser(user){
        this.#user.push(user);
    }
    
    ddeleteUser(userId {
        newµUsersTab =[];
        for(let i = 0; i< this.#users.length; i++) {
            if(this.#books[i].id !== userId) {
                newUsersTab.push(#users[i]);
            }

            this.#users = newBooksTab;
    }


    editUser(user) {
        for(let i = 0; i< this.#users; i++) {
            if(this.#users[i].id === user.id) {
                this.#users[i] = user;
            }
        }
    }
    
    save(){
        let usersJSON = JSON.stringify(users);
        sessionStorage.setItem("userStorage",  usersJSON);
    }
    
    load(){
        let usersParse = JSON.parse(sessionStorage.getItem("userStorage",  usersJSON));
        
        for(let i = 0; i < usersParse.length; i++){
            let newUsersParse = JSON.parse(usersParse[i]);
            let newUsers = new User(newUsersParse.id, newUsersParse.username, newUsersParse.email, newUsersParse.password, newUsersParse.firstname, newUsersParse.lastname, newUsersParse.profileImage);
            usersParseSession.push(newUsers);
        }   
    }
    
    login(username, password){
        
    }
}

export { User };