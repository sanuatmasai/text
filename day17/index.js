let container = document.getElementById("hotels_list");
let data = [];
async function mycall() {
    try{
        let query = document.getElementById("query").value;
        let res = await fetch(`https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`);
        let Data = await res.json();
        data = Data.hotels;
        append(data);
        console.log(data);
    } catch(err) {
        console.log("Not Found!");
    }
}
function append (arr) {
    container.innerHTML = "";
    arr.forEach(({Images, Ac, Price, Title, Rating}) => {
        let div = document.createElement("div");
        div.style.border = "solid blue 1px";
        div.style.padding = "5px";
        let img = document.createElement("img");
        img.src = Images.one;
        img.style.width = "100%";
        let h3 = document.createElement("h3");
        h3.innerText = Title;
        let p = document.createElement("p");
        p.innerText = `Price per room: Rs${Price}`;
        let p1 = document.createElement("p");
        p1.innerText = `Rating:${Rating}`;
        let p2 = document.createElement("p");
        p2.innerText = `AC:${Ac}`;
        let but = document.createElement("button");
        but.innerText = "BOOK NOW";
        but.setAttribute("class", "book");
        div.append(img, h3, p, p2, p1, but);
        container.append(div);
        but.addEventListener("click", () => { 
            if(localStorage.getItem("login")) {
                localStorage.setItem("final_hotel", JSON.stringify({Images, Price, Title}));
                window.location.href = "checkout.html";
            } else {
                alert("login to continue");
            }
            // localStorage.setItem("final_hotel", JSON.stringify({Images, Price, Title}));
        })
    })
}
function sort_lth() {
    let mydata = [...data];
    mydata = mydata.sort((a, b) => {
        return a.Price - b.Price;
    })
    append(mydata);
}
function sort_htl() {
    let mydata = [...data];
    mydata = mydata.sort((a, b) => {
        return b.Price - a.Price;
    })
    append(mydata);
}
function filt_ac() {
    let mydata = [...data];
    mydata = mydata.filter((ele) => {
        return ele.Ac;
    })
    append(mydata);
}
function filt_nac() {
    let mydata = [...data];
    mydata = mydata.filter((ele) => {
        return !(ele.Ac);
    })
    append(mydata);
}