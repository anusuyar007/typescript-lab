//inbuilt string functions
var str1: string = "anusuya";
console.log(str1);
console.log(str1.length);
console.log(str1.charAt(0));
console.log(str1.indexOf("n"));
console.log(str1.lastIndexOf("u"));
// console.log(str1.includes("suya"));
// console.log(str1.startsWith("anu"));
// console.log(str1.endsWith("uya"));
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());

//extracting string
console.log(str1.slice(0, 4)); //start to end-1
console.log(str1.substring(2, 4)); // start to end-1

console.log(str1.replace("anu", "suya"));
// console.log(str1.replaceAll("a", "b"));
console.log(str1.concat("siya"));

//spit
console.log(str1.split("")); //converts string into array.

//commented inbuilt function is not working in this node js version
