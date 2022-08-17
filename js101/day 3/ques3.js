let arr = [2, 3, 4, 5];
// Array.prototype.hraek = function(logic) {
//     for(let i = 0; i < this.length; i++) {
//         let val = logic(this[i], i, this);
//         console.log(val);
//     }
// }


// Array.prototype.naksha = function(logic) {
//     let my_arr = [];
//     for(let i = 0; i < this.length; i++) {
//         let val = logic(this[i], i, this);
//         my_arr[i] = val;
//     }
//     return my_arr;
// }


// Array.prototype.chhano = function(logic) {
//     let my_arr = [];
//     for(let i = 0; i < this.length; i++) {
//         let val = logic(this[i], i, this);
//         if(val != undefined) {
//             my_arr[my_arr.length] = val;
//         }
//     }
//     return my_arr;
// }


// Array.prototype.kmkro = function(logic, total) {
//     let ans;
//     if(total == undefined) {
//         let sum = this[0];
//         for(let i = 1; i < this.length; i++) {
//             sum = logic(sum, this[i], i, this);
//         }
//         ans = sum;
//     } else {
//         let sum = total;
//         for(let i = 0; i < this.length; i++) {
//             sum = logic(sum, this[i], i, this);
//         }
//         ans = sum;
//     }
//     return ans;
// }

let res = arr.kmkro(function(acc, ele, idx, arr) {
    // console.log(acc, ele);
    return acc+ele;
}, 10)

console.log(res);

let ress = arr.kmkro(function(acc, ele, idx, arr) {
    // console.log(acc, ele);
    return acc+ele;
})

console.log(ress);