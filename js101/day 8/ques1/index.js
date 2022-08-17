let container = document.querySelector("#container");
let container1 = document.querySelector("#contain");

let map = document.querySelector("#gmap_canvas");
let key = "30a14ed335285202611a70b4971e7d97";
let data, data1, arr1;
async function getWeather() {
    console.log("sanu");
    try{
        let city = document.querySelector("#city").value;
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
        data = await res.json();
        
        let res1 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${key}&units=metric`);
        data1 = await res1.json();
        let arr = data1.daily;

        append_data(data, arr);
        console.log(data);
        console.log(data1.daily);
        
    } catch(err) {
        console.log("NOT FOUND!");
    }
}
let d = new Date();
console.log(d);

let daata, daata1, y;
let x = navigator.geolocation.getCurrentPosition(function(position) {
    y = position.coords
    console.log(y.latitude, y.longitude);
    getlocation();
})
async function getlocation() {
    try {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${y.latitude}&lon=${y.longitude}&appid=${key}&units=metric`);
        daata = await res.json();
        
        let res1 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${y.latitude}&lon=${y.longitude}&appid=${key}&units=metric`);
        daata1 = await res1.json();
        let arr = daata1.daily;
        console.log(daata, arr);
        append_data(daata, arr);
    } catch(err) {
        console.log("NOT FOUND!");
    }
}

function append_data(data, arr) {
    container.innerHTML = null;
    let div = document.createElement("div");
    div.setAttribute("id", "box1");
    let city = document.createElement("p");
    city.innerText = `city: ${data.name}`

    let timing = document.createElement("p");
    timing.innerText = d;

    let h = document.createElement("p");
    h.innerText = `Temperature: ${data.main.temp} ℃`;
    let temp = document.createElement("p");
    temp.innerText = `humidity: ${data.main.humidity}`;
    let press = document.createElement("p");
    press.innerText = `Atm pressure: ${data.main.pressure} atm`;

    div.append(city, timing, h, temp, press);
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    container.append(div, map);

    contain.innerHTML = null;
    arr.forEach(function(ele, idx) {
        let box = document.createElement("div");
        box.setAttribute("id", "boox");
        let h1 = document.createElement("h3");
        h1.innerText = `Day:- ${idx}`;
        let p1 = document.createElement("p");
        p1.innerText = `Morning: ${ele.temp.morn} ℃`;
        let p2 = document.createElement("p");
        p2.innerText = `Day: ${ele.temp.day} ℃`;
        let p3 = document.createElement("p");
        p3.innerText = `Evening: ${ele.temp.eve} ℃`;
        let p4 = document.createElement("p");
        p4.innerText = `Night: ${ele.temp.night} ℃`;
        box.append(h1, p1, p2, p3, p4);
        contain.append(box);
    })
}