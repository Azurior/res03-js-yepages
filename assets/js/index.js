import { User } from './classes/User.js';
import { Book } from './classes/Book.js';
import { UserManager } from './classes/UserManager.js';
import { BookManager } from './classes/BookManager.js';

window.addEventListener("DOMContentLoaded", function(){  
    
    let btnConnexion = document.getElementById('btnConnexion');
    let btnInscription = document.getElementById('btnConnexion');
    
    
    
    btnInscription.addEventListener('submit', function(event){
        event.preventDefault();
        
        //let createUser = UserManager.create();
        let user = new User();
        
        user.UserManager.create();
        
        
    })
    
    
});