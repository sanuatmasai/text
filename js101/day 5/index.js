let arr = JSON.parse(localStorage.getItem("movies")) || [];
function createObj (a, b, c, d) {
    this.name = a;
    this.release_date = b;
    this.poster = c;
    this.IMDB_rating = d;
}

let movie1 = new createObj("abcdef", "12th december", "https://cdn.dribbble.com/users/1575908/screenshots/17109968/media/5924ac1d05f0ae915ac7b99f5b29187d.jpg?compress=1&resize=450x338&vertical=top", 9);
let movie2 = new createObj("abcdef", "12th december", "https://cdn.dribbble.com/users/3506230/screenshots/16626652/media/2d756a0f3075734a3e35c8f1204f9bed.png?compress=1&resize=450x338&vertical=top", 9.6);
let movie3 = new createObj("abcdef", "12th december", "https://cdn.dribbble.com/users/3860505/screenshots/15109777/media/93bf8ecdc675da0268ba9a7774d1d968.png?compress=1&resize=450x338&vertical=top", 9.7);
let movie4 = new createObj("abcdef", "12th december", "https://cdn.dribbble.com/users/3860505/screenshots/15109777/media/93bf8ecdc675da0268ba9a7774d1d968.png?compress=1&resize=450x338&vertical=top", 9.8);
let movie5 = new createObj("abcdef", "12th december", "https://cdn.dribbble.com/users/1575908/screenshots/17109968/media/5924ac1d05f0ae915ac7b99f5b29187d.jpg?compress=1&resize=450x338&vertical=top", 9.9);
let movie6 = new createObj("abcdef", "12th december", "https://cdn.dribbble.com/users/3860505/screenshots/15109777/media/93bf8ecdc675da0268ba9a7774d1d968.png?compress=1&resize=450x338&vertical=top", 6);
let movie7 = new createObj("abcdef", "12th december", "https://cdn.dribbble.com/users/3506230/screenshots/16626652/media/2d756a0f3075734a3e35c8f1204f9bed.png?compress=1&resize=450x338&vertical=top", 6.6);
let movie8 = new createObj("abcdef", "12th december", "https://cdn.dribbble.com/users/1575908/screenshots/17109968/media/5924ac1d05f0ae915ac7b99f5b29187d.jpg?compress=1&resize=450x338&vertical=top", 7.6);
let movie9 = new createObj("abcdef", "12th december", "https://cdn.dribbble.com/users/3506230/screenshots/16626652/media/2d756a0f3075734a3e35c8f1204f9bed.png?compress=1&resize=450x338&vertical=top", 5.6);
arr.push(movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9);

display(arr);


function display(arr) {
    document.querySelector("#container").innerHTML = "";
    arr.forEach(function(ele, idx) {
        let div = document.createElement("div");
        div.setAttribute("id", "box");
        let ima = document.createElement("img");
        ima.src = ele.poster;
        let p1 = document.createElement("p");
        p1.innerText = ele.name;
        let p2 = document.createElement("p");
        p2.innerText = ele.release_date;
        let p3 = document.createElement("p");
        p3.innerText = ele.IMDB_rating;
        div.append(ima, p1, p2, p3);
        document.querySelector("#container").append(div);
    })    
}
function high() {
    arr.sort(function(a, b) {
        let x = a.IMDB_rating;
        let y = b.IMDB_rating;
        if(x > y) return -1;
        if(x < y) return 1;
        return 0;
    })
    display(arr);
}
function low() {
    arr.sort(function(a, b) {
        let x = a.IMDB_rating;
        let y = b.IMDB_rating;
        if(x > y) return 1;
        if(x < y) return -1;
        return 0;
    })
    display(arr);
}