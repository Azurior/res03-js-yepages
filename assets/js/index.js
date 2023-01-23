import { User } from './classes/User.js';
import { Book } from './classes/Book.js';
import { UserManager } from './classes/UserManager.js';
import { BookManager } from './classes/BookManager.js';

window.addEventListener("DOMContentLoaded", function(){  
    
    let formConnexion = document.getElementById('btnConnexion');
    let fromInscription = document.querySelector("body section section:nth-of-type(2) form");
    
    let user1 = new User(1, "Test", "test@gmail.com", "1234", "Marc", "Jhon", "");
    let users = [];
    users.push(user1);
    
    let userMana = new UserManager(users);
    console.log(userMana);
    fromInscription.addEventListener('submit', function(event){
        event.preventDefault();
        
        //let createUser = UserManager.create();
        let user = new User(User.id, User.username, User.email, User.password, User.firstname, User.lastname, User.profileImage);
        
        
        userMana.createUser(user);
        
        
    })
    
    
});