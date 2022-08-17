let ans = JSON.parse(localStorage.getItem("stu_data")) || [];
let trash_data = JSON.parse(localStorage.getItem("trash")) || [];
display(ans);

function display(ans) {
    document.querySelector("#container").innerText = "";
    ans.forEach(function(ele,idx) {
        let div = document.createElement("div");
        div.setAttribute("id", "divs");
        let img = document.createElement("img");
        img.setAttribute("src", ele.image);
        let p1 = document.createElement("p");
        p1.innerText = ele.name;
        let p2 = document.createElement("p");
        p2.innerText = ele.course;
        let p3 = document.createElement("p");
        p3.innerText = ele.unit;
        let p4 = document.createElement("p");
        p4.innerText = ele.batch;
        let butt = document.createElement("button");
        butt.innerText = "Remove";
        butt.addEventListener("click", function(event) {
            trash_data.push(ele);
            localStorage.setItem("trash", JSON.stringify(trash_data));
            ans.splice(idx, 1);
            localStorage.setItem("stu_data", JSON.stringify(ans));
            display(ans);
            find();
        })
        div.append(img, p1, p2, p3, p4, butt);
        document.querySelector("#container").append(div);
    })
}
function find() {
    let abc = document.querySelector("#app");
    abc.innerHTML= "";
    let obj = {};
    for(let i = 0; i < ans.length; i++) {
        if(obj[ans[i].batch] == undefined) {
            obj[ans[i].batch] = 1;
        } else {
            obj[ans[i].batch]++;
        }
    }
    localStorage.setItem("batchData", JSON.stringify(obj));
    console.log(obj);

    for(let i in obj) {
        abc.append(`${i} : ${obj[i]} |`);
    }
}