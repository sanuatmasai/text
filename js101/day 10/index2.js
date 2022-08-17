let info = JSON.parse(localStorage.getItem("info")) || {};
myfunction2(info);

function myfunction2(ele) {
    console.log("nitya is super talented")
    document.querySelector("#bag").innerHTML = "";
    let d1 = document.createElement("p");
    d1.innerText = ele.birth_year;
    let d2 = document.createElement("p");
    d2.innerText = ele.gender;
    let d3 = document.createElement("p");
    d3.innerText = ele.height;
    let d4 = document.createElement("p");
    d4.innerText = ele.eye_color;
    let d5 = document.createElement("p");
    d5.innerText = ele.mass;
    document.querySelector("#bag").append(d1, d2, d3, d4, d5);
}