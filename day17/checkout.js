let obj = JSON.parse(localStorage.getItem("final_hotel")) || {};
let container = document.getElementById("hotel_details");

let append = ({Images, Price, Title}=obj) => {
    container.innerHTML = "";
    let div = document.createElement("div");
    let img1 = document.createElement("img");
    img1.style.width = "400px";
    img1.style.height = "300px";
    img1.src = Images.one;
    let img2 = document.createElement("img");
    img2.src = Images.two;
    img2.style.width = "400px";
    img2.style.height = "300px";
    div.append(img1, img2);
    let h3 = document.createElement("h3");
    h3.innerText = Title;
    let p = document.createElement("p");
    p.innerText = `Price per room: Rs${Price}`;
    container.append(div, h3, p);
}
append();
function aler() {
    let ans = document.getElementById("user_name").value;
    setTimeout(() => {
        alert(`${ans}, your booking is successful`);
    }, 5000)
}
