let myarray = JSON.parse(localStorage.getItem("users")) || [];
let mysign = () => {
    let emaill = document.getElementById("email").value;
    for(let i = 0; i < myarray.length; i++) {
        if(emaill == myarray[i].email) {
            return;
        }
    }
    let obj = {
        name : document.getElementById("name").value,
        email : emaill,
        password : document.getElementById("password").value
    }
    console.log("stored");
    myarray.push(obj);
    localStorage.setItem("users", JSON.stringify(myarray));
}