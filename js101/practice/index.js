console.log("your order is placed", Date.now());
let id1, id2, id3, id4;
id1 = setTimeout(function() {
    console.log("Your order is being packed", Date.now());
    id2 = setTimeout(function() {
        console.log("Your order is in transit", Date.now());
        id3 = setTimeout(function() {
            console.log("Your order is out for delivery", Date.now());
            id4 = setTimeout(function() {
                console.log("order delivered", Date.now());
            }, 12000);
        }, 10000);
    }, 8000);
}, 3000);

function f1() {
    clearTimeout(id1);
}
function f2() {
    clearTimeout(id2);
}
function f3() {
    clearTimeout(id3);
}
function f4() {
    clearTimeout(id4);
}
