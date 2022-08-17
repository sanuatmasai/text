let container = document.querySelector("#bucket");
let data;
async function rating() {
    try{
        let res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=b34c45f295497ebb26411a9d52a4f7aa`);
        let dataa = await res.json();
        data = dataa.results;
        append_data(data);
        console.log(data);

    } catch(err) {
        console.log(err);
    }
}
rating();

function append_data(arr) {
    container.innerHTML = null;
    console.log("sanu");
    arr.forEach(function(ele) {
        console.log("sanu");
        let div = document.createElement("div");
        div.setAttribute("id", "diiv");
        let img = document.createElement("img");
        img.src = ele.poster_path;
        let p1 = document.createElement("p");
        p1.innerText = ele.title;
        let p2 = document.createElement("p");
        p2.innerText = ele.overview;
        let p3 = document.createElement("p");
        p3.innerText = ele.release_date;
        let p4 = document.createElement("p");
        p4.innerText = ele.media_type;
        div.append(img, p1, p2, p3 , p4);
        container.append(div);
    })
}