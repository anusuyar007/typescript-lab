var hello = (name: string): string => {
  return "Hello" + name;
};
console.log(hello(" World"));
//-----------------------------------------------------------------------------------
var product = (num1: number, num2: number): number => {
  return num1 * num2;
};
console.log("product is ", product(10, 10));
