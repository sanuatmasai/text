let images = JSON.parse(localStorage.getItem("data")) || [];
let count = 0;
let idd, id;

let contain = document.querySelector("#container");
let time = document.querySelector("#time").addEventListener("change", function() {

    contain.innerHTML = "";
    let val = document.querySelector("#time").value;
    val = +(val);
    let img = document.createElement("img");
    img.src = images[count];
    contain.append(img);
    count++;
    console.log(count);

    idd = setInterval(function() {
        if(count > images.length-1) {
            count = 0;
        }
        img.src = images[count];
        contain.append(img);
        count++;
        console.log(count);
    }, val*100);
});
function start() {

    contain.innerHTML = null;
    let img = document.createElement("img");
    img.src = images[count];
    contain.append(img);
    count++;
    console.log(count);

    id = setInterval(function() {
        if(count > images.length-1) {
            count = 0;
        }
        img.src = images[count];
        contain.append(img);
        count++;
        console.log(count);
    }, 1000);
}

function end() {
    console.log("end the loop");
    clearInterval(id);
    clearInterval(idd);
}