let arr = JSON.parse(localStorage.getItem("data")) || [];
let form = document.querySelector("#form").addEventListener("submit", myfun);
function myfun() {
    let info = document.querySelector("#image").value;
    arr.push(info);
    localStorage.setItem("data", JSON.stringify(arr));
}