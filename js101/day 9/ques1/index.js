let container = document.querySelector("#container");
let bucket = document.querySelector("#bucket");
let data, id;

async function main() {
    try{
        let query = document.querySelector("#input").value;
        let res = await fetch(`https://www.omdbapi.com/?apikey=1b0935f&s=${query}`);
        let dataa = await res.json();
        
        data = dataa.Search;
        if(data != undefined) {
            append_data(data);
            console.log(data);
        }   
    } catch(err) {
        console.log(err);
    }
}

function append_data(arr) {
    container.innerHTML = null;
    arr.forEach(function(ele) {
        let div = document.createElement("div");
        div.setAttribute("id", "image");
        // div.onclick = show(ele);
        div.addEventListener("click", function() {
            bucket.innerHTML = null;
            let iimg = document.createElement("img");
            iimg.src = ele.Poster;
            let pp = document.createElement("p");
            pp.innerText = ele.Title;
            let pp1 = document.createElement("p");
            pp1.innerText = ele.Type;
            let pp2 = document.createElement("p");
            pp2.innerText = ele.Year;
            bucket.append(img, pp, pp1, pp2); 
        });
        let img = document.createElement("img");
        img.src = ele.Poster;
        img.style.width = "25%";
        img.style.margin = "15px";
        let p = document.createElement("p");
        p.innerText = ele.Title;
        div.append(img, p);
        container.append(div);
    })
}

function debouncing(func, limit) {
    if(id) {
        clearTimeout(id);
    }
    id = setTimeout(function() {
        func();
    }, limit);
}

// function show(ele) {
//     bucket.innerHTML = null;
//     let img = document.createElement("img");
//     img.src = ele.Poster;
//     let p = document.createElement("p");
//     p.innerText = ele.Title;
//     let p1 = document.createElement("p");
//     p.innerText = ele.Type;
//     let p2 = document.createElement("p");
//     p.innerText = ele.Year;
//     bucket.append(img, p, p1, p2);
// }
