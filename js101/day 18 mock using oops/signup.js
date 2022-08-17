let users = JSON.parse(localStorage.getItem("users")) || [];
class user {
    #password;
    valid_email(email) {
        for(let i = 0; i < users.length; i++) {
            if(email == users[i].email) {
                return false;
            }
        }
        return true;
    }
    signup(email, password) {
        let isvalid = this.valid_email(email);
        if(isvalid) {
            this.email = email;
            this.#password = password
            users.push(this);
            localStorage.setItem("users", JSON.stringify(users));
        }
    }
    login(email, password) {
        for(let i = 0; i < users.length; i++) {
            if(email == users[i].email ) {
                if(password == users[i].#password) {
                    alert("Login successfull");
                    localStorage.setItem("login", true);
                    return;
                } else {
                    alert("wrong credentials");
                    return;
                }   
            } 
        }
        alert("user dosen't exist, signup");
        return;
    }
}
let signup = () => {
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let u1 = new user();
    u1.signup(email, password);
    // console.log(users);
}
let login = () => {
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    u2 = new user();
    u2.login(email, password);
    console.log(users);
}
// console.log(users[1].password);

