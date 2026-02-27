var product = function (num1, num2) {
    return num1 * num2;
};
//here function can be reassigned.
product = function (num1, num2) {
    return num1 + num2;
};
console.log(product(2, 3)); //instead of pdt, it is giving addition
//---------------------------------------------------------------------------
//if we use const, then reassigning is not possible
var pdt = function (num1, num2) {
    return num1 * num2;
};
//here function cannot be reassigned.
// pdt = function (num1: number, num2: number): number {
//   return num1 + num2;
// };
console.log(pdt(2, 3)); //pdt result yu will get
