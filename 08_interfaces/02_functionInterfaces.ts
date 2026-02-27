interface Add {
  (x: number, y: number): void; //signature of function
}

interface Sub {
  (x: number, y: number): number;
}

var add: Add; //add variable of type Add interface
//define function
add = function (num1: number, num2: number): void {
  console.log(num1 + num2);
};

//use
// console.log(add(2, 4));//it will nt return anything, so it is undefined.
add(2, 5);

//------------------------------------------------
//add sub interface and define function
var sub: Sub = (x: number, y: number): number => {
  return x - y;
};
//use
console.log(sub(7, 1));
