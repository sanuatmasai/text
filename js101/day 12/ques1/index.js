let api = "AIzaSyBzCkHzP_Ow2JW3hp4IXkFarKEsm1nKE5M";
let container = document.querySelector("#container");
let main;

let get = async () => {
    try {
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${api}&part=snippet&maxResults=50`);
        let {items} = await res.json();
        append_data(items);
        console.log(items);
    }catch(err) {
        console.log("Not Found!")
    }
}
get();

let getsearch = async () => {
    try {
        let input = document.querySelector("#input").value;
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${input}&key=${api}&part=snippet&maxResults=50`)
        let {items} = await res.json();
        append_data(items);
        console.log(items);
        main = items;
    }catch(err) {
        console.log("Not Found!")
    }
}

let calfunc = () => {
    let query = document.querySelector("#innput").value;
    let copy_data = main;
    copy_data = copy_data.filter (({snippet:{title, channelTitle}}) => {
        return channelTitle.toLowerCase().includes(query);
    });
    append_data(copy_data);
}

let append_data = (array) => {
    
    container.innerHTML = null;
    array.forEach(({snippet:{thumbnails:{medium}}, snippet:{title, channelTitle}, id:{videoId}}) => {
        console.log("sanu");
        console.log(medium.url, title);
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = medium.url;
        let name = document.createElement("h4");
        name.innerText = title;
        let naam = document.createElement("p");
        naam.innerText = channelTitle;
        naam.style.color = "rgb(177, 176, 176)"
        console.log(medium.url, title);
        div.append(img, name, naam);
        container.append(div);
        div.addEventListener("click", () => {
            let id = videoId;
            localStorage.setItem("video", id);
            window.location.href = "index1.html";
        })
    });
}
