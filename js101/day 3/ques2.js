
function myarr() {
    this.length = 0;
}
myarr.prototype.mypush = function(value) {
    this[this.length] = value;
    this.length++;
}
myarr.prototype.mypop = function() {
    this.length--;
    delete this[this.length]; 
}

let arr = new myarr();
arr.mypush("shanu");
arr.mypush("shanu1");
arr.mypush("shanu2");
arr.mypop();
arr.mypush("shanu3");
arr.mypush("shanu4");
arr.mypush("shanu5");
arr.mypop();
console.log(arr);

