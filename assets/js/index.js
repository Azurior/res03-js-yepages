import { User } from './classes/User.js';
import { Book } from './classes/Book.js';
import { UserManager } from './classes/UserManager.js';
import { BookManager } from './classes/BookManager.js';

window.addEventListener("DOMContentLoaded", function(){  
    
                    // Déclaration variable pour formulaire //
    let formConnexion = document.getElementById('btnConnexion');
    let fromInscription = document.querySelector("body section section:nth-of-type(2) form");
    
                // Déclaration d'un premier utilisateur pour éviter le tableau vide //
    let user1 = new User(1, "Test", "test@test.test", "1234", "Marc", "Jhon", "");
    let users = [];
    users.push(user1);
    let userMana = new UserManager(users);
    
            // Déclaration de variable lier aux input du formulaire de création de compte //
    let newUserName = document.getElementById("username");
    let newUserEmail = document.getElementById("email");
    let newUserPassword = document.getElementById("password");
    let newUserFirstName = document.getElementById("firstname");
    let newUserLastName = document.getElementById("lastname");
    let newUserProfileImage = document.getElementById("file");
    let id = userMana.users.length + 1;
    
                // Création d'utilisateur
    fromInscription.addEventListener('submit', function(event){
        event.preventDefault();

        let newUser = new User(id, newUserName.value, newUserEmail.value, newUserPassword.value, newUserFirstName.value, newUserLastName.value, newUserProfileImage.value);
        userMana.createUser(newUser);
        userMana.save();

    })
    
    
});