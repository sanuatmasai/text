class stack {
    constructor(...ele) {
        this.length = 0;
        this.array = [];
        ele.forEach((el) => {
            this.array.push(el);
            this.length++;
        }) 
    }
    Push(...ele) {
        ele.forEach((el) => {
            this.array.push(el);
            this.length++;
        })
        return this.length;
    }
    Pop() {
        let deleted_ele = this.array.pop();
        this.length--;
        return deleted_ele;
    }
}

// stack.prototype.Push = (...ele) => {
//     console.log(this.array);
//     ele.forEach((el) => {
//         this.array.push(el);
//         this.length++;
//     })
//     return this.length;
// } 

// stack.prototype.Pop = () => {
//     let deleted_ele = this.array.pop();
//     this.length--;
//     return deleted_ele;
// }

let s1 = new stack(100, 200, 300);
console.log(s1);
s1.Push(10, 20, 30, 40);
console.log(s1);
s1.Pop();
console.log(s1);
s1.Pop();
console.log(s1);