function makeObj(a, b, c, d, e, f) {
    this.name = a;
    this.course = b;
    this.unit = c;
    this.image = d;
    this.batch = e;
}

let arr = JSON.parse(localStorage.getItem("stu_data")) || [];
let form = document.querySelector("#info");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let nam = form.name.value;
    let cours = form.course.value;
    let uni = form.unit.value;
    let imag = form.image.value;
    let batc = form.batch.value;

    let data = new makeObj(nam, cours, uni, imag, batc); 
    arr.push(data);
    localStorage.setItem("stu_data", JSON.stringify(arr));
    find();
})

function find() {
    let abc = document.querySelector("#ppp");
    abc.innerHTML = "";
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        if(obj[arr[i].batch] == undefined) {
            obj[arr[i].batch] = 1;
        } else {
            obj[arr[i].batch]++;
        }
    }
    localStorage.setItem("batchData", JSON.stringify(obj));
    console.log(obj);

    for(let i in obj) {
        abc.append(`${i} : ${obj[i]} |`);
    }
}
