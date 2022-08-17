async function getData (url) {
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data.meals;
    } catch(err) {
        console.log("Not Found!");
    }
}
async function getDataa (url) {
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data.meals;
    } catch(err) {
        console.log("Not Found!");
    }
}
function append (data, container) {
    data.forEach(({strCategory, strInstructions, strMeal, strMealThumb}) => {
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.innerText = strCategory;
        let h3 = document.createElement("h3");
        h3.innerText = strMeal;
        let img = document.createElement("img");
        img.src = strMealThumb;
        img.style.width = "25%";
        let p = document.createElement("p");
        p.innerText = strInstructions;
        div.append(h2, h3, img, p);
        container.append(div);
    })
}
function appendd (data, container) {
    container.innerHTML = "";
    data.forEach(({strMeal, strMealThumb}) => {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.innerText = strMeal;
        let img = document.createElement("img");
        img.src = strMealThumb;
        img.style.width = "100%";
        div.append(img, h3);
        container.append(div);
    })
}
export {getData, append, getDataa, appendd};