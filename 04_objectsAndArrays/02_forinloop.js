//object
var student = {
    name: "Anu",
    score: 90,
};
//accesss one by one
// console.log(student.name);
// console.log(student.score);
//access using for-in loop
// for (var key in student) {
//   console.log(key); //to acess key
// }
for (var key in student) {
    console.log(key); //to acess key
    //   console.log(student[key]); // to access value, in ts it will show error but aftr compiling js will work
    console.log(student[key]); // to access value, in ts it wont show error
}
