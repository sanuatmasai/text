// Take a variable with name num and it should contain a 3 digit number of number data type and not string . Perform the following task:

// Reverse the number by creating a reverse() function.
// Check if the number after reversing is palindrome or not. 

let num = 321;
let new_num = reverse_num(num);
if(num == new_num) {
    console.log("number is palindromic");
} else {
    console.log("number is not palindromic");
}
function reverse_num(num) {
    let newnum = 0;
    while(num) {
        let r = num % 10;
        newnum = (newnum*10) + r;
        num = Math.floor(num / 10);
    }  
    return newnum;
}