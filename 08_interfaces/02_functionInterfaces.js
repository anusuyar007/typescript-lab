var add; //add variable of type Add interface
//define function
add = function (num1, num2) {
    console.log(num1 + num2);
};
//use
// console.log(add(2, 4));//it will nt return anything, so it is undefined.
add(2, 5);
//------------------------------------------------
//add sub interface and define function
var sub = function (x, y) {
    return x - y;
};
//use
console.log(sub(7, 1));
