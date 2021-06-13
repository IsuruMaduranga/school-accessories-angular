

export class RegisterRequest {
    email: String;
    password: String;
    username: String;

    constructor(email: String,password: String, username:String){
        this.email = email;
        this.password = password;
        this.username =  username;
    }
}