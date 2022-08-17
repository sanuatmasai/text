let container = document.querySelector("#container");
let data;
async function input() {
    try {
        let ans = document.querySelector("#inp").value;
        let res = await fetch(`https://swapi.dev/api/people/?search=${ans}`);
        let ddata = await res.json();
        data = ddata.results;
        
        console.log(data);
        append(data);
    } catch(err) {
        console.log("Not found!");
    }
}
flag = 1;
function append(arr) {
    console.log("sanu")
    container.innerHTML = "";
    arr.forEach(function(ele) {
        let div = document.createElement("div");
        div.setAttribute("id", "char");
        let p = document.createElement("p");
        p.innerText = ele.name;
        let p1 = document.createElement("p");
        p1.innerText = ele.birth_year;
        div.append(p, p1);
        container.append(div);
        div.addEventListener("click", function() {
            console.log("nitya");
            localStorage.setItem("info", JSON.stringify(ele));
            window.location.href = "index2.html";
        })
    })
}

function myfffunction(ele) {
    console.log("jkdhcikdfjhvokgj");
    window.location.href = "index2.html";
    myfunction2(ele);
}

            