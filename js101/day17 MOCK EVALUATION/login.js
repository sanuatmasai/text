let users = JSON.parse(localStorage.getItem("users")) || [];

let mylog = () => {
    let emaill = document.getElementById("email").value;
    let passwordd = document.getElementById("password").value;
    
    for(let i = 0; i < users.length; i++) {
        if(emaill == users[i].email ) {
            if(passwordd == users[i].password) {
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