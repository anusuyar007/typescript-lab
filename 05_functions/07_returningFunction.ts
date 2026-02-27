//return a function within a function
function calculatorSub(): any {
  function subtract(num1: number, num2: number) {
    return num1 - num2;
  }

  return subtract; //returning subtract function
}

var sub = calculatorSub(); //now sub variable as subtract function
console.log(sub(30, 10)); //using sub as function and call and get value.

//single line also you can do, without storing in a variable.
console.log(calculatorSub()(50, 10)); //function within function call
