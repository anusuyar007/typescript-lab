//anonymous function
var pdt = function (num1: number, num2: number) {
  return num1 * num2;
};

console.log(pdt(2, 2)); // 4

//--------------------------------------------------------------------------
//arrow function is shortcut for anonymous

var pdt1 = (num1: number, num2: number) => num1 * num2;
console.log(pdt1(2, 3)); //6

//-------------------------------------------------------------------------
//if yu want to return or more lines, then use curly braces

var pdt2 = (num1: number, num2: number) => {
  console.log("hey");
  return num1 * num2;
};
console.log(pdt2(2, 4)); //8
