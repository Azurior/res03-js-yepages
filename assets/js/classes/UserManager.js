import { User } from './User.js';

class UserManager {
    #users;
    
    constructor(users = []){
        this.#users = users;
        console.log(this);
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
            if(this.#users[i].id === id){
                return this.#users[i];
            }else{
                return 'null';
            }
        }
    }
    
    findUserByUsername(username){
        let usersNames = [];
        for(let i = 0; i < this.#users.length; i++){
            if(this.#users[i].username === username){
                return usersNames.push(this.#users[i]);
            }else{
                return null;
            }
        }
    }
    
    findUserByEmail(email){
        let usersEmail = [];
        for(let i = 0; i < this.#users.length; i++){
            if(this.#users[i].email === email){
                return usersEmail.push(this.#users[i]);
            }else{
                return null;
            }
        }
    }
    
    createUser(user){
        
        let password = document.querySelector("body section section:nth-of-type(2) form fieldset:nth-of-type(3) input");
        let confPassword = document.querySelector("body section section:nth-of-type(2) form fieldset:nth-of-type(4) input");
        let p = document.createElement("p");
        for(let i = 0; i < this.#users.length; i++){
            
            if(this.#users.email === this.users.email[i]){
                
                password.appendChild(p);
                p.setAttribute("class", "red");
                p.createTextNode("Cet email existe déjà");
            }else if(password !== confPassword){
                
                let p = document.createElement("p");
                confPassword.appendChild(p);
                p.setAttribute("class", "red");
                p.createTextNode("Vos mots de passe ne correspondent pas !");
                
            }else {
                this.#users.push(user);
            }
        }
        
    }
    
    ddeleteUser(userId){
        newµUsersTab =[];
        for(let i = 0; i< this.#users.length; i++) {
            if(this.#users[i].id !== userId) {
                newUsersTab.push(this.#users[i]);
            }

            this.#users = newBooksTab;
        }
    }


    editUser(user){
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

export { UserManager };