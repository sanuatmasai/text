// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
let container = document.getElementById("results");
let topp = async(x) => {
    try{
        let res = await fetch(`https://masai-api.herokuapp.com/news/top-headlines?country=${x}`);
        let data = await res.json();
        let top_news = data.articles;
        console.log(top_news);
        append(top_news);
    } catch(err) {
        console.log("Not Found!");
    }
}
topp("in");
let append = (arr) => {
    container.innerHTML = "";
    arr.forEach(({urlToImage, description, title}) => {
        let div = document.createElement("div");
        div.setAttribute("class", "news");
        let idiv = document.createElement("div");
        idiv.style.width = "27%";
        let img = document.createElement("img");
        img.src = urlToImage;
        img.style.width = "300px";
        img.style.height = "200px";
        idiv.append(img);
        let ndiv = document.createElement("div");
        ndiv.style.padding = "10px";
        let h = document.createElement("h3");
        h.innerText = title;
        let p = document.createElement("p");
        p.innerText = description;
        ndiv.append(h, p);
        div.append(idiv, ndiv);
        container.append(div);
    })
}