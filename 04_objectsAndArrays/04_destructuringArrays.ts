var courses: any = ["angular", "javascript", "typescript", "java"];

//destructuring array
//one by one, manual way
var x = courses[0];
var y = courses[1];
var z = courses[2];

//destructuring array
//using destructuring technique
var [a, b, c] = courses;
console.log(a);
console.log(b);
console.log(c);
