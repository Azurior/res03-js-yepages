class User {
    #id;
    #username;
    #email;
    #password;
    #firstname;
    #lastname;
    #profileImage;
    
    constructor(id, username, email, password, firstname, lastname, profileImage){
        this.#id = id;
        this.#username = username;
        this.#email = email;
        this.#password = password;
        this.#firstname = firstname;
        this.#lastname = lastname;
        this.#profileImage = profileImage;
    }
    
    get id (){
        return this.#id;
    }
    
    set id (id){
        this.#id = id;
    }
    
    get username (){
        return this.username;
    }
    
    set username (username) {
        this.#username = username;
    }
    
    get email (){
        return this.#email
    }
    
    set email (email){
        this.#email = email;
    }
    
    get password (){
        return this.#password;
    }
    
    set password (password){
        this.#password = password;
    }
    
    get firstname (){
        return this.#firstname;
    }
    
    set firstname (firstname){
        this.#firstname = firstname;
    }
    
    get lastname (){
        return this.#lastname;
    }
    
    set lastname (lastname){
        this.#lastname;
    }
    
    get profileImage (){
        return this.#profileImage;
    }
    
    set profileImage (profileImage){
        this.#profileImage = profileImage;
    }
    
    /*save (){
        sessionStorage.setItem("users", this.toJSON());
    }*/
    
    toJSON () {

    let user = 
        {
            id : this.#id,
            username : this.#username,
            email : this.#email,
            password : this.#password,
            firstname : this.firstname,
            lastname : this.#lastname,
            profileImage : this.#profileImage
        };

    return JSON.stringify(user);
    
    }
}

export { User };