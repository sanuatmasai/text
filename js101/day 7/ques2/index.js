let new_data;
async function getData() {
    try{
        let res = await fetch("https://www.omdbapi.com/?apikey=1b0935f&s=movies&page=1");
        let data = await res.json();
        let res1 = await fetch("https://www.omdbapi.com/?apikey=1b0935f&s=movies&page=2");
        let data1 = await res1.json();
        let res2 = await fetch("https://www.omdbapi.com/?apikey=1b0935f&s=movies&page=3");
        let data2 = await res2.json();
        let res3 = await fetch("https://www.omdbapi.com/?apikey=1b0935f&s=movies&page=4");
        let data3 = await res3.json();
        let res4 = await fetch("https://www.omdbapi.com/?apikey=1b0935f&s=movies&page=5");
        let data4 = await res4.json();
        let res5 = await fetch("https://www.omdbapi.com/?apikey=1b0935f&s=movies&page=6");
        let data5 = await res5.json();
        let res6 = await fetch("https://www.omdbapi.com/?apikey=1b0935f&s=movies&page=7");
        let data6 = await res6.json();
        let res7 = await fetch("https://www.omdbapi.com/?apikey=1b0935f&s=movies&page=8");
        let data7 = await res7.json();
        let res8 = await fetch("https://www.omdbapi.com/?apikey=1b0935f&s=movies&page=9");
        let data8 = await res8.json();
        let res9 = await fetch("https://www.omdbapi.com/?apikey=1b0935f&s=movies&page=11");
        let data9 = await res9.json();
        // new_data = data8.Search;
        new_data = (data.Search).concat(data1.Search, data2.Search, data3.Search, data4.Search, data5.Search, data6.Search, data7.Search, data8.Search, data9.Search,);
        append_product(new_data);
        console.log(new_data);
    } catch(err){
        console.log("Not found");
    }
}
getData();
let contain = document.querySelector("#container");
function append_product(arr, flag) {
    contain.innerHTML = null;
    arr.forEach(function(ele, idx) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        
        if(ele.Poster == "N/A") {
            ele.Poster = "https://m.media-amazon.com/images/M/MV5BMTI1NjM3NTg2Nl5BMl5BanBnXkFtZTcwNzEyNjMyMQ@@._V1_SX300.jpg";

        } 
        img.src = ele.Poster;
        let p1 = document.createElement("p");
        p1.innerText = ele.Title;
        let p2 = document.createElement("p");
        p2.innerText = ele.Year;
        let val = ele.Year;
        let bag3 = "";
        for(let i = 0; i < 4; i++) {
            bag3 += val[i];
        }
        bag3 = +(bag3);
        console.log(bag3);
        let p3 = document.createElement("p");
        p3.innerText = ele.Type;
        let p4 = document.createElement("p");
        p4.innerText = ele.imdbID;
        if(flag == 5 && bag3 > 2010) {
            let butt = document.createElement("button");
            butt.innerText = "recommendation";
            butt.style.backgroundColor = "red";
            butt.style.color = "white";
            div.append(img, p1, p2, p3, p4, butt); 
        } else {
            div.append(img, p1, p2, p3, p4);
        } 
        contain.append(div);
    })
    console.log("fguewdg");
    flag = 0;
}

function find() {
    let flag = 5;
    let query = document.querySelector("#inp").value;
    let filtered_data = new_data.filter(function(ele) {
        return ele.Title.toLowerCase().includes(query);
    })
    if(filtered_data.length == 0) {
        contain.innerHTML = "";
        let ima = document.createElement("img");
        ima.src = "https://i1.wp.com/uxdworld.com/wp-content/uploads/2019/01/404-banner.jpg?w=974&ssl=1";
        console.log("we are in");
        contain.append(ima);
        return;
    }
    append_product(filtered_data, flag);
}

function finding() {
    let query = document.querySelector("#inmp").value;
    let q1 = +(query);
    let filtered_list = new_data.filter(function(ele) {
        let num = +(ele.Year);
        return num > q1; 
    })
    append_product(filtered_list);
}



function sorted() {
    let sorted_arr = [...new_data];
    let selected = document.querySelector("#sorted").value;
    if(selected == "") {

    } else if(selected =="er") {
        sorted_arr.sort(function(a, b) {
            let x = a.Year;
            let bag1 = "";
            for(let i = 0; i < 4; i++) {
                bag1 += x[i];
            }
            bag1 = +(bag1);
            let y = b.Year;
            let bag2 = "";
            for(let i = 0; i < 4; i++) {
                bag2 += y[i];
            }
            bag2 = +(bag2);
            console.log(bag1, bag2);
            console.log("lh");
            return bag1-bag2;
        })
    } else if(selected == "re") {
        sorted_arr.sort(function(a, b) {
            let x = a.Year;
            let bag1 = "";
            for(let i = 0; i < 4; i++) {
                bag1 += x[i];
            }
            bag1 = +(bag1);
            let y = b.Year;
            let bag2 = "";
            for(let i = 0; i < 4; i++) {
                bag2 += y[i];
            }
            bag2 = +(bag2);
            console.log(bag1, bag2); 
            console.log("hl");
            return bag2-bag1;
        })
    }
    console.log(sorted_arr);
    append_product(sorted_arr);
}