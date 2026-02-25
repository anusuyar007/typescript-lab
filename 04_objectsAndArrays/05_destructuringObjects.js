var student = {
    firstName: "anu",
    lastName: "suya",
    score: 91,
};
//while destructuring object, the names should be exact else you will get error
var firstName = student.firstName, lastName = student.lastName; //destructuring object, goes from top to bottom
console.log(firstName + lastName);
